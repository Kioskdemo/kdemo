/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from "react";
import CustomKeyboard from "../Functions/CustomKeyboard";

interface InputNumberProps {
  name: string;
  placeholder: string;
  link: string;
  qrImg: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  placeholder,
  link,
  qrImg,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const handleKeyClick = (key: string) => {
    if (key === "CLEAR") {
      setInputValue("");
    } else if (key === "~") {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      if (cursorPosition > 0) {
        const updatedValue =
          inputValue.slice(0, cursorPosition - 1) +
          inputValue.slice(cursorPosition);
        setInputValue(updatedValue);
        setCursorPosition(cursorPosition - 1);
      }
    } else {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      const updatedValue =
        inputValue.slice(0, cursorPosition) +
        key +
        inputValue.slice(cursorPosition);
      setInputValue(updatedValue);
      setCursorPosition(cursorPosition + 1);
    }
  };

  const setCursorPosition = (position: number) => {
    if (inputFieldRef.current) {
      setTimeout(() => {
        if (inputFieldRef.current) {
          inputFieldRef.current.selectionStart = position;
          inputFieldRef.current.selectionEnd = position;
          inputFieldRef.current.focus();
        }
      }, 0);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 text-[40px] m-[10px] relative">
      <input
        ref={inputFieldRef}
        value={inputValue}
        name={name}
        placeholder={placeholder}
        className="text-center rounded-2xl border-2 border-gray-400"
        onClick={(e) => {
          const cursorPosition = e.currentTarget.selectionStart || 0;
          setCursorPosition(cursorPosition);
        }}
      />

      <div className="flex flex-col justify-center items-center gap-10 py-[50px] text-[50px] relative">
        <h1 className="w-[650px] h-[2px] bg-gray-500"></h1>
        <h1>Scan QR</h1>
        <img src={qrImg} alt="" className="w-[150px]" />
      </div>
      <div className="">
        <CustomKeyboard handleKeyClick={handleKeyClick} />
      </div>
    </div>
  );
};

export default InputNumber;
