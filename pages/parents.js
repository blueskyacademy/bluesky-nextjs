import { useRouter } from "next/router";
import CTA from "../components/cta";
import Layout from "../components/layout";
import RegisterForm from "../components/register-form";
import RegisterHero from "../components/register-hero";
// import Testimonial from "../components/testimonial";
// import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { useHashFragment } from "../hooks/useHashFragment";
import { getClasses, getNavigation } from "../lib/api";

export default function Parents({ testimonials, classes, navigations }) {
  const router = useRouter();
  const { tab } = router.query;
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <RegisterHero />
      <RegisterForm id="register" tab={tab} classes={classes} />
      {/* <Testimonial testimonials={testimonials} /> */}
      <CTA hasButton={false} />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  // const testimonials = (await getTestimonials(locale)) ?? [];
  const classes = (await getClasses()) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { classes, navigations },
    revalidate: 1,
  };
}
