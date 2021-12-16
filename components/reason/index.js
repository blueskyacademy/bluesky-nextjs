const ReasonCard = ({ title, content }) => {
  return (
    <div className='relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl'>
      <div className='absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
      <div className='absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100' />
      <div className='absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100' />
      <div className='absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100' />
      <div className='relative p-5 bg-white rounded-sm'>
        <div className='flex flex-col mb-2 lg:items-center lg:flex-row'>
          <div className='flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0'>
            <svg
              className='w-8 h-8 text-deep-purple-accent-400'
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
          <h6 className='font-semibold leading-5'>{title}</h6>
        </div>
        <p className='mb-2 text-sm text-gray-900'>{content}</p>
        <a
          aria-label=''
          className='inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
        >
          {/* Learn more */}
        </a>
      </div>
    </div>
  );
};
const Reason = ({ heading }) => {
  const REASONS = [
    {
      title: "Values for students",
      content:
        "National and International Certification. Bilingual Education Programme with strong English language development",
    },
    {
      title: "Values for parents",
      content:
        "Strong communication with parents for updating students’ study progress and status.Financial support (from promotion policy)",
    },
    {
      title: "Values for society",
      content:
        "Sharing of modern and updated teaching methods. Sharing of education projects and events. Activities toward communities",
    },
  ];
  return (
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
                  id='18302e52-9e2a-4c8e-9550-0cbb21b38e55'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'></span>
          </span>{" "}
          {heading}
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          {/* Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. */}
        </p>
      </div>
      <div className='grid gap-8 row-gap-5 lg:grid-cols-3'>
        {REASONS.map((item) => (
          <ReasonCard
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Reason;
