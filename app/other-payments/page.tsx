import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs";
import CategoryOtherPayments from "../Component/CategoryOtherPayments";

export default function page() {
  const paymentTypesConfig = [
    { link: "/other-payments/cedula", text: "Cedula" },
    { link: "", text: "Water" },
    { link: "", text: "Building Construction Permit" },
    { link: "", text: "Market Rental" },
    { link: "", text: "Vehichle Registration" },
  ];

  const paymentTypesComponents = paymentTypesConfig.map((config, index) => (
    <CategoryOtherPayments key={index} link={config.link} text={config.text} />
  ));

  return (
    <div>
      <main className="bgothers-image flex flex-col justify-center w-full">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/menu"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="flex flex-col justify-center items-center gap-10 text-[35px]">
          {paymentTypesComponents[0]}
          {paymentTypesComponents[1]}
          {paymentTypesComponents[2]}
          {paymentTypesComponents[3]}
          {paymentTypesComponents[4]}

          <Link
            className="text-[40px] flex items-center gap-5 p-5 m-[20px] w-[200px]"
            href={"/other-payments/other-payments-2"}
          >
            <BsArrowLeftRight size={60} className="text-[#335F96]" />
            <p className="font-semibold">Next</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
