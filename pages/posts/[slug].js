import { useRouter } from "next/router";
import PostPreview from "../../components/blocks/columns/post-preview";
import Layout from "../../components/layout";
import PostBody from "../../components/post/post-body";
import PostHeader from "../../components/post/post-header";
import {
  getAllPostsWithSlug,
  getNavigation,
  getPostAndMorePosts,
} from "../../lib/api";
import CTA from "../../components/cta";

export default function Post({ post, morePosts, navigations }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <Layout navigations={navigations}>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage.url}
              date={post.date}
            />
            <PostBody content={post.content} className="max-w-2xl mx-auto" />
          </article>
          <h2 className="mb-8 text-4xl md:text-4xl font-bold text-center mt-24">
            More stories
          </h2>
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {morePosts.map((post) => (
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
          </div>
          <CTA />
        </>
      )}
    </Layout>
  );
}
export async function getStaticProps({ params, locale }) {
  const data = await getPostAndMorePosts(params.slug, locale);
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: {
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
      navigations,
    },
  };
}

export async function getStaticPaths({ locale }) {
  console.log("locale", locale);
  const allPosts = await getAllPostsWithSlug(locale);
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
