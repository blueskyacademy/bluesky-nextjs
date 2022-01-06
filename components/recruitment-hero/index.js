import Link from "next/link";

const RecruitmentHero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h2 className="sm:text-5xl text-5xl mb-4 font-bold text-purple-900">
            {`Let’s Work Together`}
          </h2>
          <p className="mb-6 leading-relaxed">
            Join us at Blue Sky Academy today and discover the difference
            between a job and career.
          </p>
          <div className="flex justify-center">
            <Link href="/recruitment#jobs">
              <a className="mt-6 text-lg font-medium text-white bg-indigo-600 sm:mt-0 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:text-white hover:bg-purple-600 group cursor-pointer mr-3">
                View open positions
              </a>
            </Link>

            <Link href="/apply">
              <a className="text-lg font-semibold text-purple-900 bg-yellow-500 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group">
                Apply online
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
            </Link>
          </div>
        </div>
        <img
          className="w-5/6 object-cover object-center rounded mt-6"
          alt="hero"
          src="/images/recruitment.png"
        />
      </div>
    </section>
  );
};

export default RecruitmentHero;
