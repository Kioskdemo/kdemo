import BackButton from "@/app/Component/BackButton";
import CategoryOtherPayments from "@/app/Component/CategoryOtherPayments";
import NextBackButton from "@/app/Component/Next&BackButton";
import React from "react";

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
      <main className="bgothers-image flex flex-col justify-center w-full">
        <BackButton text={"Back"} link={"/menu"} />
        <div className="flex flex-col justify-center items-center gap-10 text-[35px]">
          {paymentTypesComponents[0]}
          {paymentTypesComponents[1]}
          {paymentTypesComponents[2]}
          {paymentTypesComponents[3]}
          <div className="absolute bottom-8">
            <NextBackButton text={"Prev"} link={"/other-payments"} />
          </div>
        </div>
      </main>
    </div>
  );
}
