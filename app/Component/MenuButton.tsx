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
    <div className="mt-10 capitalize">
      <Link href={link} className="text-[#335F96]">
        <div className="bg-white rounded-3xl w-full h-52 shadow-[-25px_25px_15px_-10px_rgba(0,0,0,0.4)]">
          <div className="flex">
            <div className="ml-14 pt-6">{iconImg}</div>
            <div className="flex justify-center items-center">
              <div className="grid-cols-2 m-12 font-serif">
                <div className="text-[40px] font-bold">{title}</div>
                <div className="text-xl text-[#1b1b1b]">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuButton;
