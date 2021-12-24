import { useState } from "react";

const Dropdown = ({ options, value, handleChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <label htmlFor="select" className="font-semibold block py-2">
        Select Class
      </label>

      <div className="relative">
        <div
          className="h-10 bg-white flex border border-gray-200 rounded items-center"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <input
            value={value ? value : "Please choose one class"}
            name="select"
            id="select"
            className="px-4 appearance-none outline-none text-gray-800 w-full"
            onChange={() => console.log("change")}
          />
          <label
            htmlFor="show_more"
            className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
          >
            <svg
              className={`w-4 h-4 mx-2 fill-current ${
                showDropdown ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </label>
        </div>

        {showDropdown && (
          <>
            <input
              type="checkbox"
              name="show_more"
              id="show_more"
              className="hidden peer"
            />
            <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 z-50">
              {options.map((item, idx) => (
                <div
                  className="cursor-pointer group"
                  key={item}
                  onClick={() => {
                    setShowDropdown(false);
                    handleChange(item);
                  }}
                >
                  <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
