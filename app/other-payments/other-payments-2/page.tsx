import Link from "next/link";
import React from "react";
import { BsArrowLeftRight } from "react-icons/bs";

export default function page() {
  return (
    <div>
      <main className="bgothers-image flex flex-col justify-center w-full mt-[50px] pt-[50px]">
        <div className="flex flex-col justify-center items-center gap-20 text-[35px]">
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center"
          >
            <h1>Police Clearance</h1>
          </Link>
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center"
          >
            <h1>Health Permit</h1>
          </Link>
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center"
          >
            <h1>Ordinance Violations</h1>
          </Link>
          <Link
            href={""}
            className="w-[500px] h-[150px] bg-[#335F96] rounded-2xl text-white flex items-center justify-center"
          >
            <h1>Work Permit</h1>
          </Link>
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
