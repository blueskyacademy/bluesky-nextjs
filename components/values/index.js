import { motion } from "framer-motion";
import { useIntl } from "react-intl";
const Values = ({ id }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section
      id={id}
      className="relative w-full px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-xl mx-auto lg:max-w-screen-xl"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="max-w-4xl text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "About.CoreValues",
                defaultMessage: "Core Values",
              })}
            </h2>
          </div>
          <div className="flex items-center mt-6 lg:mt-0">
            <p className="text-xl leading-relaxed text-purple-800">
              {f({
                id: "About.CoreValuesSummary",
                defaultMessage: `Blue Sky Academy’s education system is based on UNESCO’s Four
              Pillars of Learning`,
              })}
            </p>
          </div>
        </div>

        <div className="grid gap-8 mt-12 sm:max-w-none sm:grid-cols-2 sm:mt-14 lg:mt-24 lg:grid-cols-4 sm:gap-6 xl:gap-12">
          <div className="flex flex-col items-center justify-center px-4 py-6 bg-yellow-200 sm:p-8 sm:py-10 rounded-2xl">
            <span className="flex items-center justify-center bg-yellow-400 shadow-md rounded-2xl w-14 h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-700"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="10" x2="9.01" y2="10" />
                <line x1="15" y1="10" x2="15.01" y2="10" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
                <path d="M12 3a2 2 0 0 0 0 4" />
              </svg>
            </span>
            <h4 className="mt-4 text-xl font-semibold text-center text-purple-900">
              {f({
                id: "About.LearningToKnow",
                defaultMessage: "Learning to know",
              })}
            </h4>
            <div className="w-8 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 my-2 rounded-2xl"></div>
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-6 sm:p-8 sm:py-10 rounded-2xl bg-purple-50">
            <span className="flex items-center justify-center bg-purple-200 shadow-md rounded-2xl w-14 h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-700"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="5" width="16" height="16" rx="2" />
                <line x1="16" y1="3" x2="16" y2="7" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="4" y1="11" x2="20" y2="11" />
                <line x1="10" y1="16" x2="14" y2="16" />
              </svg>
            </span>
            <h4 className="mt-4 text-xl font-semibold text-center text-purple-900">
              {f({
                id: "About.LearningToDo",
                defaultMessage: "Learning to do",
              })}
            </h4>
            <div className="w-8 h-1.5 bg-gradient-to-r from-purple-200 to-purple-300 my-2 rounded-2xl"></div>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-6 sm:p-8 sm:py-10 rounded-2xl bg-rose-50">
            <span className="flex items-center justify-center shadow-md rounded-2xl w-14 h-14 bg-rose-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-800"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </span>
            <h4 className="mt-4 text-xl font-semibold text-center text-purple-900">
              {f({
                id: "About.LearningToBe",
                defaultMessage: "Learning to be",
              })}
            </h4>
            <div className="w-8 h-1.5 bg-gradient-to-r from-rose-100 to-rose-300 my-2 rounded-2xl"></div>
          </div>

          <div className="flex flex-col items-center justify-center px-4 py-6 sm:p-6 sm:py-10 bg-blue-50 rounded-2xl">
            <span className="flex items-center justify-center bg-blue-200 shadow-md rounded-2xl w-14 h-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-800"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
            </span>
            <h4 className="mt-4 text-xl font-semibold text-center text-purple-900">
              {f({
                id: "About.LearningToLiveTogether",
                defaultMessage: "Learning to live together",
              })}
            </h4>
            <div className="w-8 h-1.5 bg-gradient-to-r from-blue-100 to-blue-300 my-2 rounded-2xl"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Values;
