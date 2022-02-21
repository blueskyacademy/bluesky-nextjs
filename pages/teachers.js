import GalleryHero from "../components/gallery-hero";
import Layout from "../components/layout";
import SchoolTeam from "../components/school-team";
import { getNavigation, getTeachers } from "../lib/api";
import CTA from "../components/cta";
import { useIntl } from "react-intl";

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
      <div className="mt-24">
        <SchoolTeam teachers={teachers} />
      </div>
      <CTA />
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
