const AdmissionHero = () => {
  return (
    <section className="relative w-full px-4 py-12 sm:py-12 sm:px-6 xl:px-8">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 md:gap-16 lg:gap-0">
          <div className="flex flex-col justify-center pr-10 xl:pr-0">
            <div>
              {/* <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                Our Preschool Plans
              </span> */}
            </div>
            <h2 className="mt-3.5 sm:mt-4 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold max-w-xl text-purple-900">
              A program for every parent and child
            </h2>
            <p className="max-w-lg mt-3 text-lg leading-relaxed text-purple-800">
              {`We know you care about your child's future. That’s why we offer you the freedom to choose the right program for them. `}
            </p>

            <a
              href=""
              className="mt-6 font-medium text-purple-900 bg-yellow-500 w-[220px] leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group"
            >
              View lastest notice
            </a>

            <div className="mt-8 font-medium lg:mt-10">
              <p className="text-purple-800">
                Want to learn more about steps of admissions
              </p>
              <a
                href=""
                className="mt-1.5 flex items-center py-0.5 px-0 w-[160px] max-w-full leading-6 text-left text-purple-600 no-underline bg-transparent border-b-2 border-purple-600 border-solid cursor-pointer hover:text-purple-500 transition duration-300 ease-in-out hover:border-purple-400 group"
              >
                <span className="text-base font-bold text-left">
                  How to apply ?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid gap-8 mt-14 lg:mt-20 md:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="w-full px-6 py-10 bg-purple-25 rounded-xl lg:px-5 xl:px-10">
              <div className="relative">
                <div className="relative inline-block w-full text-left">
                  <h3 className="relative text-xl font-bold tracking-normal text-purple-900">
                    Fee schedule
                  </h3>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-purple-700 -ml-2 mt-2"
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
                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                  </svg>

                  <div className="mt-2">
                    <h2 className="text-purple-900 h1"></h2>
                    <div className="mt-3">
                      {/* <div className="inline-block h-6 px-3 text-sm font-medium leading-6 text-purple-700 align-top bg-purple-200 -rotate-1 rounded-xl"></div> */}
                    </div>
                    <p className="block w-full mt-6 font-medium text-purple-900">
                      Fee schedule for an annual academic year
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-base">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="ml-2 text-purple-800">Kindergarten</span>
                    </li>

                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="ml-2 text-purple-800">Primary</span>
                    </li>

                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="ml-2 text-purple-800">Secondary</span>
                    </li>
                  </ul>

                  <a
                    href="#"
                    className="mt-6 font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group"
                  >
                    View more
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-6 py-10 bg-yellow-200 lg:-translate-y-20 rounded-xl lg:px-5 xl:px-10">
              <div className="relative">
                <div className="relative inline-block w-full text-left">
                  <h3 className="relative text-xl font-bold tracking-normal text-purple-900">
                    Academic Calendar
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-purple-700 -ml-2 mt-2"
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
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>

                  <div className="mt-2">
                    <h2 className="text-purple-600 h1"></h2>
                    <div className="mt-3">
                      {/* <div className="inline-block h-6 px-3 text-sm font-medium leading-6 text-purple-700 align-top bg-purple-200 -rotate-1 rounded-xl">
                        2020-2021
                      </div> */}
                    </div>
                    <p className="block w-full mt-6 font-medium text-purple-900">
                      View BSA academic calendar
                    </p>
                  </div>

                  <ul className="mt-4 space-y-2 text-base">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="ml-2 text-purple-800">
                        School Events
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="ml-2 text-purple-800">Exam days</span>
                    </li>

                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>

                      <span className="ml-2 text-purple-800">
                        Summer School
                      </span>
                    </li>
                  </ul>

                  <a
                    href=""
                    className="mt-6 font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group"
                  >
                    View detail
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="15" y1="16" x2="19" y2="12" />
                      <line x1="15" y1="8" x2="19" y2="12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;
