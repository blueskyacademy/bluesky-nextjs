import { useEffect, useState } from "react";
import { SCHEDULE_TYPE } from "../../lib/constant";
import Dropdown from "../dropdown";
import DropdownSearch from "../dropdown-search";
import EmbedDocs from "../embed-docs";
import LoadingSpinner from "../loading-spiner";

const PdfView = ({ fileId }) => {
  return (
    <div className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8">
      <EmbedDocs fileId={fileId} />
    </div>
  );
};
const Loading = () => {
  return (
    <div
      className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8 mx-auto"
      style={{ width: "180px" }}
    >
      <LoadingSpinner />
    </div>
  );
};

const ScheduleHero = ({ classes }) => {
  const [scheduleType, setScheduleType] = useState(SCHEDULE_TYPE.program);
  const [selectedClass, setSelectedClass] = useState();
  const [search, setSearch] = useState();
  const [fileId, setFileId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchSchedule = async (data) => {
    setIsLoading(true);
    const response = await fetch("/api/schedule", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    setFileId(result.id);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!selectedClass) return;
    const data = {
      className: selectedClass,
      scheduleType: scheduleType,
    };
    fetchSchedule(data);
  }, [scheduleType, selectedClass]);
  const handleChangeSearch = (value) => {
    setSelectedClass();
    setSearch(value);
  };
  const handleChange = (item) => {
    setSelectedClass(item);
  };

  return (
    <section>
      <div className="px-4 pt-10 sm:pt-10 lg:pt-10 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-10 md:mb-10 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            Weekly Schedule
          </h3>
          <ul className="flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  scheduleType === SCHEDULE_TYPE.program
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setScheduleType(SCHEDULE_TYPE.program)}
              >
                Class Schedule
              </button>
            </li>
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  scheduleType === SCHEDULE_TYPE.meal
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setScheduleType(SCHEDULE_TYPE.meal)}
              >
                Meal Menu
              </button>
            </li>
          </ul>
          <DropdownSearch
            title="Select class"
            placeholder="Please select a class"
            options={classes}
            value={selectedClass}
            handleChange={handleChange}
            search={search}
            handleChangeSearch={handleChangeSearch}
          />
        </div>
      </div>
      <div className="w-full h-56 bg-purple-25"></div>
      {isLoading ? <Loading /> : <PdfView fileId={fileId} />}
    </section>
  );
};

export default ScheduleHero;
