import PostPreview from "../../components/blocks/columns/post-preview";
import CTA from "../../components/cta";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";

export default function Posts({ allPosts }) {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto">
        <h3 className="max-w-2xl mx-auto my-10 text-center text-purple-900 sm:my-10 md:my-10 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
          Our news
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
      </div>
      <CTA />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allPosts = (await getAllPosts(locale)) ?? [];
  return {
    props: { allPosts },
    revalidate: 1,
  };
}
