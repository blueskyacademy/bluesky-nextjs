import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { getAllPages, getPage, getPostsForHome } from "../../lib/api";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import CTA from "../../components/cta";

import NotFoundPage from "../404";
import PostBody from "../../components/post/post-body";
import BreadCrumb from "../../components/breadcrumb";
import RecentPosts from "../../components/recent-posts";

const Page = ({ page, posts }) => {
  const router = useRouter();
  if (!router.isFallback && !page) {
    return <NotFoundPage />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto">
            <BreadCrumb title={page?.title} slug={page?.slug} />
          </div>
          <div className="max-w-screen-xl flex flex-col lg:flex-row mx-auto">
            <PostBody content={page.content} className="max-w-screen-md pt-6" />
            <RecentPosts recentPosts={posts} />
          </div>

          <CTA />
        </>
      )}
    </Layout>
  );
};

export default Page;
export async function getStaticProps({ params, locale }) {
  const data = await getPage(params.slug);
  const posts = (await getPostsForHome(locale)) ?? [];

  return {
    props: {
      page: data ?? null,
      posts,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pages = await getAllPages();

  return {
    paths: pages?.map(({ slug }) => `/pages/${slug}`) ?? [],
    fallback: true,
  };
}
