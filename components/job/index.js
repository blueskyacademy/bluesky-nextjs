import DateComponent from "../date";

const Job = ({ title, start, expire, requirement, benefit }) => {
  return (
    <div className='mb-12 lg:max-w-lg lg:pr-5 lg:mb-0 w-full'>
      <div className='max-w-xl mb-6'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none'>
          {title}
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Posted on {start && <DateComponent dateString={start} />}
        </p>
        <p className='text-base text-gray-700 md:text-lg'>
          Expire on {expire && <DateComponent dateString={expire} />}
        </p>
      </div>
      <hr className='my-6 border-gray-300' />
      <div className='flex flex-col'>
        <h3 className='max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none'>
          What we are looking for
        </h3>
        <div
          className='leading-loose'
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {requirement}
        </div>
      </div>
      <hr className='my-6 border-gray-300' />
      <div className='flex flex-col'>
        <h3 className='max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none'>
          Benefits
        </h3>
        <div
          className='leading-loose'
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {benefit}
        </div>
      </div>
      <hr className='my-6 border-gray-300' />
      <div className='flex flex-col'>
        <h3 className='max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none'>
          Apply
        </h3>
        <div className='leading-loose'>
          Interested candidates: kindly send your resume and a cover letter to
          jobs@bsa.edu.vn. Feel free to send along any questions about the job
          opportunity, us, or about Vietnam in general.
        </div>
      </div>
      <div className='mt-4 mb-2 sm:mb-4'>
        <a
          rel='noopener noreferrer'
          target='_blank'
          href='https://docs.google.com/forms/d/e/1FAIpQLSfRWUwfBf9mbxEs_fZbTI5KY2r7o1i9PJYWGPvgVlEhKP99Bw/viewform?usp=sf_link'
          className='inline-flex items-center justify-center w-1/3 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
        >
          Online Form
        </a>
      </div>
    </div>
  );
};

export default Job;
