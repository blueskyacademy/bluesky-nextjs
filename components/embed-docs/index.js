const EmbedDocs = ({ fileId }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {fileId && (
        <iframe
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          width={"100%"}
          height={"700px"}
          align="middle"
          scrolling="auto"
        ></iframe>
      )}
    </div>
  );
};

export default EmbedDocs;
