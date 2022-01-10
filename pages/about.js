import AboutHero from "../components/about-hero";
import CTA from "../components/cta";
import DescriptionValues from "../components/description-value";
import Founders from "../components/founders";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Letter from "../components/letter";
import Values from "../components/values";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { useHashFragment } from "../hooks/useHashFragment";
import { getNavigation } from "../lib/api";

export default function About({ navigations }) {
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AboutHero />
      <Intro id="vision" />
      <Values id="core" />
      <DescriptionValues />
      <Letter id="message" />
      <Founders id="founder" />
      <CTA />
    </Layout>
  );
}
export async function getStaticProps() {
  const navigations = (await getNavigation()) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
