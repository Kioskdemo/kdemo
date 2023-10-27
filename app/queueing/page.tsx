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

  return (
    <>
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="bg-queueimg bg-no-repeat bg-cover">
        <div className="">
          <BackButton text="Back" link={"/menu"} />
        </div>
        <div className="text-[45px] font-bold px-28 pt-5 relative grid grid-rows-3 grid-flow-col gap-5">
          <CategoryQue
            iconImg={<BsFillPersonFill size={50} />}
            text={"Cedula"}
          />
          <CategoryQue iconImg={<BsWater size={50} />} text={"Water"} />
          <CategoryQue
            iconImg={<BsFillBuildingFill size={50} />}
            text={"Construction Permit"}
          />
          <CategoryQue iconImg={<AiFillHome size={50} />} text={"Real Property"} />
          <CategoryQue iconImg={<AiFillStop size={50} />} text={"Ordinance Violations"} />
          <CategoryQue iconImg={<AiFillCar size={50} />} text={"Vehicle Registrtion"} />
          <CategoryQue iconImg={<GiHealthNormal size={50} />} text={"Health Permit"} />
          <CategoryQue iconImg={<IoTicket size={50} />} text={"Queue"} />
          <CategoryQue iconImg={<FaHelmetSafety size={50} />} text={"Work Permit"} />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
