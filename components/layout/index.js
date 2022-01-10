import CallAction from "../call-action";
import Facebook from "../facebook";
import Footer from "../footer";
import Navbar from "../navbar";
import Navigation from "../navigation";

export default function Layout({ children, navigations = [] }) {
  return (
    <>
      <Navbar navigations={navigations} />
      <main>{children}</main>
      <Facebook />
      <Footer />
    </>
  );
}
