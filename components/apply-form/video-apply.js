import "video.js/dist/video-js.min.css";
import videojs from "video.js";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
import "videojs-record/dist/videojs.record.js";
import { useEffect, useRef, useState } from "react";

const options = {
  controls: true,
  bigPlayButton: false,
  loop: false,
  width: 640,
  height: 400,
  plugins: {
    record: {
      audio: true,
      video: true,
      maxLength: 2 * 60,
      displayMilliseconds: false,
    },
  },
};

const VideoApply = () => {
  const inputDeviceIdIndex = useRef(0);
  const [file, setFile] = useState();
  const [email, setEmail] = useState("");
  const [statusForm, setStatusForm] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    console.log("running useEffect record");
    const player = videojs("myVideo", options, function () {
      const msg =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(msg);
    });

    function setDeviceId(deviceId) {
      player.record().setVideoInput(deviceId);
    }

    // Handlers

    // enumerate devices once
    player.one("deviceReady", function () {
      player.record().enumerateDevices();
    });

    player.on("enumerateReady", function () {
      const devices = player.record().devices;

      // Filter out video input devices
      const videoInputDevices = devices.filter(
        ({ kind }) => kind === "videoinput"
      );

      // change video input device
      setDeviceId(videoInputDevices[inputDeviceIdIndex.current].deviceId);

      console.log(videoInputDevices);
    });

    // error handling
    player.on("deviceError", function () {
      console.log("device error:", player.deviceErrorCode);
    });

    player.on("error", function (element, error) {
      console.error(error);
    });

    // user clicked the record button and started recording
    player.on("startRecord", function () {
      console.log("started recording!");
    });

    // user completed recording
    player.on("finishRecord", async function () {
      console.log("finished recording");
      console.log({ stream: player.recordedData });
      setFile(player.recordedData);
    });

    // monitor stream data during recording
    player.on("timestamp", function () {});
    return () => {
      player.dispose();
    };
  }, []);
  const handleSubmit = async () => {
    console.log("file", file);
    console.log("email", email);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", email);
    try {
      const response = await fetch("/api/video", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("result", result);
      setStatusForm("success");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="border p-10 rounded-xl shadow-2xl">
      <video
        id="myVideo"
        playsInline
        className="video-js vjs-default-skin mx-auto"
      />
      {statusForm === "success" ? (
        <div>
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
        <div className="flex mt-5 mx-auto justify-center">
          <label
            htmlFor="email"
            className="mr-5 text-purple-900 font-medium text-sm mt-5"
          >
            Enter Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="w-1/2 p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200 focus:ring-purple-200 focus:outline-none"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="text-lg ml-2 font-semibold text-purple-900 bg-yellow-500 leading-normal inline-flex items-center justify-center px-8 py-2 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoApply;
