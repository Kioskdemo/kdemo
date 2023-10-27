import NextCancelBtn from "@/app/Component/NextCancelBtn";
import LabelStepper from "@/app/Component/PageIndicator";
import PaymentForm from "@/app/Component/PaymentForm";

import React from "react";

export default function page() {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={2} />

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
