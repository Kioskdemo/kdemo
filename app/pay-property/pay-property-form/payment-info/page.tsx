import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={2} title={"Enter Tax"} />
      <PaymentForm placeholder={"Type Here"} />
      <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
        <NextCancelBtn
          link={"/pay-property/pay-property-form"}
          text={"Back"}
          bgcolor={"#fff"}
        />
        <div className="text-white">
          <NextCancelBtn
            link={"/pay-property/pay-property-form/payment-info/payment-type"}
            text={"Next"}
            bgcolor={"#335F96"}
          />
        </div>
      </div>
    </div>
  );
}
