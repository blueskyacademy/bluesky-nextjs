import PostPreview from "../../components/blocks/columns/post-preview";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";

export default function Posts({ allPosts }) {
  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
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
