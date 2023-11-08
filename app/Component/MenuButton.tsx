import Link from "next/link";
import React, { ReactNode } from "react";

interface MenuButtonProps {
  link: string;
  iconImg: ReactNode;
  title: string;
  description: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  link,
  iconImg,
  title,
  description,
}) => {
  return (
    <div className="capitalize">
      <Link href={link} className="text-[#335F96]">
        <div className="w-[270px] h-[270px] bg-white rounded-[25%] text-[#335F96] shadow-[-20px_22px_15px_-10px_rgba(0,0,0,0.3)] border border-[#335F96] flex flex-col items-center justify-center gap-5">
          <div className="">{iconImg}</div>
          <h1 className="text-[25px] font-bold">{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default MenuButton;
