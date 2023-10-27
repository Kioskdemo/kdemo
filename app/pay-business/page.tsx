"use client";
import React from "react";
import LabelStepper from "../Component/PageIndicator";
import BackButton from "../Component/BackButton";
import InputNumber from "../Component/InputNumber";
import NextCancelBtn from "../Component/NextCancelBtn";

export default function Page() {
  return (
    <div className="relative">
      <LabelStepper stepNum={0} />
      <div className="flex flex-col justify-center w-full bgpaybusiness-image pt-[40px]">
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
          qrImg={"/Qr.png"}
        />
      </div>
      <div className="flex gap-20 text-[30px] justify-center pt-10  absolute top-[115%] w-full">
        <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
        <div className="text-white">
          <NextCancelBtn
            link={"/pay-business/pay-business-form"}
            text={"Next"}
            bgcolor={"#005893"}
          />
        </div>
      </div>
    </div>
  );
}
