/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { BsTicketDetailed } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const timeLimit = 10000;

    const timer = setTimeout(() => {
      router.push("/");
    }, timeLimit);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <main className="flex flex-col justify-center w-full bgmenu-image mt-[20px]">
        <ul className="text-[40px] m-[25px] font-bold">
          <Link href={"/queueing"} className="text-[#335F96]">
            <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
              <div className="flex flex-row gap-5 ml-[-150px]">
                <BsTicketDetailed
                  size={150}
                  className="mr-[45px] ml-[20px] text-[#1b1b1b]"
                />
                <div className="flex flex-col justify-center">
                  Queue Number
                  <p className="text-[20px] text-[#1b1b1b]">
                    Lorem dolor sit amet
                  </p>
                </div>
              </div>
            </li>
          </Link>
          <Link href={"/pay-business"} className="text-[#335F96]">
            <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
              <div className="flex flex-row gap-5 ml-[-150px]">
                <GiPayMoney
                  size={150}
                  className="mr-[45px] ml-[20px] text-[#1b1b1b]"
                />
                <div className="flex flex-col justify-center">
                  Pay Business
                  <p className="text-[20px] text-[#1b1b1b]">
                    Lorem dolor sit amet consectetur
                  </p>
                </div>
              </div>
            </li>
          </Link>
          <Link href={"/pay-property"} className="text-[#335F96]">
            <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
              <div className="flex flex-row gap-5 ml-[-150px]">
                <BsBuildings
                  size={150}
                  className="mr-[45px] ml-[20px] text-[#1b1b1b]"
                />
                <div className="flex flex-col justify-center">
                  Pay Property
                  <p className="text-[20px] text-[#1b1b1b]">
                    Lorem dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </li>
          </Link>
          <Link href={"/other-payments"} className="text-[#335F96]">
            <li className="border-2 bg-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl flex items-center flex-col p-[34px] m-[30px]">
              <div className="flex flex-row gap-5 ml-[-150px]">
                <MdOutlineOtherHouses
                  size={150}
                  className="mr-[45px] ml-[20px] text-[#1b1b1b]"
                />
                <div className="flex flex-col justify-center">
                  Other Payments
                  <p className="text-[20px] text-[#1b1b1b]">
                    Lorem dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </li>
          </Link>
        </ul>
      </main>
    </div>
  );
}
