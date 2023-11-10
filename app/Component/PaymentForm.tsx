"use client";
import React, { useRef, useState } from "react";
import InputText from "./InputText";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";
import { MultipleInputBox, setCursorPosition } from "../functions/KeyboardMultiBox";

interface PaymentFormProps {}

const PaymentForm: React.FC<PaymentFormProps> = ({}) => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [inputValue, setInputValue] = useState(['', '', '', '', '', '']);
  const inputFieldRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState('alpha');

  const MultiInput = (key: string) => {
    const updatedValue = MultipleInputBox(key, inputValue, inputFieldRef, setActiveKeyboard);
    setInputValue(updatedValue);
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
      value={inputValue[index]}
      name=""
      onclick={(e) => {
        const cursorPosition = e.currentTarget.selectionStart || 0;
          setCursorPosition(inputFieldRef, cursorPosition);
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
          <KeyboardAlpha handleKeyClick={MultiInput} />
        ) : (
          <KeyboardSymbol handleKeyClick={MultiInput} />
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
