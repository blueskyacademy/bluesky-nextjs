import GalleryHero from "../components/gallery-hero";
import Layout from "../components/layout";
import SchoolTeam from "../components/school-team";
import Stats from "../components/stats";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getNavigation, getTeachers } from "../lib/api";
import CTA from "../components/cta";
import { useIntl } from "react-intl";

const STATS = [
  {
    value: "30+",
    label: "Teachers",
  },
  {
    value: "6+",
    label: "Average years of teacher experience",
  },
  {
    value: "9",
    label: "Average number of students per class",
  },
  {
    value: "5:1",
    label: "Student to teacher ratio",
  },
  {
    value: "6",
    label: "Number of Departments",
  },
  {
    value: "100%",
    label: "Student pass exam",
  },
];
const TEACHER_IMAGES = [
  "/images/teacher-01.jpeg",
  "/images/teacher-03.jpeg",
  "/images/teacher-02.jpeg",
  "/images/kindergarten.png",
  "/images/secondary.png",
];
export default function About({ teachers, navigations }) {
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
        <Stats stats={STATS} />
        <SchoolTeam teachers={teachers} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const teachers = (await getTeachers(locale)) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { teachers, navigations },
    revalidate: 1,
  };
}
