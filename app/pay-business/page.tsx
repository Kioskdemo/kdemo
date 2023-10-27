"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";
import CustomKeyboard from "../Functions/CustomKeyboard";
import InputNumber from "../Component/InputNumber";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const keyboardContainerRef = useRef<HTMLDivElement | null>(null);
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  const handleKeyClick = (key: string) => {
    if (key === "CLEAR") {
      setInputValue("");
    } else if (key === "Del") {
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
      // Delay focusing to ensure it maintains cursor position
      setTimeout(() => {
        if (inputFieldRef.current) {
          inputFieldRef.current.selectionStart = position;
          inputFieldRef.current.selectionEnd = position;
          inputFieldRef.current.focus();
        }
      }, 0);
    }
  };

  const handleTextInputFocus = () => {
    setKeyboardVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isKeyboardVisible &&
        keyboardContainerRef.current &&
        !keyboardContainerRef.current.contains(event.target as Node) &&
        inputFieldRef.current &&
        !inputFieldRef.current.contains(event.target as Node)
      ) {
        setKeyboardVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isKeyboardVisible]);

  return (
    <div>
      <header className="text-[20px]">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>Enter BIN</span>
          </div>

          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2
            </div>
            <span>View Information</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              4
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center w-full bgpaybusiness-image">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/menu"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <InputNumber
          name="firstname"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
          text={"Or"}
          description={"Scan QR Code"}
          Img={"/example-qr.webp"}
        />

        <div
          className={`keyboard-container ${isKeyboardVisible ? "visible" : ""}`}
          ref={keyboardContainerRef}
        >
          <CustomKeyboard handleKeyClick={handleKeyClick} />
        </div>
      </main>
    </div>
  );
}
