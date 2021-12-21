import { useState } from "react";
import Popup from "../popup";
import Edit from "../../public/svg/edit.svg";

const CallAction = ({ title, content, bottomSpacing }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={`fixed right-0 mr-8 mb-2`} style={{ bottom: "120px" }}>
        <div
          className="bg-purple-600 text-white rounded-lg shadow-md px-6 py-3 cursor-pointer mb-1"
          style={{
            borderRadius: "20px",
          }}
        >
          <div className="flex flex-col justify-center">
            <a href="tel:02383579559">
              <div className="text-center">Hotline</div>0238 3579 559
            </a>
          </div>
          <div className="triangle"></div>
        </div>
      </div>

      <div
        className={`fixed bottom-${bottomSpacing} right-0 mr-8 mb-2`}
        onClick={handleClick}
      >
        <div
          className="bg-purple-600  text-white rounded-lg shadow-md px-6 py-3 cursor-pointer"
          style={{
            borderRadius: "20px",
          }}
        >
          <div className="flex flex-col justify-center">
            <Edit className="mx-auto mb-2" />
            <div>{title && title}</div>
            <div>{content}</div>
          </div>
          <div className="triangle"></div>
        </div>
      </div>

      <Popup
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title={"School Visit Registration"}
        type="School"
      />
    </>
  );
};
export default CallAction;
