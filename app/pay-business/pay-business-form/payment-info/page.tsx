import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";

export default function page() {
  return (
    <div className=" text-[25px]">
      <LabelStepper stepNum={2} title={"Enter Bin"} />
      <PaymentForm placeholder={"Type Here"} />
    </div>
  );
}
