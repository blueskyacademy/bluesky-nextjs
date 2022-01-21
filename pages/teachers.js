import GalleryHero from "../components/gallery-hero";
import Layout from "../components/layout";
import SchoolTeam from "../components/school-team";
import Stats from "../components/stats";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation, getStats, getTeachers } from "../lib/api";
import CTA from "../components/cta";
import { useIntl } from "react-intl";

const TEACHER_IMAGES = [
  "/images/teacher-01.jpeg",
  "/images/teacher-03.jpeg",
  "/images/teacher-02.jpeg",
  "/images/kindergarten.png",
  "/images/secondary.png",
];
export default function About({ teachers, navigations, stats }) {
  const { formatMessage: f } = useIntl();
  return (
    <Layout navigations={navigations}>
      <GalleryHero
        title={f({
          id: "Teacher.OurTeachers",
          defaultMessage: "Our Teacher",
        })}
        description={f({
          id: "Teacher.WePrideOurselves",
          defaultMessage:
            "At Blue Sky Academy, we pride ourselves on the quality of our teachers. We commit to creating a positive classroom experience for all students, no matter their learning needs.",
        })}
        images={TEACHER_IMAGES}
      />
      <AnimationRevealPage>
        <Stats stats={stats} />
        <SchoolTeam teachers={teachers} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const teachers = (await getTeachers(locale)) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];
  const stats = (await getStats(locale)) ?? [];

  return {
    props: { teachers, navigations, stats },
    revalidate: 1,
  };
}
