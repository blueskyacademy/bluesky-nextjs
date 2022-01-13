import { useState } from "react";
import VideoHero from "../video-hero";
import { useIntl } from "react-intl";

const Gallery = ({ src, title, link }) => {
  return (
    <>
      <li className="cursor-pointer" data-src="images/gallery-01.jpg">
        <div className="relative group">
          <img
            src={src}
            className="object-cover rounded-2xl h-72 w-full"
            alt="Gallery image 1"
          />
          <div className="absolute inset-0 transition duration-300 bg-gray-900 opacity-0 rounded-2xl group-hover:opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 group-hover:opacity-100">
            <a href={link} target="_blank" rel="noreferrer">
              <div className="flex items-center justify-center w-24 h-24 bg-purple-600 rounded-full opacity-80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div className="text-xl leading-tight tracking-tight sm:text-xl sm:leading-tighter text-center mt-2 text-purple-900">
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </div>
      </li>
    </>
  );
};

const ImagesGrid = ({ galleries }) => {
  return (
    <div className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto lg:max-w-screen-xl">
        <ul
          id="gallery-grid"
          className="grid gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-12 2xl:gap-12"
        >
          {galleries?.map((gallery, idx) => (
            <Gallery
              key={`gallery-${gallery?.title}-${idx}`}
              gallery={gallery}
              title={gallery?.title}
              src={gallery?.image?.url}
              link={gallery?.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

const GalleryGrid = ({ videos, galleries }) => {
  const { formatMessage: f } = useIntl();
  const [showImages, setShowImages] = useState(true);

  return (
    <section>
      <div className="px-4 pt-20 bg-purple-25 sm:pt-28 lg:pt-36 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-12 md:mb-20 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            {f({
              id: "Gallery.SeeWhatItIsLikeToBePartOfOurSchool",
              defaultMessage: "See what it's like to be part of our school",
            })}
          </h3>
          <ul className="flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  showImages
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setShowImages(true)}
              >
                {f({
                  id: "Gallery.Images",
                  defaultMessage: "Images",
                })}
              </button>
            </li>
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  !showImages
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setShowImages(false)}
              >
                Videos
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-56 bg-purple-25"></div>
      {showImages ? (
        <ImagesGrid galleries={galleries} />
      ) : (
        <VideoHero videos={videos} />
      )}
    </section>
  );
};

export default GalleryGrid;
