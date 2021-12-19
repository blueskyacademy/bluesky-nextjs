import { SchoolCard } from "../components/blocks/columns";
import PostPreview from "../components/blocks/columns/post-preview";
import CarouselImages from "../components/carousel-images";
import Gallery from "../components/gallery";
import GalleryImages from "../components/gallery-images";
import Heading from "../components/heading";
import Layout from "../components/layout";
import VideoHero from "../components/video-hero";
import { getPostsForHome, getVideoForHome } from "../lib/api";
import { useHashFragment } from "../hooks/useHashFragment";

export default function Home({ allPosts, videos }) {
  useHashFragment();
  const images_carousel = [
    "https://www.bsa.edu.vn/uploads/carousel_image/image/89/Poster_tuy%E1%BB%83n_sinh.jpg",
    "https://www.bsa.edu.vn/uploads/carousel_image/image/90/2.jpg",
    "https://www.bsa.edu.vn/uploads/carousel_image/image/91/3.jpg",
  ];
  const schools = [
    {
      name: "Kindergarten",
      description:
        "Multi-Activities Learning Model in Kindergarten help them raise personal awareness, community spirit and comprehensive development.",
      image: "https://www.bsa.edu.vn/uploads/school_level/image/1/11.jpg",
    },
    {
      name: "Primary",
      description:
        "Two path way National Primary and International Cambridge help students gaining general knowledge, establish and develop critical thinking as well.",
      image: "https://www.bsa.edu.vn/uploads/school_level/image/2/22.jpg",
    },
    {
      name: "Secondary",
      description:
        "Active learning method maximizes the positivity, activeness and creativity of the students through the different forms of learning.",
      image: "https://www.bsa.edu.vn/uploads/school_level/image/3/33.jpg",
    },
  ];
  return (
    <Layout>
      <CarouselImages videos={images_carousel} />
      <div
        id='program'
        className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'
      >
        <div className='container mx-auto grid gap-6 row-gap-5 lg:grid-cols-3'>
          {schools.map((item, idx) => (
            <SchoolCard
              key={`school-card-${idx}`}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <VideoHero id='video' videos={videos} />
      <Gallery
        id='gallery'
        title='Our gallery'
        description='Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste.'
      />
      {/* <GalleryImages /> */}

      <div
        id='news'
        className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'
      >
        <Heading heading='News and Events' description='' />

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
  const allPosts = (await getPostsForHome(locale)) ?? [];
  const videos = (await getVideoForHome()) ?? [];
  return {
    props: { allPosts, videos },
    revalidate: 1,
  };
}
