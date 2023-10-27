import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import InputNumber from "../Component/InputNumber";

export default function page() {
  return (
    <div>
      <header className="text-[20px]">
        <div className="flex justify-between px-10 pt-10 gap-5">
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              1
            </div>
            <span>Enter BIN</span>
          </div>

          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              2
            </div>
            <span>View Information</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              3
            </div>
            <span>Confirm Payment</span>
          </div>
          <div className="text-center flex flex-col items-center basis-1/4">
            <div className="w-[80px] h-[80px] bg-white rounded-[50%] border border-[#335F96] flex items-center justify-center flex-col text-[40px]">
              4
            </div>
            <span>Payment Type</span>
          </div>
        </div>
      </header>
      <main className="bgtax-image flex flex-col justify-center w-full ">
        <Link
          className="text-[30px] flex items-center gap-2 p-5 m-[20px] w-[200px]"
          href={"/menu"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>

        <InputNumber
          name="name"
          placeholder="Enter Tax No."
          link="/pay-property/pay-property-form"
          qrImg={"/example-qr.webp"}
        />
      </main>
    </div>
  );
}
