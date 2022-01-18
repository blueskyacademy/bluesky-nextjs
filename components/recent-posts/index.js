import Link from "next/link";
import DateComponent from "../date";
import { useIntl } from "react-intl";

const RecentPosts = ({ recentPosts }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section>
      <div className="pl-12 py-12 mx-auto">
        <div className="mx-auto">
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-black"></div>
            </div>
            <div className="relative flex justify-start">
              <span className="pr-3 text-lg font-medium text-neutral-600 bg-white">
                {f({
                  id: "Home.NewsAndEvents",
                  defaultMessage: "News and Events",
                })}
              </span>
            </div>
          </div>
          <div className="space-y-8 lg:divide-y lg:divide-gray-100">
            {recentPosts.map((post, idx) => (
              <div
                className="pt-8 sm:flex lg:items-end group"
                key={`post-${idx}`}
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                  <Link href={`/posts/${post.slug}`}>
                    <img
                      className="w-full rounded-md lg:h-24 lg:w-24 object-cover rounded cursor-pointer"
                      src={post?.coverImage?.url}
                      alt="text"
                    />
                  </Link>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    {" "}
                    <DateComponent dateString={post?.date} />
                  </span>
                  <p className="mt-3 text-lg font-medium">
                    <Link href={`/posts/${post.slug}`}>
                      <a
                        className="
                      text-xl text-neutral-600
                      group-hover:text-purple-600
                      lg:text-xl cursor-pointer
                    "
                      >
                        {post?.title}
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
