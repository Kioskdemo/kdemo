import React, { ReactNode } from "react";
import styles from "../Modal.module.css";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} z-[1]`}>
      <div className="relative">
        <button
          className="text-red-500 rounded-2xl absolute top-[15px] right-[15px]"
          onClick={onClose}
        >
          <IoCloseCircleOutline size={50} />
        </button>
        <form className="flex flex-col items-center gap-5 bg-white p-[100px] rounded-2xl">
          <label htmlFor="" className="flex flex-col items-center">
            Counter No.
            <input
              size={10}
              name="firstName"
              placeholder="C-001"
              className="h-[100px] bg-gray-100 p-5  border-2 border-black rounded"
            />
          </label>
          <label htmlFor="" className="flex flex-col items-center">
            Queue No.
            <input
              size={10}
              name="firstName"
              placeholder="Q-001"
              className="h-[100px] bg-gray-100 p-5  border-2 border-black rounded"
            />
          </label>
          <h1 className="text-red-500 text-[20px] text-center">
            Press Confirm to Print Ticket
          </h1>
          <Link href={"/menu"}>
            <button className="flex items-center justify-center bg-[#335F96] w-[200px] h-[70px] text-white rounded-2xl">
              Confirm
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Modal;
