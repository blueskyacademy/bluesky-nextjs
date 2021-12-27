import CTA from "../components/cta";
import Feedback from "../components/feedback";
import Layout from "../components/layout";
import RegisterForm from "../components/register-form";
import RegisterHero from "../components/register-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { useHashFragment } from "../hooks/useHashFragment";
import { getTestimonials } from "../lib/api";

export default function Parents({ testimonials }) {
  useHashFragment();
  return (
    <Layout>
      <AnimationRevealPage>
        <RegisterHero />
        <RegisterForm />
        <Feedback id="story" testimonials={testimonials} />
        <CTA hasButton={false} />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const testimonials = (await getTestimonials(locale)) ?? [];

  return {
    props: { testimonials },
    revalidate: 1,
  };
}
