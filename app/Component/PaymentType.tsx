import React, { useState } from "react";
import Image from "next/image";
import ModalGcash from "./ModalGcash";
import Modal from "./Modal";

const Gcash = () => {
  const [isModalOpenGcash, setIsModalOpenGcash] = useState(false);

  const openModalGcash = () => {
    setIsModalOpenGcash(true);
  };

  const closeModalGcash = () => {
    setIsModalOpenGcash(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex gap-20">
      <div>
        {/* MODAL GCASH */}
        <button
          onClick={openModalGcash}
          className="bg-white w-[250px] h-[250px] flex items-center text-center justify-center rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
        >
          <Image
            src="/globe-gcash.png"
            alt="Cebu Logo"
            width={200}
            height={200}
            quality={100}
          />
        </button>
        <h1 className="text-center">Gcash</h1>
        <ModalGcash isOpen={isModalOpenGcash} onClose={closeModalGcash} />
      </div>

      <div>
        {/* MODAL CASHIER */}
        <button
          onClick={openModal}
          className="bg-white w-[250px] h-[250px] flex items-center text-center justify-center rounded-2xl shadow-[-15px_23px_15px_-10px_rgba(0,0,0,0.4)]"
        >
          <Image
            src="/cashier-logo.png"
            alt="Cebu Logo"
            width={200}
            height={200}
            quality={100}
          />
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <h1 className="text-center">Cashier</h1>
      </div>
    </div>
  );
};

export default Gcash;
