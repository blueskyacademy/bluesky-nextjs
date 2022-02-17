import Layout from "../components/layout";
import {
  getCoverImage,
  getFaq,
  getNavigation,
  getPostsForHome,
  getTestimonials,
} from "../lib/api";
import { useHashFragment } from "../hooks/useHashFragment";
import Programs from "../components/programs";
import Events from "../components/events";
import Faq from "../components/faq";
import GalleryHero from "../components/gallery-hero";
import HomeHero from "../components/home-hero";
import CTA from "../components/cta";
import Feedback from "../components/feedback";
import { useIntl } from "react-intl";

export default function Home({
  allPosts,
  testimonials,
  faq,
  navigations,
  coverImage,
}) {
  const { formatMessage: f } = useIntl();
  useHashFragment();
  const GALLERY_IMAGES = [
    "/images/primary.png",
    "/images/kindergarten.png",
    "/images/secondary.png",
    "/images/gallery-hero-01.png",
    "/images/gallery-hero-02.png",
  ];
  return (
    <Layout navigations={navigations}>
      <div className="max-w-screen-full mx-auto bg-gray-100">
        {coverImage && (
          <a rel="noreferrer" href={coverImage?.link}>
            <img
              src={coverImage?.image?.url}
              alt="cover"
              className="mx-auto"
              width={"820px"}
              height="312px"
            />
          </a>
        )}
      </div>

      <HomeHero />
      <Programs id="program" />
      <GalleryHero
        id="gallery"
        className="md:-mt-36"
        hasButton={true}
        url="/gallery"
        title={f({
          id: "Home.OurGallery",
          defaultMessage: "Our Gallery",
        })}
        description={f({
          id: "Home.GallerySummary",
          defaultMessage:
            "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.",
        })}
        images={GALLERY_IMAGES}
      />
      <Events posts={allPosts} id="news" />
      <Feedback id="parents" testimonials={testimonials.slice(0, 3)} />
      <Faq faq={faq} id="faq" />
      <CTA />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allPosts = (await getPostsForHome(locale)) ?? [];
  const testimonials = (await getTestimonials(locale)) ?? [];
  const faq = (await getFaq(locale)) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];
  const coverImage = await getCoverImage();
  return {
    props: { allPosts, testimonials, faq, navigations, coverImage },
    revalidate: 1,
  };
}
