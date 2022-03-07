import Layout from "../components/layout";
import { getNavigation } from "../lib/api";
const HandBookPage = ({ navigations }) => {
  return (
    <>
      <Layout navigations={navigations}>
        <object
          data="/images/handbookParent.pdf"
          type="application/pdf"
          style={{
            width: "100vw",
            height: "100vh",
            marginTop: "5px",
          }}
        >
          <iframe src="/images/handbookParent.pdf"></iframe>
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
