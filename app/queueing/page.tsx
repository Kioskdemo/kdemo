/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";

import CategoryQue from "../Component/CategoryQue";

import NextCancelBtn from "../Component/NextCancelBtn";
import useTimer from "../functions/Timer";

const LandingPage = () => {
  const timeLimit = 100000;
  useTimer(timeLimit);

  const queueConfig = [
    { text: "Cedula" },
    { text: "Water" },
    { text: "Construction Permit" },

    { text: "Ordinance Violations" },
    { text: "Vehicle Registration" },
    { text: "Health Permit" },

    { text: "Work Permit" },
  ];

  const queueComponents = queueConfig.map((config, index) => (
    <CategoryQue key={index} text={config.text} />
  ));

  return (
    <div className="mt-[100px]">
      {" "}
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="text-[45px] px-28 pt-5 relative grid grid-cols-1 grid-flow-row gap-10">
        {queueComponents[0]}
        {queueComponents[1]}
        {queueComponents[2]}
        {queueComponents[3]}
        {queueComponents[4]}
        {queueComponents[5]}
        {queueComponents[6]}
        {queueComponents[7]}
      </div>
      <div className="flex gap-24 text-[30px] pt-10 absolute bottom-8 left-[139px]">
        <NextCancelBtn link="/menu" text="Back" bgcolor="#fff" />
      </div>
    </div>
  );
};

export default LandingPage;
