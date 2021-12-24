import Layout from "../components/layout";
import ContactHero from "../components/contact-hero";
import ContactInformation from "../components/contact-information";
import CTA from "../components/cta";

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactInformation />
      <CTA hasButton={false} />
    </Layout>
  );
}
