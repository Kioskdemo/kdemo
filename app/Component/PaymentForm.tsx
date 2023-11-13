// PaymentForm.tsx
import React, { useEffect, useRef, useState } from "react";
import InputText from "./InputText";
import KeyboardAlpha from "./KeyboardAlpha";
import KeyboardSymbol from "./KeyboardSymbol";
import {
  setCursorPosition,
  handleKeyClick,
} from "../functions/KeyboardMultiBox";
import PaymentFormMap from "./PaymentFormMap";
import paymentFormConfig from "../configJSON/paymentFormConfig";

const PaymentForm = () => {
  const inputRefs: React.RefObject<HTMLInputElement | null>[] = [
    useRef(null),
    useRef(null),
  ];

  const [inputValue, setInputValue] = useState(["", ""]);
  const activeInputRef = useRef<HTMLInputElement | null>(null);
  const [activeKeyboard, setActiveKeyboard] = useState("alpha");

  useEffect(() => {
    if (inputRefs[0] && inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);

  // const inputConfig = [
  //   { label: "Paid by", placeholder: "Type Here", size: 39 },
  //   { label: "Payer Address", placeholder: "Type Here", size: 39 },
  //   {
  //     label: "Particulars",
  //     placeholder: "cedula",
  //     size: 39,
  //     disabled: true,
  //   },
  //   { label: "Amount", placeholder: "150", size: 39, disabled: true },
  // ];

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
        activeInputRef.current = inputRefs[index].current;
        const cursorPosition = e.currentTarget.selectionStart || 0;
        setCursorPosition(cursorPosition, activeInputRef.current);
      }}
      disabled={config.disabled}
    />
  ));

  return (
    <div className="text-[25px]">
      <div className="justify-center">
        {/* {inputComponents[0]}
        {inputComponents[1]}
        {inputComponents[2]}
        {inputComponents[3]} */}
        {PaymentFormMap({ paymentFormConfig })}
      </div>
      <div className="absolute bottom-40 w-full">
        {activeKeyboard === "alpha" ? (
          <KeyboardAlpha
            handleKeyClick={(key) =>
              handleKeyClick(
                key,
                activeInputRef,
                inputValue,
                setInputValue,
                inputRefs,
                setActiveKeyboard
              )
            }
          />
        ) : (
          <KeyboardSymbol
            handleKeyClick={(key) =>
              handleKeyClick(
                key,
                activeInputRef,
                inputValue,
                setInputValue,
                inputRefs,
                setActiveKeyboard
              )
            }
          />
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
