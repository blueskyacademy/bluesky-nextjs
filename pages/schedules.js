import Layout from "../components/layout";
import ScheduleHero from "../components/schedule-hero";
import CTA from "../components/cta";
import { getClasses, getNavigation } from "../lib/api";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

const Schedules = ({ classes, navigations }) => {
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <ScheduleHero classes={classes} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
};

export default Schedules;
export async function getStaticProps({ locale }) {
  const classes = (await getClasses()) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { classes, navigations },
    revalidate: 1,
  };
}
