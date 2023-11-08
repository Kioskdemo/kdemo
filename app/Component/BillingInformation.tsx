import React from "react";

interface BillingInformationProps {}

const BillingInformation: React.FC<BillingInformationProps> = ({}) => {
  return (
    <>
      <h1 className="text-[28px] text-green-500">Billing Information</h1>
      <div className="">
        <div className="float-left w-2/5 ml-10">
          <p>Application No.</p>
          <p>Application Type</p>
          <p>Dated Filed</p>
          <p>BIN</p>
          <p>Trade Name</p>
          <p>Owner Name</p>
          <p>Business Address</p>
        </div>
        <div className="float-left w-2/5 uppercase">
          <p>815420180800043-3D</p>
          <p>NEW</p>
          <p>2018-08-17</p>
          <p>815420180800043</p>
          <p>rameses systems inc.</p>
          <p>RAMESES SYSTEMS INC.</p>
          <p>TAGBILARAN CITY CEBU</p>
        </div>
      </div>
    </>
  );
};

export default BillingInformation;
