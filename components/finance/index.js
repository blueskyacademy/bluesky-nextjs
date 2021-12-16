const Finance = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 md:grid-cols-2'>
        <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
          <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
          <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100' />
          <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
          <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100' />
          <div className='relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row'>
            <div className='mb-6 mr-6 lg:mb-0'>
              <div className='flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32'>
                <svg
                  className='w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20'
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
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <div>
                <h6 className='mb-2 font-semibold leading-5'>
                  Financial policies
                </h6>
                <p className='mb-2 text-sm text-gray-900'>
                  General information about tuition fees, other fees in details
                  and supporting policies to help parents with financial plans
                  for their children study at BSA.
                </p>
              </div>
              <a
                aria-label=''
                className='inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
          <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
          <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100' />
          <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
          <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100' />
          <div className='relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row'>
            <div className='mb-6 mr-6 lg:mb-0'>
              <div className='flex items-center justify-center w-20 h-20 rounded-full bg-indigo-50 lg:w-32 lg:h-32'>
                <svg
                  className='w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20'
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
            </div>
            <div className='flex flex-col justify-between flex-grow'>
              <div>
                <h6 className='mb-2 font-semibold leading-5'>Registration</h6>
                <p className='mb-2 text-sm text-gray-900'>
                  Parents can leave your inquiries for further contact or
                  download enrollment form here
                </p>
              </div>
              <a
                aria-label=''
                className='inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
