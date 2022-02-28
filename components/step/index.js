import { useIntl } from "react-intl";
const StepCard = ({ last, title, content }) => {
  const { formatMessage: f } = useIntl();
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            {last ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 text-gray-600"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            ) : (
              <svg
                className="w-4 text-gray-600"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="12"
                  y1="2"
                  x2="12"
                  y2="22"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="19,15 12,22 5,15"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="w-px h-full bg-gray-300" />
      </div>
      <div className="pt-1 pb-8">
        <p className="mb-2 text-lg font-bold">
          {" "}
          {f({
            id: "Admission.Step",
            defaultMessage: "Step",
          })}{" "}
          {title}
        </p>
        <div
          className="text-gray-700 text-md"
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
};
const Step = ({ id, steps }) => {
  const { formatMessage: f } = useIntl();
  return (
    <div id={id}>
      {/* <div className="w-full h-16 sm:h-16 xl:h-16 bg-gradient-to-b from-purple-25 to-white"></div> */}
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
        <div className="text-center sm:px-6 lg:px-8 pb-24">
          <h3 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            <span className="relative block">
              <span className="relative">
                <img
                  className="absolute inset-0 transform translate-y-9 sm:translate-y-14 xl:translate-y-14"
                  src="/svg/underline-simple-light-purple.svg"
                  alt=""
                />
                <span className="relative">
                  {f({
                    id: "Admission.ProcessToApply",
                    defaultMessage: "Process to apply",
                  })}{" "}
                </span>
              </span>
            </span>
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="lg:py-6">
            {steps?.map((item, idx) => (
              <StepCard
                key={idx}
                last={idx === steps?.length - 1}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
          <div className="relative" style={{ minHeight: "100vh" }}>
            <img
              className="inset-0 object-cover object-bottom rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="/images/admission.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step;
