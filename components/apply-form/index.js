import { useRouter } from "next/router";
import AirTable from "./airtable-form";
import VideoRecord from "./video-record";

const ApplyForm = ({ video }) => {
  const router = useRouter();
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center -my-2 space-x-2 text-sm font-medium sm:space-x-4 lg:space-x-6">
        <li className="my-2">
          <button
            className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
              !video ? "bg-purple-600 text-white" : "bg-white text-purple-900"
            } rounded-full hover:bg-purple-500 hover:text-white`}
            onClick={() => router.push("/apply")}
          >
            Application Form
          </button>
        </li>
        <li className="my-2">
          <button
            className={`inline-flex items-center justify-center px-4 py-1.5 sm:text-lg duration-300 ease-in-out ${
              video ? "bg-purple-600 text-white" : "bg-white text-purple-900"
            } rounded-full hover:bg-purple-500 hover:text-white`}
            onClick={() => router.push("/apply?video=1")}
          >
            A Short Video Response
          </button>
        </li>
      </ul>
      {!video && <AirTable />}
      {video && <VideoRecord />}
    </div>
  );
};

export default ApplyForm;
