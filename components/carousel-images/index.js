import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselImages = ({ videos }) => {
  return (
    <Carousel showThumbs={false} showIndicators={true} showStatus={false}>
      {videos.map((item, idx) => (
        <div key={`image-${item}-${idx}`}>
          <img src={item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselImages;
