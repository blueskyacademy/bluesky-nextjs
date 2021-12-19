export const Gallery = ({ id, title, description }) => {
  return (
    <div
      id={id}
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
      <div className='flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8'>
        <div className='flex items-center mb-5 md:mb-6 group lg:max-w-xl'>
          <a aria-label='Item' className='mr-3'>
            <div className='flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50'>
              <svg
                className='w-12 h-12 text-deep-purple-accent-400'
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
          </a>
          <h2 className='font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl'>
            <span className='inline-block mb-2'>{title}</span>
            <div className='h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100' />
          </h2>
        </div>
        <p className='w-full text-gray-700 lg:text-sm lg:max-w-md'>
          {description}
        </p>
      </div>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>
        <div>
          <img
            className='object-cover w-full h-40 mb-2 rounded shadow-lg md:h-40 xl:h-56'
            src='https://www.bsa.edu.vn/assets/homepage/1-ee8b35ffcebac6a813554184dd7cffd85383b5d0ae0f643319a1c2a0b53a4cd9.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='object-cover w-full h-40 mb-2 rounded shadow-lg md:h-40 xl:h-56'
            src='https://www.bsa.edu.vn/assets/homepage/2-b4157556adcb50984ef632b401bb4d635782b3ca783ab5450282786835184196.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='object-cover w-full h-40 mb-2 rounded shadow-lg md:h-40 xl:h-56'
            src='https://www.bsa.edu.vn/assets/homepage/3-504fc77ab9733f6d81f73bbc22d060d5e408396fdab1402760b1313d115ab5d2.jpg'
            alt=''
          />
        </div>
        <div>
          <img
            className='object-cover w-full h-40 mb-2 rounded shadow-lg md:h-40 xl:h-56'
            src='https://www.bsa.edu.vn/assets/homepage/4-cd40fbe9547374560a8d96c500f582eaf0884f3cafda55b0b3d1ad8c29df03ea.jpg'
            alt=''
          />
        </div>
      </div>
      <div className='text-center'>
        <a className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
          View more
        </a>
      </div>
    </div>
  );
};
export default Gallery;
