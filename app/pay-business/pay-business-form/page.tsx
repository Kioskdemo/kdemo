/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import BackButton from "@/app/Component/BackButton";
import ConfirmCancelBtn from "@/app/Component/ConfirmCancelBtn";
import Form from "@/app/Component/Form";
import LabelStepper from "@/app/Component/PageIndicator";
import React from "react";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={1} />
      <BackButton text="back" link={"/pay-business"} />
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
      <div className="flex justify-center gap-20">
        <ConfirmCancelBtn
          text={"Cancel"}
          link={"/menu"}
          bgcolor={"#d3010cee"}
        />
        <ConfirmCancelBtn
          text={"Confirm"}
          link={"/pay-business/pay-business-form/payment-info"}
          bgcolor={"#335F96"}
        />
      </div>
    </div>
  );
}
