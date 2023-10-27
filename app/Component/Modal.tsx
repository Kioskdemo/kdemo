import React, { ReactNode } from "react";
import styles from "../Modal.module.css";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className="relative">
        <button
          className="text-[30px] bg-red-500 w-[100px] h-[80px] text-white rounded-2xl absolute top-[-100px] right-0"
          onClick={onClose}
        >
          <p>Close</p>
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
