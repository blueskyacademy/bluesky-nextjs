const Values = ({ heading, subHeading, id }) => {
  const VALUES = [
    "Learning to know",
    "Learning to do",
    "Learning to live together",
    "Learning to be",
  ];
  return (
    <div id={id}>
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
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='9012817d-af60-45bb-9786-89646bc1c945'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#9012817d-af60-45bb-9786-89646bc1c945)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'></span>
            </span>{" "}
            {heading}
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>{subHeading}</p>
        </div>
        <div className='max-w-lg space-y-3 sm:mx-auto lg:max-w-xl'>
          {VALUES.map((item) => (
            <div
              key={item}
              className='flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400'
            >
              <div className='mr-2'>
                <svg
                  className='w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8'
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
              <span className='text-gray-800 transition-colors duration-200 group-hover:text-white'>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Values;
