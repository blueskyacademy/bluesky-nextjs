const Founders = ({ id }) => {
  return (
    <div id={id}>
      <div className="w-full h-32 sm:h-40 lg:h-44 "></div>
      <section className="px-4 overflow-hidden bg-white pb-28 sm:pb-36 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="px-4 text-center sm:px-6 lg:px-8">
            <h3 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              <span className="block"></span>
              <span className="relative block">
                <span className="relative">
                  <img
                    className="absolute inset-0 transform translate-y-9 sm:translate-y-10 xl:translate-y-12"
                    src="/svg/underline-simple-light-purple.svg"
                  />
                  <span className="relative">Our founders</span>
                </span>
              </span>
            </h3>
          </div>

          <div className="grid max-w-xl mx-auto mt-20 lg:max-w-none sm:mt-24 lg:mt-44 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8">
            <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1 lg:col-span-6 lg:text-left">
              <div>
                <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                  Our Principal
                </span>
              </div>

              <div>
                <h1 className="mt-3.5 font-bold text-purple-900 text-2xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                  Ms Hanh (Nguyen Thi Hong Hanh)
                </h1>
                <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  Through her 28 years of teaching experience, Ms Hanh has
                  always carried the concern that children in Nghe An and
                  vicinity are lacking a nurturing environment. One in which
                  they can learn, play, discover their natural abilities and
                  aptitudes, and be ready to join the global world. She believes
                  that “every child is a genius”.
                </div>
                <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  A child should be nurtured from their first steps and
                  especially through the golden period – the school years. With
                  a proper education and not by luck, all children can become
                  talented citizens of the world. BSA was founded upon this
                  belief and continues to educate its students with this
                  philosophy
                </div>
              </div>
            </div>

            <div className="relative order-1 w-full max-w-xl mx-auto lg:order-2 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="hidden lg:block">
                <img
                  src="/svg/blob-light-yellow.svg"
                  className="absolute inset-0 w-full h-full transform lg:scale-135"
                  alt=""
                />
              </div>

              <img
                src="svg/dots-large-strip.svg"
                className="absolute top-0 origin-top transform -translate-x-1/2 -translate-y-8 left-1/2 lg:hidden sm:scale-100 scale-80"
                alt=""
              />

              <div className="relative w-full mx-auto shadow-lg rounded-3xl lg:max-w-lg lg:mr-0 lg:ml-auto">
                <div className="relative block w-full">
                  <img
                    className="absolute z-10 hidden w-40 transform lg:block -top-20 -left-20 xl:w-48 xl:-top-20 xl:-left-20"
                    src="/svg/dots.svg"
                    alt=""
                  />

                  <figure className="aspect-w-12 aspect-h-10 md:order-1">
                    <img
                      src="https://i.imgur.com/ikrZXqM.png/"
                      className="object-cover object-center w-full h-full shadow-xl rounded-3xl"
                      alt="About 01"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="grid max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-16 lg:mt-32 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8">
            <div className="relative z-10 flex flex-col justify-center order-2 lg:col-span-6 lg:text-left">
              <div>
                <h1 className="mt-3.5 font-bold text-purple-900 text-2xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                  Mr Harley (Trung Tuan Dung)
                </h1>
                <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  Mr Harley believes in learning through discovery. When we are
                  young, we learn by watching, listening, asking, trying, and
                  reading. When we are older, we think, we share and we change
                  our minds.
                </div>
                <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  Our world around us changes quickly which often challenges our
                  learned beliefs. Our discovery is the combined effort of
                  thinking and reflecting. Born and raised in Nghe An, Harley
                  went on to attend a top Singaporean high school, then Yale,
                  one of the best American universities, both on full
                  scholarships. Through Blue Sky, Harley is passionate about
                  preparing students early for an international education. After
                  15 years of studying and working abroad in Singapore, China
                  and the US, Harley connects BSA with excellent education
                  programs, brings native English teachers to Vinh and develops
                  a quality school IT infrastructure. With a strong educational
                  beginning, early confidence in the use of English and
                  technology, our children will develop a better understanding
                  of the world and make more discoveries.
                </div>
              </div>
            </div>

            <div className="relative order-1 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="hidden lg:block">
                <img
                  src="/svg/blob-light-purple.svg"
                  className="absolute inset-0 w-full h-full transform lg:scale-135"
                  alt=""
                />
              </div>

              {/* <img
                src="svg/dots-large-strip.svg"
                className="absolute top-0 origin-top transform -translate-x-1/2 -translate-y-8 left-1/2 lg:hidden sm:scale-100 scale-80"
                alt=""
              /> */}

              <div className="relative w-full mx-auto shadow-lg rounded-3xl lg:max-w-lg lg:mx-0">
                <div className="relative block w-full">
                  {/* <img
                    className="absolute z-10 hidden w-40 transform lg:block -top-20 -right-20 xl:w-48 xl:-top-20 xl:-right-20"
                    src="svg/dots.svg"
                    alt=""
                  /> */}

                  <figure className="aspect-w-12 aspect-h-10 md:order-1">
                    <img
                      src="https://i.imgur.com/2bALhku.png/"
                      className="object-cover object-center w-full h-full shadow-xl rounded-3xl"
                      alt="About 02"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="grid max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-16 lg:mt-32 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8">
            <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1 lg:col-span-6 lg:text-left">
              <div>
                <h1 className="mt-3.5 font-bold text-purple-900 text-2xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                  Mr Jerry (Trung Tuan Cuong)
                </h1>
                <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  Mr Jerry is the second son of Ms Hanh. He is currently working
                  as the risk actuary in the leading insurance company in the
                  UK. He is also a non-executive director for BSA, in charge of
                  strategies.
                </div>
                <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
                  Like Mr Harley, Mr Jerry had five years of studying abroad at
                  the leading college and university in the United Kingdom,
                  including the London School of Economics and Political Science
                  – LSE. With his access to international education, Mr Jerry
                  felt that children in Vietnam, and in Nghe An particular, were
                  constrained by the lack of facilities in their education
                  environments. In response, he contributed significantly to the
                  design and ongoing development of the BSA facilities, such as
                  the Science laboratory, the swimming pool and the football
                  pitch as well as many other strategic projects.
                </div>
              </div>
            </div>

            <div className="relative order-1 w-full max-w-xl mx-auto lg:order-2 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="hidden lg:block">
                <img
                  src="/svg/blob-light-rose.svg"
                  className="absolute inset-0 w-full h-full transform lg:scale-135"
                  alt=""
                />
              </div>

              <img
                src="/svg/dots-large-strip.svg"
                className="absolute top-0 origin-top transform -translate-x-1/2 -translate-y-8 left-1/2 lg:hidden sm:scale-100 scale-80"
                alt=""
              />

              <div className="relative w-full mx-auto shadow-lg rounded-3xl lg:max-w-lg lg:mr-0 lg:ml-auto">
                <div className="relative block w-full">
                  {/* <img
                    className="absolute z-10 hidden w-40 transform lg:block -top-20 -left-20 xl:w-48 xl:-top-20 xl:-left-20"
                    src="svg/dots.svg"
                    alt=""
                  /> */}

                  <figure className="aspect-w-12 aspect-h-10 md:order-1">
                    <img
                      src="https://i.imgur.com/x4tLX0P.png/"
                      className="object-cover object-center w-full h-full shadow-xl rounded-3xl"
                      alt="About 03"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founders;
