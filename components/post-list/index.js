import { motion } from "framer-motion";
import Link from "next/link";
import DateComponent from "../date";

const transition = { duration: 1, ease: "easeOut" };

const PostList = ({ posts }) => {
  const blogVariants = {
    enter: { transition: { staggerChildren: 0.1 } },
    exit: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={blogVariants}
    >
      <div className="container">
        <div className="flex flex-wrap sm:-mx-3">
          {posts.map((post, idx) => (
            <motion.div
              className={`w-full ${
                idx == 0 ? "lg:w-2/3" : "lg:w-1/3"
              } px-3 mb-20 hover-up-5`}
              key={`post-${idx}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition }}
              viewport={{ once: true }}
            >
              <Link href={`/posts/${post.slug}`}>
                <a>
                  <img
                    className="h-80 w-full object-cover rounded"
                    src={post.coverImage?.url}
                    alt=""
                  />
                </a>
              </Link>

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
                {idx === 0 ? post.excerpt : post?.excerpt.slice(0, 150)}...
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PostList;
