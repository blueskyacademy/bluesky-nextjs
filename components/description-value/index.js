const DescriptionValues = () => {
  return (
    <section className="px-4 -mt-8 bg-white sm:py-4 sm:mt-0 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-3xl mx-auto lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-purple-900 sm:text-center lg:text-left text-2xl leading-tight tracking-tight sm:text-3xl sm:leading-tighter font-bold">
              With an aim to develop
            </h2>

            <div className="grid max-w-4xl gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-1 sm:mx-auto lg:mx-0 lg:max-w-md">
              <div className="flex">
                <div className="w-14">
                  <img src="/svg/checkmark.svg" className="w-7 h-7" alt="" />
                </div>
                <div className="w-full">
                  <h5 className="flex items-center text-xl font-semibold text-purple-900">
                    Good knowledge
                  </h5>
                  <p className="mt-1 text-base text-purple-800">
                    A well-rounded citizen who has a good knowledge base
                    Intellectual capacity and language capability to integrate
                    into global education
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-14">
                  <img src="/svg/checkmark.svg" className="w-7 h-7" alt="" />
                </div>
                <div className="w-full">
                  <h5 className="flex items-center text-xl font-semibold text-purple-900">
                    Coordination
                  </h5>
                  <p className="mt-1 text-base text-purple-800">
                    The ability to present, lead and coordinate
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-14">
                  <img src="/svg/checkmark.svg" className="w-7 h-7" alt="" />
                </div>
                <div className="w-full">
                  <h5 className="flex items-center text-xl font-semibold text-purple-900">
                    Confidence
                  </h5>
                  <p className="mt-1 text-base text-purple-800">
                    Confidence, dynamics, and the desire to succeed in life
                    Integrity, respect for themselves and for others
                    Responsibility for themselves, family, and society.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:mx-0">
            <div className="aspect-w-9 aspect-h-6">
              <img
                className="object-cover w-full h-full rounded-3xl"
                src="/images/secondary.png"
                alt="values"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionValues;
