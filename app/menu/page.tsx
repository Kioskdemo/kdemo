/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { BsTicketDetailed } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineOtherHouses } from "react-icons/md";
import { useRouter } from "next/navigation";

import MenuButton from "../Component/MenuButton";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    const timeLimit = 10000;

    const timer = setTimeout(() => {
      router.push("/");
    }, timeLimit);

    return () => clearTimeout(timer);
  });

  const menuConfig = [
    {
      link: "/queueing",
      iconImg: <BsTicketDetailed size={130} className=" text-[#1b1b1b]" />,
      title: "Queue Number",
      description: "Lorem dolor sit amet",
    },
    {
      link: "/pay-business",
      iconImg: <GiPayMoney size={130} className="text-[#1b1b1b]" />,
      title: "Pay Business",
      description: "Lorem dolor sit amet consectetur",
    },
    {
      link: "/pay-property",
      iconImg: <BsBuildings size={130} className="text-[#1b1b1b]" />,
      title: "Pay Property",
      description: "Lorem dolor sit amet consectetur.",
    },
    {
      link: "/other-payments",
      iconImg: <MdOutlineOtherHouses size={130} className="text-[#1b1b1b]" />,
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
    <div className="mt-[100px]">
      <div className="grid grid-rows-2 grid-flow-col justify-center items-center gap-20 w-full mt-[20px]">
        {menuComponents[0]}
        {menuComponents[1]}
        {menuComponents[2]}
        {menuComponents[3]}
      </div>
    </div>
  );
}
