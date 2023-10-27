import React from "react";

interface PaymentFormProps {
  label: string;
  placeholder: string;
  size: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  label,
  size,
  placeholder,
}) => {
  return (
    <form action="" className="text-[30px] p-2">
      <div className="flex justify-center gap-5">
        <div className="flex flex-col">
          <label htmlFor="">{label}</label>
          <input
            size={size}
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
