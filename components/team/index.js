import { useState } from "react";
const DEPARTMENTS = [
  "School Leader Ship",
  "Teaching Faculty Leadership",
  "Kindergarten",
  "Primary & Secondary Teachers",
  "Cambridge Programs Division",
  "Art & Physical Division",
  "Support Staff",
];
const PersonCard = ({ image, name, role }) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        className='object-cover w-36 h-36 mb-2 rounded-full shadow'
        src={image}
        alt='Person'
      />
      <div className='flex flex-col items-center'>
        <p className='text-lg font-bold'>{name}</p>
        <p className='text-sm text-gray-800 text-center'>{role}</p>
      </div>
    </div>
  );
};
const PersonList = ({ persons }) => {
  return (
    <div className='grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 pb-16'>
      {persons?.map((item, idx) => (
        <PersonCard
          key={`person-${idx}`}
          name={item.name}
          role={item.role}
          image={item.photo.url}
        />
      ))}
    </div>
  );
};
const formatPersonsByDepartment = (persons) => {
  const result = {};
  for (const item of persons) {
    if (!result[item.deparment]) {
      result[item.deparment] = [];
    }
    result[item.deparment].push(item);
  }
  return result;
};
const Team = ({ teachers }) => {
  const [selectedDepartment, setSelectedDepartment] =
    useState("School Leader Ship");
  const result = formatPersonsByDepartment(teachers);

  return (
    <div className='mb-5 bg-gray-100'>
      <div className='flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 lg:flex-row'>
        <div className='flex-grow pt-1 mx-auto'>
          <div className='flex items-center mb-3'>
            <span className='font-bold tracking-wide text-gray-900 text-4xl'>
              Departments
            </span>
            <span className='ml-1'>
              <svg
                className='w-5 h-5 mt-px text-deep-purple-accent-400'
                stroke='currentColor'
                viewBox='0 0 52 52'
              >
                <polygon
                  strokeWidth='4'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                  points='29 13 14 29 25 29 23 39 38 23 27 23'
                />
              </svg>
            </span>
          </div>
          <div>
            <ul className='grid grid-cols-3'>
              {DEPARTMENTS.map((item) => (
                <li
                  key={item}
                  onClick={() => setSelectedDepartment(item)}
                  className={
                    selectedDepartment === item
                      ? "text-deep-purple-accent-700 py-2 font-semibold"
                      : "py-2"
                  }
                >
                  <a className='transition-colors duration-300 text-xl hover:text-deep-purple-accent-700 cursor-pointer'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <PersonList persons={result[selectedDepartment] || []} />
        </div>
      </div>
    </div>
  );
};
export default Team;
