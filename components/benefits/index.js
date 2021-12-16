const BenefitCard = ({ title, description }) => {
  return (
    <div className='p-8 border sm:border-r'>
      <div className='max-w-md text-center'>
        <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16'>
          <svg
            className='w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12'
            stroke='currentColor'
            viewBox='0 0 52 52'
          >
            <polygon
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='none'
              points='29 13 14 29 25 29 23 39 38 23 27 23'
            />
          </svg>
        </div>
        <h6 className='mb-2 font-semibold leading-5'>{title}</h6>
        <p className='mb-3 text-sm text-gray-900'>{description}</p>
      </div>
    </div>
  );
};

const Benefits = ({ id }) => {
  const BENEFITS = [
    {
      title: "Lương bổng",
      description:
        "Chính sách lương bổng cạnh tranh với thị trường, đảm bảo thu nhập tốt cho nhân viên",
    },
    {
      title: "Thưởng",
      description:
        "Chính sách thưởng dựa trên kết quả thực hiện công việc đóng góp vào sự phát triển của BSA",
    },
    {
      title: "Bữa trưa",
      description:
        "BSA cung cấp bữa trưa dinh dưỡng và đảm bảo vệ sinh an toàn thực phẩm cho tất cả nhân viên",
    },
    {
      title: "Bảo hiểm",
      description:
        "Bảo hiểm đầy đủ theo Luật Lao Động. Bảo hiểm sức khỏe bổ sung cho các vị trí cấp cao",
    },
    {
      title: "Đào tạo",
      description:
        "Chương trình đào tạo bồi dưỡng chuyên môn được tổ chức liên tục và hiệu quả",
    },
    {
      title: "Du lịch",
      description:
        "Du lịch ngỉ dưỡng hằng năm tưởng thưởng cho nhân viên và cấp quản lý",
    },
  ];
  return (
    <div
      id={id}
      className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10'
    >
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none  text-gray-900 sm:text-4xl md:mx-auto'>
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
            <span className='relative'>OUR BENEFITS</span>
          </span>{" "}
        </h2>
      </div>
      <div className='grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3'>
        {BENEFITS.map((item, idx) => (
          <BenefitCard
            key={`benefit-${item.title}-${idx}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
