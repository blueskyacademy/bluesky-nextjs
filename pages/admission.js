import AdmissionHero from "../components/admission-hero";
import Finance from "../components/finance";
import Layout from "../components/layout";
import Programs from "../components/programs";
import Reason from "../components/reason";
import Register from "../components/register";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";
import CTA from "../components/cta";

export default function Admission() {
  useHashFragment();
  return (
    <Layout>
      {/* <AdmissionHero /> */}
      <Reason id="why" heading="Why BSA" />
      <Programs id="program" />
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
