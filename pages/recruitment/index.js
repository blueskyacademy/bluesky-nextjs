import Layout from "../../components/layout";
import Postions from "../../components/positions";
import RecruitmentHero from "../../components/recruitment-hero";
import { getAllJobs, getNavigation } from "../../lib/api";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";

export default function Recruitment({ allJobs, navigations }) {
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <RecruitmentHero />
        <Postions id="jobs" jobs={allJobs} />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allJobs = (await getAllJobs(locale)) ?? [];
  const navigations = (await getNavigation()) ?? [];
  return {
    props: { allJobs, navigations },
    revalidate: 1,
  };
}
