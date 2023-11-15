// PrintPage.tsx

"use client";

import React from "react";

const PrintPage: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <h1>Your Content Here</h1>
      <button onClick={handlePrint}>Print</button>

      <style jsx global>{`
        @media print {
          /* Define print-specific styles here */
          body {
            font-size: 12pt; /* Adjust font size for printing */
            display: ;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintPage;
