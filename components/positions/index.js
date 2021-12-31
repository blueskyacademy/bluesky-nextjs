import Link from "next/link";
import DateComponent from "../date";

const Position = ({ title, slug, introduction, start, expire }) => {
  return (
    <div className="grid py-8 sm:grid-cols-6 pt-10">
      <div className="mb-4 sm:mb-0">
        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
          <p className="text-gray-800">
            {start && <DateComponent dateString={start} />}
          </p>
          <p className="text-deep-purple-accent-400">
            {expire && <DateComponent dateString={expire} />}
          </p>
        </div>
      </div>
      <div className="sm:col-span-4 lg:col-span-4 px-4">
        <div className="mb-3">
          <Link href={`/recruitment/${slug}`}>
            <a className="inline-block transition-colors duration-200 hover:text-deep-purple-accent-700">
              <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-3xl">
                {title}
              </p>
            </a>
          </Link>
        </div>
        <p className="text-gray-700">{introduction}</p>
      </div>
      <div>
        <Link href={`/recruitment/${slug}`}>
          <a className="font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group">
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-3 group-hover:animate-horizontal-bounce"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <line x1="15" y1="16" x2="19" y2="12"></line>
              <line x1="15" y1="8" x2="19" y2="12"></line>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

const Postions = ({ jobs, id }) => {
  return (
    <div
      id={id}
      className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20"
    >
      <div className="mb-10 border-t border-b divide-y px-4 md:px-24 lg:px-8">
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
