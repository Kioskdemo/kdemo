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
    <div>
      <img className="hidden" src="/Qr.png" alt="" />
      <div className=" flex flex-col justify-center w-full bgqueue-image">
        <Link
          className="text-[30px] flex items-center gap-2 p-5  m-[20px] w-[200px]"
          href={"/menu"}
        >
          <MdKeyboardBackspace size={40} className="text-[#335F96]" />
          <p>Back</p>
        </Link>
        <div className="text-center">
          <div className="text-[45px] font-bold px-28 pt-5 relative grid grid-rows-3 grid-flow-col gap-5">
            {/* <li className="bg-[#335F96] shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)] rounded-2xl relative m-[40px] p-[30px] ">
                  <Select
                    options={options}
                    value={value}
                    onChange={(o) => setValue(o)}
                  />
                </li> */}
            <CategoryQue
              iconImg={<BsFillPersonFill size={50} />}
              text={"Cedula"}
            />
            <CategoryQue iconImg={<BsWater size={50} />} text={"Water"} />
            <CategoryQue
              iconImg={<BsFillBuildingFill size={50} />}
              text={"Building Permit"}
            />
            <CategoryQue
              iconImg={<AiFillHome size={50} />}
              text={"Real Property"}
            />
            <CategoryQue
              iconImg={<AiFillStop size={50} />}
              text={"Ordinance Violations"}
            />
            <CategoryQue
              iconImg={<AiFillCar size={50} />}
              text={"Vehicle Registration"}
            />
            <CategoryQue
              iconImg={<GiHealthNormal size={50} />}
              text={"Health Permit"}
            />
            <CategoryQue iconImg={<IoTicket size={50} />} text={"Queue"} />
            <CategoryQue
              iconImg={<FaHelmetSafety size={50} />}
              text={"Construction Permit"}
            />
          </div>
        </div>
      </div>
      {/* <div className="capitalize text-center mt-[60rem]">
            <Link href={"/menu"}>
              <button
                onClick={handlePopupPrint}
                className="text-[70px] font-bold text-white bg-[#31D84C] rounded-2xl px-40 py-5 shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]"
              >
                Print
              </button>
            </Link>
          </div> */}
      <ModalPrint
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
        heading={""}
        text={""}
      />
    </div>
  );
};

export default LandingPage;
