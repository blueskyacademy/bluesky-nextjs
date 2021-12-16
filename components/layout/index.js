import CallAction from "../call-action";
import Footer from "../footer";
import Navigation from "../navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <CallAction
        title={"School Visit"}
        content={"Registration"}
        bottomSpacing={0}
      />
      <Footer />
    </>
  );
}
