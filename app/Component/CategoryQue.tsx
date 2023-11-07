import React, { ReactNode, useRef, useState } from "react";
import ModalPrint from "./ModalPrint";
import ReactDOMServer, {
  renderToStaticMarkup,
  renderToString,
} from "react-dom/server";
import { ComponentToPrint } from "./PrintableContent";

interface CategoryQueProps {
  iconImg: ReactNode;
  text: string;
}

const CategoryQue: React.FC<CategoryQueProps> = ({ iconImg, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let componentRef = useRef(null);

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
          font-weight: light;
        }
       .layout {
        display: flex;
        justify-content: start;
        align-items: start;
       }
       .info {
        padding-top: 30px;
        text-align: center;
        line-height: 3%;
       }
       .info h2 {
        font-weight: light;
        text-align: center;
       }
       .info p {
        font-weight: bold;
        text-align: center;
        font-size: 16px;
       }
       .absolute-img img {
          position: absolute;
          content: "";
          top: 0;
          left: 30px;
       }
       .absolute-content {
        position: absolute;
        content: "";
        top: -7px;
        right: 45px;
     }
        img {
          height: 120px;
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

      printWindow.document.write(`
        <html>
        <head>
          <style>${customStyle}</style>
        </head>
        <body>
        <div class="layout">
        <div class="absolute-img"> 
        <img src="/Qr.png" alt="" />
        </div>
        <div class="absolute-content">
      ${ReactDOMServer.renderToString(content)}
        </div>
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
    <>
      <div className="w-[180px] h-[180px] bg-white rounded-[25%] text-[#335F96] shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] border border-[#335F96] flex justify-center items-center">
        <button
          onClick={() => {
            openModal();
            handlePopupPrint();
          }}
        >
          <div className="flex items-center flex-col p-5 gap-3 ">
            <div className="">{iconImg}</div>
            <span className="text-[17px] text-black">{text}</span>
          </div>
        </button>

        <ModalPrint
          isOpen={isModalOpen}
          onClose={closeModal}
          heading={"Printing Ticket"}
          text={"Please wait a moment"}
        />
      </div>
    </>
  );
};

export default CategoryQue;
