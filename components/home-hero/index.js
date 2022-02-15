import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useIntl } from "react-intl";

const VideoPopup = ({ showPopup, onClose }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => {
    if (showPopup) {
      onClose();
    }
  });
  return (
    <>
      {showPopup ? (
        <>
          <div className="fixed inset-0 z-50 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear">
            <div className="fixed top-0 left-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50"></div>
            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              <div
                className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl"
                ref={wrapperRef}
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="absolute w-full h-full"
                    src="https://www.youtube.com/embed/N4YtNOGbtsQ"
                    title="Video"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

const HomeHero = () => {
  const { formatMessage: f } = useIntl();
  const [showPopup, setShowPopup] = useState(false);
  const handleWatchVideo = () => {
    setShowPopup(true);
  };
  return (
    <div>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="flex flex-col items-center justify-center lg:items-start lg:col-span-6"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="uppercase max-w-xl mt-4 text-center text-primary-100 sm:mt-5 lg:text-left h1 lg:max-w-none text-7xl leading-snug sm:leading-tight xl:leading-tighter font-bold">
              {f({
                id: "Home.BlueSkyAcademy",
                defaultMessage: "Blue Sky Academy",
              })}
            </h1>
            <p className="max-w-2xl mt-3 text-xl leading-loose text-center text-purple-800 lg:text-left">
              {f({
                id: "Home.SloganHero",
                defaultMessage: `Blue Sky Academy believes that empowering our students to absorb knowledge and sharpen their skills will create an organic relationship between school, family and society.`,
              })}
            </p>

            <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
              <Link href="/about">
                <a className="text-lg font-medium text-white bg-primary-100 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button outline-none hover:bg-primary-100 group h-[55px]">
                  {f({
                    id: "Home.AboutUs",
                    defaultMessage: "About us",
                  })}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </a>
              </Link>

              <button
                type="button"
                className="mt-6 text-lg font-medium bg-white sm:mt-0 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100"
                onClick={handleWatchVideo}
              >
                {f({
                  id: "Home.WatchVideo",
                  defaultMessage: "Watch Video",
                })}
                <svg
                  className="ml-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
                    fill="#003056"
                  />
                  <path
                    d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
                    fill="#003056"
                  />
                </svg>
              </button>
            </div>

            <p className="hidden text-sm font-medium tracking-wider text-purple-900 uppercase sm:block lg:hidden xl:block mt-14">
              {f({
                id: "Home.CambrigdeInternationalSchool",
                defaultMessage: "Cambrigde International School",
              })}
            </p>
          </motion.div>
          <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
            <div className="relative">
              <img
                className="w-full h-auto"
                src="/images/kindergarten.png"
                alt="Bright Photo Collage"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute inline-flex w-20 h-20 bg-primary-100 rounded-full opacity-60 animate-ping"></span>

                <button
                  type="button"
                  className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full outline-none opacity-90 cursor-pointer"
                  onClick={handleWatchVideo}
                >
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M100 50.0241C100 77.5687 77.5579 100 50 100C22.4421 100 0 77.5687 0 50.0241C0 22.4313 22.4421 0 50 0C77.5579 0 100 22.4313 100 50.0241"
                      fill="#003056"
                    />
                    <path
                      d="M70 50.0243C70 51.288 69.6023 52.5565 68.8068 53.5723C68.6577 53.7716 67.9616 54.593 67.4148 55.1276L67.1165 55.4192C62.9403 59.8469 52.5497 66.5055 47.2798 68.6391C47.2798 68.6877 44.1477 69.9563 42.6562 70H42.4574C40.1705 70 38.0327 68.7412 36.9389 66.6999C36.3423 65.5772 35.7955 62.3208 35.7457 62.277C35.2983 59.356 35 54.8846 35 49.9757C35 44.8287 35.2983 40.158 35.8452 37.2904C35.8452 37.2418 36.392 34.6173 36.7401 33.7424C37.2869 32.4836 38.2812 31.4095 39.5241 30.729C40.5185 30.2479 41.5625 30 42.6562 30C43.7997 30.0535 45.9375 30.7776 46.7827 31.1179C52.3509 33.2564 62.9901 40.2552 67.0668 44.5322C67.7628 45.2126 68.5085 46.0437 68.7074 46.2333C69.5526 47.3026 70 48.6148 70 50.0243Z"
                      fill="#003056"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoPopup showPopup={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default HomeHero;
