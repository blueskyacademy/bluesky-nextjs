import GalleryHero from "../components/gallery-hero";
import Layout from "../components/layout";
import SchoolTeam from "../components/school-team";
import { getNavigation, getTeachers } from "../lib/api";
import CTA from "../components/cta";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

const TEACHER_IMAGES = [
  "/images/teachers/MHU08036.jpg",
  "/images/teachers/MHU07825.jpg",
  "/images/teachers/MHU08028.jpg",
  "/images/teachers/MHU08211.jpg",
  "/images/teachers/MHU08556.jpg",
  "/images/teachers/MHU08088.jpg",
  "/images/teachers/Toan_truong_2.jpg",
  "/images/teachers/Van_phong_1.jpg",
  "/images/teachers/Cambridge.jpg",
  "/images/teachers/Hanh_chinh.jpg",
  "/images/teachers/Mam_non.jpg",
  "/images/teachers/Pho_thong.jpg",
  "/images/teachers/Bep.jpg",
  "/images/teachers/Xe_bus.jpg",
  "/images/teachers/VSCN.jpg",
  "/images/teachers/Bao_ve.jpg",
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
