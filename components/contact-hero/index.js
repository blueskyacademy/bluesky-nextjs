import { forwardRef, useState } from "react";
import { format, setHours, setMinutes } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FORMAT_DATETIME_DISPLAY } from "../../lib/constant";

export const ContactForm = ({
  handleSubmit,
  handleChangeForm,
  selectedDate,
  isLoading,
  status,
  handleChangeDate,
  error,
}) => {
  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick, error }, ref) => (
    <div
      className={`w-full p-4 mt-2 text-sm font-medium text-purple-700 duration-300 ease-in-out border-2 outline-none h-14 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none flex justify-between ${
        error && "border-red-200"
      }`}
      onClick={onClick}
      ref={ref}
    >
      {value ? (
        value
      ) : (
        <p className="text-purple-700 opacity-70">
          Please choose date and time
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
      <div>
        <h3 className="text-2xl font-bold text-purple-900">
          Campus Tour Registration
        </h3>
        <p className="text-purple-800 mt-0.5 text-opacity-90">
          {`We'll get back to you within 24 hours.`}
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
          <div>
            <label
              htmlFor="name"
              className="ml-0.5 text-purple-900 font-medium text-sm"
            >
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Fullname"
              className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
              required
              id="fullName"
              name="fullName"
              onChange={handleChangeForm}
            />
          </div>

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
          <div className="mt-6">
            <label
              htmlFor="dateTime"
              className="ml-0.5 text-purple-900 font-medium text-sm"
            >
              Preferred date and time *
            </label>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => handleChangeDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeInputLabel="Time:"
              dateFormat="h:mm aa MMMM d, yyyy"
              customInput={<ExampleCustomInput error={error} />}
              minDate={new Date()}
              minTime={setHours(setMinutes(new Date(), 0), 8)}
              maxTime={setHours(setMinutes(new Date(), 0), 18)}
            />
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="ml-0.5 text-purple-900 font-medium text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="Message"
              rows={3}
              className="w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
              onChange={handleChangeForm}
            ></textarea>
          </div>

          <div className="flex justify-start mt-6">
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
                "Send message"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const ContactHero = () => {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusForm, setStatusForm] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [error, setError] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleChangeDate = (date) => {
    setSelectedDate(date);
    setError(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setError(true);
      return;
    }
    const data = {
      ...form,
      type: "School",
      submittedAt: format(Date.now(), FORMAT_DATETIME_DISPLAY),
      date: format(selectedDate, FORMAT_DATETIME_DISPLAY),
    };
    setIsLoading(true);
    try {
      const response = await fetch("/api/sheet", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("result", result);
      setStatusForm("success");
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };
  return (
    <section className="px-4 pb-12 overflow-hidden lg:pt-24 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-32 lg:max-w-screen-xl ">
        <div className="py-16 lg:py-32">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Visit us soon
            </span>
          </div>
          <h1 className="max-w-md mt-4 text-purple-900 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter">
            {`We'd love to meet you`}
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-purple-800">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
        </div>
        <div className="relative">
          <img
            src="/svg/dots-large-grid.svg"
            className="absolute lg:hidden -right-16 -top-12 sm:-top-16 w-80 lg:left-14 lg:-top-16 lg:w-36 opacity-60"
          />
          <img
            src="/svg/dots-grid.svg"
            className="absolute hidden w-40 opacity-75 lg:block -right-16 -top-16 lg:left-14 lg:-top-16 lg:w-36"
          />
          <img
            src="/svg/dots-strip.svg"
            className="absolute hidden w-20 rotate-90 opacity-75 lg:block -right-16 top-1/2"
          ></img>
          <div className="relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
            <ContactForm
              handleChangeForm={handleChangeForm}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              status={statusForm}
              selectedDate={selectedDate}
              handleChangeDate={handleChangeDate}
              error={error}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
