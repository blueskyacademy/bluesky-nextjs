import PostPreview from "../../components/blocks/columns/post-preview";
import CTA from "../../components/cta";
import Layout from "../../components/layout";
import Pagination from "../../components/pagination";
import { getPaginatedPosts } from "../../lib/api";
import { POSTS_PER_PAGE } from "../../lib/constant";

export default function Posts({ allPosts, currentPage, totalPages }) {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <h3 className="mx-auto my-10 text-left text-purple-800 sm:my-10 md:my-10 text-4xl leading-tight tracking-tight sm:text-4xl xl:text-4xl sm:leading-tighter font-semibold">
          Latest News
        </h3>
        <div className="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {allPosts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage?.url}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
      <CTA />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const postSummaries = await getPaginatedPosts(locale, 1);
  const totalPages = Math.ceil(postSummaries.total / POSTS_PER_PAGE);

  return {
    props: {
      allPosts: postSummaries.items,
      totalPages,
      currentPage: "1",
    },
    revalidate: 1,
  };
}
