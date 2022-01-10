import Layout from "../components/layout";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";
import CTA from "../components/cta";
import AdmissionHero from "../components/admission-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation } from "../lib/api";

export default function Admission({ navigations }) {
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <AdmissionHero />
        <Step
          id="apply"
          heading="Apply to BSA"
          subHeading={
            "The admission procedure in BSA consists of five main steps:"
          }
        />
        <CTA />
      </AnimationRevealPage>
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
