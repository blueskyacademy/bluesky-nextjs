export default function VideoEmbed(props) {
  const { youtubeUrl, title } = props;

  return (
    <div className="videoEmbed">
      <iframe
        className="videoEmbed__iframe"
        src={youtubeUrl}
        height="100%"
        width="100%"
        frameBorder="0"
        scrolling="no"
        title={title}
        allowFullScreen={true}
      />
    </div>
  );
}
