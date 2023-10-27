import Link from "next/link";
import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { BsArrowLeftRight } from "react-icons/bs";

export default function page() {
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
          <Link
            href={"/other-payments/cedula"}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
          >
            <h1>Cedula</h1>
          </Link>

          <Link
            href={"other-payments/water"}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
          >
            <h1>Water</h1>
          </Link>
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
          >
            <h1>Building Construction Permit</h1>
          </Link>
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
          >
            <h1>Market Rental</h1>
          </Link>
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
          >
            <h1>Vehicle Registration</h1>
          </Link>
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
