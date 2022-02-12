import { motion } from "framer-motion";
import { useState } from "react";
import { useIntl } from "react-intl";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="w-full px-5 py-6 sm:px-8 sm:py-4 border-b border-1 border-primary-100">
      <button
        className="flex items-center justify-between w-full text-lg sm:text-xl group"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <span className="text-left text-primary-100 duration-300 ease-in-out font-bold">
          {question}
        </span>
        {!showAnswer ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-3 text-primary-100"
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
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 ml-3 text-primary-100"
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
          </svg>
        )}
      </button>
      {showAnswer && (
        <div className="relative duration-700">
          <div className="my-3 text-base leading-relaxed text-purple-800 sm:text-lg">
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
        <div className="max-w-screen">
          <h2 className="text-primary-100 text-5xl font-bold text-center">
            {f({
              id: "Home.FrequentlyAskedQuestions",
              defaultMessage: "Frequently asked questions",
            })}
          </h2>
          <p className="max-w-screen-xl mt-4 text-xl leading-relaxed text-primary-100 text-center">
            {f({
              id: "Home.FAQSummary",
              defaultMessage:
                "Blue Sky Academy answers the most frequently asked private school questions regarding our community and admissions process",
            })}
          </p>
        </div>
        <ul className="relative mt-12 space-y-6">
          {/* <div>
            <img
              className="absolute hidden h-auto w-28 -left-60 top-10 2xl:block"
              src="svg/question-mark.svg"
              alt=""
            />
            <img
              className="absolute hidden h-auto w-28 -right-60 bottom-10 2xl:block"
              src="svg/bulb.svg"
              alt=""
            />
          </div> */}
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
