import Layout from "../components/layout";
import { getNavigation } from "../lib/api";
import Script from "next/script";
const YearBookPage = ({ navigations }) => {
  return (
    <>
      <Layout navigations={navigations}>
        <div
          data-configid="8730524/39534622"
          style={{
            width: "100%",
            height: "820px",
            marginTop: "30px",
          }}
          className="issuuembed"
        ></div>
        <Script
          type="text/javascript"
          src="//e.issuu.com/embed.js"
          async="true"
        />
      </Layout>
    </>
  );
};

export default YearBookPage;
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  return {
    props: { navigations },
    revalidate: 1,
  };
}
