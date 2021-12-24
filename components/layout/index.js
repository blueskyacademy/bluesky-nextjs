import CallAction from "../call-action";
import Footer from "../footer";
import Navbar from "../navbar";
import Navigation from "../navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {/* <Navigation /> */}
      <main>{children}</main>
      {/* <CallAction
        title={"School Visit"}
        content={"Registration"}
        bottomSpacing={0}
      /> */}
      <Footer />
    </>
  );
}
