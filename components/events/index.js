import React from "react";

const EventCard = ({ title, coverImage, date, slug, excerpt, idx }) => {
  const BACKGROUND_COLORS = {
    0: "bg-yellow-200",
    1: "bg-purple-25",
    2: "bg-rose-50",
    3: "bg-teal-50",
  };
  return (
    <div
      className={`grid w-full ${BACKGROUND_COLORS[idx]} rounded-2xl sm:grid-cols-12`}
    >
      <div className="h-48 rounded-t-2xl sm:h-full sm:rounded-tr-none sm:rounded-l-2xl sm:col-span-4">
        <img
          src={coverImage}
          className="object-cover object-center w-full h-full rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl"
          alt="Event 01"
        />
      </div>

      <div className="flex flex-col justify-center h-full px-6 py-8 sm:col-span-8 sm:py-10 sm:px-8 lg:px-6 xl:px-8">
        <div>
          <div className="inline-flex items-center justify-center px-3.5 py-0.5 text-sm -rotate-1 bg-purple-200 text-purple-700 font-medium leading-6 align-top rounded-xl">
            Aug. 14, 2021
          </div>
        </div>
        <h4 className="mt-4 text-2xl font-bold text-purple-900 xl:text-3xl lg:text-2xl sm:text-3xl lg:leading-tight xl:leading-tight">
          {title}
        </h4>
        <p className="mt-1 text-purple-800 lg:mt-2">
          {excerpt.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
};

const Events = ({ id, posts }) => {
  return (
    <section
      id={id}
      className="relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto lg:max-w-screen-xl animate-fade-in-up">
        <div>
          <h2 className="text-purple-900 lg:text-center text-5xl font-bold">
            News &amp; Events
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-xl leading-relaxed text-purple-800 lg:mt-4 lg:text-center">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.
          </p>
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 sm:mt-16">
          {posts?.map((post, idx) => (
            <EventCard
              idx={idx}
              key={post.slug}
              coverImage={post?.coverImage?.url}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
