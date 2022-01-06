import Link from "next/link";
import DateComponent from "../date";

const PostList = ({ posts }) => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap -mx-3">
          {posts.map((post, idx) => (
            <div
              className={`w-full ${
                idx == 1 ? "lg:w-2/3" : "lg:w-1/3"
              } px-3 mb-12 hover-up-5`}
              key={`post-${idx}`}
            >
              <a href="#">
                <img
                  className="h-80 w-full object-cover rounded"
                  src={post.coverImage?.url}
                  alt=""
                />
                <p className="mt-6 text-sm text-blue-400">
                  <span className="text-gray-600">
                    {" "}
                    <DateComponent dateString={post?.date} />
                  </span>
                </p>
                <Link href={`/posts/${post.slug}`}>
                  <a
                    href="#"
                    aria-label="Category"
                    className="inline-block my-2 text-2xl font-semibold leading-6 transition-colors duration-200 hover:text-purple-600"
                  >
                    {post.title}
                  </a>
                </Link>

                <p className="text-gray-800 leading-loose">
                  {post?.excerpt.slice(0, 150)}...
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
