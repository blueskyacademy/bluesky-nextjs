import Link from "next/link";
import DateComponent from "../date";

const Position = ({ title, slug, introduction, start, expire }) => {
  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <p className="text-gray-700">
          {" "}
          {start && (
            <>
              <span>From: </span> <DateComponent dateString={start} />
            </>
          )}
        </p>
        <p className="mt-1 text-purple-600">
          {" "}
          {expire && (
            <>
              <span>To: </span> <DateComponent dateString={expire} />
            </>
          )}
        </p>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed">{introduction}</p>
        <Link href={`/recruitment/${slug}`}>
          <a className="text-indigo-500 inline-flex items-center mt-4">
            Read more
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

const Postions = ({ jobs, id }) => {
  return (
    <section
      id={id}
      className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20"
    >
      <div className="mb-10 border-t border-b divide-y-2 px-4 md:px-24 lg:px-8">
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
    </section>
  );
};

export default Postions;
