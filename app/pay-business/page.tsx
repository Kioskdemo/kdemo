"use client";
import React from "react";
import LabelStepper from "../Component/LabelStepper";

import InputNumber from "../Component/InputNumber";

export default function Page() {
  return (
    <div className="">
      <LabelStepper stepNum={0} title={"Enter Bin"} />
      <div className="flex flex-col justify-center w-full pt-[40px]">
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
        />
        <div className="text-[50px] relative flex justify-center items-center pt-[50px]">
          <h1>Or</h1>
          <div className="bg-black w-[200px] h-[1px] absolute top-[90px] left-[180px]"></div>
          <div className="bg-black w-[200px] h-[1px] absolute top-[90px] right-[180px]"></div>
        </div>
        <div className="text-[50px] flex justify-center items-center pt-[50px] font-light">
          <h1>Scan your QR</h1>
        </div>
      </div>
    </div>
  );
}
