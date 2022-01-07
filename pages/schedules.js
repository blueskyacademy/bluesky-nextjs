import Layout from "../components/layout";
import ScheduleHero from "../components/schedule-hero";
import CTA from "../components/cta";
import { getClasses } from "../lib/api";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

const Schedules = ({ classes }) => {
  return (
    <Layout>
      <AnimationRevealPage>
        <ScheduleHero classes={classes} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
};

export default Schedules;
export async function getStaticProps() {
  const classes = (await getClasses()) ?? [];

  return {
    props: { classes },
    revalidate: 1,
  };
}
