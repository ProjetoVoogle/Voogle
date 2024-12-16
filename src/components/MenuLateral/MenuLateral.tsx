import React from "react";
import { useState } from "react";
import useToggle from "../../hooks/useToggle";

export default function MenuLateral() {
  const { isOpen, toggle } = useToggle();


  return (
    <div id="main">
     

      <div
        className="flex flex-col gap-1 cursor-pointer" 
        id="menuButton" 
        onClick={toggle}
      >
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isOpen ? 'rotate-45 absolute' : ''}`}
        ></span>
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`w-[25px] h-[3px] bg-[#44537A] transition duration-300 ease-in-out shadow ${isOpen ? '-rotate-45 absolute' : ''}`}
        ></span>
      </div>

      {/* Menu que aparece quando isOpen for verdadeiro */}

      {isOpen && (
        <div className="fixed my-[2.18rem] left-0 bg-blue w-[250px] h-[100vh] overflow-y-auto opacity-90">
        
          <ul className="flex flex-col p-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
