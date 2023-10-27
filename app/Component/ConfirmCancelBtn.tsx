import Link from "next/link";
import React from "react";

interface ConfirmCancelBtnProps {
  text: string;
  link: string;
  bgcolor: string;
}

const ConfirmCancelBtn: React.FC<ConfirmCancelBtnProps> = ({
  text,
  link,
  bgcolor,
}) => {
  return (
    <div className="flex justify-around pt-10  text-white">
      <Link
        href={link}
        style={{ backgroundColor: bgcolor }}
        className={`rounded-2xl py-5 px-16 shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]`}
      >
        {text}
      </Link>
    </div>
  );
};

export default ConfirmCancelBtn;
