import Image from "next/image";

const customLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const CustomImage = (props) => {
  return <Image loader={customLoader} {...props} alt="" />;
};

export default CustomImage;
