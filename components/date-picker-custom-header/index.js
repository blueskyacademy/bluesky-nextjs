import { getMonth, getYear } from "date-fns";
import { range } from "lodash";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { FORMAT_DATE_DISPLAY } from "../../lib/constant";
import "react-datepicker/dist/react-datepicker.css";
import { useIntl } from "react-intl";

const DatePickerCustomHeader = ({ selected, handleChangeDate, error }) => {
  const { formatMessage: f } = useIntl();
  const years = range(2005, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
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
          {f({
            id: "Form.PleaseChooseADate",
            defaultMessage: "Please choose a date",
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
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {">"}
          </button>
        </div>
      )}
      dateFormat={FORMAT_DATE_DISPLAY}
      selected={selected}
      onChange={(date) => handleChangeDate(date)}
      customInput={<ExampleCustomInput error={error} />}
      maxDate={new Date()}
    />
  );
};

export default DatePickerCustomHeader;
