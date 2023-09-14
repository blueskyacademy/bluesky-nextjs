import { motion } from "framer-motion";
import Link from "next/link";
import { useIntl } from "react-intl";

const GalleryHero = ({
  id,
  className,
  title,
  description,
  descriptionSize = "max-w-4xl",
  subTitle = "",
  hasButton = false,
  url,
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
                <img
                  src="/svg/sunny.svg"
                  alt="Sunny"
                  className="absolute -top-20 z-0 translate-x-full hidden sm:block"
                />
              </span>
            </h2>

            <p
              className={`${descriptionSize} mx-auto mt-4 text-xl leading-relaxed text-center text-primary-100 sm:mt-5`}
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

          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 sm:grid-cols-3 mt- sm:mt-12 lg:mt-12 sm:gap-3 md:gap-4 lg:gap-6">
            {images?.map((item, idx) => (
              <motion.img
                key={`image-hero-${item}-${idx}`}
                className={`object-cover w-full rounded-2xl lg:h-80 h-30vw ${
                  (idx == 1 || idx == 6) && "col-span-2"
                } ${idx == 1 && "object-bottom"}`}
                alt="School grid 01"
                src={item}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                whileInView={{ y: "0", opacity: 1 }}
              />
            ))}
          </div>

          {hasButton && (
            <motion.div
              className="flex justify-center mt-12 sm:mt-16"
              viewport={{ once: true }}
              transition={{ duration: 1.6 }}
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: "0", opacity: 1 }}
            >
              <Link href={url} passHref>
                <button className="text-lg font-medium text-white bg-primary-100 sm:mt-0 sm:ml-6 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button hover:text-white hover:bg-primary-80 group">
                  {f({
                    id: "Home.ViewMore",
                    defaultMessage: "View More",
                  })}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="15" y1="16" x2="19" y2="12" />
                    <line x1="15" y1="8" x2="19" y2="12" />
                  </svg>
                </button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryHero;
