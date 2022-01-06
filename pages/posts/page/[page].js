import PostPreview from "../../../components/blocks/columns/post-preview";
import CTA from "../../../components/cta";
import Layout from "../../../components/layout";
import Pagination from "../../../components/pagination";
import PostList from "../../../components/post-list";
import { getPaginatedPosts, getTotalPostNumber } from "../../../lib/api";
import { POSTS_PER_PAGE } from "../../../lib/constant";

export default function PostsIndexPage({ allPosts, currentPage, totalPages }) {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <h3 className="mx-auto my-10 text-left text-purple-800 sm:my-10 md:my-10 text-4xl leading-tight tracking-tight sm:text-4xl xl:text-4xl sm:leading-tighter font-semibold">
          Latest News
        </h3>
        <PostList posts={allPosts} />
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
      <CTA />
    </Layout>
  );
}
export async function getStaticPaths() {
  const totalPosts = await getTotalPostNumber();
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const paths = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ locale, params }) {
  const postSummaries = await getPaginatedPosts(locale, params.page);
  const totalPages = Math.ceil(postSummaries.total / POSTS_PER_PAGE);

  return {
    props: {
      allPosts: postSummaries.items,
      totalPages,
      currentPage: params.page,
    },
    revalidate: 1,
  };
}
