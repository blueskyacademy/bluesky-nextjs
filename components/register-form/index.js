import { useState, useEffect } from "react";
import BusForm from "./bus-form";
import ExamForm from "./exam-form";
import VisitForm from "./visit-form";

export const SERVICE = {
  school: "school",
  exam: "exam",
  bus: "bus",
};

const DetailForm = ({ type }) => {
  return (
    <div className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8">
      <div className={`${type === SERVICE.school ? "w-1/2" : "w-2/3"} mx-auto`}>
        <div className="relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
          {type === SERVICE.school && <VisitForm />}
          {type === SERVICE.bus && <BusForm />}
          {type === SERVICE.exam && <ExamForm />}
        </div>
      </div>
    </div>
  );
};

const RegisterForm = ({ id, tab }) => {
  const [currentTab, setCurrentTab] = useState(tab ?? SERVICE.school);
  useEffect(() => {
    if (tab) {
      setCurrentTab(tab);
    }
  }, [tab]);
  return (
    <section id={id}>
      <div className="px-4 pt-20 bg-purple-25 sm:pt-28 lg:pt-36 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-12 md:mb-20 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            {`See what it's like to be part of our school`}
          </h3>
          <ul className="flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  currentTab === SERVICE.school
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setCurrentTab(SERVICE.school)}
              >
                School Visit
              </button>
            </li>
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  currentTab === SERVICE.bus
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setCurrentTab(SERVICE.bus)}
              >
                Bus Service
              </button>
            </li>
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  currentTab === SERVICE.exam
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setCurrentTab(SERVICE.exam)}
              >
                Entrance Exam
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-56 bg-purple-25"></div>
      <DetailForm type={currentTab} />
    </section>
  );
};

export default RegisterForm;
