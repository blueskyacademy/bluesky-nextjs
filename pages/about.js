import AboutHero from "../components/about-hero";
import CTA from "../components/cta";
import DescriptionValues from "../components/description-value";
import Founders from "../components/founders";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Letter from "../components/letter";
import Values from "../components/values";
import { useHashFragment } from "../hooks/useHashFragment";
import { getNavigation, getParagraphs } from "../lib/api";

export default function About({ navigations, visions, message, cofounders }) {
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AboutHero />
      <Intro id="vision" visions={visions} />
      <Values id="core" />
      <DescriptionValues />
      <Letter id="message" message={message} />
      <Founders id="founder" cofounders={cofounders} />
      <CTA />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  const {
    visions = [],
    message,
    cofounders = [],
  } = await getParagraphs(locale);
  return {
    props: { navigations, visions, message, cofounders },
    revalidate: 1,
  };
}
