/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

import ReactDOMServer, {
  renderToStaticMarkup,
  renderToString,
} from "react-dom/server";
import { ComponentToPrint } from "../PrintableContent";
import { MdKeyboardBackspace } from "react-icons/md";
import { BsFillPersonFill, BsWater, BsFillBuildingFill } from "react-icons/bs";
import { AiFillHome, AiFillStop, AiFillCar } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { IoTicket } from "react-icons/io5";
import { FaHelmetSafety } from "react-icons/fa6";
import CategoryQue from "../Component/CategoryQue";

import ModalPrint from "../Component/ModalPrint";
import BackButton from "../Component/BackButton";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const LandingPage = () => {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  const componentRef = useRef(null);
  const handlePopupPrint = () => {
    const printWindow = window.open("", "", "width=800,height=400");

    if (printWindow) {
      const content = (
        <div>
          <ComponentToPrint />
        </div>
      );
      const customStyle = `
        body {
          font-size: 12px;
        }
        img {
          height: 100px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
        @media print {
          .no-print {
            display: none;
          }
          @page {
            size: auto;
            margin: 0;
          }
          @page :first {
            margin-top: 0;
          }
          @page :left {
            margin-left: 0px;
          }
          @page :right {
            margin-right: 0;
          }
        }
      `;
      printWindow.document.write(`
        <html>
        <head>
          <style>${customStyle}</style>
        </head>
        <body>
        <img src="/Qr.png" alt="" />
          ${ReactDOMServer.renderToString(content)}
        </body>
        </html>
      `);
      printWindow.document.querySelectorAll(".no-print").forEach((element) => {
        element.classList.add("hidden-on-print");
      });
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    } else {
      alert("Pop-up window blocked. Please allow pop-ups for printing.");
    }
  };

  return (
    <>
      <img className="hidden" src="/Qr.png" alt="" />
      <div className="bg-queueimg bg-no-repeat bg-cover">
        <div className="">
          <BackButton text="Back" link={""} />
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
