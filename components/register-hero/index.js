const RegisterHero = () => {
  return (
    <section className="relative px-4 py-16 overflow-hidden lg:py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
      <img
        src="/svg/dots-large-grid.svg"
        className="absolute right-0 h-auto transform opacity-25 lg:opacity-40 top-12 w-54"
      />
      <img
        src="/svg/dots-large-grid.svg"
        className="absolute h-auto transform opacity-40 -left-36 bottom-36 w-54"
      />

      <div className="max-w-xl mx-auto lg:max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-center lg:col-span-5">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Now register with BSA
            </span>
          </div>

          <div className="relative">
            <h1 className="max-w-xl mt-10 text-purple-900 sm:mt-10 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter lg:max-w-none">
              Get in touch
            </h1>

            <img
              src="/svg/arrow-right-over.svg"
              className="absolute hidden transform -top-3 xl:block md:-right-8 w-14 md:w-32 rotate-12"
              alt=""
            />
          </div>

          <p className="max-w-2xl mt-3 text-xl leading-loose text-purple-800 sm:mt-4">
            Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum
            porta. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-0 xl:pl-12 lg:col-span-7">
          <div className="relative w-full mx-auto sm:grid sm:gap-6 md:max-w-3xl lg:gap-5 lg:max-w-lg sm:grid-cols-4 lg:grid-cols-2 auto-rows-fr">
            <a
              href=""
              className="flex flex-col justify-center w-full p-8 duration-300 ease-in-out transform shadow-lg sm:col-span-2 lg:col-span-1 bg-purple-50 rounded-2xl hover:scale-105 group"
            >
              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-700"
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

                <p className="mt-4 text-xl font-semibold text-purple-900">
                  School Visit Registration
                </p>
                <p className="mt-2 text-sm text-purple-800">
                  Register BSA school visit tour from Mon to Fri
                </p>
              </div>

              <div className="flex justify-end w-full mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600"
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
                  <polyline points="7 7 12 12 17 7" />
                  <polyline points="7 13 12 18 17 13" />
                </svg>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out bg-yellow-200 shadow-lg rounded-2xl sm:mt-0 sm:col-span-2 lg:col-span-1 lg:translate-y-28 hover:scale-105 group"
            >
              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-700"
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
                  <circle cx="6" cy="17" r="2" />
                  <circle cx="18" cy="17" r="2" />
                  <path d="M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8" />
                  <polyline points="16 5 17.5 12 22 12" />
                  <line x1="2" y1="10" x2="17" y2="10" />
                  <line x1="7" y1="5" x2="7" y2="10" />
                  <line x1="12" y1="5" x2="12" y2="10" />
                </svg>
                <p className="mt-4 text-xl font-semibold text-purple-900">
                  Bus Service Registration
                </p>
                <p className="mt-2 text-sm text-purple-800">
                  Choose the bus service for your child conveniently
                </p>
              </div>

              <div className="flex justify-end w-full mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600"
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
                  <polyline points="7 7 12 12 17 7" />
                  <polyline points="7 13 12 18 17 13" />
                </svg>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg bg-rose-50 sm:col-span-2 sm:mt-0 lg:col-span-1 rounded-2xl hover:scale-105 group"
            >
              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-700"
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
                  <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                  <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                  <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                  <line x1="11" y1="6" x2="20" y2="6" />
                  <line x1="11" y1="12" x2="20" y2="12" />
                  <line x1="11" y1="18" x2="20" y2="18" />
                </svg>
                <p className="mt-4 text-xl font-semibold text-purple-900">
                  Entrance Exam Registration
                </p>
                <p className="mt-2 text-sm text-purple-800">
                  Confidently choose the best program for your child
                </p>
              </div>

              <div className="flex justify-end w-full mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600"
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
                  <polyline points="7 7 12 12 17 7" />
                  <polyline points="7 13 12 18 17 13" />
                </svg>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg sm:mt-0 lg:col-start-auto sm:col-span-2 lg:col-span-1 lg:translate-y-28 bg-teal-50 rounded-2xl hover:scale-105 group"
            >
              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-700"
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
                  <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                  <circle cx="18" cy="18" r="4" />
                  <path d="M15 3v4" />
                  <path d="M7 3v4" />
                  <path d="M3 11h16" />
                  <path d="M18 16.496v1.504l1 1" />
                </svg>

                <p className="mt-4 text-xl font-semibold text-purple-900">
                  Weekly Schedule
                </p>
                <p className="mt-2 text-sm text-purple-800">
                  {`Easily update weekly timetable and meal menu`}
                </p>
              </div>

              <div className="flex justify-end w-full mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600"
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
                  <polyline points="7 7 12 12 7 17" />
                  <polyline points="13 7 18 12 13 17" />
                </svg>
              </div>
            </a>

            <a
              href=""
              className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg bg-blue-50 sm:mt-0 sm:col-span-2 lg:col-span-1 rounded-2xl sm:col-start-2 hover:scale-105 group"
            >
              <div className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-purple-700"
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
                  <line x1="15" y1="8" x2="15.01" y2="8" />
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                  <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                </svg>

                <p className="mt-4 text-xl font-semibold text-purple-900">
                  School Gallery
                </p>
                <p className="mt-2 text-sm text-purple-800">
                  View our school gallery and video
                </p>
              </div>

              <div className="flex justify-end w-full mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600"
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
                  <polyline points="7 7 12 12 7 17" />
                  <polyline points="13 7 18 12 13 17" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterHero;
