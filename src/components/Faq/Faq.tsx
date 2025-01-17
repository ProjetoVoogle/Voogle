import useDropdown from "../../hooks/useDropdown";

export default function Faq({ items }) {
  return ( 
    <div className="relative mt-10 max-w-3xl justify-start pl-10">
      {items.map((item, index) => {
        const { isDropdownOpen, toggleDropdown } = useDropdown();

        return (
          <div key={index} className={`border-b border-gray-300 ${
            index === 0 ? "rounded-t-lg" : ""
          } ${index === items.length - 1 ? "rounded-b-lg border-b-0" : ""}`}>
            <button
              onClick={toggleDropdown}
              className="w-full flex justify-between items-center p-3 bg-gray-100 hover:bg-gray-200 focus:outline-none transition duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <span
                className={`transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
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
