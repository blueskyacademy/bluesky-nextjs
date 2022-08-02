import { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from "../dropdown";
import { addDays, format, setHours, setMinutes } from "date-fns";
import { GENDER, RETEST_OPTIONS } from "../../lib/constant";
import DatePickerCustomHeader from "../date-picker-custom-header";
import { calculateDisableDays } from "../../lib/helper";
import { useIntl } from "react-intl";
import { useScreenSize } from "../../hooks/useScreenSize";

const ExamForm = () => {
  const { formatMessage: f } = useIntl();
  const { isMobile } = useScreenSize();
  const [form, setForm] = useState({});
  const [reTestOption, setReTestOption] = useState(RETEST_OPTIONS.no);
  const [gender, setGender] = useState(GENDER.female);
  const [isLoading, setIsLoading] = useState(false);
  const [statusForm, setStatusForm] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateOfExam, setDateOfExam] = useState();
  const [errors, setErrors] = useState({});

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dateOfBirth) {
      setErrors({ ...errors, dateOfBirth: true });
      return;
    }
    if (!dateOfExam) {
      setErrors({ ...errors, dateOfExam: true });
      return;
    }
    const data = {
      ...form,
      reTest: reTestOption,
      gender: gender,
      submittedAt: format(Date.now(), "HH:mm:ss dd-MM-yyyy"),
      dateOfBirth: format(dateOfBirth, "dd-MM-yyyy"),
      dateOfExam: format(dateOfExam, "dd-MM-yyyy"),
    };
    setIsLoading(true);
    try {
      const response = await fetch("/api/exam", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setStatusForm("success");
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };
  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick, error }, ref) => (
    <div
      className={`w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none flex justify-between ${
        error && "border-red-200"
      }`}
      onClick={onClick}
      ref={ref}
    >
      {value ? (
        value
      ) : (
        <p className="text-purple-700 opacity-70">
          {isMobile
            ? f({
                id: "Form.PleaseChooseDateAndTime",
                defaultMessage: "Please choose date and time",
              })
            : f({
                id: "Form.PleaseChooseFrom2PMTo4PMOnEveryWednesday",
                defaultMessage:
                  "Please choose from 2PM to 4PM on every Wednesday",
              })}
        </p>
      )}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`flex-shrink-0 w-4 h-4 ml-3 text-purple-700 duration-300 ease-in-out sm:w-4 sm:h-4 sm:ml-6 group-hover:text-purple-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  ));
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="flex items-center flex-col">
        <h3 className="text-2xl font-bold text-purple-900">
          {f({
            id: "Parent.EntranceExamRegistration",
            defaultMessage: "Entrance Exam Registration",
          })}
        </h3>
        <p className="text-purple-800 mt-0.5 text-opacity-90">
          {f({
            id: "Form.PleaseChooseFrom2PMTo4PMOnEveryWednesday",
            defaultMessage: "Please choose from 2PM to 4PM on every Wednesday",
          })}
        </p>
      </div>
      {statusForm === "success" ? (
        <div className="flex flex-col items-center justify-between mt-12">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              {f({
                id: "Form.SubmitDone",
                defaultMessage: "Submit done!",
              })}
            </h3>
            <p className="text-gray-600 my-2">
              {f({
                id: "Form.ThankYou",
                defaultMessage: "Thank you. Our staff will call you soon",
              })}
            </p>
            <p>
              {" "}
              {f({
                id: "Form.HaveAGreatDay",
                defaultMessage: "Have a great day!",
              })}{" "}
            </p>
          </div>
        </div>
      ) : (
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-3 md:gap-2">
            <div className="md:col-span-1">
              <h3 className="text-purple-900 font-medium mt-2">
                {f({
                  id: "Form.StudentInformation",
                  defaultMessage: "Student Information",
                })}
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullNameStudent"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.FullName",
                      defaultMessage: "Full Name",
                    })}
                    *
                  </label>

                  <input
                    type="text"
                    placeholder={f({
                      id: "Form.FullName",
                      defaultMessage: "Full Name",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    id="fullNameStudent"
                    name="fullNameStudent"
                    onChange={handleChangeForm}
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentGrade"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.DateOfBirth",
                      defaultMessage: "Date of birth",
                    })}{" "}
                    *
                  </label>
                  <DatePickerCustomHeader
                    selected={dateOfBirth}
                    handleChangeDate={(date) => {
                      setErrors({ ...errors, dateOfBirth: false });
                      setDateOfBirth(date);
                    }}
                    error={errors?.dateOfBirth}
                  />
                </div>
              </div>
              <div className="mt-4">
                <Dropdown
                  options={[GENDER.male, GENDER.female, GENDER.other]}
                  title={f({
                    id: "Form.Gender",
                    defaultMessage: "Gender",
                  })}
                  placeholder={f({
                    id: "Form.SelectAnOption",
                    defaultMessage: "Select an option",
                  })}
                  value={gender}
                  handleChange={(item) => setGender(item)}
                  hasTranslate
                />
              </div>
              <div className="mt-4">
                <Dropdown
                  options={[RETEST_OPTIONS.no, RETEST_OPTIONS.yes]}
                  title={f({
                    id: "Form.IsItAReTest",
                    defaultMessage: "Is it a re-test?",
                  })}
                  placeholder={f({
                    id: "Form.SelectAnOption",
                    defaultMessage: "Select an option",
                  })}
                  value={reTestOption}
                  handleChange={(item) => setReTestOption(item)}
                  hasTranslate
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="dateOfBirth"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.CurrentSchool",
                      defaultMessage: "CurrentSchool",
                    })}
                  </label>

                  <input
                    type="text"
                    placeholder={f({
                      id: "Form.NameAddress",
                      defaultMessage: "Name, Address",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    id="currentSchool"
                    name="currentSchool"
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="currentGrade"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.CurrentGrade",
                      defaultMessage: "Current Grade",
                    })}{" "}
                    *
                  </label>
                  <input
                    type="text"
                    placeholder={f({
                      id: "Form.CurrentGrade",
                      defaultMessage: "Current Grade",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    id="currentGrade"
                    name="currentGrade"
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"></hr>
          <div className="md:grid md:grid-cols-3 md:gap-2">
            <div className="md:col-span-1">
              <h3 className="text-purple-900 font-medium mt-6">
                {f({
                  id: "Form.StudentParent",
                  defaultMessage: "Student's Parent",
                })}{" "}
                <br />{" "}
                {`/ ${f({
                  id: "Form.GuardianInformation",
                  defaultMessage: "Guardian Information",
                })}`}
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="fullNameParent"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.FullName",
                      defaultMessage: "Full Name",
                    })}{" "}
                    *
                  </label>
                  <input
                    id="fullNameParent"
                    name="fullNameParent"
                    onChange={handleChangeForm}
                    required
                    type="text"
                    placeholder={f({
                      id: "Form.FullName",
                      defaultMessage: "Full Name",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="relationship"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.RelationshipToTheStudent",
                      defaultMessage: "Relationship to the student",
                    })}{" "}
                    *
                  </label>
                  <input
                    id="relationship"
                    type="text"
                    name="relationship"
                    placeholder={f({
                      id: "Form.RelationshipToTheStudent",
                      defaultMessage: "Relationship to the student",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="occupation"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.Occupation",
                      defaultMessage: "Occupation",
                    })}{" "}
                    *
                  </label>
                  <input
                    id="occupation"
                    name="occupation"
                    onChange={handleChangeForm}
                    required
                    type="text"
                    placeholder={f({
                      id: "Form.Occupation",
                      defaultMessage: "Occupation",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="company"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.CompanyAddress",
                      defaultMessage: "CompanyAddress",
                    })}
                    *
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder={f({
                      id: "Form.CompanyAddress",
                      defaultMessage: "Company Address",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="phone"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.Phone",
                      defaultMessage: "Phone",
                    })}{" "}
                    *
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChangeForm}
                    required
                    type="text"
                    placeholder={f({
                      id: "Form.Phone",
                      defaultMessage: "Phone",
                    })}
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    {f({
                      id: "Form.Email",
                      defaultMessage: "Email",
                    })}{" "}
                    *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"></hr>
          <div className="md:grid md:grid-cols-3 md:gap-2">
            <div className="md:col-span-1">
              <h3 className="text-purple-900 font-medium mt-6">
                {f({
                  id: "Form.EntranceExamDate",
                  defaultMessage: "Entrance Exam Date",
                })}
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="mt-6">
                <label
                  htmlFor="dateTime"
                  className="ml-0.5 text-purple-900 font-medium text-sm"
                >
                  {f({
                    id: "Form.StartDate",
                    defaultMessage: "Start Date",
                  })}{" "}
                  *
                </label>

                <DatePicker
                  selected={dateOfExam}
                  onChange={(date) => {
                    setErrors({ ...errors, dateOfExam: false });
                    setDateOfExam(date);
                  }}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeInputLabel="Time:"
                  dateFormat="h:mm aa MMMM d, yyyy"
                  customInput={
                    <ExampleCustomInput error={errors?.dateOfExam} />
                  }
                  minDate={new Date()}
                  excludeDates={calculateDisableDays()}
                  maxDate={addDays(new Date(), 60)}
                  minTime={setHours(setMinutes(new Date(), 0), 14)}
                  maxTime={setHours(setMinutes(new Date(), 0), 16)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="text-lg font-semibold text-purple-900 bg-yellow-500 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600"
            >
              {isLoading ? (
                <>
                  <div className="loading-circle animate-spin ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6 mr-2"></div>
                  <span>
                    {" "}
                    {f({
                      id: "Form.Processing",
                      defaultMessage: "Processing",
                    })}
                    ...
                  </span>
                </>
              ) : (
                f({
                  id: "Form.SendMessage",
                  defaultMessage: "Send message",
                })
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExamForm;
