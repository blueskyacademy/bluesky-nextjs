import Link from "next/link";
import { useIntl } from "react-intl";

const RecruitmentHero = () => {
  const { formatMessage: f } = useIntl();
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h2 className="sm:text-5xl text-5xl mb-4 font-bold text-purple-900">
            {f({
              id: "Recruitment.JoinOurTeam",
              defaultMessage: "Join Our Team",
            })}
          </h2>
          <p className="mb-6 leading-relaxed">
            {f({
              id: "Recruitment.WeOfferAFriendlyProfessionalWorkStructureLongTermPositions",
              defaultMessage:
                "We offer a friendly & professional work structure & long-term positions.",
            })}
          </p>
          <div className="flex-col justify-center sm:flex-row">
            <Link href="/recruitment#jobs">
              <a className="mt-6 text-lg font-medium text-white bg-primary-100 sm:mt-0 sm:ml-1 relative leading-normal inline-flex items-center justify-center px-2 py-3 duration-300 ease-in-out rounded-full outline-none hover:text-white hover:bg-primary-80 group cursor-pointer mr-3 sm:px-8">
                {f({
                  id: "Recruitment.ViewOpenPositions",
                  defaultMessage: "View open positions",
                })}
              </a>
            </Link>

            <Link href="/apply">
              <a className="text-lg font-semibold text-purple-900 bg-yellow-500 relative leading-normal inline-flex items-center justify-center px-2 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group sm:px-8">
                {f({
                  id: "Recruitment.ApplyOnline",
                  defaultMessage: "Apply online",
                })}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce hidden md:block"
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
