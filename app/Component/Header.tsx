import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className=" h-52 w-full shadow-[0px_23px_15px_-10px_rgba(0,0,0,0.3)] flex justify-start pl-[50px] mt-[30px]">
      <nav className="flex items-center gap-[80px]">
        <Image
          src="/cebu-logo.png"
          alt="Cebu Logo"
          width={120}
          height={120}
          className=""
          quality={100}
        />
        <div className="text-[30px] font-bold relative">
          <div className="h-[150px] w-[1px] bg-[#747474] text-transparent absolute top-[-40px] left-[-45px]">
            .
          </div>
          <h1 className="uppercase">Welcome to the City of Cebu</h1>
          <p className="text-[25px] font-semibold text-[#335F96] ">
            Transaction Kiosk
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
