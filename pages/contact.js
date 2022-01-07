import Layout from "../components/layout";
import ContactHero from "../components/contact-hero";
import ContactInformation from "../components/contact-information";
import CTA from "../components/cta";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

export default function Contact() {
  return (
    <Layout>
      <AnimationRevealPage>
        <div>
          <ContactHero />
          <ContactInformation />
        </div>
        <CTA hasButton={false} />
      </AnimationRevealPage>
    </Layout>
  );
}
