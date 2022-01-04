import { useState, useEffect, useRef } from "react";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!stickyRef.current) return;
      const stickyPosY = stickyRef.current.getBoundingClientRect().top;
      if (window.scrollY > stickyPosY + 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    window.addEventListener("orientationchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
    };
  }, []);

  return {
    isSticky,
    stickyRef,
  };
};
export default useSticky;
