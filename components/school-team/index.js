import { useState } from "react";
import { useIntl } from "react-intl";

const DEPARTMENTS = [
  {
    title: "Administration",
    id: "Teacher.Administration",
  },
  {
    title: "Management",
    id: "Teacher.Management",
  },
  {
    title: "Kindergarten",
    id: "Teacher.Kindergarten",
  },
  {
    title: "Primary",
    id: "Teacher.Primary",
  },
  {
    title: "Secondary",
    id: "Teacher.Secondary",
  },
  {
    title: "Specialist",
    id: "Teacher.Specialist",
  },
  {
    title: "Cambridge Program",
    id: "Teacher.CambridgeProgram",
  },
  {
    title: "Support Staff",
    id: "Teacher.SupportStaff",
  },
];
const PersonCard = ({ image, name, role }) => {
  return (
    <div>
      <div className="">
        <img
          src={image}
          className="object-cover w-48 h-48 mb-2 rounded-2xl shadow"
          alt="Staff #1"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="mt-3 text-xl font-medium">
          <p className="font-semibold tracking-wide text-purple-900">{name}</p>
          <p className="text-lg text-purple-600">{role}</p>
        </div>
      </div>
    </div>
  );
};
const PersonList = ({ persons }) => {
  return (
    <div className="grid gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
      {persons?.map((item, idx) => (
        <PersonCard
          key={`person-${item?.name}-${idx}`}
          name={item?.name}
          role={item?.role}
          image={item.photo?.url}
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
const SchoolTeam = ({ teachers }) => {
  const { formatMessage: f } = useIntl();
  const [selectedDepartment, setSelectedDepartment] =
    useState("Administration");
  const result = formatPersonsByDepartment(teachers);
  return (
    <section>
      <div className="px-4 pt-16 py-4 bg-purple-600 sm:pt-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
          <div className="flex items-center">
            <h3 className="max-w-4xl text-white sm:text-center text-4xl leading-tight tracking-wide sm:text-5xl xl:text-6xl sm:leading-tighter font-bold lg:text-left">
              {f({
                id: "Teacher.OurTeachers",
                defaultMessage: "Our Teacher",
              })}
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-purple-600 pb-16">
        <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
          <ul className="grid sm:grid-cols-3">
            {DEPARTMENTS.map((item) => (
              <li
                key={item.title}
                onClick={() => setSelectedDepartment(item.title)}
                className={
                  selectedDepartment === item.title
                    ? "text-yellow-400 py-2 font-bold mx-5 sm:mx-0"
                    : "py-2 text-white mx-5 sm:mx-0"
                }
              >
                <a
                  className={`transition-colors duration-300 text-xl  hover:text-yellow-400 cursor-pointer`}
                >
                  {f({
                    id: item.id,
                  })}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full h-32 bg-purple-600"></div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto -translate-y-24 lg:max-w-screen-xl">
          <PersonList persons={result[selectedDepartment] || []} />
        </div>
      </div>
    </section>
  );
};

export default SchoolTeam;
