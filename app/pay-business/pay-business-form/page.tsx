/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import InputText from "@/app/Component/InputText";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import CustomKeyboard from "@/app/Component/CustomKeyboard";
import BillingInformation from "@/app/Component/BillingInformation";

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

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <LabelStepper stepNum={1} title={"Enter Bin"} />
      </div>
      <div className="bg-gray-100 m-12">
        <BillingInformation />
      </div>
      <div className="absolute bottom-8 w-full">
        <div className="flex gap-24 text-[30px] justify-center mb-10">
          <NextCancelBtn link={"/pay-business"} text={"Back"} bgcolor={"#fff"} />
          <div className="text-white">
            <NextCancelBtn
              link={"/pay-business/pay-business-form/payment-info"}
              text={"Next"}
              bgcolor={"#005893"}
            />
          </div>
        </div>
        <CustomKeyboard handleKeyClick={handleKeyClick} />
      </div>
    </>
  );
}
