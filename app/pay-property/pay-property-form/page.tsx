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
        <Form label={"ARP/TD No."} placeholder={"Type Here"} size={15} />
        <Form
          label={"Property Identification No."}
          placeholder={"Type Here"}
          size={15}
        />
      </div>
      <Form label={"Owner"} placeholder={"Type Here"} size={38} />
      <Form label={"Address"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center ">
        <Form label={"OCT/TCT/CLOA No."} placeholder={"Type Here"} size={15} />

        <Form label={"Lot No."} placeholder={"Type Here"} size={15} />
      </div>
      <div className="flex justify-center ">
        <Form
          label={"Municipal Assessor"}
          placeholder={"Type Here"}
          size={15}
        />

        <Form
          label={"Provincial Assessor"}
          placeholder={"Type Here"}
          size={15}
        />
      </div>

      {/* <div className="relative text-[30px] text-black flex justify-around bg-[#ffffff75]">
            <div className="absolute w-[700px] h-[3px] bg-black top-[50px]"></div>
            <div className="">
              <h1>Details</h1>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
              <p>Sari-Sari Store</p>
              <p className="pl-[50px]">Business Tax</p>
              <p className="pl-[50px]">Mayor's Permit</p>
            </div>
            <div>
              <h1>Amount</h1>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
              <p className="text-transparent">.</p>
              <p>1,500.00</p>
              <p>800.00</p>
            </div>
          </div> */}
      <div className="flex text-[30px] gap-20 justify-center pt-10 absolute top-[90%] w-full">
        <NextCancelBtn link={"/pay-property"} text={"Back"} bgcolor={"#fff"} />
        <div className="text-white">
          <NextCancelBtn
            link={"/pay-property/pay-property-form/payment-info"}
            text={"Next"}
            bgcolor={"#335F96"}
          />
        </div>
      </div>
    </div>
  );
}
