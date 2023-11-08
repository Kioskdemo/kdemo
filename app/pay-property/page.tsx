"use client";

import React from "react";
import LabelStepper from "../Component/LabelStepper";
import InputNumber from "../Component/InputNumber";

export default function page() {
  return (
    <div className="">
      <LabelStepper stepNum={0} title={"Enter Tax"} />

      <main className="flex flex-col justify-center w-full pt-[40px]">
        <InputNumber
          name="name"
          placeholder="Enter Tax No."
          link="/pay-property/pay-property-form"
          qrImg={"/example-qr.webp"}
        />
      </main>
    </div>
  );
}
