import React, { useState } from "react";
import { SpotLightPopup } from "../spotlight-popup";

const Banner = ({ coverImage }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        {coverImage && (
          <button onClick={() => setShowPopup(true)}>
            <img
              src={coverImage?.image?.url}
              alt="cover"
              className="mx-auto cover"
            />
          </button>
        )}
      </div>
      <SpotLightPopup
        showPopup={showPopup}
        onClose={() => setShowPopup(false)}
        coverImage={coverImage}
      />
    </>
  );
};

export default Banner;
