import Link from "next/link";
import React, { ReactNode } from "react";
import Image from "next/image";

interface InputNumberProps {
  name: string;
  placeholder: string;
  link: string;
  text: string;
  description: string;
  Img: string;
}

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  placeholder,
  link,
  text,
  description,
  Img,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 text-[50px] mt-[100px]">
      <input
        name={name}
        placeholder={placeholder}
        className="h-[100px] w-[700px] text-center rounded-2xl bg-gray-200"
      />

      <Link href={link}>
        <button className="w-[500px] h-[100px] bg-[#335F96] rounded-2xl text-white shadow-[-23px_23px_15px_-10px_rgba(0,0,0,0.3)]">
          Confirm
        </button>
      </Link>

      <div className="flex flex-col justify-center items-center gap-10 py-[50px] text-[50px] relative">
        <span className="w-[250px] h-[3px] bg-black absolute top-[85px] left-[220px]"></span>
        {text}
        <span className="w-[250px] h-[3px] bg-black absolute top-[85px] right-[220px]"></span>
        <div>
          <h1>{description}</h1>
        </div>
        <div>
          <Image src={Img} alt={""} height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
