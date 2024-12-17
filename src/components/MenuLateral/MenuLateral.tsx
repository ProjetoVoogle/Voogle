import React from "react";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";
import useDropdown from "../../hooks/useDropdown";

export default function MenuLateral() {
  const { isOpen, toggle } = useToggle();
  const { isDropdownOpen, openDropdown, closeDropdown } = useDropdown();

  return (
    <div id="main">
      {/* Botão para abrir/fechar o menu */}
      <div
        className="flex flex-col gap-1 cursor-pointer relative z-20"
        id="menuButton"
        onClick={toggle}
      >
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] rounded transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </div>

      {/* Sobreposição de fundo */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggle}
        ></div>
      )}

      {/* Menu lateral */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-[#0a192f] shadow-lg transform transition-transform duration-500 ease-in-out z-20 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col text-white p-6">
          <li className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-200">
            <a href="#">Sobre</a>
          </li>
          <li
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-200 relative"
          >
            <a href="#">Serviços</a>

            {/* Dropdown */}
            {isDropdownOpen && (
              <ul className="absolute left-full top-0 bg-[#112240] text-[#44537A] w-[200px] mt-0 shadow-lg rounded-md overflow-hidden">
                <li className="hover:bg-[#44537A] hover:text-white transition duration-200 px-4 py-2">
                  <a href="#">Consultoria</a>
                </li>
                <li className="hover:bg-[#44537A] hover:text-white transition duration-200 px-4 py-2">
                  <a href="#">Desenvolvimento</a>
                </li>
                <li className="hover:bg-[#44537A] hover:text-white transition duration-200 px-4 py-2">
                  <a href="#">Suporte</a>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-200">
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
