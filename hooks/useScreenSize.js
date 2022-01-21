import { useState, useEffect } from "react";

const getIsMobile = () => {
  return typeof window !== "undefined" && window.innerWidth < 768;
};

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};

export { useScreenSize };
