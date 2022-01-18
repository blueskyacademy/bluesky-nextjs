import Layout from "../components/layout";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";
import CTA from "../components/cta";
import AdmissionHero from "../components/admission-hero";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation, getSteps } from "../lib/api";

export default function Admission({ navigations, steps }) {
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <AdmissionHero />
        <Step id="apply" steps={steps} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  const steps = (await getSteps(locale)) ?? [];
  return {
    props: { navigations, steps },
    revalidate: 1,
  };
}
