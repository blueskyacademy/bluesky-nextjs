import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselImages = ({ classes }) => {
  return (
    <div className="max-w-lg mx-auto lg:max-w-screen-md pb-16">
      <div className="px-4 text-center sm:px-6 lg:px-8 pb-8">
        <h3 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
          <span className="block"></span>
          <span className="relative block">
            <span className="relative">
              <img
                className="absolute inset-0 transform translate-y-9 sm:translate-y-10 xl:translate-y-14"
                src="/svg/underline-simple-light-purple.svg"
              />
              <span className="relative">Our classes</span>
            </span>
          </span>
        </h3>
      </div>
      <Carousel showThumbs={true} showIndicators={true} showStatus={false}>
        {classes.map((item, idx) => (
          <div key={`image-${item}-${idx}`}>
            <img src={item?.image?.url} />
            <p className="legend">{item?.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImages;
