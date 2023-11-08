"use client";
import React from "react";
import LabelStepper from "../Component/LabelStepper";
import NextCancelBtn from "../Component/NextCancelBtn";
import InputNumber from "../Component/BINform";

export default function Page() {
  return (
    <div className="">
      <LabelStepper stepNum={0} title={"Enter Bin"} />
      <div className="flex flex-col justify-center w-full  pt-[40px]">
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
          qrImg={"/Qr.png"}
        />
      </div>
    </div>
  );
}
