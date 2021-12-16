import { useState } from "react";
import Check from "../../public/svg/check.svg";
import Circle from "../../public/svg/circle.svg";

import Popup from "../popup";
const Action = ({ title, icon, onClick }) => {
  return (
    <div className='sm:text-center'>
      <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24'>
        {icon}
      </div>
      <h6 className='mb-2 font-semibold leading-5'>{title}</h6>
      <p className='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>
        Cheese on toast airedale the big cheese. Danish fontina cheesy grin
        airedale danish
      </p>
      <a
        onClick={onClick}
        aria-label=''
        className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor-pointer'
      >
        Register now
      </a>
    </div>
  );
};

export default function Register() {
  const [showModal, setShowModal] = useState(false);
  const [typeForm, setTypeForm] = useState();
  const [title, setTitle] = useState();
  const ACTIONS = [
    {
      title: "School Visit Registration",
      icon: (
        <Check className='w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20' />
      ),
      type: "School",
    },
    {
      title: "Placement Test",
      icon: (
        <Check className='w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20' />
      ),
      type: "Placement",
    },
    {
      title: "School Bus Registration",
      icon: (
        <Check className='w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20' />
      ),
      type: "Bus",
    },
  ];
  return (
    <>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='df31b9f6-a505-42f8-af91-d2b7c3218e5c'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'></span>
            </span>
            Register our services
          </h2>
          <p className='text-base text-gray-700 md:text-lg'></p>
        </div>
        <div className='grid gap-8 row-gap-8 lg:grid-cols-3'>
          {ACTIONS.map((item, idx) => (
            <Action
              key={`action-register-${item.title}-${idx}`}
              title={item.title}
              icon={item.icon}
              onClick={() => {
                setTitle(item.title);
                setTypeForm(item.type);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>
      <Popup
        showModal={showModal}
        onClose={() => setShowModal(false)}
        type={typeForm}
        title={title}
      />
    </>
  );
}
