import Link from "next/link";
import { useIntl } from "react-intl";

const CTA = ({ hasButton = true }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section className="py-24 bg-white sm:py-32">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <img className="mx-auto w-72" src="/svg/sunrise.svg" />

        <h2 className="max-w-3xl mx-auto mt-6 text-center text-purple-900 text-6xl leading-snug sm:leading-tight xl:leading-tighter font-extrabold ">
          <span className="block">Giving your child a</span>

          <span className="relative block">
            <span className="relative">
              <img
                className="absolute inset-0 transform translate-y-9 sm:translate-y-11 xl:translate-y-14"
                src="/svg/underline-simple-light-purple.svg"
              />
              <span className="relative">brighter future</span>
            </span>
          </span>
        </h2>

        <div className="flex justify-center mt-12 xl:mt-14">
          {hasButton && (
            <Link href="/contact">
              <a className="text-lg font-semibold text-purple-900 bg-yellow-500 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group">
                {f({
                  id: "Home.RegisterNow",
                  defaultMessage: "Register now",
                })}
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
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
