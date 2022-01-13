const StepCard = ({ index, title, content }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
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
          </div>
        </div>
        <div className="w-px h-full bg-gray-300" />
      </div>
      <div className="pt-1 pb-8">
        <p className="mb-2 text-lg font-bold">
          Step {index + 1} - {title}
        </p>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};
const Step = ({ id }) => {
  const STEPS = [
    {
      title: "Consultation",
      content:
        "Parents will be consulted directly at the school office on curriculum, teaching staff, facilities, fees regulations, services. All questions are also answered any via emails, phones, or our website at www.bsa.edu.vn.",
    },
    {
      title: "Enrollment Documents",
      content:
        "Parents who want their kids to study at BSA can come and see the accounting department to pay the application fee and get the enrollment application forms provided by the school.",
    },
    {
      title: "Interview, entrance exam, placement",
      content:
        "All students enrolled at BSA are required to interview and placement test input to correspond to the current level and the need to learn English. ",
    },
    {
      title: "Payment of fees",
      content:
        "Parents can visit the accounting department to get a full fee breakdown and full payment by cash or bank transfer.",
    },
    {
      title: "Enrollment profile completion",
      content:
        "Parents supplement the following documents to complete the enrollment profile:",
    },
  ];
  return (
    <div
      id={id}
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="px-4 text-center sm:px-6 lg:px-8 pb-24">
        <h3 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
          <span className="block"></span>
          <span className="relative block">
            <span className="relative">
              <img
                className="absolute inset-0 transform translate-y-9 sm:translate-y-14 xl:translate-y-14"
                src="/svg/underline-simple-light-purple.svg"
              />
              <span className="relative">Process to apply </span>
            </span>
          </span>
        </h3>
      </div>

      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">
          {STEPS.map((item, idx) => (
            <StepCard
              key={idx}
              index={idx}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="/images/kindergarten.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Step;
