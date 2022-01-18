import Link from "next/link";
import DateComponent from "../date";
import { useIntl } from "react-intl";

const Job = ({ title, start, expire, requirement, benefit }) => {
  const { formatMessage: f } = useIntl();
  return (
    <div className="mb-12 ml-10 lg:pr-5 lg:mb-0 w-full mt-6">
      <div className="text-center">
        <h2 className="mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none">
          {title}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          {f({
            id: "Recruitment.PostOn",
            defaultMessage: "Post on",
          })}{" "}
          {start && <DateComponent dateString={start} />}
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          {f({
            id: "Recruitment.ExpireOn",
            defaultMessage: "Expire on",
          })}{" "}
          {expire && <DateComponent dateString={expire} />}
        </p>
      </div>

      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col">
        <h3 className="max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none">
          {f({
            id: "Recruitment.WhatWeAreLookingFor",
            defaultMessage: "What we are looking for",
          })}
        </h3>
        <div
          className="leading-loose"
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {requirement}
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col">
        <h3 className="max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none">
          {f({
            id: "Recruitment.Benefits",
            defaultMessage: "Benefits",
          })}
        </h3>
        <div
          className="leading-loose"
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {benefit}
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col">
        <h3 className="max-w-lg mb-6 font-sans text-2xl font-bold text-gray-900 sm:text-2xl sm:leading-none">
          {f({
            id: "Recruitment.Apply",
            defaultMessage: "Apply",
          })}
        </h3>
        <div className="leading-loose">
          {f({
            id: "Recruitment.ApplySummary",
            defaultMessage:
              "Interested candidates: kindly send your resume and a cover letter to jobs@bsa.edu.vn. Feel free to send along any questions about the job opportunity, us, or about Vietnam in general.",
          })}
        </div>
      </div>
      <div className="mt-4 mb-2 sm:mb-4 text-center">
        <Link href="/apply">
          <a className="font-medium text-white bg-purple-600 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-purple-500 group">
            {f({
              id: "Recruitment.ApplyNow",
              defaultMessage: "Apply now",
            })}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Job;
