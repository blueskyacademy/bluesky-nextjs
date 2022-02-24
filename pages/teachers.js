import GalleryHero from "../components/gallery-hero";
import Layout from "../components/layout";
import SchoolTeam from "../components/school-team";
import { getNavigation, getTeachers } from "../lib/api";
import CTA from "../components/cta";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

const TEACHER_IMAGES = [
  "/images/teacher-01.jpg",
  "/images/teacher-02.jpg",
  "/images/teacher-03.jpg",
  "/images/teacher-04.jpg",
  "/images/teacher-05.jpg",
];
export default function About({ teachers, navigations }) {
  const { formatMessage: f } = useIntl();
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout navigations={navigations}>
      <GalleryHero
        title={f({
          id: "Teacher.OurTeachers",
          defaultMessage: "Our Teacher",
        })}
        subTitle={f({
          id: "Teacher.WeAreBSATeam",
          defaultMessage: "We are BSA's TEAM!",
        })}
        description={f({
          id: "Teacher.WePrideOurselves",
          defaultMessage:
            "We do believe that educating is one of the most challenging jobs in the world. We inspire, motivate, encourage, support and educate Children. We also believe in the power of fun inside and outside of the workplace. Hence, we enjoy daily work by watching student's improvement and happiness. Simultaneously, we bring and share the joy into our team after school. Together, we make team spirit, laughter, motivation, fostering innovation and creativity. We are BSA's TEAM!",
        })}
        descriptionSize={locale == "vi" ? "max-w-screen-xl" : "max-w-screen-lg"}
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
