import Finance from "../components/finance";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Reason from "../components/reason";
import Register from "../components/register";
import Step from "../components/step";

export default function Admission() {
  return (
    <Layout>
      <Hero
        heading='BSA Admission Information'
        image='https://www.bsa.edu.vn/uploads/school_level/image/2/22.jpg'
      />
      <Reason heading='Why BSA' />
      <Step
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
