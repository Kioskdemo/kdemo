import React, { ReactNode, useRef, useState } from "react";
import ModalPrint from "./ModalPrint";
import ReactDOMServer from "react-dom/server";
import { ComponentToPrint } from "./PrintableContent";

interface CategoryQueProps {
  text: string;
}

const CategoryQue: React.FC<CategoryQueProps> = ({ text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePopupPrint = () => {
    const customStyle = `
        body {
          font-size: 10px;
        }
       .layout {
        display: flex;
        justify-content: center;
        align-items: center;
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
    <div className="w-full h-[100px] bg-white rounded-2xl text-[#335F96] shadow-[-20px_22px_15px_-10px_rgba(0,0,0,0.3)] border border-[#335F96] flex justify-center items-center">
      <button
        onClick={() => {
          openModal();
          handlePopupPrint();
        }}
      >
        <div className="flex items-center flex-col p-5 gap-3 ">
          <span className="text-[30px] font-semibold text-black">{text}</span>
        </div>
      </button>

      <ModalPrint
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Printing Ticket"}
        text={"Please wait a moment"}
      />
    </div>
  );
};

export default CategoryQue;
