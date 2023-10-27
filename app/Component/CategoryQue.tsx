import React, { ReactNode, useState } from "react";
import ModalPrint from "./ModalPrint";

interface CategoryQueProps {
  iconImg: ReactNode;
  text: string;
}

const CategoryQue: React.FC<CategoryQueProps> = ({ iconImg, text }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-[180px] h-[180px] bg-white rounded-[25%] text-[#335F96] shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] border border-[#335F96] flex justify-center items-center">
      <button onClick={openModal}>
        <div className="flex items-center flex-col p-5 gap-3 ">
          <div className="">{iconImg}</div>
          <span className="text-[17px] text-black">{text}</span>
        </div>
      </button>

      <ModalPrint
        isOpen={isModalOpen}
        onClose={closeModal}
        heading={"Printing Ticket"}
        text={"Please wait a moment"}
      />
    </div>
  );
};

export default CategoryQue;
