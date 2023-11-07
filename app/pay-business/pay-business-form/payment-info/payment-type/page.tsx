/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import PaymentType from "@/app/Component/PaymentType";
import LabelStepper from "@/app/Component/LabelStepper";

import NextCancelBtn from "@/app/Component/NextCancelBtn";

const Page: React.FC = () => {
  return (
    <div className="bgtax-image text-[25px] ">
      <LabelStepper stepNum={3} title={"Enter Bin"} />

      <div className="flex text-[40px] items-center flex-col mt-[150px] mb-[350px]">
        <h1 className="font-bold uppercase">Choose Preferred payment type</h1>
        <div className="flex gap-20 pt-5">
          <PaymentType />
        </div>
        <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
          <NextCancelBtn
            link={"/pay-business/pay-business-form/payment-info"}
            text={"Back"}
            bgcolor={"#fff"}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
