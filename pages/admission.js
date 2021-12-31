import Layout from "../components/layout";
import Reason from "../components/reason";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";
import CTA from "../components/cta";
import AdmissionHero from "../components/admission-hero";

export default function Admission() {
  useHashFragment();
  return (
    <Layout>
      <AdmissionHero />
      <Step
        id="apply"
        heading="Apply to BSA"
        subHeading={
          "The admission procedure in BSA consists of five main steps:"
        }
      />
      <CTA />
    </Layout>
  );
}
