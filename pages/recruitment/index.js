import Layout from "../../components/layout";
import Postions from "../../components/positions";
import Benefits from "../../components/benefits";
import { useHashFragment } from "../../hooks/useHashFragment";
import { getAllJobs } from "../../lib/api";

export default function Recruitment({ allJobs }) {
  useHashFragment();
  return (
    <Layout>
      <img
        className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-fit'
        src='/images/recruitment.png'
        alt=''
      />

      <Postions id='jobs' jobs={allJobs} />
      <Benefits id='benefits' />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allJobs = (await getAllJobs(locale)) ?? [];
  return {
    props: { allJobs },
    revalidate: 1,
  };
}
