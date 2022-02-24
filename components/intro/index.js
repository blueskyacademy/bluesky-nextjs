import { useIntl } from "react-intl";
import { motion } from "framer-motion";
const Intro = ({ id, visions }) => {
  const { formatMessage: f } = useIntl();
  return (
    <div id={id}>
      <div className="w-full h-32 sm:h-40 xl:h-48 bg-gradient-to-b from-purple-25 to-yellow-100"></div>
      <section className="px-4 pb-16 overflow-hidden bg-yellow-100  sm:pb-24 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-screen-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <h2 className="max-w-4xl mx-auto text-center text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "About.VisionMission",
                defaultMessage: "Vision & Mission",
              })}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800"></p>
          </div>
          {visions?.map((item, idx) => (
            <div
              className={`max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24`}
              key={`vision-${idx}`}
            >
              <div
                className={`relative lg:col-span-6 ${
                  idx === 1 && "lg:order-2 mb-10"
                }`}
              >
                <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
                  <div className="aspect-w-3 aspect-h-4 rounded-2xl">
                    <img
                      className="object-cover rounded-2xl"
                      src={`/images/vision${idx}.jpg`}
                      alt="Home blocks 01"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 hidden sm:block sm:translate-y-1/3 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 rounded-3xl">
                    <img
                      className="object-cover w-full h-full rounded-3xl"
                      src={`/images/vision${idx * 2 + 3}.jpg`}
                      alt="Home blocks 02"
                    />
                  </div>
                  {idx === 2 && (
                    <div className="absolute sm:translate-y-1/4 hidden sm:block">
                      <img
                        className="object-cover w-full h-full rounded-3xl"
                        src="/images/certificate.png"
                        alt="Home blocks 02"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center mt-16 sm:mt-44 lg:mt-0 lg:col-span-6">
                <h3 className="text-purple-900 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                  {item?.title}
                </h3>
                <p
                  className="max-w-2xl mt-3 text-lg leading-loose text-purple-800"
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {item?.content}
                </p>
                <br />
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      <div className="w-full h-10 sm:h-10 xl:h-10 bg-gradient-to-b from-yellow-100 to-white"></div>
    </div>
  );
};

export default Intro;
