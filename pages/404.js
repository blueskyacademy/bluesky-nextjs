import Link from "next/link";
import Layout from "../components/layout";
const NotFoundPage = () => {
  return (
    <div>
      <Layout>
        <section className="pt-20 pb-32">
          <div className="container text-center">
            <img
              className="mb-4 mx-auto md:max-w-md mb-12 "
              src="/images/error.png"
              alt=""
            />
            <span className="text-4xl text-blue-500 font-bold font-heading">
              Error 404
            </span>
            <h2 className="mb-2 text-4xl font-bold font-heading">
              Something went wrong!
            </h2>
            <p className="mb-6 text-blueGray-400 Up">
              Sorry, but we are unable to open this page.
            </p>
            <div>
              <Link href="/">
                <a
                  className="text-lg font-semibold text-purple-900 bg-yellow-500 eading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group"
                  href=""
                >
                  Go back to Homepage
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="block sm:inline-block py-4 px-8 text-lg text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded"
                  href=""
                >
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
