import Feature from "../components/feature";
import Layout from "../components/layout";
import Stats from "../components/stats";
import Team from "../components/team";
import { getTeachers } from "../lib/api";

export default function About({ teachers }) {
  return (
    <Layout>
      <Feature
        heading={"Teachers and Staff"}
        subHeading={"Blue Sky Academy"}
        description={
          "The school is proud of its strong team of well-qualified and dedicated staff, teachers and academic supervisors who are experienced and popular educators at home and abroad."
        }
      />
      <Stats />
      <Team teachers={teachers} />
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
