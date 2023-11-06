import React from "react";

interface PaymentFormProps {
  placeholder: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ placeholder }) => {
  return (
    <form action="" className="text-[30px] p-5 ">
      <div className="grid grid-cols-1 grid-flow-row gap-2">
        <label htmlFor="">Paid by</label>
        <input
          size={20}
          name=""
          placeholder={placeholder}
          className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
        />
        <label htmlFor="">Payer Address</label>
        <input
          size={20}
          name=""
          placeholder={placeholder}
          className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
        />
        <label htmlFor="">Particulars</label>
        <input
          size={20}
          name=""
          placeholder={placeholder}
          className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
        />
      </div>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="">Particulars</label>
          <input
            size={20}
            name=""
            placeholder={placeholder}
            className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Amount</label>
          <input
            size={20}
            name=""
            placeholder={placeholder}
            className="h-[70px] rounded-2xl bg-gray-100 p-5 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </form>
  );
};

export default PaymentForm;
