import { motion } from "framer-motion";
import { useIntl } from "react-intl";

const ParentGallery = ({
  id,
  className,
  title,
  description,
  subTitle = "",
  images,
}) => {
  const { formatMessage: f } = useIntl();
  return (
    <div id={id} className={className}>
      <section className="px-4 pt-12 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="max-w-3xl mx-auto text-center text-primary-100 text-5xl font-bold">
              <span className="relative inline-block">
                <span> {title}</span>
              </span>
            </h2>

            <p
              className={`max-w-screen-lg mx-auto mt-4 text-xl leading-relaxed text-center text-primary-100 sm:mt-5`}
            >
              {description}
            </p>
            {subTitle && (
              <h4 className="max-w-3xl mx-auto text-center text-primary-100 text-xl font-bold mt-1">
                <span className="relative inline-block">
                  <span>{subTitle}</span>
                </span>
              </h4>
            )}
          </motion.div>
          <div className="sm:mt-12 lg:mt-12">
            <div className="w-full h-64 md:h-auto mb-4 px-2">
              <img
                className={`object-cover w-full lg:h-[500px] h-30vw`}
                alt="School grid 01"
                src={images[0]}
              />
            </div>
            <div className="flex flex-row max-h-[900px] w-full">
              <div className="md:w-1/2">
                <div className="w-full h-64 md:h-auto mb-4 px-2">
                  <img
                    className={`object-cover w-full lg:h-60 h-30vw`}
                    alt="School grid 01"
                    src={images[1]}
                  />
                </div>
                <div className="w-full mb-4 px-2">
                  <img
                    className={`object-cover w-full  lg:h-120 h-30vw`}
                    alt="School grid 01"
                    src={images[3]}
                  />
                </div>
              </div>
              <div className="md:w-1/2 h-full">
                <div className="w-full px-2">
                  <img
                    className={`object-cover w-full lg:h-full h-30vw`}
                    alt="School grid 01"
                    src={images[2]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentGallery;
