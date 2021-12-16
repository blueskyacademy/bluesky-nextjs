export default function SchoolCard({ name, description, image }) {
  return (
    <div className='transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center cursor-pointer'>
      <div className='relative'>
        <img
          className='object-cover w-full h-48 rounded-t lg:h-80 xl:h-96'
          src={image}
          alt=''
        />
        <div className='absolute inset-0 ' />
      </div>
      <div className='px-4 py-4 border border-t-0 rounded-b sm:px-8'>
        <h5 className='mb-2 text-xl font-bold leading-none sm:text-2xl'>
          {name}
        </h5>
        <p className='mb-5 text-gray-700'>{description}</p>
      </div>
    </div>
  );
}
