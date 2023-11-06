import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/PageIndicator";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={2} />

      <PaymentForm placeholder={"Type Here"} />

      <div className="flex text-[30px] gap-20 justify-center pt-10 absolute top-[90%] w-full">
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
