const Box = ({ title, description }) => {
  return (
    <div className='flex flex-col max-w-md sm:mx-auto sm:flex-row'>
      <div className='mr-4'>
        <div className='flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50'>
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
      </div>
      <div>
        <h6 className='mb-3 text-xl font-bold leading-5'>{title}</h6>
        <p className='mb-3 text-sm text-gray-900'>{description}</p>
        {/* <a
          aria-label=''
          className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
        >
          Learn more
        </a> */}
      </div>
    </div>
  );
};

const Certificate = ({ id }) => {
  const CERTIFICATES = [
    {
      title: "Members of Cambridge Schools",
      description:
        "VAS is recognized as a Cambridge School by Cambridge Assessment International Education (CAIE). CAIE is a leading organization that provides a variety of education programs and qualifications for international students.",
    },
    {
      title: "Test Delivery Center ICDL",
      description:
        "ICDL Test Delivery Center, authorized by ICDL International. Students can also achieve international ICT certificates, namely ICDL Starter and Full License, as part of the school’s curriculum.",
    },
    {
      title: "Test Delivery Center IELTS",
      description:
        "IELTS Test Delivery Center, approved by the British Council, IDP Education and Cambridge University, the center is based at the school. This allows students to take IELTS General Training and Academic IELTS.",
    },
    {
      title: "The certificates of CAIE",
      description:
        "The certificates of Cambridge Assessment International Education: VAS has registered as a Cambridge International School",
    },
  ];
  return (
    <div
      id={id}
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
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
                  id='27df4f81-c854-45de-942a-fe90f7a300f9'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#27df4f81-c854-45de-942a-fe90f7a300f9)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>International</span>
          </span>{" "}
          incredition
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Since February 2017, Blue Sky Academy is recognized as a Cambridge
          School by Cambridge International Examinations (CIE) - a leading
          organization that provides a variety of education programs and
          qualifications for international students from 5 to 19 years old.
        </p>
      </div>
      <div className='grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2'>
        {CERTIFICATES.map((item, idx) => (
          <Box
            title={item.title}
            description={item.description}
            key={`box-certificate-${item.title}`}
          />
        ))}
      </div>
    </div>
  );
};
export default Certificate;
