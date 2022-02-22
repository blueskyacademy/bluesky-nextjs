import { useEffect } from "react";

const useDisableBodyScroll = (open) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [open]);
};
export { useDisableBodyScroll };
