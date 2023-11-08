/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactNode, useEffect } from "react";
import styles from "../Modal.module.css";

import { AiTwotonePrinter } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, heading, text }) => {
  if (!isOpen) return null;

  const router = useRouter();

  useEffect(() => {
    const timeLimit = 2000;

    const timer = setTimeout(() => {
      router.push("/menu");
    }, timeLimit);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.modalOverlay}>
      <div className="relative">
        <div className="flex text-[30px] bg-white w-[400px] h-[500px] shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)] border border-[#335F96] rounded-2xl flex-col items-center justify-center gap-5 m-10">
          <h1>Queue No.</h1>
          <h1 className="text-[60px] text-black">011</h1>
          <h1>{heading}</h1>
          <p className="text-red-500">{text}</p>
          <div className="w-[50px] h-[50px] border-t-[3px] border-l-[3px]   border-[#335F96] rounded-[50%] animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
