import { motion } from "framer-motion";
import { useIntl } from "react-intl";
const Founders = ({ id, cofounders }) => {
  const { formatMessage: f } = useIntl();
  return (
    <div id={id}>
      <div className="w-full h-32 sm:h-40 lg:h-44 "></div>
      <section className="px-4 overflow-hidden bg-white pb-28 sm:pb-36 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="px-4 text-center sm:px-6 lg:px-8"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              <span className="block"></span>
              <span className="relative block">
                <span className="relative">
                  <img
                    className="absolute inset-0 transform translate-y-9 sm:translate-y-10 xl:translate-y-12"
                    src="/svg/underline-simple-light-purple.svg"
                  />
                  <span className="relative">
                    {f({
                      id: "About.OurFounders",
                      defaultMessage: "Our Founders",
                    })}
                  </span>
                </span>
              </span>
            </h3>
          </motion.div>
          {cofounders.map((item, idx) => (
            <motion.div
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="grid max-w-xl mx-auto mt-20 lg:max-w-none sm:mt-24 lg:mt-44 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8"
              key={`cofounders-${idx}`}
            >
              <div
                className={`relative z-10 flex flex-col justify-center ${
                  idx != 1 ? "order-1" : "order-2"
                } lg:col-span-6 lg:text-left`}
              >
                <div>
                  <h1 className="mt-3.5 font-bold text-purple-900 text-2xl leading-tight tracking-tight sm:text-2xl sm:leading-tighter font-bold">
                    {item?.title}
                  </h1>
                  <div className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-lg">
                    {item?.content}
                  </div>
                </div>
              </div>

              <div
                className={`relative w-full max-w-xl mx-auto  ${
                  idx != 1 ? "order-2" : "order-1"
                } lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center`}
              >
                <div className="hidden lg:block">
                  <img
                    src="/svg/blob-light-yellow.svg"
                    className="absolute inset-0 w-full h-full transform lg:scale-135"
                    alt=""
                  />
                </div>

                <div className="relative w-full mx-auto shadow-lg rounded-3xl lg:max-w-lg lg:mr-0 lg:mr-auto">
                  <div className="relative block w-full">
                    <img
                      className="absolute z-10 hidden w-40 transform lg:block -top-20 -left-20 xl:w-48 xl:-top-20 xl:-left-20"
                      src="/svg/dots.svg"
                      alt=""
                    />

                    <figure className="aspect-w-12 aspect-h-10 md:order-1">
                      <img
                        src={item?.image?.url}
                        className="object-cover object-center w-full h-full shadow-xl rounded-3xl"
                        alt="About 01"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Founders;
