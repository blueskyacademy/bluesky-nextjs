import { motion } from "framer-motion";
import React from "react";
import DateComponent from "../date";
import { useIntl } from "react-intl";

const EventCard = ({ title, coverImage, date, slug, excerpt, idx }) => {
  const BACKGROUND_COLORS = {
    0: "bg-yellow-200",
    1: "bg-purple-25",
    2: "bg-rose-50",
    3: "bg-teal-50",
  };
  return (
    <motion.div
      className={`grid w-full ${BACKGROUND_COLORS[idx]} rounded-2xl sm:grid-cols-12`}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      initial={{ y: "50%", opacity: 0 }}
      whileInView={{ y: "0", opacity: 1 }}
    >
      {idx % 2 === 0 && (
        <div className="h-48 rounded-t-2xl sm:h-full sm:rounded-tr-none sm:rounded-l-2xl sm:col-span-4">
          <img
            src={coverImage}
            className="object-cover object-center w-full h-full rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl"
            alt="Event 01"
          />
        </div>
      )}

      <div className="flex flex-col justify-center h-full px-6 py-8 sm:col-span-8 sm:py-10 sm:px-8 lg:px-6 xl:px-8">
        <div>
          <div className="inline-flex items-center justify-center px-3.5 py-0.5 text-sm -rotate-1 bg-purple-200 text-purple-700 font-medium leading-6 align-top rounded-xl">
            <DateComponent dateString={date} />
          </div>
        </div>
        <h4 className="mt-4 text-2xl font-bold text-purple-900 xl:text-3xl lg:text-2xl sm:text-3xl lg:leading-tight xl:leading-tight">
          {title}
        </h4>
        <p className="mt-1 text-purple-800 lg:mt-2">
          {excerpt.slice(0, 100)}...
        </p>
      </div>
      {idx % 2 !== 0 && (
        <div className="order-1 h-48 sm:order-2 rounded-t-2xl sm:h-full sm:rounded-tl-none sm:rounded-r-2xl sm:col-span-4">
          <img
            src={coverImage}
            className="object-cover object-center w-full h-full rounded-t-2xl sm:rounded-tl-none sm:rounded-r-2xl"
            alt="Event 01"
          />
        </div>
      )}
    </motion.div>
  );
};

const Events = ({ id, posts }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section
      id={id}
      className="relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8"
    >
      <div className="max-w-2xl mx-auto lg:max-w-screen-xl animate-fade-in-up">
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
        >
          <h2 className="text-purple-900 lg:text-center text-5xl font-bold">
            {f({
              id: "Home.NewsAndEvents",
              defaultMessage: "News and Events",
            })}
          </h2>
          <p className="max-w-3xl mx-auto mt-3 text-xl leading-relaxed text-purple-800 lg:mt-4 lg:text-center">
            {f({
              id: "Home.NewsSummary",
              defaultMessage:
                "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.",
            })}
          </p>
        </motion.div>

        <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8 sm:mt-16">
          {posts?.map((post, idx) => (
            <EventCard
              idx={idx}
              key={post.slug}
              coverImage={post?.coverImage?.url}
              title={post.title}
              excerpt={post.excerpt}
              date={post?.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
