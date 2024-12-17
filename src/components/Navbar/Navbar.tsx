import React, { useState } from "react";
import MenuLateral from "../MenuLateral/MenuLateral.tsx";
import Button from "../Button/Button.tsx";
import { envioMsg } from "../../utils/envioMsg.ts";
import useScrolled from "../../hooks/useScrolled.ts";

export default function NavBar() {
  const isScrolled = useScrolled();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const number: string = import.meta.env.VITE_WPP_NUMBER;
  const message: string = import.meta.env.VITE_WPP_MESSAGE;

  // Função para exibir o menu lateral ao passar o mouse sobre os links
  const handleMouseEnter = () => {
    setIsMenuVisible(true);
  };

  // Função para esconder o menu lateral quando o mouse sair dos links
  const handleMouseLeave = () => {
    setIsMenuVisible(false);
  };

  return (
    <div
      className={`flex gap-4 fixed top-0 w-full z-10 p-4 pl-40 pr-40 bg-[#E1E7F8] transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex gap-16 items-center" id="menuEsquerda">
        {/* Menu lateral ativado ao passar o mouse sobre os links */}
        <div
          className={`${
            isMenuVisible ? "opacity-100 max-h-60" : "opacity-0 max-h-0"
          } transition-all duration-1000 ease-in-out fixed top-16 left-0 w-full bg-[#E1E7F8] opacity-90 overflow-hidden`}
        >
          <ul className="flex justify-center gap-16 p-4 text-white">
            <li className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-1000">
              <a href="#">Home</a>
            </li>
            <li className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-1000">
              <a href="#">Sobre</a>
            </li>
            <li className="relative hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-1000">
              <a href="#">Serviços</a>
            </li>
            <li className="hover:bg-[#44537A] hover:text-white p-4 cursor-pointer transition duration-1000">
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>

        <a
          href="#"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          onMouseEnter={handleMouseEnter} // Exibir menu ao passar o mouse sobre o link
          onMouseLeave={handleMouseLeave} // Esconder menu quando o mouse sair
        >
          Para Você
        </a>
        <a
          href="#"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Para Sua Empresa
        </a>
        <a
          href="#"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sobre
        </a>
        <a
          href="/Contato"
          className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Contato
        </a>
      </div>

      <div id="menuDireita" className="ml-auto">
        <Button
          label="Contrate-nos"
          onBtnClick={() => envioMsg({ number, message })}
        />
      </div>
    </div>
  );
}