import Layout from "../components/layout";
import ScheduleHero from "../components/schedule-hero";
import CTA from "../components/cta";
import { getSchedules } from "../lib/api";

const Schedules = ({ classes }) => {
  return (
    <Layout>
      <ScheduleHero classes={classes} />
      <CTA />
    </Layout>
  );
};

export default Schedules;
export async function getStaticProps() {
  const classes = (await getSchedules()) ?? [];

  return {
    props: { classes },
    revalidate: 1,
  };
}
