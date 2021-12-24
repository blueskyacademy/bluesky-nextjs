import GalleryHero from "../components/gallery-hero";
import Layout from "../components/layout";
import SchoolTeam from "../components/school-team";
import Stats from "../components/stats";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { getTeachers } from "../lib/api";
import CTA from "../components/cta";
import Founders from "../components/founders";

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
export default function About({ teachers }) {
  return (
    <Layout>
      <AnimationRevealPage>
        <GalleryHero
          title="Our teachers"
          description={
            "At Blue Sky Academy, we pride ourselves on the quality of our teachers. We commit to creating a positive classroom experience for all students, no matter their learning needs."
          }
        />
        <Founders />
        <Stats stats={STATS} />
        <SchoolTeam teachers={teachers} />
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const teachers = (await getTeachers(locale)) ?? [];

  return {
    props: { teachers },
    revalidate: 1,
  };
}
