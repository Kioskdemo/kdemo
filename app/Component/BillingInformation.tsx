import React from "react";

interface BillingInformationProps {  
}

const BillingInformation: React.FC<BillingInformationProps> = ({ }) => {
  return (
    <>
    <h1 className="text-[28px] text-green-500">Billing Information</h1>
    <div className="">
        <div className="float-left w-6/12">
            <p>Application No.</p>
            <p>Application Type</p>
            <p>Dated Filed</p>
            <p>BIN</p>
            <p>Trade Name</p>
            <p>Owner Name</p>
            <p>Business Address</p>
        </div>
        <div className="float-left w-6/12">
            <p>Application No.</p>
            <p>Application Type</p>
            <p>Dated Filed</p>
            <p>BIN</p>
            <p>Trade Name</p>
            <p>Owner Name</p>
            <p>Business Address</p>
        </div>
    </div>
    </>
  );
};

export default BillingInformation;
