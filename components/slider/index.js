import Image from "next/image";

import { useState, createRef } from "react";

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const refs = images.reduce((acc, val, i) => {
    acc[i] = createRef();
    return acc;
  }, {});
  const scrollToImage = (i) => {
    setCurrentImage(i);

    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;

  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };
  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";
  const sliderControl = (isLeft) => {
    console.log("render slider Control", isLeft);
    return (
      <button
        type='button'
        onClick={isLeft ? previousImage : nextImage}
        className={`${arrowStyle} ${
          isLeft ? "left-2 cursor-pointer" : "right-2 cursor-pointer"
        }`}
        style={{ top: "40%", zIndex: 999 }}
      >
        <span role='img' aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
          {isLeft ? "◀" : "▶"}
        </span>
      </button>
    );
  };
  const contentfulLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className='w-full mx-auto flex justify-center'>
      <div className='px-12 pb-6 flex justify-center w-full items-center'>
        <div className='relative w-full'>
          <div className='carousel'>
            {sliderControl(true)}
            {images.map((img, i) => (
              <div
                className='w-full flex-shrink-0'
                key={`${img}-${i}`}
                ref={refs[i]}
              >
                <Image
                  loader={contentfulLoader}
                  width={2000}
                  height={600}
                  src={img}
                  className='w-full object-fill'
                  alt={"..."}
                />
              </div>
            ))}
            {sliderControl()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
