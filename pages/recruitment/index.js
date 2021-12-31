import Layout from "../../components/layout";
import Postions from "../../components/positions";
import Benefits from "../../components/benefits";
import { useHashFragment } from "../../hooks/useHashFragment";
import { getAllJobs } from "../../lib/api";

export default function Recruitment({ allJobs }) {
  useHashFragment();
  return (
    <Layout>
      <Postions id="jobs" jobs={allJobs} />
      {/* <Benefits id="benefits" /> */}
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allJobs = (await getAllJobs(locale)) ?? [];
  return {
    props: { allJobs },
    revalidate: 1,
  };
}
