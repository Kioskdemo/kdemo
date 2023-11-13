import React, { useRef, useState } from "react";
import InputText from "./InputText";
import { setCursorPosition } from "../functions/KeyboardMultiBox";

type PaymentFormMapProps = {
  paymentFormConfig: {
    label: string;
    placeholder: string;
    size: number;
    disabled?: boolean;
  }[];
};

const PaymentFormMap: React.FC<PaymentFormMapProps> = ({
  paymentFormConfig,
}) => {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [inputValue] = useState(["", "", "", "", "", ""]);
  const inputFieldRef = useRef<HTMLInputElement | null>(null);

  return paymentFormConfig.map((config, index) => (
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
};

export default PaymentFormMap;
