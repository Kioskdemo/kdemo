/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useState } from "react";
import NextCancelBtn from "./NextCancelBtn";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";

interface InputNumberProps {
  name: string;
  placeholder: string;
  link: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  placeholder,
  link,
}) => {

  const [inputValue, setInputValue] = useState("");
  const inputFieldRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState("alpha");

  const handleKeyClick = (key: string) => {
    if (key === "CLEAR") {
      setInputValue("");
    } else if (key === "?123") {
      setActiveKeyboard(activeKeyboard === "alpha" ? "symbol" : "alpha");
    } else if (key === "ABC") {
      setActiveKeyboard(activeKeyboard === "alpha" ? "symbol" : "alpha");
    } else if (key === "~") {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      if (cursorPosition > 0) {
        const updatedValue =
          inputValue.slice(0, cursorPosition - 1) +
          inputValue.slice(cursorPosition);
        setInputValue(updatedValue);
        setCursorPosition(cursorPosition - 1);
      }
    } else if (key === "SPACEBAR") {
      // Change 'SPACEBAR' to the key of your choice for space
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      const updatedValue =
        inputValue.slice(0, cursorPosition) +
        " " +
        inputValue.slice(cursorPosition);
      setInputValue(updatedValue);
      setCursorPosition(cursorPosition + 1);
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

  useEffect(() => {
    if (inputFieldRef.current) {
      inputFieldRef.current.focus();
    }
  }, []);

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
          setCursorPosition(cursorPosition);
        }}
      />

      <div className="fixed bottom-0">
        {activeKeyboard === "alpha" ? (
          <KeyboardAlpha handleKeyClick={handleKeyClick} />
        ) : (
          <KeyboardSymbol handleKeyClick={handleKeyClick} />
        )}
        <div className="flex gap-24 text-[30px] justify-center my-10">
          <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
          <div className="text-white">
            <NextCancelBtn link={link} text={"Next"} bgcolor={"#005893"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;