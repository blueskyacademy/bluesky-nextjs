import { useRouter } from "next/router";
import Job from "../../components/job";
import Layout from "../../components/layout";
import { getAllJobs, getJob } from "../../lib/api";

export default function JobPage({ job }) {
  const router = useRouter();

  if (!router.isFallback && !job) {
    return <h1>404 - Page Not Found</h1>;
  }
  return (
    <Layout>
      <div className='bg-gray-100'>
        <div className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 '>
          <div className='flex flex-col justify-between lg:flex-row w-full'>
            <Job
              title={job.title}
              start={job.start}
              expire={job.expire}
              requirement={job.requirement}
              benefit={job.benefit}
            />

            <div className='bg-white rounded shadow-2xl p-7 sm:p-10 h-1/2'>
              <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
                Apply now
              </h3>
              <form>
                <div className='mb-1 sm:mb-2'>
                  <label
                    htmlFor='firstName'
                    className='inline-block mb-1 font-medium'
                  >
                    Fullname
                  </label>
                  <input
                    placeholder='Fullname'
                    required
                    type='text'
                    className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                    id='fullName'
                    name='fullName'
                  />
                </div>
                <div className='mb-1 sm:mb-2'>
                  <label
                    htmlFor='email'
                    className='inline-block mb-1 font-medium'
                  >
                    Email
                  </label>
                  <input
                    placeholder='email@example.com'
                    required
                    type='text'
                    className='flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline'
                    id='email'
                    name='email'
                  />
                </div>
                <div className='mb-1 sm:mb-2'>
                  <label
                    htmlFor='email'
                    className='inline-block mb-1 font-medium'
                  >
                    CV / Resume
                  </label>
                  <label className='w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-deep-purple-accent-400 hover:text-white'>
                    <svg
                      className='w-8 h-8'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
                    </svg>
                    <span className='mt-2 text-base leading-normal'>
                      Select a file
                    </span>
                    <input type='file' className='hidden' />
                  </label>
                </div>

                <div className='mt-4 mb-2 sm:mb-4'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className='w-1'></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps({ params, locale }) {
  const data = await getJob(params.slug, locale);

  return {
    props: {
      job: data ?? null,
    },
  };
}

export async function getStaticPaths({ locale }) {
  const allJobs = await getAllJobs(locale || "en-US");

  return {
    paths: allJobs?.map(({ slug }) => `/recruitment/${slug}`) ?? [],
    fallback: true,
  };
}
