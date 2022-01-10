import Gallery from "../components/gallery";
import GalleryGrid from "../components/gallery-grid";
import Layout from "../components/layout";
import { getGalleries, getNavigation, getVideoForHome } from "../lib/api";
import CTA from "../components/cta";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

export default function GalleryPage({ videos, galleries, navigations }) {
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <div>
          <Gallery />
          <GalleryGrid videos={videos} galleries={galleries} />
        </div>
        <CTA />
      </AnimationRevealPage>
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const videos = (await getVideoForHome()) ?? [];
  const galleries = (await getGalleries(locale)) ?? [];
  const navigations = (await getNavigation()) ?? [];

  return {
    props: { videos, galleries, navigations },
    revalidate: 1,
  };
}
