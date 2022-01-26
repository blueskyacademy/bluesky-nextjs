import { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import Facebook from "../facebook";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children, navigations = [], className }) {
  const { isMobile } = useScreenSize();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClickMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <Navbar
        navigations={navigations}
        className={className}
        showMobileMenu={showMobileMenu}
        handleClickMobileMenu={handleClickMobileMenu}
      />
      <main className={isMobile && showMobileMenu ? `hidden` : ""}>
        {children}
      </main>
      <Facebook />
      <Footer />
    </>
  );
}
