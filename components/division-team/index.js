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
          key={`person-${idx}`}
          name={item.name}
          role={item.role}
          image={item?.photo?.url}
        />
      ))}
    </div>
  );
};

const DivisionTeam = ({ teachers }) => {
  return (
    <section>
      <div className="px-4 pt-16 py-4 bg-purple-600 sm:pt-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
          <div className="flex items-center">
            <h3 className="max-w-4xl text-white sm:text-center text-4xl leading-tight tracking-wide sm:text-5xl xl:text-6xl sm:leading-tighter font-bold lg:text-left">
              Meet the awesome teachers
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full h-32 bg-purple-600"></div>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto -translate-y-24 lg:max-w-screen-xl">
          <PersonList persons={teachers} />
        </div>
      </div>
    </section>
  );
};

export default DivisionTeam;
