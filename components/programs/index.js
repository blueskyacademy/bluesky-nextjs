import { motion } from "framer-motion";
import Link from "next/link";
import { useIntl } from "react-intl";

const Programs = ({ id }) => {
  const { formatMessage: f } = useIntl();
  return (
    <div id={id}>
      <div className="px-4 overflow-hidden md:pb-0 sm:pt-24 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto md:max-w-screen-xl">
          <motion.div
            className="md:grid md:grid-cols-2 md:gap-12 lg:gap-12 "
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: "-20%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <h2 className="max-w-4xl text-purple-900 h2 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
                {f({
                  id: "Home.EducationProgram",
                  defaultMessage: "Education Program",
                })}
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-purple-800 sm:mt-5 lg:text-left">
                {f({
                  id: "Home.OverviewCurriculum",
                  defaultMessage: `Overview of the curriculum at Blue Sky Academy School system is
                designed exclusively for three levels: kindergarten, primary
                school and secondary.`,
                })}
              </p>
            </div>
          </motion.div>

          <div className="mt-16 md:mt-72 md:grid md:grid-cols-2 md:gap-8 lg:gap-16">
            <motion.div
              className="relative"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src="/svg/curved-dotted-line.svg"
                className="absolute top-0 hidden -translate-y-1/2 md:block left-1/2"
                style={{ width: `calc(50% + 4rem)` }}
              />

              <div className="relative z-10 w-full px-8 py-10 sm:p-12 md:px-8 md:py-10 lg:p-12 bg-blue-50 rounded-3xl">
                <div className="flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-blue-900 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold;">
                      {f({
                        id: "Home.PrimarySchool",
                        defaultMessage: "Primary School",
                      })}
                    </h3>
                    <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                      {f({
                        id: "Home.PrimaryDescription",
                        defaultMessage: `The program prepares students for their higher education, build upon a solid base of academics, understanding and a sense of beauty and technology`,
                      })}
                    </p>
                    <div className="relative mt-8 aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover rounded-2xl"
                        src="/images/primary.png"
                        alt="Program 01"
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/programs/primary">
                      <a className="font-medium text-white bg-blue-900 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-blue-500 group">
                        {f({
                          id: "Home.LearnMore",
                          defaultMessage: "Learn more",
                        })}
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
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <line x1="15" y1="16" x2="19" y2="12"></line>
                          <line x1="15" y1="8" x2="19" y2="12"></line>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <img
                src="/svg/looped-dotted-line.svg"
                className="hidden md:block absolute bottom-0 left-1/2 translate-y-[90%]"
                style={{ width: `calc(50% + 4rem)` }}
              />
            </motion.div>

            <motion.div
              className="relative w-full px-8 py-10 mt-12 bg-red-50 sm:p-12 md:mt-0 md:px-8 md:py-10 lg:p-12 rounded-3xl"
              initial={{ y: "0%", opacity: 0 }}
              whileInView={{ y: "-50%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-red-900 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold;">
                    {f({
                      id: "Home.Kindergarten",
                      defaultMessage: "Kindergarten",
                    })}
                  </h3>
                  <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                    {f({
                      id: "Home.KindergartenDescription",
                      defaultMessage: `In this education environment, each child is well equipped
                    to acquire knowledge and life skills in the following years`,
                    })}
                  </p>
                  <div className="relative mt-8 aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover rounded-2xl"
                      src="/images/kindergarten.png"
                      alt="Program 02"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/programs/kindergarten">
                    <a className="font-medium text-white bg-red-800 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-red-500 group">
                      {f({
                        id: "Home.LearnMore",
                        defaultMessage: "Learn more",
                      })}
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="15" y1="16" x2="19" y2="12"></line>
                        <line x1="15" y1="8" x2="19" y2="12"></line>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative w-full px-8 py-10 mt-12 sm:p-12 md:mt-0 md:col-start-2 md:px-8 md:py-10 lg:p-12 bg-green-50 rounded-3xl"
              initial={{ y: "0%", opacity: 0 }}
              whileInView={{ y: "-40%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-green-900 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold;">
                    {f({
                      id: "Home.Secondary",
                      defaultMessage: "Secondary",
                    })}
                  </h3>
                  <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                    {f({
                      id: "Home.SecondaryDescription",
                      defaultMessage:
                        "Student are trained to be well-immersed in society, live independently and to quickly and efficient solve problems, we have created a community for indepedent individuals to learn to live together",
                    })}
                  </p>
                  <div className="relative mt-8 aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover rounded-2xl"
                      src="/images/secondary.png"
                      alt="Program 03"
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/programs/secondary">
                    <a className="font-medium text-white bg-green-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-green-500 group">
                      {f({
                        id: "Home.LearnMore",
                        defaultMessage: "Learn more",
                      })}
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
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="15" y1="16" x2="19" y2="12"></line>
                        <line x1="15" y1="8" x2="19" y2="12"></line>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
