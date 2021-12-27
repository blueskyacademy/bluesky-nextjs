const AboutHero = () => {
  return (
    <section className="relative px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Where great kids grow
            </span>
          </div>
          <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter">
            Message from our Principal
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            Blue Sky Academy is a dream school for all staff , teachers, and
            parents. Most importantly, it is a limitless blue sky where students
            can let their dreams freely play while learning, learn while
            playing, discover their aptitudes, and develop their talents...
          </p>

          <div className="flex justify-center mt-8">
            <a
              href=""
              className="text-lg font-semibold text-purple-900 bg-yellow-500 eading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 text-purple-500 duration-300 ease-in-out animate-vertical-bounce hover:text-purple-600"
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
            </a>
          </div>
        </div>

        <div className="relative z-1 mt-14 sm:mt-16">
          <div className="aspect-w-3 aspect-h-2 sm:aspect-w-16 sm:aspect-h-9">
            <img
              className="object-cover w-full h-full shadow-xl rounded-3xl"
              src="images/pricipal.jpeg"
              alt="preschool"
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block"></div> */}
    </section>
  );
};

export default AboutHero;
