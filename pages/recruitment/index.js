import Layout from "../../components/layout";
import Postions from "../../components/positions";
import RecruitmentHero from "../../components/recruitment-hero";
import { getAllJobs } from "../../lib/api";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";

export default function Recruitment({ allJobs }) {
  return (
    <Layout>
      <AnimationRevealPage>
        <RecruitmentHero />
        <Postions id="jobs" jobs={allJobs} />
      </AnimationRevealPage>
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
