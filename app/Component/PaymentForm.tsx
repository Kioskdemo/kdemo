"use client";
import React, { useRef, useState } from "react";
import InputText from "./InputText";
import CustomKeyboard from "../Functions/CustomKeyboard";

interface PaymentFormProps {
  placeholder: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ placeholder }) => {
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
    { label: "Paid by", placeholder: "Type Here", size: 39 },
    { label: "Payer Address", placeholder: "Type Here", size: 39 },
    { label: "Particulars", placeholder: "Type Here", size: 39 },
    { label: "Amount", placeholder: "Type Here", size: 39 },
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
    <div className="text-[25px]">
      <div className="justify-center">
        {inputComponents[0]}
        {inputComponents[1]}
        {inputComponents[2]}
        {inputComponents[3]}
      </div>
      <div className="m-14">
        <CustomKeyboard handleKeyClick={handleKeyClick} />
      </div>
    </div>
  );
};

export default PaymentForm;
