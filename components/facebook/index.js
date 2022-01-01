import { useEffect } from "react";
import { cleanup, init } from "./fb";

const Facebook = () => {
  useEffect(() => {
    console.log("Facebook1");
    init();

    return () => {
      cleanup();
    };
  }, []);
  return (
    <div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </div>
  );
};

export default Facebook;
