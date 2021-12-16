import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";

function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    // other options...
    renderMark: {
      [MARKS.BOLD]: (text) => {
        return <b key={`${text}-key`}>{text}</b>;
      },
    },
    renderNode: {
      // other options...
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt='My image alt text' />;
      },
    },
  };
}

export default function PostBody({ content }) {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content.json, renderOptions(content.links))}
      </div>
    </div>
  );
}
