import Layout from "../components/layout";
import { getPostsForHome, getTestimonials } from "../lib/api";
import { useHashFragment } from "../hooks/useHashFragment";
import Programs from "../components/programs";
import Events from "../components/events";
import Faq from "../components/faq";
import GalleryHero from "../components/gallery-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import HomeHero from "../components/home-hero";
import CTA from "../components/cta";
import Feedback from "../components/feedback";

export default function Home({ allPosts, testimonials }) {
  useHashFragment();
  return (
    <Layout>
      <HomeHero />
      <AnimationRevealPage>
        <Programs id="program" />
        <GalleryHero
          title="Our gallery"
          description={`Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.`}
        />
        <Events posts={allPosts} id="news" />
        <Feedback id="story" testimonials={testimonials} />
        <Faq />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allPosts = (await getPostsForHome(locale)) ?? [];
  // const videos = (await getVideoForHome()) ?? [];
  const testimonials = (await getTestimonials(locale)) ?? [];
  return {
    props: { allPosts, testimonials },
    revalidate: 1,
  };
}
