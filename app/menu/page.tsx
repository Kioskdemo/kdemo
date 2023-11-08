/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { BsTicketDetailed } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { useRouter } from "next/navigation";
import BackgroundImage from "../Component/BackgroundImage";
import MenuButton from "../Component/MenuButton";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const timeLimit = 1000000;

    const timer = setTimeout(() => {
      router.push("/");
    }, timeLimit);

    return () => clearTimeout(timer);
  });

  const menuConfig = [
    {
      link: "/queueing",
      iconImg: (
        <BsTicketDetailed
          size={150}
          className="mr-[40px] ml-[20px] text-[#1b1b1b]"
        />
      ),
      title: "Queue Number",
      description: "Lorem dolor sit amet",
    },
    {
      link: "/pay-business",
      iconImg: (
        <GiPayMoney size={150} className="mr-[40px] ml-[20px] text-[#1b1b1b]" />
      ),
      title: "Pay Business",
      description: "Lorem dolor sit amet consectetur",
    },
    {
      link: "/pay-property",
      iconImg: (
        <BsBuildings
          size={150}
          className="mr-[40px] ml-[20px] text-[#1b1b1b]"
        />
      ),
      title: "Pay Property",
      description: "Lorem dolor sit amet consectetur.",
    },
    {
      link: "/other-payments",
      iconImg: (
        <MdOutlineOtherHouses
          size={150}
          className="mr-[40px] ml-[20px] text-[#1b1b1b]"
        />
      ),
      title: "Other Payments",
      description: "Lorem dolor sit amet consectetur.",
    },
  ];

  const menuComponents = menuConfig.map((config, index) => (
    <MenuButton
      key={index}
      link={config.link}
      iconImg={config.iconImg}
      title={config.title}
      description={config.description}
    />
  ));

  return (
    <div>
      <BackgroundImage />
      <main className="flex flex-col justify-center w-full mt-[20px]">
        <ul className="text-[40px] m-[25px] font-bold">
          {menuComponents[0]}
          {menuComponents[1]}
          {menuComponents[2]}
          {menuComponents[3]}
        </ul>
      </main>
    </div>
  );
}
