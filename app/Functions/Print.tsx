'use client'
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactDOMServer, { renderToStaticMarkup, renderToString } from "react-dom/server";
import { ComponentToPrint } from "../PrintableContent";

export default function PrintComponent() {
  const componentRef = useRef(null);

  const handlePopupPrint = () => {
    const printWindow = window.open("", "", "width=1,height=1");

    if (printWindow) {
      const content = (
        <div>
          <ComponentToPrint />
        </div>
      );
      printWindow.document.write(
        ReactDOMServer.renderToString(content)
      );
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
      <div>
        <Button onClick={handlePopupPrint}>Print in Popup
        </Button>
        <ComponentToPrint />
      </div>
    </>
  );
}
