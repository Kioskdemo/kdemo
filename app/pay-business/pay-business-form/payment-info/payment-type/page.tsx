/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import PaymentType from "@/app/Component/PaymentType";
import LabelStepper from "@/app/Component/PageIndicator";
import BackButton from "@/app/Component/BackButton";

const Page: React.FC = () => {
  return (
    <div className="bgtax-image text-[25px]">
      <LabelStepper stepNum={3} />
      <BackButton text="back" link={"/pay-business/pay-business-form/payment-info"} />
      <div className="flex text-[40px] items-center flex-col mt-[150px] mb-[350px]">
        <h1 className="font-bold uppercase">Choose Preferred payment type</h1>
        <div className="flex gap-20 pt-5">
          <PaymentType />
        </div>
      </div>
    </div>
  );
};

export default Page;
