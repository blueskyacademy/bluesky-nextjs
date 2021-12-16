import Link from "next/link";
import DateComponent from "../date";

const Position = ({ title, slug, introduction, start, expire }) => {
  return (
    <div className='grid py-8 sm:grid-cols-4 pt-10'>
      <div className='mb-4 sm:mb-0'>
        <div className='space-y-1 text-xs font-semibold tracking-wide uppercase'>
          <p className='text-gray-800'>
            {start && <DateComponent dateString={start} />}
          </p>
          <p className='text-deep-purple-accent-400'>
            {expire && <DateComponent dateString={expire} />}
          </p>
        </div>
      </div>
      <div className='sm:col-span-3 lg:col-span-2'>
        <div className='mb-3'>
          <Link href={`/recruitment/${slug}`}>
            <a className='inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700'>
              <p className='text-3xl font-extrabold leading-none sm:text-4xl xl:text-3xl'>
                {title}
              </p>
            </a>
          </Link>
        </div>
        <p className='text-gray-700'>{introduction}</p>
      </div>
      <Link href={`/recruitment/${slug}`}>
        <a
          href='#'
          className='inline-flex items-center justify-center h-12 w-36 px-6 mr-6 ml-10 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
        >
          Read more
        </a>
      </Link>
    </div>
  );
};

const Postions = ({ jobs, id }) => {
  return (
    <div
      id={id}
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
    >
      <div className='mb-10 border-t border-b divide-y'>
        {jobs.map((item, idx) => (
          <Position
            key={`position-${idx}`}
            title={item.title}
            slug={item.slug}
            introduction={item.introduction}
            start={item.start}
            expire={item.expire}
          />
        ))}
      </div>
    </div>
  );
};

export default Postions;
