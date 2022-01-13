import Layout from "../../components/layout";
import Programs from "../../components/programs";
import CTA from "../../components/cta";

import { useHashFragment } from "../../hooks/useHashFragment";
import Certificate from "../../components/certificate";
import Pathway from "../../components/pathway";
import { getNavigation } from "../../lib/api";

export default function ProgramPage({ navigations }) {
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <Certificate />
      <Pathway />

      <Programs id="program" />
      <div className="md:-mt-72">
        <CTA />
      </div>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
