/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import ConfirmCancelBtn from "@/app/Component/ConfirmCancelBtn";
import Form from "@/app/Component/Form";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div className="text-[20px] bgtax-image">
      <header className="">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>View Information</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2{" "}
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>

      <Link
        className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
        href={"/other-payments"}
      >
        <MdKeyboardBackspace size={40} className="text-[#335F96]" />
        <p>Back</p>
      </Link>
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
      <div className="flex justify-center gap-20">
        <ConfirmCancelBtn
          text={"Cancel"}
          link={"/menu"}
          bgcolor={"#d3010cee"}
        />
        <ConfirmCancelBtn
          text={"Confirm"}
          link={"/other-payments/cedula/payment-info"}
          bgcolor={"#335F96"}
        />
      </div>
    </div>
  );
}
