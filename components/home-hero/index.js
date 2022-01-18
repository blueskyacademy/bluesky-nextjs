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
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-50">
        <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="flex flex-col items-center justify-center lg:items-start lg:col-span-6"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none text-6xl leading-snug sm:leading-tight xl:leading-tighter font-extrabold ">
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
                <a className="text-lg font-semibold text-purple-900 bg-yellow-500 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group">
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
                className="mt-6 text-lg font-medium text-purple-900 bg-purple-200 sm:mt-0 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:text-white hover:bg-purple-600 group cursor-pointer"
                onClick={handleWatchVideo}
              >
                <svg
                  className="w-6 h-6 mr-3 text-purple-600 duration-300 ease-in-out group-hover:text-purple-50"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 494.148 494.148"
                  fill="currentColor"
                >
                  <g>
                    <g>
                      <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124    c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884    C432.632,229.572,422.964,213.288,405.284,201.188z" />
                    </g>
                  </g>
                </svg>
                {f({
                  id: "Home.WatchVideo",
                  defaultMessage: "Watch Video",
                })}
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
                className="w-full h-auto rounded"
                src="images/kindergarten.png"
                alt="Bright Photo Collage"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute inline-flex w-20 h-20 bg-purple-400 rounded-full opacity-60 animate-ping"></span>

                <button
                  type="button"
                  className="relative z-10 flex items-center justify-center w-20 h-20 bg-white rounded-full outline-none opacity-90 cursor-pointer"
                  onClick={handleWatchVideo}
                >
                  <svg
                    className="w-10 h-10 ml-1 text-purple-600 duration-300 ease-in-out group-hover:text-purple-50"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 494.148 494.148"
                    fill="currentColor"
                  >
                    <g>
                      <g>
                        <path d="M405.284,201.188L130.804,13.28C118.128,4.596,105.356,0,94.74,0C74.216,0,61.52,16.472,61.52,44.044v406.124    c0,27.54,12.68,43.98,33.156,43.98c10.632,0,23.2-4.6,35.904-13.308l274.608-187.904c17.66-12.104,27.44-28.392,27.44-45.884    C432.632,229.572,422.964,213.288,405.284,201.188z" />
                      </g>
                    </g>
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
