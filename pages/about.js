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

export default function About() {
  useHashFragment();
  return (
    <Layout>
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
