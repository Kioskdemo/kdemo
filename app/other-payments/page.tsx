import React from "react";
import CategoryOtherPayments from "../Component/CategoryOtherPayments";
import BackButton from "../Component/BackButton";
import NextBackButton from "../Component/Next&BackButton";
import BackgroundImage from "../Component/BackgroundImage";
import NextCancelBtn from "../Component/NextCancelBtn";

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
    <div className="mt-[100px]">
      <main className=" flex flex-col justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-10 text-[35px]">
          {paymentTypesComponents[0]}
          {paymentTypesComponents[1]}
          {paymentTypesComponents[2]}
          {paymentTypesComponents[3]}
          {paymentTypesComponents[4]}
          <div className="flex gap-24 text-[30px] justify-center pt-10 w-full absolute bottom-8">
            <NextCancelBtn link={"/menu"} text={"Back"} bgcolor={"#fff"} />
            <div className="text-white">
              <NextCancelBtn
                link={"/other-payments/other-payments-2"}
                text={"Next"}
                bgcolor={"#005893"}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
