import CategoryOtherPayments from "@/app/Component/CategoryOtherPayments";
import Link from "next/link";
import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";

export default function page() {
  const paymentTypesConfig = [
    { link: "/other-payments/cedula", text: "Police Clearance" },
    { link: "", text: "Health Permit" },
    { link: "", text: "Ordinance Violations" },
    { link: "", text: "Work Permit" },
  ];

  const paymentTypesComponents = paymentTypesConfig.map((config, index) => (
    <CategoryOtherPayments key={index} link={config.link} text={config.text} />
  ));

  return (
    <div>
      <main className="bgothers-image flex flex-col justify-center w-full mt-[50px] pt-[50px]">
        <div className="flex flex-col justify-center items-center gap-20 text-[35px]">
          {paymentTypesComponents[0]}
          {paymentTypesComponents[1]}
          {paymentTypesComponents[2]}
          {paymentTypesComponents[3]}
          <Link
            className="text-[40px] flex items-center gap-5 p-5 m-[20px] w-[200px]"
            href={"/other-payments"}
          >
            <BsArrowLeftRight size={60} className="text-[#335F96]" />
            <p className="font-semibold">Back</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
