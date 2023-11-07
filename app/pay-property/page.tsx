"use client";

import React from "react";
import LabelStepper from "../Component/LabelStepper";
import InputNumber from "../Component/BINform";
import NextCancelBtn from "../Component/NextCancelBtn";
import BackgroundImage from "../Component/BackgroundImage";

export default function page() {
  return (
    <div className="">
      <BackgroundImage />
      <LabelStepper stepNum={0} title={"Enter Tax"} />

      <main className="flex flex-col justify-center w-full pt-[40px]">
        <InputNumber
          name="name"
          placeholder="Enter Tax No."
          link="/pay-property/pay-property-form"
          qrImg={"/example-qr.webp"}
        />
        <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
          <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
          <div className="text-white">
            <NextCancelBtn
              link={"/pay-property/pay-property-form"}
              text={"Next"}
              bgcolor={"#335F96"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
