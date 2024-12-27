import React, { useState } from "react";
import Button from "../Button/Button";
import { envioMsg } from "../../utils/envioMsg.ts";

interface MenuLateralProps {
  onClose: () => void;
  isOpen: boolean; // Nova prop para controlar a exibição inicial do menu
}

const MenuLateral: React.FC<MenuLateralProps> = ({ onClose, isOpen }) => {
  const [activeTab, setActiveTab] = useState("ParaVocê");

  const number = import.meta.env.VITE_WPP_NUMBER;
  const message = import.meta.env.VITE_WPP_MESSAGE;

  const renderContent = () => {
    if (activeTab === "ParaVocê") {
      return (
        <div className="grid grid-cols-2 gap-4 p-4">
          <a href="#" className="hover:text-blue-500 block font-medium">Seguro Auto</a>
          <a href="#" className="hover:text-blue-500 block font-medium">Seguro Residencial</a>
          <a href="#" className="hover:text-blue-500 block font-medium">Seguro Viagem</a>
          <a href="#" className="hover:text-blue-500 block font-medium">Seguro Celular</a>
          <a href="#" className="hover:text-blue-500 block font-medium">Seguro Vida</a>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        <a href="#" className="hover:text-blue-500 block font-medium">Proteção Combinada</a>
        <a href="#" className="hover:text-blue-500 block font-medium">Responsabilidade Civil</a>
        <a href="#" className="hover:text-blue-500 block font-medium">Seguro Fiança</a>
        <a href="#" className="hover:text-blue-500 block font-medium">Máquinas e Equipamentos</a>
        <a href="#" className="hover:text-blue-500 block font-medium">Eventos</a>
        <a href="#" className="hover:text-blue-500 block font-medium">Caminhão</a>
      </div>
    );
  };

  return (
    <div>
      {/* Menu Lateral */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={onClose}
      >
        <div
          className={`bg-white w-full h-[75%] md:w-[400px] p-6 shadow-lg relative overflow-auto transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-8 left-[31px] text-black text-xl font-bold"
            onClick={onClose}
          >
            <span
              className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isOpen ? "rotate-45 absolute" : ""}`}
            ></span>
            <span
              className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isOpen ? "-rotate-45 absolute" : ""}`}
            ></span>
          </button>
          <h2 className="text-2xl font-bold text-center mb-6">Menu</h2>
          <div>
            {/* Tabs */}
            <div className="flex justify-around mb-6">
              <button
                onClick={() => setActiveTab("ParaVocê")}
                className={`px-4 py-1 rounded transition-colors border-2 border-[#44537A] text-[#44537A] font-bold shadow-[0px_3px_8px_rgba(0,0,0,0.24)] cursor-pointer ${activeTab === "ParaVocê"
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-300"
                  }`}
              >
                Para Você
              </button>
              <button
                onClick={() => setActiveTab("ParaEmpresa")}
                className={`px-4 py-1 rounded transition-colors border-2 border-[#44537A] text-[#44537A] font-bold shadow-[0px_3px_8px_rgba(0,0,0,0.24)] cursor-pointer ${activeTab === "ParaEmpresa"
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-gray-300"
                  }`}
              >
                Para Empresa
              </button>
            </div>
            {/* Conteúdo Dinâmico */}
            {renderContent()}
          </div>

          <div className="flex flex-col justify-center gap-4 px-4 py-6 border-t mt-6">
            <a
              href="/"
              className=" hover:text-blue-500 transition duration-300 font-semibold"
            >
              Home
            </a>
            <a
              href="/Sobre"
              className=" hover:text-blue-500 transition duration-300 font-semibold"
            >
              Sobre
            </a>
            <a
              href="/Contato"
              className=" hover:text-blue-500 transition duration-300 font-semibold"
            >
              Contato
            </a>
          </div>
          <div className="pt-[10%]">
            <Button
              label="Contrate-nos"
              onBtnClick={() => envioMsg({ number, message })}
              className="whitespace-nowrap px-4 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLateral;
