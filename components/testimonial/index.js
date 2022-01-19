import { motion } from "framer-motion";
import { useState } from "react";
import { useIntl } from "react-intl";
const TestimonialCard = ({
  content,
  img,
  title,
  description,
  prevSlide,
  nextSlide,
}) => {
  const variants = {
    enter: () => {
      return {
        opacity: 0,
      };
    },
    center: {
      opacity: 1,
    },
    exit: () => {
      return {
        opacity: 0,
      };
    },
  };
  return (
    <motion.div
      className="px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full w-full"
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <div className="relative">
        <img src="/svg/quote.svg" className="w-6 mb-1" />
        <blockquote className="font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left ml-6">
          {content}
        </blockquote>
      </div>
      <div className="mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left pl-6">
        <img src={img} className="w-24 h-24 rounded-full" />
        <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col">
          <span className="text-lg font-semibold">{title}</span>
          <span className="text-sm font-normal text-gray-700">
            {description}
          </span>
        </div>
        <div className="sm:ml-auto flex">
          <button
            className="text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-left"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="9" y2="16" />
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
          </button>
          <button
            className="text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="15" y1="16" x2="19" y2="12" />
              <line x1="15" y1="8" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
const Testimonial = ({ testimonials }) => {
  const { formatMessage: f } = useIntl();
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const nextCard = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <section className="py-20 bg-purple-600 sm:py-20 lg:py-20 md:mt-12">
      <div className="px-4 mx-auto lg:max-w-screen-2xl sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="max-w-4xl text-center text-white text-5xl sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            {f({
              id: "Home.ParentFeedback",
              defaultMessage: "See what parents are saying about us",
            })}
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-50">
            {f({
              id: "Home.ParentFeedbackSummary",
              defaultMessage:
                "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.",
            })}
          </p>
        </div>
        <div className="flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900">
          {testimonials.map(
            (item, idx) =>
              idx === current && (
                <TestimonialCard
                  key={`testimonial-${idx}-${item?.title}`}
                  content={item?.content}
                  img={item?.photo?.url}
                  title={item?.parent}
                  description={item?.description}
                  prevSlide={prevCard}
                  nextSlide={nextCard}
                />
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
