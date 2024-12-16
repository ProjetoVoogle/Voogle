import React from "react";
import MenuLateral from "../MenuLateral/MenuLateral.tsx"
import Button from "../Button/Button.tsx"
import { envioMsg } from "../../utils/envioMsg.ts";

export default function NavBar(){

    const number = import.meta.env.VITE_WPP_NUMBER
    const message = import.meta.env.VITE_WPP_MESSAGE

    return (
        <div className="flex gap-4 fixed top-0 w-full bg-transparent z-10 p-4 pl-40 pr-40 bg-[#E1E7F8]">
            
          <div className="flex gap-16 items-center" id="menuEsquerda">
            <MenuLateral />
            <a href="#" className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold">Para Você</a>
            <a href="#" className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold">Para Sua Empresa</a>
            <a href="#" className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold">Sobre</a>
            <a href="/Contato" className="text-[#44537A] hover:text-blue-500 transition duration-300 font-bold">Contato</a>
          </div>
      
          <div id="menuDireita" className="ml-auto">
            <Button 
                label="Contrate-nos"
                onBtnClick={() => envioMsg({number, message})}
            />
          </div>
        </div>
    )
}