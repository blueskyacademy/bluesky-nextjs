import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Dropdown = ({
  options,
  value,
  handleChange,
  title,
  placeholder = "",
  error = false,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapper = useRef(null);
  useOutsideClick(wrapper, () => {
    if (showDropdown) {
      setShowDropdown(false);
    }
  });

  return (
    <div className="max-w-md mx-auto">
      <label
        htmlFor="select"
        className="font-semibold block py-2 text-purple-900 text-sm"
      >
        {title}
      </label>

      <div className="relative" ref={wrapper}>
        <div
          className={`h-14 bg-white flex border border-purple-50 rounded items-center rounded-xl border-2 ${
            error && "border-red-200"
          }`}
        >
          <input
            value={value}
            placeholder={placeholder}
            name="select"
            id="select"
            className="px-4 appearance-none outline-none text-purple-700 w-full text-sm font-medium placeholder-purple-700 placeholder-opacity-70"
            onChange={() => console.log("change")}
            autoComplete="off"
          />
          <label
            htmlFor="show_more"
            className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
          >
            <svg
              onClick={() => setShowDropdown(!showDropdown)}
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
            <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 z-50 text-sm">
              {options.map((item, idx) => (
                <div
                  className="cursor-pointer group"
                  key={item}
                  onClick={() => {
                    setShowDropdown(false);
                    handleChange(item);
                  }}
                >
                  <a className="block p-2 border-transparent border-l-4 group-hover:border-purple-600 group-hover:bg-gray-100">
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
