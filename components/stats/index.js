const Stats = () => {
  return (
    <div>
      <section className="relative w-full px-4 py-16 bg-purple-600 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <h2 className="max-w-4xl mx-auto text-center text-white text-4xl leading-tight tracking-wide sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              Giving our students the best possible start to their education
            </h2>
          </div>

          <div className="mt-12 sm:grid sm:grid-cols-3 sm:gap-x-6 md:gap-x-8 lg:gap-x-12 sm:gap-y-12 gap-y-16">
            <div className="text-center">
              <h4 className="leading-none text-white font-written text-8xl lg:text-9xl">
                30+
              </h4>
              <p className="mt-0.5 sm:mt-1.5 text-lg lg:text-xl font-medium text-purple-50">
                Teachers
              </p>
            </div>

            <div className="mt-12 text-center sm:mt-0">
              <h4 className="leading-none text-white font-written text-8xl lg:text-9xl">
                6+
              </h4>
              <p className="mt-0.5 sm:mt-1.5 text-lg lg:text-xl font-medium text-purple-50">
                Average years of teacher experience
              </p>
            </div>

            <div className="mt-12 text-center sm:mt-0">
              <h4 className="leading-none text-white font-written text-8xl lg:text-9xl">
                16
              </h4>
              <p className="mt-0.5 sm:mt-1.5 text-lg lg:text-xl font-medium text-purple-50">
                Average number of students per class
              </p>
            </div>

            <div className="mt-12 text-center sm:mt-0">
              <h4 className="leading-none text-white font-written text-8xl lg:text-9xl">
                16:1
              </h4>
              <p className="mt-0.5 sm:mt-1.5 text-lg lg:text-xl font-medium text-purple-50">
                Student to teacher ratio
              </p>
            </div>

            <div className="mt-12 text-center sm:mt-0">
              <h4 className="leading-none text-white font-written text-8xl lg:text-9xl">
                4
              </h4>
              <p className="mt-0.5 sm:mt-1.5 text-lg lg:text-xl font-medium text-purple-50">
                Number of Departments
              </p>
            </div>

            <div className="mt-12 text-center sm:mt-0">
              <h4 className="leading-none text-white font-written text-8xl lg:text-9xl">
                90%
              </h4>
              <p className="mt-0.5 sm:mt-1.5 text-lg lg:text-xl font-medium text-purple-50">
                Student state exam percentile
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="px-4 bg-purple-600 sm:px-6 lg:px-8">
        <hr className="max-w-screen-xl mx-auto border-purple-500" />
      </div>
    </div>
  );
};
export default Stats;
