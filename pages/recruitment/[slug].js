import { useRouter } from "next/router";
import Job from "../../components/job";
import Layout from "../../components/layout";
import { getAllJobs, getJob, getNavigation } from "../../lib/api";

export default function JobPage({ job, navigations }) {
  const router = useRouter();

  if (!router.isFallback && !job) {
    return <h1>404 - Page Not Found</h1>;
  }
  return (
    <Layout navigations={navigations}>
      {router.isFallback ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="px-0 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
          <Job
            title={job.title}
            start={job.start}
            expire={job.expire}
            introduction={job?.introduction}
            requirement={job.requirement}
            benefit={job.benefit}
          />
        </div>
      )}
    </Layout>
  );
}
export async function getStaticProps({ params, locale }) {
  const data = await getJob(params.slug, locale);
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: {
      job: data ?? null,
      navigations,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths({ locale }) {
  const allJobs = await getAllJobs(locale);

  return {
    paths: allJobs?.map(({ slug }) => `/recruitment/${slug}`) ?? [],
    fallback: true,
  };
}
