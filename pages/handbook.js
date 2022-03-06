import Layout from "../components/layout";
import { getNavigation } from "../lib/api";
const HandBookPage = ({ navigations }) => {
  return (
    <>
      <Layout navigations={navigations}>
        <object
          data="/pdf/handbook.pdf"
          type="application/pdf"
          style={{
            width: "100%",
            height: "100vh",
            marginTop: "5px",
          }}
        >
          <iframe src="/pdf/handbook.pdf"></iframe>
        </object>
      </Layout>
    </>
  );
};

export default HandBookPage;
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
