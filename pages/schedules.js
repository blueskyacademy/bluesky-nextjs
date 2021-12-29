import Layout from "../components/layout";
import ScheduleHero from "../components/schedule-hero";
import CTA from "../components/cta";
import { getClasses } from "../lib/api";

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
  const classes = (await getClasses()) ?? [];

  return {
    props: { classes },
    revalidate: 1,
  };
}
