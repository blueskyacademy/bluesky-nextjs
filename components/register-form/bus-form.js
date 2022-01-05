import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import Dropdown from "../dropdown";
import { format } from "date-fns";
import DatePickerCustomHeader from "../date-picker-custom-header";
import {
  FORMAT_DATETIME_DISPLAY,
  FORMAT_DATE_DISPLAY,
  BUS_SERVICE,
} from "../../lib/constant";

const BusForm = ({ classes }) => {
  const [form, setForm] = useState({});
  const [selectedOption, setSelectedOption] = useState(BUS_SERVICE.twoWay);
  const [isLoading, setIsLoading] = useState(false);
  const [statusForm, setStatusForm] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [errors, setErrors] = useState({});
  const [checkAgree, setCheckAgree] = useState(true);
  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleChangeGrade = (value) => {
    setForm({ ...form, currentGrade: value });
    setErrors({ ...errors, currentGrade: false });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate
    if (!dateOfBirth) {
      setErrors({ ...errors, dateOfBirth: true });
      return;
    }
    if (!form?.currentGrade) {
      setErrors({ ...errors, currentGrade: true });
      return;
    }

    if (!startDate) {
      setErrors({ ...errors, startDate: true });
      return;
    }
    if (!checkAgree) {
      return;
    }
    const data = {
      ...form,
      busOption: selectedOption,
      submittedAt: format(Date.now(), FORMAT_DATETIME_DISPLAY),
      dateOfBirth: format(dateOfBirth, FORMAT_DATE_DISPLAY),
      startDate: format(startDate, FORMAT_DATE_DISPLAY),
    };
    setIsLoading(true);
    try {
      const response = await fetch("/api/bus", {
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
        <p className="text-purple-700 opacity-70">Please choose a date</p>
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
          Bus Service Registration
        </h3>
        <p className="text-purple-800 mt-0.5 text-opacity-90"></p>
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
              <div className="grid grid-cols-2 gap-4">
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
                <div>
                  <label
                    htmlFor="dateOfBirth"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Date of birth *
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

              <div className="grid grid-cols-2 gap-4">
                <div className="mt-6">
                  <Dropdown
                    title="Current Grade *"
                    placeholder="Please select a grade"
                    options={classes}
                    value={form?.currentGrade}
                    handleChange={(value) => handleChangeGrade(value)}
                    error={errors?.currentGrade}
                  />
                </div>
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
                    Relationship to the student *
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
                    htmlFor="phone"
                    className="ml-0.5 text-purple-900 font-medium text-sm"
                  >
                    Phone *
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
                Bus Service Detail
              </h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-4">
                  <Dropdown
                    options={[
                      BUS_SERVICE.twoWay,
                      BUS_SERVICE.pickup,
                      BUS_SERVICE.drop,
                    ]}
                    title="Select an option"
                    placeholder="Choose an option"
                    value={selectedOption}
                    handleChange={(item) => setSelectedOption(item)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {selectedOption !== BUS_SERVICE.drop && (
                  <div className="mt-6">
                    <label
                      htmlFor="pickupAddress"
                      className="ml-0.5 text-purple-900 font-medium text-sm"
                    >
                      Pick-up address *
                    </label>
                    <input
                      id="pickupAddress"
                      name="pickupAddress"
                      onChange={handleChangeForm}
                      required
                      type="text"
                      placeholder="Enter pickup address"
                      className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                    />
                  </div>
                )}

                {selectedOption != BUS_SERVICE.pickup && (
                  <div className="mt-6">
                    <label
                      htmlFor="dropOffAdress"
                      className="ml-0.5 text-purple-900 font-medium text-sm"
                    >
                      Drop-off address *
                    </label>
                    <input
                      id="dropoffAdress"
                      type="text"
                      name="dropoffAdress"
                      placeholder="Enter drop off adress"
                      className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
                      required
                      onChange={handleChangeForm}
                    />
                  </div>
                )}
              </div>
              <div className="mt-6">
                <label
                  htmlFor="dateTime"
                  className="ml-0.5 text-purple-900 font-medium text-sm"
                >
                  Start Date *
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setErrors({ ...errors, startDate: false });
                    setStartDate(date);
                  }}
                  dateFormat={FORMAT_DATE_DISPLAY}
                  customInput={<ExampleCustomInput error={errors?.startDate} />}
                  minDate={new Date()}
                />
              </div>
              <div className="mt-4">
                <input
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={checkAgree}
                  onChange={() => setCheckAgree(!checkAgree)}
                />
                <label
                  className="form-check-label text-gray-800 ml-2 text-sm"
                  htmlFor="flexCheckChecked"
                >
                  We hear by agree to pay tuition and other related school fees
                  by the due date and ensure that our child(ren) and family
                  follow all Blue Sky Acadmy policies and rules.
                </label>
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

export default BusForm;
