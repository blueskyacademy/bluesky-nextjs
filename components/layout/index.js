import Facebook from "../facebook";
import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children, navigations = [], className }) {
  return (
    <>
      <Navbar navigations={navigations} className={className} />
      <main>{children}</main>
      <Facebook />
      <Footer />
    </>
  );
}
