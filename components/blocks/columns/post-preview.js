import Link from "next/link";
import DateComponent from "../../date";

export default function PostPreview({
  title,
  coverImage,
  date,
  slug,
  excerpt,
}) {
  return (
    <div className='overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md border border-gray-200'>
      <img src={coverImage} className='object-cover w-full h-64' alt='' />
      <div className='p-5'>
        <p className='mb-3 text-xs font-semibold tracking-wide uppercase'>
          <span className='text-gray-600'>
            {" "}
            <DateComponent dateString={date} />
          </span>
        </p>
        <Link href={`/posts/${slug}`}>
          <a
            href='#'
            aria-label='Category'
            className='inline-block mb-3 text-2xl font-bold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700'
          >
            {title}
          </a>
        </Link>

        <p className='mb-2 text-gray-700'>{excerpt.slice(0, 120)}...</p>
        <Link href={`/posts/${slug}`}>
          <a
            href='#'
            aria-label=''
            className='inline-flex items-center cursor-pointer font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800'
          >
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
}
