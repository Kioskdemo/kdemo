/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { BsFillPersonFill, BsWater, BsFillBuildingFill } from "react-icons/bs";
import { AiFillHome, AiFillStop, AiFillCar } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { IoTicket } from "react-icons/io5";
import { FaHelmetSafety } from "react-icons/fa6";
import CategoryQue from "../Component/CategoryQue";
import BackButton from "../Component/BackButton";

const LandingPage = () => {
  const componentRef = useRef(null);

  const queueConfig = [
    { iconImg: <BsFillPersonFill size={50} />, text: "Cedula" },
    { iconImg: <BsWater size={50} />, text: "Water" },
    { iconImg: <BsFillBuildingFill size={50} />, text: "Construction Permit" },
    { iconImg: <AiFillHome size={50} />, text: "Real Property" },
    { iconImg: <AiFillStop size={50} />, text: "Ordinance Violations" },
    { iconImg: <AiFillCar size={50} />, text: "Vehicle Registration" },
    { iconImg: <GiHealthNormal size={50} />, text: "Health Permit" },
    { iconImg: <IoTicket size={50} />, text: "Queue" },
    { iconImg: <FaHelmetSafety size={50} />, text: "Work Permit" },
  ];

  const queueComponents = queueConfig.map((config, index) => (
    <CategoryQue key={index} iconImg={config.iconImg} text={config.text} />
  ));

  return (
    <>
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="bgqueue-image bg-no-repeat bg-cover">
        <div className="">
          <BackButton text="Back" link={"/menu"} />
        </div>
        <div className="text-[45px] font-bold px-28 pt-5 relative grid grid-rows-3 grid-flow-col gap-5">
          {queueComponents[0]}
          {queueComponents[1]}
          {queueComponents[2]}
          {queueComponents[3]}
          {queueComponents[4]}
          {queueComponents[5]}
          {queueComponents[6]}
          {queueComponents[7]}
          {queueComponents[8]}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
