/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import InputText from "@/app/Component/InputText";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/PageIndicator";
import React, { useEffect, useRef } from "react";
export default function page() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={1} />

      <div className="flex justify-center ">
        <InputText
          label={"BIN"}
          placeholder={"Type Here"}
          size={15}
          inputRef={inputRef}
          value={""}
        />

        <InputText
          label={"Type"}
          placeholder={"Type Here"}
          size={15}
          inputRef={inputRef}
          value={""}
        />
      </div>
      <InputText
        label={"Trade Name"}
        placeholder={"Type Here"}
        size={38}
        inputRef={inputRef}
        value={""}
      />
      <div className="flex justify-center">
        <InputText
          label={"Amount"}
          placeholder={"Type Here"}
          size={7}
          inputRef={inputRef}
          value={""}
        />

        <InputText
          label={"Year"}
          placeholder={"Type Here"}
          size={7}
          inputRef={inputRef}
          value={""}
        />

        <InputText
          label={"Quarter"}
          placeholder={"Type Here"}
          size={7}
          inputRef={inputRef}
          value={""}
        />
      </div>
      <div className="flex gap-20 text-[30px] justify-center pt-10 absolute top-[90%] w-full">
        <NextCancelBtn link={"/pay-business"} text={"Back"} bgcolor={"#fff"} />
        <div className="text-white">
          <NextCancelBtn
            link={"/pay-business/pay-business-form/payment-info"}
            text={"Next"}
            bgcolor={"#005893"}
          />
        </div>
      </div>
    </div>
  );
}
