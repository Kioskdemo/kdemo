import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/LabelStepper";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";
import BackgroundImage from "@/app/Component/BackgroundImage";

export default function page() {
  return (
    <div className=" text-[25px]">
      <BackgroundImage />
      <LabelStepper stepNum={2} title={"Enter Bin"} />
      <PaymentForm placeholder={"Type Here"} />
      <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
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
