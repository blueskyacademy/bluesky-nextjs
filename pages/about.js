import AboutHero from "../components/about-hero";
import CTA from "../components/cta";
import DescriptionValues from "../components/description-value";
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
      <AnimationRevealPage>
        <AboutHero />
        <Intro
          id="introduction"
          heading="INTRODUCTION"
          description="From the day we started in June 2010 until now, June 2017, Blue Sky Academy has gone through an unforgettable 7-year journey. All school levels, including Kindergarten, Primary and Secondary schools, have seen numerous opportunities and challenges and gained great achievements along the way"
        />
        <Values
          id="core"
          heading="BSA Core Values"
          subHeading="Blue Sky Academy’s education system is based on UNESCO’s Four Pillars of Learning"
        />
        <DescriptionValues />
        <Letter id="letter" />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
