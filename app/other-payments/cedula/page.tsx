/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Form from "@/app/Component/Form";
import NextCancelBtn from "@/app/Component/NextCancelBtn";
import PageIndicator from "@/app/Component/PageIndicator";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div className="text-[20px] bgtax-image">
      <PageIndicator stepNum={0} />
      <div className="flex justify-center ">
        <Form label={"Last Name"} placeholder={"Type Here"} size={8} />
        <Form label={"First Name"} placeholder={"Type Here"} size={8} />
        <Form label={"MI"} placeholder={"Type Here"} size={6} />
      </div>
      <Form label={"Place of Birth"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center">
        <Form label={"Birthdate"} placeholder={"Type Here"} size={15} />

        <Form label={"Nationality"} placeholder={"Type Here"} size={15} />
      </div>
      <div className="flex justify-center ">
        <Form label={"Citizenship"} placeholder={"Type Here"} size={8} />
        <Form label={"Civil Status"} placeholder={"Type Here"} size={8} />
        <Form label={"Sex"} placeholder={"Type Here"} size={6} />
      </div>
      <Form label={"Permanent Address"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center">
        <Form label={"Mob No."} placeholder={"Type Here"} size={15} />

        <Form label={"Tel No."} placeholder={"Type Here"} size={15} />
      </div>
      <Form label={"Occupation"} placeholder={"Type Here"} size={38} />
      <div className="flex gap-20 text-[30px] justify-center pt-10 absolute top-[90%] w-full">
        <NextCancelBtn
          link={"/pay-business/pay-business-form"}
          text={"Back"}
          bgcolor={"#fff"}
        />
        <div className="text-white">
          <NextCancelBtn
            link={"/pay-business/pay-business-form/payment-info/payment-type"}
            text={"Next"}
            bgcolor={"#005893"}
          />
        </div>
      </div>
    </div>
  );
}
