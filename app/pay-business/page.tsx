"use client";
import React from "react";
import LabelStepper from "../Component/LabelStepper";
import NextCancelBtn from "../Component/NextCancelBtn";
import InputNumber from "../Component/BINform";
import BackgroundImage from "../Component/BackgroundImage";

export default function Page() {
  return (
    <div className="">
      <BackgroundImage />
      <LabelStepper stepNum={0} title={"Enter Bin"} />
      <div className="flex flex-col justify-center w-full  pt-[40px]">
        <InputNumber
          name="InputValue"
          placeholder="Enter BIN"
          link="/pay-business/pay-business-form"
          qrImg={"/Qr.png"}
        />

        <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
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
    </div>
  );
}
