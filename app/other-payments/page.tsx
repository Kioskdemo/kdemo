import React from "react";
import CategoryOtherPayments from "../Component/CategoryOtherPayments";
import BackButton from "../Component/BackButton";
import NextBackButton from "../Component/Next&BackButton";

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
        <BackButton text={"Back"} link={"/menu"} />
        <div className="flex flex-col justify-center items-center gap-10 text-[35px]">
          {paymentTypesComponents[0]}
          {paymentTypesComponents[1]}
          {paymentTypesComponents[2]}
          {paymentTypesComponents[3]}
          {paymentTypesComponents[4]}
          <div className="absolute bottom-8">
            <NextBackButton
              text={"Next"}
              link={"/other-payments/other-payments-2"}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
