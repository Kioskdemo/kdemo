/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import InputText from "@/app/Component/InputText";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import CustomKeyboard from "@/app/Functions/CustomKeyboard";

export default function Page() {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const activeInputRef = useRef(null);

  const setCursorPosition = (position: number) => {
    const activeInput = activeInputRef.current as HTMLInputElement | null;
    if (activeInput) {
      setTimeout(() => {
        activeInput.selectionStart = position;
        activeInput.selectionEnd = position;
        activeInput.focus();
      }, 0);
    }
  };

  const handleKeyClick = (key: string) => {
    const activeInput = activeInputRef.current as HTMLInputElement | null;
    if (activeInput) {
      const cursorPosition = activeInput?.selectionStart || 0;
      const inputIndex = inputRefs.findIndex(
        (ref) => ref.current === activeInput
      );

      if (key === "CLEAR") {
        inputValues[inputIndex] = "";
      } else if (key === "~") {
        if (cursorPosition > 0) {
          inputValues[inputIndex] =
            inputValues[inputIndex].slice(0, cursorPosition - 1) +
            inputValues[inputIndex].slice(cursorPosition);
          setCursorPosition(cursorPosition - 1);
        }
      } else {
        inputValues[inputIndex] =
          inputValues[inputIndex].slice(0, cursorPosition) +
          key +
          inputValues[inputIndex].slice(cursorPosition);
        setCursorPosition(cursorPosition + 1);
      }

      setInputValues([...inputValues]);
    }
  };

  const inputConfig = [
    { label: "BIN", placeholder: "Type Here", size: 15 },
    { label: "Type", placeholder: "Type Here", size: 15 },
    { label: "Trade Name", placeholder: "Type Here", size: 39 },
    { label: "Amount", placeholder: "Type Here", size: 7 },
    { label: "Year", placeholder: "Type Here", size: 7 },
    { label: "Quarter", placeholder: "Type Here", size: 7 },
  ];

  const inputComponents = inputConfig.map((config, index) => (
    <InputText
      key={index}
      label={config.label}
      placeholder={config.placeholder}
      size={config.size}
      inputRef={inputRefs[index]}
      value={inputValues[index]}
      name=""
      onclick={(e) => {
        activeInputRef.current = inputRefs[index].current;
        const cursorPosition = e.currentTarget.selectionStart || 0;
        setCursorPosition(cursorPosition);
      }}
    />
  ));

  return (
    <div className=" text-[25px]">
      <LabelStepper stepNum={1} title={"Enter Bin"} />
      <div className="flex justify-center">{inputComponents.slice(0, 2)}</div>
      {inputComponents[2]}
      <div className="flex justify-center">{inputComponents.slice(3, 6)}</div>
      <div className="pt-[200px]">
        <CustomKeyboard handleKeyClick={handleKeyClick} />
      </div>

      <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
        <NextCancelBtn link="/pay-business" text="Back" bgcolor="#fff" />
        <div className="text-white">
          <NextCancelBtn
            link="/pay-business/pay-business-form/payment-info"
            text="Next"
            bgcolor="#005893"
          />
        </div>
      </div>
    </div>
  );
}
