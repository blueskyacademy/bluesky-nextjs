import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";
export default function VideoCarousel({ videos }) {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} key={item.props.url} />;
    });
  const YoutubeSlide = ({ url }) => (
    <ReactPlayer width='100%' url={url} playing={false} />
  );

  return (
    <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
      {videos.map((item, idx) => (
        <YoutubeSlide key={`youtube-${idx}`} url={item} />
      ))}
    </Carousel>
  );
}
