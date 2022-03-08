import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomImage from "../custom-image";

const BannerImage = ({ coverImage, locale }) => {
  if (!coverImage) return null;
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        {coverImage?.facebookLink ? (
          <a
            target="_blank"
            href={coverImage?.facebookLink}
            rel="noopener noreferrer"
          >
            <CustomImage
              src={coverImage?.image?.url}
              alt="cover"
              className="mx-auto cover"
              width={1440}
              height={550}
            />
          </a>
        ) : coverImage?.post?.slug ? (
          <Link
            href={
              locale === "en"
                ? `/en/posts/${coverImage?.post?.slug}`
                : `/posts/${coverImage?.post?.slug}`
            }
          >
            <a>
              <CustomImage
                src={coverImage?.image?.url}
                alt="cover"
                className="mx-auto cover"
                width={1440}
                height={550}
              />
            </a>
          </Link>
        ) : (
          <CustomImage
            src={coverImage?.image?.url}
            alt="cover"
            className="mx-auto cover"
            width={1440}
            height={550}
          />
        )}
      </div>
    </>
  );
};
const Banner = ({ coverImages }) => {
  const router = useRouter();
  const { locale } = router;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive} ssr={true} transitionDuration={1000}>
        {coverImages?.map((item, idx) => (
          <BannerImage key={`cover-${idx}`} coverImage={item} locale={locale} />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;
