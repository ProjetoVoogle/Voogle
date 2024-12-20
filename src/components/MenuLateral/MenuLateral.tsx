import React from "react";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";

interface MenuLateralProps {
  onClose: () => void;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ onClose }) => {
  const { isOpen, toggle } = useToggle();
  const [activeTab, setActiveTab] = useState("ParaVocê");

  const renderContent = () => {
    if (activeTab === "ParaVocê") {
      return (
        <div className="grid grid-cols-2 gap-4 p-4">
          <a href="#" className="hover:text-blue-500 block">Seguro Auto</a>
          <a href="#" className="hover:text-blue-500 block">Seguro Residencial</a>
          <a href="#" className="hover:text-blue-500 block">Seguro Viagem</a>
          <a href="#" className="hover:text-blue-500 block">Seguro Celular</a>
          <a href="#" className="hover:text-blue-500 block">Seguro Vida</a>
        </div>
      );
    }
    return (
      <div className="grid grid-cols-2 gap-4 p-4">
        <a href="#" className="hover:text-blue-500 block">Proteção Combinada</a>
        <a href="#" className="hover:text-blue-500 block">Responsabilidade Civil</a>
        <a href="#" className="hover:text-blue-500 block">Seguro Fiança</a>
        <a href="#" className="hover:text-blue-500 block">Máquinas e Equipamentos</a>
        <a href="#" className="hover:text-blue-500 block">Eventos</a>
        <a href="#" className="hover:text-blue-500 block">Caminhão</a>
      </div>
    );
  };

  return (
    <div>
      {/* Botão para abrir o menu */}
      <button
        className="fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded shadow"
        onClick={toggle}
      >
        Menu
      </button>

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        onClick={toggle}
      >
        <div
          className="bg-white w-full h-[75%] md:w-[400px] p-6 shadow-lg relative overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-2 right-2 text-black"
            onClick={onClose}
          >
            ✕
          </button>
          <h2 className="text-xl font-bold text-center mb-4">Menu Lateral</h2>
          <div>
            {/* Tabs */}
            <div className="flex justify-around mb-4">
              <button
                onClick={() => setActiveTab("ParaVocê")}
                className={`p-2 rounded ${activeTab === "ParaVocê" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
              >
                Para Você
              </button>
              <button
                onClick={() => setActiveTab("ParaEmpresa")}
                className={`p-2 rounded ${activeTab === "ParaEmpresa" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
              >
                Para Empresa
              </button>
            </div>
            {/* Conteúdo Dinâmico */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLateral
