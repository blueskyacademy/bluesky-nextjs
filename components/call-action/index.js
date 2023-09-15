import { useState } from "react";
import Popup from "../popup";
import { useIntl } from "react-intl";
import { useScreenSize } from "../../hooks/useScreenSize";

const CallAction = () => {
  const { formatMessage: f } = useIntl();
  const [showModal, setShowModal] = useState(false);
  const { isMobile } = useScreenSize();
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div
        className={`fixed right-0 mr-6 sm:mr-8 mb-8 sm:mb-16 z-10`}
        style={{ bottom: "120px" }}
      >
        <div className="bg-primary-100 text-white rounded-full sm:rounded-3xl shadow-md px-2 py-2 sm:px-6 sm:py-3  cursor-pointer mb-1">
          <div className="flex flex-col justify-center">
            <a href="tel:0818700990">
              {isMobile ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-10 w-10"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              ) : (
                <>
                  {" "}
                  <div className="text-center">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-9 w-9"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  0818 700 990
                </>
              )}
            </a>
          </div>
          <div className="triangle hidden sm:block"></div>
        </div>
      </div>

      <div className={`fixed-register`} onClick={handleClick}>
        <div
          className={`bg-primary-100 text-white rounded-full sm:rounded-3xl shadow-md px-2 py-2 cursor-pointer sm:px-6`}
        >
          <div className="flex flex-col justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-10 w-10"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
            {!isMobile && (
              <div>
                {f({
                  id: "Form.ConsultationRegister",
                  defaultMessage: "Consultation Register",
                })}
              </div>
            )}
          </div>
          <div className="triangle hidden sm:block"></div>
        </div>
      </div>

      <Popup
        showModal={showModal}
        onClose={() => setShowModal(false)}
        title={f({
          id: "Form.ConsultationRegister",
          defaultMessage: "Consultation Register",
        })}
        type="Consultation"
      />
    </>
  );
};
export default CallAction;
