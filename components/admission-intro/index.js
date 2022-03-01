import Link from "next/link";
import { SERVICE } from "../register-form";
import { useIntl } from "react-intl";

const AdmissionIntro = () => {
  const { formatMessage: f } = useIntl();
  return (
    <section className="relative px-4 pt-10 pb-16 overflow-hidden lg:pb-20 lg:pt-5 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25 mt-5">
      <img
        src="/svg/dots-large-grid.svg"
        className="absolute right-0 h-auto transform opacity-25 lg:opacity-40 top-12 w-54 hidden md:block"
        alt=""
      />
      <img
        src="/svg/dots-large-grid.svg"
        className="absolute h-auto transform opacity-10 -left-36 bottom-36 w-54 hidden lg:block"
        alt=""
      />
      <div className="max-w-xl mx-auto lg:max-w-screen-xl lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-center lg:col-span-6">
          <img
            src="/images/parents.jpg"
            alt="hero"
            className="w-full max-h-[420px] object-cover mx-auto rounded-2xl"
            style={{
              objectPosition: "0 10%",
            }}
          />
          <div className="relative">
            <h2 className="max-w-xl mt-2 text-purple-900 sm:mt-2 font-extrabold text-4xl sm:text-4xl xl:text-4xl leading-snug sm:leading-tight xl:leading-tighter lg:max-w-none">
              {f({
                id: "Admission.GreetingFromAdmissionTeam",
                defaultMessage: "Greeting From Admission Team",
              })}
            </h2>

            <img
              src="/svg/arrow-right-over.svg"
              className="absolute hidden transform -top-3 xl:block md:-right-8 w-14 md:w-32 rotate-12"
              alt=""
            />
          </div>

          <p className="max-w-2xl mt-3 text-xl leading-relaxed text-purple-800 sm:mt-4">
            {f({
              id: "Admission.Summary",
              defaultMessage:
                "We would like to express our gratitude for your consideration of Blue Sky Academy (BSA) for your child(ren)’s academic training and education. We hope that you can obtain all the information that you need on our website, which will also provide you with an overview of our Vision, Mission, Education Pathway and Programme, Team and Facilities. There is no better way to find out about us than to visit the school. Therefore, we warmly welcome you to take a tour of our school at any time in order to meet our Principal, Management, Teachers, and Staff, to see our facilities first hand, and to learn more about the school for your child(ren)’s future academic path. We look forward to welcoming you to the school and hope that your child(ren) will be part of the BSA community.",
            })}
          </p>
        </div>
        <div className="relative mt-12 sm:mt-16 lg:mt-0 xl:pl-12 lg:col-span-6">
          <div className="relative w-full mx-auto sm:grid sm:gap-6 md:max-w-3xl lg:gap-5 lg:max-w-lg sm:grid-cols-4 lg:grid-cols-2 auto-rows-fr">
            <Link href={`?tab=${SERVICE.school}#register`}>
              <a
                href=""
                className="flex flex-col justify-center w-full p-8 duration-300 ease-in-out transform shadow-lg sm:col-span-2 lg:col-span-1 bg-purple-50 rounded-2xl hover:scale-105 group"
              >
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-purple-700"
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
                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                  </svg>

                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {f({
                      id: "Parent.SchoolVisitRegistration",
                      defaultMessage: "School Visit Registration",
                    })}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {f({
                      id: "Parent.RegisterBSASchoolVisitTour",
                      defaultMessage:
                        "Register BSA school visit tour from Mon to Fri",
                    })}
                  </p>
                </div>

                <div className="flex justify-end w-full mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600"
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
                </div>
              </a>
            </Link>

            <Link href="/pages/fee-schedule">
              <a
                href=""
                className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out bg-yellow-200 shadow-lg rounded-2xl sm:mt-0 sm:col-span-2 lg:col-span-1 lg:translate-y-28 hover:scale-105 group"
              >
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-purple-700 -ml-2 mt-2"
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
                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                  </svg>
                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {f({
                      id: "Admission.FeeSchedule",
                      defaultMessage: "Fee schedule",
                    })}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {f({
                      id: "Admission.FeeScheduleForAnAnnualAcademicYear",
                      defaultMessage:
                        "Fee schedule for an annual academic year",
                    })}
                  </p>
                </div>

                <div className="flex justify-end w-full mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600"
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
                    <polyline points="7 7 12 12 7 17" />
                    <polyline points="13 7 18 12 13 17" />
                  </svg>
                </div>
              </a>
            </Link>
            <Link href={`?tab=${SERVICE.exam}#register`}>
              <a
                href=""
                className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg bg-rose-50 sm:col-span-2 sm:mt-0 lg:col-span-1 rounded-2xl hover:scale-105 group"
              >
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-purple-700"
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
                    <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
                    <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
                    <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
                    <line x1="11" y1="6" x2="20" y2="6" />
                    <line x1="11" y1="12" x2="20" y2="12" />
                    <line x1="11" y1="18" x2="20" y2="18" />
                  </svg>
                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {f({
                      id: "Parent.EntranceExamRegistration",
                      defaultMessage: "Entrance Exam Registration",
                    })}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {f({
                      id: "Parent.ConfidentlyChooseTheBestProgramForYourChild",
                      defaultMessage:
                        "Confidently choose the best program for your child",
                    })}
                  </p>
                </div>

                <div className="flex justify-end w-full mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-vertical-bounce hover:text-purple-600"
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
                </div>
              </a>
            </Link>

            <Link href="/schedules">
              <a
                href=""
                className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg sm:mt-0 lg:col-start-auto sm:col-span-2 lg:col-span-1 lg:translate-y-28 bg-teal-50 rounded-2xl hover:scale-105 group"
              >
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-purple-700 -ml-2 mt-2"
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
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>

                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {f({
                      id: "Admission.AcademicCalendar",
                      defaultMessage: "Academic Calendar",
                    })}
                  </p>
                  <p className="mt-2 text-sm text-purple-800">
                    {f({
                      id: "Admission.ViewBSAAcademicCalendar",
                      defaultMessage: "View BSA academic calendar",
                    })}
                  </p>
                </div>

                <div className="flex justify-end w-full mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600"
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
                    <polyline points="7 7 12 12 7 17" />
                    <polyline points="13 7 18 12 13 17" />
                  </svg>
                </div>
              </a>
            </Link>

            <Link href="/pages/admission-open-for-the-academic-year">
              <a
                href=""
                className="flex flex-col justify-center w-full p-8 mt-6 duration-300 ease-in-out shadow-lg bg-blue-50 sm:mt-0 sm:col-span-2 lg:col-span-1 rounded-2xl sm:col-start-2 hover:scale-105 group"
              >
                <div className="flex-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-purple-700"
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
                    <line x1="15" y1="8" x2="15.01" y2="8" />
                    <rect x="4" y="4" width="16" height="16" rx="3" />
                    <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                    <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                  </svg>

                  <p className="mt-4 text-xl font-semibold text-purple-900">
                    {f({
                      id: "Admission.ViewAdmissionNotice",
                      defaultMessage: "View admission notice",
                    })}
                  </p>
                  {/* <p className="mt-2 text-sm text-purple-800">
                    {f({
                      id: "Admission.ViewAdmissionNotice",
                      defaultMessage: "View admission notice",
                    })}
                  </p> */}
                </div>

                <div className="flex justify-end w-full mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-500 duration-300 ease-in-out group-hover:animate-horizontal-bounce hover:text-purple-600"
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
                    <polyline points="7 7 12 12 7 17" />
                    <polyline points="13 7 18 12 13 17" />
                  </svg>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionIntro;
