const Intro = ({ id }) => {
  return (
    <div id={id}>
      <div className="w-full h-32 sm:h-40 xl:h-48 bg-gradient-to-b from-purple-25 to-yellow-100"></div>
      <section className="px-4 pb-16 overflow-hidden bg-yellow-100  sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative">
            <h2 className="max-w-4xl mx-auto text-center text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              Providing the best possible start to your childrens education
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800"></p>
          </div>

          <div className="max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24">
            <div className="relative lg:col-span-6">
              <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
                <div className="aspect-w-3 aspect-h-4 rounded-2xl">
                  <img
                    className="object-cover rounded-2xl"
                    src="images/primary.png"
                    alt="Home blocks 01"
                  />
                </div>
                <div className="absolute bottom-0 left-0 hidden sm:block sm:translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                  <img
                    className="object-cover w-full h-full rounded-3xl"
                    src="images/kindergarten.png"
                    alt="Home blocks 02"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center mt-16 sm:mt-44 lg:mt-0 lg:col-span-6">
              <h3 className="text-purple-900 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">{`Our vision`}</h3>
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                Blue Sky Academy was established to build a world-class
                education system that is both innovative and standardized across
                all levels of education, from kindergarten to high school. is
                vision was based on the modern educational philosophy that a
                foundation of scientific research, humane value and the
                long-lasting values of Vietnam can further enhance our students’
                education.
              </p>
              <br />
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                Blue Sky Academy was established to build a world-class
                education system that is both innovative and standardized across
                all levels of education, from kindergarten to high school. is
                vision was based on the modern educational philosophy that a
                foundation of scientific research, humane value and the
                long-lasting values of Vietnam can further enhance our students’
                education.
              </p>
              <br />
              {/* <div className="mt-6">
                <a
                  href=""
                  className="font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group"
                >
                  Read more
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-16 sm:mt-44 lg:mt-56 xl:mt-60 2xl:mt-64 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24 lg:max-w-none">
            <div className="relative lg:order-2 lg:col-span-6">
              <div className="relative sm:pr-36 lg:pr-20 xl:pr-32">
                <div className="aspect-w-3 aspect-h-4 rounded-3xl">
                  <img
                    className="object-cover rounded-3xl"
                    src="images/primary.png"
                    alt="Home blocks 03"
                  />
                </div>
                <div className="absolute top-0 right-0 hidden sm:block sm:-translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                  <img
                    className="object-cover w-full h-full rounded-3xl"
                    src="images/secondary.png"
                    alt="Home blocks 04"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center mt-16 sm:mt-20 lg:mt-0 lg:order-1 lg:col-span-6">
              <div>
                {/* <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                A second home for your child
              </span> */}
              </div>
              <h3 className="mt-4 text-purple-900 sm:mt-5 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                Our mission
              </h3>
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                To educate a world-class generation of Vietnamese students who
                possess scientific knowledge on par with students in developed
                countries. Blue Sky Academy students will develop a deep
                understanding of traditional values, practical living skills and
                righteous points of view. They will hold responsibilities of
                what are expected in global citizens, with the courage and
                confidence needed to integrate into a global collaboration.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24">
            <div className="relative lg:col-span-6">
              <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
                <div className="aspect-w-3 aspect-h-4 rounded-2xl">
                  <img
                    className="object-cover rounded-2xl"
                    src="images/primary.png"
                    alt="Home blocks 01"
                  />
                </div>
                <div className="absolute bottom-0 left-0 hidden sm:block sm:translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                  <img
                    className="object-cover w-full h-full rounded-3xl"
                    src="images/kindergarten.png"
                    alt="Home blocks 02"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center mt-16 sm:mt-44 lg:mt-0 lg:col-span-6">
              <div>
                {/* <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                Grow with an international and integrative mindset
              </span> */}
              </div>
              <h3 className="mt-4 text-purple-900 sm:mt-5 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                Philosophy &amp; Pathway to Success
              </h3>
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                Blue Sky Academy believes that empowering our students to absorb
                knowledge and sharpen their skills will create an organic
                relationship between school, family and society. Effective
                learning is closely tied to a sense of responsibility, respect
                for diversity, cooperation between one student and another, and
                cooperation between students and teachers.
              </p>
              <br />
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                In order to harmoniously grow, students must be challenged in
                realistic situations to enhance their awareness and
                problem-solving skills, forming a strong basis for lifetime
                learning. Teachers are the designers, consultants, and
                supporters of students’ learning experiences. Their support
                encourages imagination, creativity and reasoning skills which
                allows students to make their own decisions with a positive
                attitude and sense of responsibility. Teachers are strong
                examples for our students, encouraging learning, researching and
                living outside of the classroom.
              </p>
              <br />
              <p className="max-w-2xl mt-3 text-lg leading-loose text-purple-800">
                Blue Sky Academy students learn a curriculum that combines the
                Ministry of Education and Cambridge International Examinations
                (CIE) standards, including Cambridge Primary (5-11 years old)
                and Cambridge Secondary 1 (11-14 years old), starting out with
                English, Math, Science and heading towards more subjects under
                the Cambridge IGCSE (14-16 years old) program.
              </p>
              <br />
              {/* <div className="mt-6">
                <a
                  href=""
                  className="font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group"
                >
                  Read more
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <line x1="15" y1="16" x2="19" y2="12"></line>
                    <line x1="15" y1="8" x2="19" y2="12"></line>
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-10 sm:h-10 xl:h-10 bg-gradient-to-b from-yellow-100 to-white"></div>
    </div>
  );
};

export default Intro;
