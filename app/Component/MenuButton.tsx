import Link from "next/link";
import React, { ReactNode } from "react";

interface MenuButtonProps {
    link: string;
    iconImg: ReactNode;
    title: string;
    description: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ link, iconImg, title, description }) => {
    return (
        <div className="mt-10">
            <Link href={link} className="text-[#335F96]">
                <div className="bg-white rounded-3xl w-full h-52 shadow-[-25px_25px_15px_-10px_rgba(0,0,0,0.4)]">
                    <div className="flex">
                        <div className="ml-14 pt-6">
                            {iconImg}
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="grid-cols-2 m-12 font-serif">
                                <div className="text-4xl font-bold uppercase pb-2">{title}</div>
                                <div className="text-2xl">{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MenuButton;
