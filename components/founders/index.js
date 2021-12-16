const Person = ({ name, role, description, avatar }) => {
  return (
    <div>
      <img
        className='object-cover w-36 h-36 rounded-full shadow'
        src={
          avatar
            ? avatar
            : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        }
        alt='Person'
      />
      <div className='flex flex-col justify-center mt-2'>
        <p className='text-lg font-bold'>{name}</p>
        <p className='mb-4 text-xs text-gray-800'>{role}</p>
        <p className='text-sm tracking-wide text-gray-800'>{description}</p>
      </div>
    </div>
  );
};

const Cofounders = ({ heading, subHeading, id }) => {
  const COFOUNDERS = [
    {
      name: "Ms Hanh (Nguyen Thi Hong Hanh) ",
      role: "Charmain",
      description:
        "Through her 28 years of teaching experience, Ms Hanh has always carried the concern that children in Nghe An and vicinity are lacking a nurturing environment. One in which they can learn, play, discover their natural abilities and aptitudes, and be ready to join the global world. ",
      avatar: "https://i.imgur.com/ikrZXqM.png/",
    },
    {
      name: "Mr Harley (Trung Tuan Dung)",
      role: "Teacher",
      description:
        "Mr Harley believes in learning through discovery. When we are young, we learn by watching, listening, asking, trying, and reading. When we are older, we think, we share and we change our minds. Our world around us changes quickly which often challenges our learned beliefs.",
      avatar: "https://i.imgur.com/2bALhku.png/",
    },
    {
      name: "Mr Jerry (Trung Tuan Cuong)",
      role: "Teacher",
      description:
        "In response, he contributed significantly to the design and ongoing development of the BSA facilities, such as the Science laboratory, the swimming pool and the football pitch as well as many other strategic projects. ",
      avatar: "https://i.imgur.com/x4tLX0P.png/",
    },
  ];
  return (
    <div className='bg-gray-100' id={id}>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
              Blue Sky Academy
            </p>
          </div>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='247432cb-6e6c-4bec-9766-564ed7c230dc'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#247432cb-6e6c-4bec-9766-564ed7c230dc)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'></span>
            </span>{" "}
            {heading}
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>{subHeading}</p>
        </div>
        <div className='grid gap-10 mx-auto sm:grid-cols-1 lg:grid-cols-3 lg:max-w-screen-lg'>
          {COFOUNDERS.map((item, idx) => (
            <Person
              key={item.name}
              name={item.name}
              role={item.role}
              description={item.description}
              avatar={item.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cofounders;
