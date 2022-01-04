import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./video-apply"), {
  ssr: false,
});

const VideoRecord = () => {
  return (
    <div className="container mx-auto">
      <h3 className="text-xl leading-tight sm:text-xl sm:leading-tighter font-semibold text-gray-800 text-center mt-5">
        In two minutes or under, please mention your name and talk about why you
        want to teach abroad?
      </h3>
      <h3 className="text-xl leading-tight tracking-tight sm:text-xl sm:leading-tighter font-semibold text-gray-800 mt-5">
        You have 2 options:{" "}
      </h3>
      <div className="border p-5 shadow-xl my-5 rounded-2xl">
        <h3 className="text-xl leading-tight tracking-normal sm:text-xl sm:leading-tighter font-bold">
          Option 1: Email us your video
        </h3>
        <p className="mt-2">
          If you already have a video, please email us at{" "}
          <strong>bluesky@bsa.edu.vn</strong> with your video as an attachment.
        </p>
        <p className="mt-2">
          Do not forget to fill out the application form at{" "}
          <Link href="/apply">
            <a className="text-red-500">Apply </a>
          </Link>
          as it is a requirement for the process to be completed.
        </p>
      </div>
      <div className="border p-5 shadow-xl my-5 rounded-2xl bg-white">
        <h3 className="text-xl leading-tight tracking-normal sm:text-xl sm:leading-tighter font-bold">
          Option 2: Record your video
        </h3>
        <h5 className="text-md text-gray-800 italic mt-2">
          Note that you cannot capture video if your browser is Safari
        </h5>
        <h4 className="text-xl leading-tight tracking-normal sm:text-xl sm:leading-tighter font-bold mt-2">
          Instructions:
        </h4>
        <ol>
          <li className="mt-2">
            1. Press the button{" "}
            <img src="/images/start_camera.png" className="inline-block"></img>{" "}
            to start the camera (not capture yet)
          </li>
          <li className="mt-2">
            2. When you are ready, press the circle in the bottom bar{" "}
            <img src="/images/start_capture.png" className="inline-block"></img>{" "}
            to start capturing
          </li>
          <li className="mt-2">
            3. When you have finished, press the rectangle at the same position
            with the circle to stop the record
          </li>
          <li className="mt-2">
            4. You can replay the captured video by clicking the play button{" "}
            <img src="/images/replay.png" className="inline-block"></img> . If
            you want to capture a new video, click{" "}
            <img src="/images/recapture.png" className="inline-block"></img>{" "}
            <br />
            Please make sure you have filled out the application form and your
            email below so that we can get in touch with you. Then click submit
            to finish
          </li>
        </ol>
      </div>
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default VideoRecord;
