import { useState } from "react";

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="w-full px-5 py-6 bg-white sm:px-12 sm:py-8 rounded-3xl">
      <button
        className="flex items-center justify-between w-full text-lg sm:text-xl group"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <span className="font-medium text-left text-purple-900 duration-300 ease-in-out group-hover:text-purple-600">
          What are your hours and schedules?
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`flex-shrink-0 w-5 h-6 ml-3 text-purple-700 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6 group-hover:text-purple-600 ${
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
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu
            erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin
            molestie malesuada.
          </div>
        </div>
      )}
    </li>
  );
};
const Faq = () => {
  return (
    <section className="py-20 bg-yellow-100 sm:py-28">
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-purple-900 text-5xl font-bold">
            Frequently asked questions
          </h2>
          <p className="max-w-2xl mt-4 text-xl leading-relaxed text-purple-800 lg:text-left">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
            sem.
          </p>
        </div>
        <ul className="relative mt-12 space-y-6">
          <div>
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
          </div>
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <Question key={`question-${idx}`} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
