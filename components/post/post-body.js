import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import dynamic from "next/dynamic";
import markdownStyles from "./markdown-styles.module.css";

const DynamicVideoEmbed = dynamic(() => import("./video-embed"));

function renderOptions(links) {
  const entryMap = new Map();
  if (links?.entries?.block) {
    for (const entry of links.entries.block) {
      entryMap.set(entry.sys.id, entry);
    }
  }

  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  if (links?.assets?.block) {
    for (const asset of links?.assets?.block) {
      assetMap.set(asset.sys.id, asset);
    }
  }

  return {
    // other options...
    renderMark: {
      [MARKS.BOLD]: (text) => {
        return <b key={`${text}-key`}>{text}</b>;
      },
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-primary-100"
        >
          {children}
        </a>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="font-bold text-5xl sm:text-6xl xl:text-7xl leading-snug">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-4xl sm:text-5xl xl:text-6xl font-bold">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-3xl sm:text-4xl font-bold">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="text-2xl sm:text-2xl font-bold">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-xl sm:text-xl font-bold">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <h6 className="text-lg sm:text-lg font-bold">{children}</h6>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="bg-gray-100 p-2 mx-6 mb-4 border-l-4 border-gray-400 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="list-disc ml-4">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal ml-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryMap.get(node.data.target.sys.id);
        const { __typename } = entry;

        switch (__typename) {
          case "Video":
            const { youtubeUrl, title } = entry;
            return <DynamicVideoEmbed youtubeUrl={youtubeUrl} title={title} />;
          default:
            return null;
        }
      },
      // other options...
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <div>
            <img src={asset?.url} alt="My image alt text" />
            <div className="text-center mt-1 font-semibold">
              {asset?.description}
            </div>
          </div>
        );
      },
    },
  };
}

export default function PostBody({ content, className }) {
  return (
    <div className={className}>
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content.json, renderOptions(content.links))}
      </div>
    </div>
  );
}
