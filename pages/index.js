import Layout from "../components/layout";
import { getFaq, getPostsForHome, getTestimonials } from "../lib/api";
import { useHashFragment } from "../hooks/useHashFragment";
import Programs from "../components/programs";
import Events from "../components/events";
import Faq from "../components/faq";
import GalleryHero from "../components/gallery-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import HomeHero from "../components/home-hero";
import CTA from "../components/cta";
import Feedback from "../components/feedback";

export default function Home({ allPosts, testimonials, faq }) {
  useHashFragment();
  return (
    <Layout>
      <HomeHero />
      <AnimationRevealPage>
        <Programs id="program" />
        <div id="gallery" className="md:-mt-72">
          <GalleryHero
            hasButton={true}
            url="/gallery"
            title="Our gallery"
            description={`Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.`}
          />
        </div>

        <Events posts={allPosts} id="news" />
        <Feedback id="parents" testimonials={testimonials} />
        <Faq faq={faq} id="faq" />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allPosts = (await getPostsForHome(locale)) ?? [];
  const testimonials = (await getTestimonials(locale)) ?? [];
  const faq = (await getFaq()) ?? [];
  return {
    props: { allPosts, testimonials, faq },
    revalidate: 1,
  };
}
