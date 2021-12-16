import DateComponent from "../date";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <header className='mx-auto'>
      <h1 className='text-3xl md:text-3xl lg:text-4xl font-bold leading-relaxed md:leading-none mb-12 text-center md:text-center'>
        {title}
      </h1>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <img
          src={coverImage}
          className='w-full max-w-2xl mx-auto'
          width={960}
          height={500}
        />
      </div>
      <div className='max-w-2xl mx-auto'>
        <div className='mb-6 text-lg'>
          <DateComponent dateString={date} />
        </div>
      </div>
    </header>
  );
}
