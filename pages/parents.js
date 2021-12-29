import { useRouter } from "next/router";
import CTA from "../components/cta";
import Feedback from "../components/feedback";
import Layout from "../components/layout";
import RegisterForm from "../components/register-form";
import RegisterHero from "../components/register-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { useHashFragment } from "../hooks/useHashFragment";
import { getClasses, getTestimonials } from "../lib/api";

export default function Parents({ testimonials, classes }) {
  const router = useRouter();
  const { tab } = router.query;
  useHashFragment();
  return (
    <Layout>
      <RegisterHero />
      <RegisterForm id="register" tab={tab} classes={classes} />
      <AnimationRevealPage>
        <Feedback id="story" testimonials={testimonials} />
        <CTA hasButton={false} />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const testimonials = (await getTestimonials(locale)) ?? [];
  const classes = (await getClasses()) ?? [];

  return {
    props: { testimonials, classes },
    revalidate: 1,
  };
}
