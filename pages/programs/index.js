import Layout from "../../components/layout";
import Programs from "../../components/programs";
import CTA from "../../components/cta";

import { useHashFragment } from "../../hooks/useHashFragment";
import Certificate from "../../components/certificate";
import Pathway from "../../components/pathway";

export default function ProgramPage() {
  useHashFragment();
  return (
    <Layout>
      <Certificate />
      <Pathway />

      <Programs id="program" />
      <div className="md:-mt-72">
        <CTA />
      </div>
    </Layout>
  );
}
