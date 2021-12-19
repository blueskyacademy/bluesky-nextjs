import Finance from "../components/finance";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Reason from "../components/reason";
import Register from "../components/register";
import Step from "../components/step";
import { useHashFragment } from "../hooks/useHashFragment";

export default function Admission() {
  useHashFragment();
  return (
    <Layout>
      <Hero
        heading='BSA Admission Information'
        image='https://www.bsa.edu.vn/uploads/school_level/image/2/22.jpg'
      />
      <Reason id='why' heading='Why BSA' />
      <Step
        id='apply'
        heading='Apply to BSA'
        subHeading={
          "The admission procedure in BSA consists of five main steps:"
        }
      />
      <Finance />
      <Register />
    </Layout>
  );
}
