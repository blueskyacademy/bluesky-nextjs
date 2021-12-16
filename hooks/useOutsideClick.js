import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("mousedown", handleClick);
    };
  });
};

export { useOutsideClick };
