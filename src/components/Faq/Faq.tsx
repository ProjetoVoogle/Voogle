import useDropdown from "../../hooks/useDropdown";

export default function Faq({ items }) {


  return (
    <div className="relative mt-10 justify-start px-10 w-full">
      {items.map((item, index) => {
        const { isDropdownOpen, toggleDropdown } = useDropdown();

        return (
          <div key={index} className={`border-b-[1px] !rounded-none border-gray-300 ${index === 0 ? "rounded-t-lg" : ""
            } ${index === items.length - 1 ? "rounded-b-lg" : ""} ${isDropdownOpen && (
              "rounded-b-[0px]"
            )}`}>
            <button 
              onClick={toggleDropdown}
              className={`w-full flex justify-between items-center p-3 hover:bg-[#007fff] hover:bg-opacity-[0.1] hover:transition hover:duration-200 hover:ease-out !rounded-none focus:outline-none transition duration-200 ease-in-out ${index === 0 ? "rounded-t-lg" : ""
            } ${index === items.length - 1 ? "rounded-b-lg" : ""} ${isDropdownOpen && (
              "rounded-b-[0px]"
            )}`}
            >
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <span
                className={`transform transition-transform duration-300 text-[#007fff] ${isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
              >
                ▼
              </span>
            </button>

            {isDropdownOpen && (
              <div className="p-4 text-gray-700 bg-gray-50">
                <p>{item.response}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
