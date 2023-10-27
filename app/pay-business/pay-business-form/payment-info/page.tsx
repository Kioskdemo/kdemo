import BackButton from "@/app/Component/BackButton";
import ConfirmCancelBtn from "@/app/Component/ConfirmCancelBtn";
import LabelStepper from "@/app/Component/PageIndicator";
import PaymentForm from "@/app/Component/PaymentForm";
import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={2} />
      <BackButton text="back" link={"/pay-business/pay-business-form"} />
      <PaymentForm label={"Paid By"} placeholder={"Type Here"} size={38} />
      <PaymentForm
        label={"Payer Address"}
        placeholder={"Type Here"}
        size={38}
      />
      <PaymentForm label={"Particulars"} placeholder={"Type Here"} size={38} />
      <div className="flex justify-center">
        <PaymentForm
          label={"Particulars"}
          placeholder={"Type Here"}
          size={15}
        />

        <PaymentForm label={"Amount"} placeholder={"Type Here"} size={15} />
      </div>
      <div className="flex justify-center gap-20">
        <ConfirmCancelBtn
          text={"Cancel"}
          link={"/menu"}
          bgcolor={"#d3010cee"}
        />
        <ConfirmCancelBtn
          text={"Confirm"}
          link={"/pay-business/pay-business-form/payment-info/payment-type"}
          bgcolor={"#335F96"}
        />
      </div>
    </div>
  );
}
