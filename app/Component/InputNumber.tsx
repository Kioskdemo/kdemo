import React, { useRef, useState } from "react";
import NextCancelBtn from "./NextCancelBtn";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";
import { SingleInputBox, setCursorPosition } from "../functions/KeyboardSingleBox";

interface InputNumberProps {
  name: string;
  placeholder: string;
}

const InputNumber: React.FC<InputNumberProps> = ({ name, placeholder }) => {
  
  const [inputValue, setInputValue] = useState("");
  const inputFieldRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState("alpha");

  const SingleInput = (key: string) => {
    const updatedValue = SingleInputBox(key, inputValue, inputFieldRef, setActiveKeyboard);
    setInputValue(updatedValue);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 text-[40px] m-[10px]">
      <input
        ref={inputFieldRef}
        value={inputValue}
        name={name}
        placeholder={placeholder}
        className="text-center rounded-2xl border-2 border-gray-400"
        onClick={(e) => {
          const cursorPosition = e.currentTarget.selectionStart || 0;
          setCursorPosition(inputFieldRef, cursorPosition);
        }}
      />

      <div className="fixed bottom-0">
        {activeKeyboard === "alpha" ? (
          <KeyboardAlpha handleKeyClick={SingleInput} />
        ) : (
          <KeyboardSymbol handleKeyClick={SingleInput} />
        )}

        <div className="flex gap-24 text-[30px] justify-center my-10">
          <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
          <div className="text-white">
            <NextCancelBtn link={"/pay-business/pay-business-form"} text={"Next"} bgcolor={"#005893"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
