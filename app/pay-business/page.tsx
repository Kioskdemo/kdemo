"use client";
import React from "react";
import LabelStepper from "../Component/PageIndicator";
import BackButton from "../Component/BackButton";
import InputNumber from "../Component/InputNumber";

export default function Page() {

  return (
    <div>
      <LabelStepper stepNum={0} />
      <div className="flex flex-col justify-center w-full bgpaybusiness-image">
        <BackButton text={"Back"} link={"/menu"} />
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
          qrImg={"/Qr.png"}        />
      </div>
    </div>
  );
}
