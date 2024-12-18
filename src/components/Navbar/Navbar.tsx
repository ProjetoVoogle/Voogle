import React, { useState } from "react";
import Button from "../Button/Button.tsx";
import useScrolled from "../../hooks/useScrolled.ts";
import { envioMsg } from "../../utils/envioMsg.ts";

export default function NavBar() {
  const isScrolled = useScrolled();
  const [activeTab, setActiveTab] = useState<string>("ParaVocê");
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const number = import.meta.env.VITE_WPP_NUMBER;
  const message = import.meta.env.VITE_WPP_MESSAGE;

  const renderContent = () => {
    if (activeTab === "ParaVocê") {
      return (
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <a href="#" className="hover:text-blue-500 block">Seguro Auto</a>
            <a href="#" className="hover:text-blue-500 block">Seguro Residencial</a>
            <a href="#" className="hover:text-blue-500 block">Seguro Viagem</a>
            <a href="#" className="hover:text-blue-500 block">Seguro Celular</a>
            <a href="#" className="hover:text-blue-500 block">Seguro Vida</a>
          </div>
          <div>
            <a href="#" className="hover:text-blue-500 block">Seguro Bike</a>
            <a href="#" className="hover:text-blue-500 block">Equipamentos Portáteis</a>
            <a href="#" className="hover:text-blue-500 block">Seguro Imobiliária</a>
            <a href="#" className="hover:text-blue-500 block">Seguro Carta Verde</a>
          </div>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <a href="#" className="hover:text-blue-500 block">Proteção Combinada</a>
          <a href="#" className="hover:text-blue-500 block">Responsabilidade Civil</a>
          <a href="#" className="hover:text-blue-500 block">Seguro Fiança</a>
        </div>
        <div>
          <a href="#" className="hover:text-blue-500 block">Máquinas e Equipamentos</a>
          <a href="#" className="hover:text-blue-500 block">Eventos</a>
          <a href="#" className="hover:text-blue-500 block">Caminhão</a>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`flex gap-4 fixed top-0 w-full z-10 p-4 pl-40 pr-40 bg-[#ffffff] transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Menu Principal */}
      <div
        className="flex gap-16 items-center relative"
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        <a
          href="/"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
        >
          Home
        </a>

        <div
          className="relative"
          onMouseEnter={() => setIsDropdownVisible(true)}
        >
          
          <a
            href="#"
            className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          >
            Seguros
          </a>

          {/* Área Invisível que mantém o hover */}
          {isDropdownVisible && (
            <div
              className="absolute left-0 top-full mr-[15px] w-[500px] h-[15px] bg-transparent"
              onMouseEnter={() => setIsDropdownVisible(true)} // Garante hover contínuo
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <div className="absolute left-0 top-[10px] bg-white shadow-lg border rounded-md w-[500px]">
                {/* Seta Indicadora */}
                <div className="absolute -top-2 left-10 w-4 h-4 bg-white rotate-45 border-t border-l"></div>
                {/* Tabs */}
                <div className="p-2 border-b flex gap-2">
                  <button
                    onClick={() => setActiveTab("ParaVocê")}
                    className={`p-2 rounded-md ${
                      activeTab === "ParaVocê" ? "bg-blue-100 text-blue-600" : ""
                    }`}
                  >
                    Para Você
                  </button>
                  <button
                    onClick={() => setActiveTab("ParaEmpresa")}
                    className={`p-2 rounded-md ${
                      activeTab === "ParaEmpresa" ? "bg-blue-100 text-blue-600" : ""
                    }`}
                  >
                    Para Empresa
                  </button>
                </div>
                {/* Conteúdo Dinâmico */}
                {renderContent()}
              </div>
            </div>
          )}
        </div>

        <a
          href="#"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
        >
          Sobre
        </a>
        <a
          href="/Contato"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
        >
          Contato
        </a>
      </div>

      {/* Botão Direito */}
      <div className="ml-auto">
        <Button 
        label="Contrate-nos" 
        onBtnClick={() => envioMsg({ number, message })}
        />
      </div>
    </div>
  );
}
