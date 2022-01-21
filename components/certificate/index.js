import { useIntl } from "react-intl";
import { motion } from "framer-motion";
const Certificate = ({ id }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section
      id={id}
      className="relative w-full px-4 sm:px-6 xl:px-8"
      style={{ minHeight: "40vh" }}
    >
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-11 lg:gap-12 xl:gap-24">
          <motion.div
            className="flex flex-col justify-center lg:col-span-1 xl:col-span-6 lg:order-1"
            initial={{ y: "50%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="mt-10 md:mt-0">
              <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                {f({
                  id: "Program.CambridgeCertificate",
                  defaultMessage: "Cambridge Certificate",
                })}
              </span>
            </div>
            <h2 className="mt-4 text-purple-900 sm:mt-5 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "Program.InternationalAccredition",
                defaultMessage: "International Accredition",
              })}
            </h2>
            <p className="max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-5">
              {f({
                id: "Program.ProgramSummary",
                defaultMessage:
                  "Since February 2017, Blue Sky Academy is recognized as a Cambridge School by Cambridge International Examinations (CIE) - a leading organization that provides a variety of education programs and qualifications for international students from 5 to 19 years old.",
              })}
            </p>
          </motion.div>
          <div className="w-full  mx-auto sm:gap-8 lg:col-span-1 xl:col-span-5 sm:grid-cols-2 lg:gap-4 xl:gap-8 lg:order-2 sm:max-w-none sm:mx-0">
            <img
              className="object-cover"
              src="/images/certificate.png"
              alt="Cambridge"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Certificate;
