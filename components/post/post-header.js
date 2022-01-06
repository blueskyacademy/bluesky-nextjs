import DateComponent from "../date";

export default function PostHeader({ title, coverImage, date }) {
  return (
    <header className="mx-auto pt-20">
      <h1 className="text-3xl md:text-3xl lg:text-4xl font-semibold leading-relaxed md:leading-none mb-6 text-center md:text-center">
        {title}
      </h1>
      <div className="mx-auto">
        <div className="mb-6 text-lg text-center text-gray-800">
          <DateComponent dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <img
          src={coverImage}
          className="w-full max-w-4xl mx-auto rounded"
          width={960}
          height={500}
        />
      </div>
    </header>
  );
}
