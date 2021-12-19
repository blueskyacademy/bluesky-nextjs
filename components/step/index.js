const StepCard = ({ index, title, content }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col items-center mr-4'>
        <div>
          <div className='flex items-center justify-center w-10 h-10 border rounded-full'>
            <svg
              className='w-4 text-gray-600'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              viewBox='0 0 24 24'
            >
              <line
                fill='none'
                strokeMiterlimit='10'
                x1='12'
                y1='2'
                x2='12'
                y2='22'
              />
              <polyline
                fill='none'
                strokeMiterlimit='10'
                points='19,15 12,22 5,15'
              />
            </svg>
          </div>
        </div>
        <div className='w-px h-full bg-gray-300' />
      </div>
      <div className='pt-1 pb-8'>
        <p className='mb-2 text-lg font-bold'>
          Step {index + 1} - {title}
        </p>
        <p className='text-gray-700'>{content}</p>
      </div>
    </div>
  );
};
const Step = ({ id, heading, subHeading }) => {
  const STEPS = [
    {
      title: "Consultation",
      content:
        "Parents will be consulted directly at the school office on curriculum, teaching staff, facilities, fees regulations, services. All questions are also answered any via emails, phones, or our website at www.bsa.edu.vn.",
    },
    {
      title: "Enrollment Documents",
      content:
        "Parents who want their kids to study at BSA can come and see the accounting department to pay the application fee and get the enrollment application forms provided by the school.",
    },
    {
      title: "Interview, entrance exam, placement",
      content:
        "All students enrolled at BSA are required to interview and placement test input to correspond to the current level and the need to learn English. ",
    },
    {
      title: "Payment of fees",
      content:
        "Parents can visit the accounting department to get a full fee breakdown and full payment by cash or bank transfer.",
    },
    {
      title: "Enrollment profile completion",
      content:
        "Parents supplement the following documents to complete the enrollment profile:",
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
                  id='84d09fa9-a544-44bd-88b2-08fdf4cddd38'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)'
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

      <div className='grid gap-6 row-gap-10 lg:grid-cols-2'>
        <div className='lg:py-6 lg:pr-16'>
          {STEPS.map((item, idx) => (
            <StepCard
              key={idx}
              index={idx}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className='relative'>
          <img
            className='inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full'
            // src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
            src='https://www.vas.edu.vn/storage/media/LxQBzIs9A5My3CUowwJRpY0yXRspkv4jCqaazCjR.jpeg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
export default Step;
