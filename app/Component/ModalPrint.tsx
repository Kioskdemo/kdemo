/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useEffect } from "react";
import styles from "../Modal.module.css";
import Image from "next/image";

import { TiArrowDownThick } from "react-icons/ti";
import Link from "next/link";
import ReactDOMServer from "react-dom/server";
import { ComponentToPrint } from "./PrintableContent";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, heading, text }) => {
  if (!isOpen) return null;

  // const router = useRouter();

  // useEffect(() => {
  //   const timeLimit = 2000;

  //   const timer = setTimeout(() => {
  //     router.push("/menu");
  //   }, timeLimit);

  //   return () => clearTimeout(timer);
  // });

  const handlePopupPrint = () => {
    const customStyle = `
        body {
          font-size: 10px;
        }
       .layout {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
       }
       .info {
        padding-top: 30px;
        text-align: center;
        line-height: 3%;
       }
       .info h2 {
        text-align: center;
        font-size: 30px;
       }
       .info p {
        font-weight: 500;
        text-align: center;
        font-size: 20px;
        padding-top: 10px;
       }
        @media print {
          .no-print {
            display: none;
          }
          @page {
            size: auto;
            margin: 0;
          }
          @page :first {margin-top: 0;}
          @page :left {
            margin-left: 0px;}
          @page :right {
            margin-right: 0;}
        }
      `;

    const printWindow = window.open("", "", "width=1,height=1");

    if (printWindow) {
      const content = (
        <div>
          <ComponentToPrint />
        </div>
      );
      printWindow.moveBy(10000, 10000);
      printWindow.document.write(`
        <html>
        <head>
          <style>${customStyle}</style>
        </head>
        <body>
        <div class="layout">
    
      ${ReactDOMServer.renderToString(content)} 
        </div>
        </body>
        </html>
      `);

      printWindow.document.close();
      printWindow.print();
      printWindow.close();

      // printWindow.blur();
      // printWindow.opener.focus();
      // printWindow.close();
    } else {
      alert("Pop-up window blocked. Please allow pop-ups for printing.");
    }
  };

  return (
    <div className={`${styles.modalOverlay} z-[1]`}>
      <div className="relative w-[66%]">
        <button
          className="text-red-500 rounded-2xl absolute top-[15px] right-[15px]"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={50} />
        </button>

        <form className="flex flex-col justify-center items-center gap-2 bg-white rounded-2xl p-5 ">
          <h1 className="text-[35px] uppercase font-semibold">{heading}</h1>
          <p className="text-[70px] font-bold pb-[70px]">{text}</p>

          <Image
            src={"/print.png"}
            alt={""}
            height={100}
            width={150}
            quality={100}
            className="pb-[70px]"
          />
          <TiArrowDownThick
            size={50}
            className="absolute bottom-20 animate-bounce"
          />
          <Link href={"/menu"}>
            <button
              onClick={() => {
                handlePopupPrint();
              }}
              className="bg-[#335F96] px-20 rounded-2xl text-white font-semibold"
            >
              Print
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Modal;
