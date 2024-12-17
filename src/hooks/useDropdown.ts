import { useState } from "react";

function useDropdown(initialState:boolean = false) {
  const [isDropdownOpen, setDropdownOpen] = useState(initialState);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Abre o dropdown
  const openDropdown = () => {
    setDropdownOpen(true);
  };

  // Fecha o dropdown
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return {
    isDropdownOpen,
    toggleDropdown,
    openDropdown,
    closeDropdown,
  };
}

export default useDropdown;
