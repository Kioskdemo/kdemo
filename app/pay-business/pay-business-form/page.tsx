/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Form from "@/app/Component/Form";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/PageIndicator";
import React from "react";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={1} />

      <div className="flex justify-center ">
        <Form label={"BIN"} placeholder={"Type Here"} size={15} />
        <Form label={"Type"} placeholder={"Type Here"} size={15} />
      </div>
      <Form label={"Trade Name"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center">
        <Form label={"Amount"} placeholder={"Type Here"} size={7} />

        <Form label={"Year"} placeholder={"Type Here"} size={7} />

        <Form label={"Quarter"} placeholder={"Type Here"} size={7} />
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
