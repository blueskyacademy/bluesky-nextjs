import { useEffect, useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useDisableBodyScroll } from "../../hooks/useBodyDisableScroll";
import PostBody from "../post/post-body";
export const SpotLightPopup = ({ showPopup, onClose, coverImage }) => {
  const wrapperRef = useRef(null);
  useDisableBodyScroll(showPopup);

  useOutsideClick(wrapperRef, () => {
    if (showPopup) {
      onClose();
    }
  });

  return (
    <>
      {showPopup ? (
        <>
          <div className="fixed inset-0 z-50 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear">
            <div className="fixed top-0 left-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50"></div>
            <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
              <div
                className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl"
                ref={wrapperRef}
              >
                <div className="relative aspect-w-16 aspect-h-9 bg-white border-y-[10px] border-primary-100">
                  <img src="/svg/star.svg" alt="Sunny" />
                  <PostBody
                    content={coverImage?.content}
                    className="max-w-6xl bg-white px-12 overflow-y-auto py-5 rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
