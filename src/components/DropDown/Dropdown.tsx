import React from "react";

interface DropdownProps {
  items: string[]; // Lista de itens a serem exibidos no dropdown
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className="absolute top-full translate-x-1/2 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-md">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Dropdown;