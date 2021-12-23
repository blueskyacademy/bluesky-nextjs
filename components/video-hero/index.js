import VideoCarousel from "./video-carousel";

const VideoHero = ({ videos, id }) => {
  return (
    <div className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8">
      <div className="mx-auto lg:max-w-2xl">
        <VideoCarousel videos={videos} />
      </div>
    </div>
  );
};
export default VideoHero;
