import { motion } from "framer-motion";
import { useState } from "react";
import { useIntl } from "react-intl";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="w-full px-5 py-6 sm:px-8 sm:py-4 border border-1 border-primary-100 rounded-2xl">
      <button
        className="flex items-center justify-between w-full text-lg sm:text-xl group"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <span className="text-left text-primary-100 duration-300 ease-in-out font-bold">
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`flex-shrink-0 w-5 h-6 ml-3 text-primary-100 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6  ${
            showAnswer ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {showAnswer && (
        <div className="relative duration-700">
          <div className="mt-3 text-base leading-relaxed text-purple-800 sm:text-lg">
            {answer}
          </div>
        </div>
      )}
    </li>
  );
};
const Faq = ({ id, faq }) => {
  const { formatMessage: f } = useIntl();
  return (
    <motion.section
      className="py-20 sm:py-28"
      id={id}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-primary-100 text-5xl font-bold">
            {f({
              id: "Home.FrequentlyAskedQuestions",
              defaultMessage: "Frequently asked questions",
            })}
          </h2>
          <p className="max-w-2xl mt-4 text-xl leading-relaxed text-primary-100 lg:text-left">
            {f({
              id: "Home.FAQSummary",
              defaultMessage:
                "Blue Sky Academy answers the most frequently asked private school questions regarding our community and admissions process",
            })}
          </p>
        </div>
        <ul className="relative mt-12 space-y-6">
          <div>
            <img
              className="absolute hidden h-auto w-28 -left-40 top-10 sm:block 2xl:-left-60"
              src="svg/question-mark.svg"
              alt=""
            />
            <img
              className="absolute hidden h-auto w-28 -right-40 bottom-10 sm:block 2xl:-right-60"
              src="svg/bulb.svg"
              alt=""
            />
          </div>
          {faq.map((item, idx) => (
            <Question
              key={`question-${idx}`}
              question={item?.question}
              answer={item?.answer}
            />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Faq;
