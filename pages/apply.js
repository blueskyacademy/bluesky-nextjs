import { useRouter } from "next/router";
import ApplyForm from "../components/apply-form";
import Layout from "../components/layout";

const Apply = () => {
  const router = useRouter();
  const { video = 0 } = router.query;
  return (
    <Layout>
      <ApplyForm video={video} />
    </Layout>
  );
};

export default Apply;
