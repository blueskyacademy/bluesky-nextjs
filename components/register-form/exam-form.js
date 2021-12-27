import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from "../dropdown";

const BUS_SERVICE = {
  twoWay: "Two-way journey",
  pickup: "Pick-up only",
  drop: "Drop-off only",
};
const ExamForm = ({
  handleSubmit,
  handleChangeForm,
  selectedDate,
  isLoading,
  status,
  handleChangeDate,
}) => {
  const [selectedOption, setSelectedOption] = useState("No");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [dateOfExam, setDateOfExam] = useState();
  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </div>
  ));
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="flex items-center flex-col">
        <h3 className="text-2xl font-bold text-purple-900">
          Entrance Exam Registration
        </h3>
        <p className="text-purple-800 mt-0.5 text-opacity-90">
          Please register the entrance exam on every Wednesday from 2PM - 4PM
        </p>
      </div>
      {status === "success" ? (
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
              Submit done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you. Our staff will call you soon
            </p>
            <p> Have a great day! </p>
          </div>
        </div>
      ) : (
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="md:grid md:grid-cols-3 md:gap-2">
            <div className="md:col-span-1">
              <h3 className="text-purple-900 font-medium mt-2">
                Student Information
              </h3>
            </div>
            <div className="md:col-span-2">
              <div>
                <label
                  htmlFor="fullNameStudent"
                  className="ml-0.5 text-purple-900 font-medium text-sm"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Fullname"
                  className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  required
                  id="fullNameStudent"
                  name="fullNameStudent"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="dateOfBirth"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Date of birth *
                  </label>

                  <DatePicker
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                    dateFormat="MMMM d, yyyy"
                    customInput={<ExampleCustomInput />}
                    maxDate={new Date()}
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="grade"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Gender *
                  </label>
                  <input
                    type="text"
                    placeholder="Gender"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    id="grade"
                    name="grade"
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="dateOfBirth"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Current School
                  </label>

                  <input
                    type="text"
                    placeholder="Name, Address"
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
                    Current Grade *
                  </label>
                  <input
                    type="text"
                    placeholder="Current Grade"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    id="currentGrade"
                    name="currentGrade"
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div style={{ width: "250px" }} className="mt-4">
                <Dropdown
                  options={["No", "Yes"]}
                  title="Is it a re-test?"
                  placeholder="Choose an option"
                  value={selectedOption}
                  handleChange={(item) => setSelectedOption(item)}
                />
              </div>
            </div>
          </div>

          <hr className="border-0 bg-purple-50 text-purple-50 h-0.5 mt-6"></hr>
          <div className="md:grid md:grid-cols-3 md:gap-2">
            <div className="md:col-span-1">
              <h3 className="text-purple-900 font-medium mt-6">
                {`Student's Parent`} <br /> {`/ Guardian Information`}
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="fullNameParent"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Fullname *
                  </label>
                  <input
                    id="fullNameParent"
                    name="fullNameParent"
                    onChange={handleChangeForm}
                    required
                    type="text"
                    placeholder="Full name"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="relationship"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Relationship to the student
                  </label>
                  <input
                    id="relationship"
                    type="text"
                    name="relationship"
                    placeholder="Enter relationship"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="occupation"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Occupation
                  </label>
                  <input
                    id="occupation"
                    name="occupation"
                    onChange={handleChangeForm}
                    required
                    type="text"
                    placeholder="Enter occupation"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="company"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Company Address
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Enter company"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    required
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <label
                    htmlFor="phone"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Phone
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChangeForm}
                    required
                    type="text"
                    placeholder="Phone number"
                    className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Email *
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
                Entrance Exam Date
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="mt-6">
                <label
                  htmlFor="dateTime"
                  className="ml-0.5 text-purple-900 font-medium text-sm"
                >
                  Start Date *
                </label>

                <DatePicker
                  selected={dateOfExam}
                  onChange={(date) => setDateOfExam(date)}
                  dateFormat="MMMM d, yyyy"
                  customInput={<ExampleCustomInput />}
                  minDate={new Date()}
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
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-purple-900"
                    viewBox="0 0 24 24"
                  ></svg>
                  <span>Processing...</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExamForm;
