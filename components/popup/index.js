import { useRef, useState } from "react";
import { format } from "date-fns";
import Form from "../form";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export default function Popup({ showModal, onClose, type = "School", title }) {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusForm, setStatusForm] = useState();
  const wrapperRef = useRef(null);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      type: type,
      submittedAt: format(Date.now(), "HH:mm:ss dd-MM-yyyy"),
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
      console.log("error");
    }
    setIsLoading(false);
  };
  const handleCloseForm = () => {
    setStatusForm();
    onClose && onClose();
  };
  useOutsideClick(wrapperRef, () => {
    if (showModal) {
      handleCloseForm();
    }
  });

  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-2/5 my-6 mx-auto max-w-6xl'>
              <div
                id='box-modal'
                ref={wrapperRef}
                className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'
              >
                <div className='relative'>
                  <div className='flex items-start justify-center p-5 pb-0 rounded-t'>
                    <img
                      src='https://www.bsa.edu.vn/assets/logo-476fe7ebc8e1d8eb9335d0f11d06637c5040a4b26d30522919086c3a21d167f5.png'
                      className='h-20'
                      alt='Logo'
                    />
                  </div>
                  <button
                    onClick={handleCloseForm}
                    className='absolute'
                    style={{
                      top: "10px",
                      right: "20px",
                    }}
                  >
                    <span className='text-2xl font-semibold'>×</span>
                  </button>
                </div>
                <div className='relative px-12 py-4 flex-auto sm:px-6'>
                  <Form
                    handleChangeForm={handleChangeForm}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    status={statusForm}
                    title={title}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black w-100 h-100'></div>
        </>
      ) : null}
    </>
  );
}
