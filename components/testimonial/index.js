const TestimonialCard = ({ content, img, title, description }) => {
  return (
    <div className='lg:w-1/2'>
      <div
        className='bg-white border rounded-md border-gray-200 relative sm:p-10 p-6 shadow'
        style={{ minHeight: "200px" }}
      >
        <div>
          <img
            src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg1.svg'
            alt='commas'
          />
        </div>
        <p className='text-base leading-6 text-gray-600 mt-4'>{content}</p>
        <div className='absolute bottom-0 -mb-4 ml-10'>
          <img
            src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg'
            alt='sharp'
          />
        </div>
      </div>
      <div className='flex items-center mt-7'>
        <div className='w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center'>
          <img src={img} className='w-10 h-10 rounded-full' alt='profile' />
        </div>
        <div className='flex flex-col items-start ml-4'>
          <p className='text-base font-semibold leading-4 text-gray-800'>
            {title}
          </p>
          <p className='text-base leading-4 mt-2 text-center text-gray-600'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = ({ id, testimonials }) => {
  return (
    <div id={id}>
      <div className='lg:px-20 md:px-6 px-4 py-12 '>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='lg:text-4xl text-3xl font-bold text-center text-gray-800'>
            Hear from our parents
          </h1>
          <p className='text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 '>
            Here is why you should trust us with your work achievements
          </p>
        </div>
        <div className='w-full lg:flex items-center gap-6 mt-10'>
          {testimonials.map((item, idx) => (
            <TestimonialCard
              key={`testimonial-${idx}`}
              content={item?.content}
              img={item?.photo?.url}
              title={item?.parent}
              description={item?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
