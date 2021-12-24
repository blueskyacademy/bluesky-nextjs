import { useEffect, useState } from "react";
import Dropdown from "../dropdown";
import EmbedDocs from "../embed-docs";

const PdfView = ({ fileId }) => {
  return (
    <div className="px-4 mt-12 -mb-48 -translate-y-56 lg:mt-20 sm:mt-16 sm:px-6 lg:px-8">
      <EmbedDocs fileId={fileId} />
    </div>
  );
};

const ScheduleHero = ({ classes }) => {
  const [showSchedule, setShowSchedule] = useState(true);
  const [selectedClass, setSelectedClass] = useState();
  const [fileId, setFileId] = useState();
  const classOptions = classes?.map((item) => item.name).sort();
  useEffect(() => {
    const chosenClass = classes?.find((item) => item.name == selectedClass);
    console.log("chosenClass", chosenClass);
    if (!showSchedule) {
      setFileId(chosenClass?.menuFileId);
    } else {
      setFileId(chosenClass?.scheduleFileId);
    }
  }, [showSchedule, selectedClass]);
  console.log("selectedClass", selectedClass);
  return (
    <section>
      <div className="px-4 pt-10 sm:pt-10 lg:pt-10 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="max-w-2xl mx-auto mb-10 text-center text-purple-900 sm:mb-12 md:mb-20 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
            Weekly Schedule
          </h3>
          <ul className="flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  showSchedule
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setShowSchedule(true)}
              >
                Class Schedule
              </button>
            </li>
            <li className="my-2">
              <button
                className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
                  !showSchedule
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-900"
                } rounded-full hover:bg-purple-500 hover:text-white`}
                onClick={() => setShowSchedule(false)}
              >
                Meal Menu
              </button>
            </li>
          </ul>
          <Dropdown
            options={classOptions}
            value={selectedClass}
            handleChange={(item) => setSelectedClass(item)}
          />
        </div>
      </div>
      <div className="w-full h-56 bg-purple-25"></div>
      <PdfView fileId={fileId} />
    </section>
  );
};

export default ScheduleHero;
