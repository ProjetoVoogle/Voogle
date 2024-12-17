import React, { useState } from 'react';
import useToggle from '../../hooks/useToggle';


const Dropdown: React.FC = () => {
  const {isOpen, toggle} = useToggle();

  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-6">
        <li
          className="relative"
          onMouseEnter={() => toggle()}
          onMouseLeave={() => setIsOpen()}
        >
          <button className="px-4 py-2 text-black hover:bg-gray-300 rounded transition">
            Loja
          </button>
          {isOpen && (
            <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 shadow-lg rounded-md">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Comprar os lançamentos
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Mac
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                iPad
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                iPhone
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Apple Watch
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >
                Acessórios
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;