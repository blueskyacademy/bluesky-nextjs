import { useRouter } from "next/router";
import ApplyForm from "../components/apply-form";
import Layout from "../components/layout";
import { getNavigation } from "../lib/api";

const Apply = ({ navigations }) => {
  const router = useRouter();
  const { video = 0 } = router.query;
  return (
    <Layout navigations={navigations}>
      <ApplyForm video={video} />
    </Layout>
  );
};

export default Apply;
export async function getStaticProps() {
  const navigations = (await getNavigation()) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
