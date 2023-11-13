"use client";
import React, { useRef, useState } from "react";
import InputText from "./InputText";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";

interface PaymentFormProps {}

const PaymentForm: React.FC<PaymentFormProps> = ({}) => {
  const inputRefs: (React.RefObject<HTMLInputElement | null>)[] = [
    useRef(null),
    useRef(null)
  ];

  const [inputValues, setInputValues] = useState(["", ""]);
  const activeInputRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState("alpha");

  const handleKeyClickWrapper = (key: string) => {
    const updatedValues = handleKeyClick(key, inputValues, activeInputRef, setActiveKeyboard);
    setInputValues(updatedValues);
  };

  const inputConfig = [
    { label: "Paid by", placeholder: "Type Here", size: 39 },
    { label: "Payer Address", placeholder: "Type Here", size: 39 },
    {
      label: "Particulars",
      placeholder: "cedula",
      size: 39,
      disabled: true,
    },
    { label: "Amount", placeholder: "150", size: 39, disabled: true },
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
        const cursorPosition = e.currentTarget.selectionStart || 0;
        const activeInput = activeInputRef.current as HTMLInputElement | null;
        if (activeInput) {
          setTimeout(() => {
            activeInput.selectionStart = cursorPosition;
            activeInput.selectionEnd = cursorPosition;
            activeInput.focus();
          }, 0);
        }
      }}
      disabled={config.disabled}
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
      <div className="absolute bottom-40 w-full">
        {activeKeyboard === "alpha" ? (
          <KeyboardAlpha handleKeyClick={handleKeyClickWrapper} />
        ) : (
          <KeyboardSymbol handleKeyClick={handleKeyClickWrapper} />
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
