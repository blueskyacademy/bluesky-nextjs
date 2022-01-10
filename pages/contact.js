import Layout from "../components/layout";
import ContactHero from "../components/contact-hero";
import ContactInformation from "../components/contact-information";
import CTA from "../components/cta";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation } from "../lib/api";

export default function Contact({ navigations }) {
  return (
    <Layout navigations={navigations}>
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
export async function getStaticProps() {
  const navigations = (await getNavigation()) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
