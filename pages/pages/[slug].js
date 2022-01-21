import Layout from "../../components/layout";
import { useRouter } from "next/router";
import {
  getAllPages,
  getNavigation,
  getPage,
  getPostsForHome,
} from "../../lib/api";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import CTA from "../../components/cta";
import NotFoundPage from "../404";
import PostBody from "../../components/post/post-body";
import BreadCrumb from "../../components/breadcrumb";
import RecentPosts from "../../components/recent-posts";

const Page = ({ page, posts, navigations }) => {
  const router = useRouter();
  if (!router.isFallback && !page) {
    return <NotFoundPage />;
  }
  return (
    <Layout navigations={navigations}>
      {router.isFallback ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto">
            <BreadCrumb title={page?.title} slug={page?.slug} />
          </div>
          <div className="max-w-screen-xl flex flex-col lg:flex-row mx-auto">
            <PostBody
              content={page.content}
              className="max-w-screen-md pt-6 mx-3 md:mx-auto"
            />
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
  const data = await getPage(params.slug, locale);
  const posts = (await getPostsForHome(locale)) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: {
      page: data ?? null,
      posts,
      navigations,
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
