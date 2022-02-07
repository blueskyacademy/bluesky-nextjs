import { useIntl } from "react-intl";
const Reason = ({ reasons, slug }) => {
  const { formatMessage: f } = useIntl();
  const BACKGROUND_COLOR = {
    kindergarten: "bg-kindergarten",
    primary: "bg-primary-division",
    secondary: "bg-secondary",
  };
  return (
    <section className="relative w-full px-4 py-12 sm:py-16 sm:px-6 xl:px-8">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl pb-16">
        <div className="px-4 pb-6 text-center sm:px-6 lg:px-8">
          <h3 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            <span className="block">
              {f({
                id: "Program.WhyParents",
                defaultMessage: "Why parents",
              })}
            </span>

            <span className="relative block">
              <span className="relative">
                <img
                  className="absolute inset-0 transform translate-y-9 sm:translate-y-10 xl:translate-y-12"
                  src="/svg/underline-simple-light-purple.svg"
                />
                <span className="relative">
                  {f({
                    id: "Program.ShouldChooseBSA",
                    defaultMessage: "should choose BSA",
                  })}
                </span>
              </span>
            </span>
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <div
            className={`relative max-w-8xl mt-16 ${
              BACKGROUND_COLOR[slug] ?? `bg-yellow-100`
            }  rounded-xl sm:mt-14`}
          >
            <span className="absolute flex items-center justify-center shadow-md left-6 sm:left-10 -top-7 rounded-2xl w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-purple-50"
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
                <circle cx="15" cy="15" r="3" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <line x1="6" y1="9" x2="18" y2="9" />
                <line x1="6" y1="12" x2="9" y2="12" />
                <line x1="6" y1="15" x2="8" y2="15" />
              </svg>
            </span>
            <div className="px-4 py-10 mt-2 sm:px-10 sm:py-12">
              <p className="text-lg font-semibold text-purple-900 sm:text-xl">
                {f({
                  id: "Program.WePrideOurselvesOnTheQuality",
                  defaultMessage:
                    "At Blue Sky Academy, we pride ourselves on the quality of our teaching. You can expect the following from our academy:",
                })}
              </p>

              <ul className="mt-5 space-y-5 text-lg text-purple-800">
                {reasons?.map((item, idx) => (
                  <li className="flex items-center" key={`reason-${idx}`}>
                    <img
                      className="flex-shrink-0 mr-3 w-7 h-7"
                      src="/svg/checkmark.svg"
                    />
                    <svg
                      className="flex-shrink-0 hidden w-6 h-6 mr-3"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        className="text-green-500 fill-current"
                        cx="12"
                        cy="12"
                        r="12"
                      />
                      <path
                        className="text-white fill-current"
                        d="M16.28 8.28l-6.292 6.294-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0016.28 8.28z"
                      />
                    </svg>
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
