import Script from "next/script";
const AirTable = () => {
  return (
    <div id="form">
      <Script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></Script>
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrimyBDQPZdgU14C?backgroundColor=blue"
        frameBorder="0"
        width="100%"
        height="2432"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default AirTable;
