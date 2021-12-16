const Cover = ({ heading, description }) => {
  return (
    <>
      <div className='mb-16'>
        <div className='bg-gray-100'>
          <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
              <div>
                <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
                  Blue Sky Academy
                </p>
              </div>
              <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                <span className='relative inline-block'>
                  <svg
                    viewBox='0 0 52 24'
                    fill='currentColor'
                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                  >
                    <defs>
                      <pattern
                        id='dc223fcc-6d72-4ebc-b4ef-abe121034d6e'
                        x='0'
                        y='0'
                        width='.135'
                        height='.30'
                      >
                        <circle cx='1' cy='1' r='.7' />
                      </pattern>
                    </defs>
                    <rect
                      fill='url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)'
                      width='52'
                      height='24'
                    />
                  </svg>
                  <span className='relative'></span>
                </span>{" "}
                {heading}
              </h2>
              <p className='text-base text-gray-700 md:text-lg'>
                {description}
              </p>
            </div>
            <div className='flex items-center sm:justify-center'>
              <button
                type='submit'
                className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-bluesky-900 hover:bg-bluesky-900 focus:shadow-outline focus:outline-none'
              >
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className='relative px-4 sm:px-0'>
          <div className='absolute inset-0 bg-gray-100 h-1/2' />
          <div className='relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md'>
            <div className='inline-block p-8 text-center'>
              <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50'>
                <svg
                  className='w-10 h-10 text-deep-purple-accent-400'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <p className='font-bold tracking-wide text-gray-800'>
                Make it better
              </p>
            </div>
            <div className='inline-block p-8 text-center'>
              <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50'>
                <svg
                  className='w-10 h-10 text-deep-purple-accent-400'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <p className='font-bold tracking-wide text-gray-800'>
                Do it faster
              </p>
            </div>
            <div className='inline-block p-8 text-center'>
              <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50'>
                <svg
                  className='w-10 h-10 text-deep-purple-accent-400'
                  stroke='currentColor'
                  viewBox='0 0 52 52'
                >
                  <polygon
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    fill='none'
                    points='29 13 14 29 25 29 23 39 38 23 27 23'
                  />
                </svg>
              </div>
              <p className='font-bold tracking-wide text-gray-800'>
                Working harder
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cover;
