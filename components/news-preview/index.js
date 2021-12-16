const NewsPreview = () => {
  return (
    <div className='bg-gray-100'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-100'>
        <div className='grid gap-10 row-gap-8 lg:grid-cols-5'>
          <div className='lg:col-span-2'>
            <p className='mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase'>
              20 Nov 2020
            </p>
            <div className='mb-3'>
              <a
                aria-label='Article'
                className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400'
              >
                <p className='font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl'>
                  What it means when a man falls from outer space
                </p>
              </a>
            </div>
            <p className='mb-4 text-base text-gray-700 md:text-lg'>
              Call it magical realism, call it realistic fantasy—call it
              whatever you want, but Arimahs playfully subversive style is
              wholly her own.
            </p>
            <div className='flex items-center'>
              <a aria-label='Author' className='mr-3'>
                <img
                  alt='avatar'
                  src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                  className='object-cover w-10 h-10 rounded-full shadow-sm'
                />
              </a>
              <div>
                <a
                  aria-label='Author'
                  className='font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                >
                  Petru Vîrtos
                </a>
                <p className='text-sm font-medium leading-4 text-gray-600'>
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-8 lg:col-span-3'>
            <div>
              <p className='mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase'>
                14 Jul 2020
              </p>
              <div className='mb-3'>
                <a
                  aria-label='Article'
                  className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400'
                >
                  <p className='font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl'>
                    Mascarpone cheese triangles taleggio
                  </p>
                </a>
              </div>
              <p className='mb-4 text-base text-gray-700 md:text-lg'>
                Brie cheese triangles cheesecake. Cauliflower cheese cheese and
                wine manchego bocconcini croque monsieur queso airedale brie.
              </p>
              <div className='flex items-center'>
                <a aria-label='Author' className='mr-3'>
                  <img
                    alt='avatar'
                    src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
                    className='object-cover w-10 h-10 rounded-full shadow-sm'
                  />
                </a>
                <div>
                  <a
                    aria-label='Author'
                    className='font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                  >
                    Alex Stratulat
                  </a>
                  <p className='text-sm font-medium leading-4 text-gray-600'>
                    Author
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className='mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase'>
                18 Mar 2020
              </p>
              <div className='mb-3'>
                <a
                  aria-label='Article'
                  className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400'
                >
                  <p className='font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl'>
                    The quick, brown fox jumps over a lazy dog
                  </p>
                </a>
              </div>
              <p className='mb-4 text-base text-gray-700 md:text-lg'>
                A kitten, a nice little, sleek playful kitten, that I can play
                with, and teach, and feed--and feed--and feed! I was not
                unprepared for this request, for I had noticed how his pets went
                on increasing in size.
              </p>
              <div className='flex items-center'>
                <a aria-label='Author' className='mr-3'>
                  <img
                    alt='avatar'
                    src='https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                    className='object-cover w-10 h-10 rounded-full shadow-sm'
                  />
                </a>
                <div>
                  <a
                    aria-label='Author'
                    className='font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400'
                  >
                    Susie the Cat
                  </a>
                  <p className='text-sm font-medium leading-4 text-gray-600'>
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-6'>
          <a
            aria-label=''
            className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
          >
            See all articles
            <svg
              className='inline-block w-3 ml-2'
              fill='currentColor'
              viewBox='0 0 12 12'
            >
              <path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsPreview;
