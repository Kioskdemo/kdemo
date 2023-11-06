import Link from "next/link";
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
  qrImg
}) => {

  const [inputValue, setInputValue] = useState('');
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const handleKeyClick = (key: string) => {
    if (key === 'CLEAR') {
      setInputValue('');
    } else if (key === '~') {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      if (cursorPosition > 0) {
        const updatedValue =
          inputValue.slice(0, cursorPosition - 1) + inputValue.slice(cursorPosition);
        setInputValue(updatedValue);
        setCursorPosition(cursorPosition - 1);
      }
    } else {
      const cursorPosition = inputFieldRef.current?.selectionStart || 0;
      const updatedValue =
        inputValue.slice(0, cursorPosition) + key + inputValue.slice(cursorPosition);
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
    <div className="flex flex-col justify-center items-center gap-10 text-[40px] m-[10px]">
      <input
        ref={inputFieldRef}
        value={inputValue}
        name={name}
        placeholder={placeholder}
        className="text-center rounded-2xl bg-gray-300"
        onClick={(e) => {
          const cursorPosition = e.currentTarget.selectionStart || 0;
          setCursorPosition(cursorPosition);
        }}     
      />
      <Link href={link}>
        <button className="w-[250px] h-[80px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
          Confirm
        </button>
      </Link>
      <div className="flex flex-col justify-center items-center gap-10 py-[50px] text-[50px] relative">
          <h1>Scan QR</h1>
          <img src={qrImg} alt="" />
        </div>
      <div>
          <CustomKeyboard handleKeyClick={handleKeyClick} />
        </div>
    </div>
  );
};

export default InputNumber;
