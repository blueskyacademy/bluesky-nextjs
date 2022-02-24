import { useIntl } from "react-intl";
import { motion } from "framer-motion";
const Certificate = ({ id }) => {
  const { formatMessage: f } = useIntl();
  return (
    <section
      id={id}
      className="relative w-full px-4 sm:px-6 xl:px-8 mt-12"
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
            <h2 className="mt-4 text-purple-900 sm:mt-12 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "Program.InternationalAccredition",
                defaultMessage: "International Accredition",
              })}
            </h2>
            <p className="max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-6">
              {f({
                id: "Program.ProgramSummary",
                defaultMessage:
                  "Since February 2017, Blue Sky Academy is recognized as a Cambridge School by Cambridge International Examinations (CIE) - a leading organization that provides a variety of education programs and qualifications for international students from 5 to 19 years old.",
              })}
            </p>
            <br />
            <p className="max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-1">
              {f({
                id: "Program.ProgramSummary2",
                defaultMessage:
                  "BSA’s students sit for Cambridge Checkpoints, IGCSE, and A Level within the formal curriculum of the school. The school also has been authorized by this international examinations board to deliver international exams on site. This enables our students to obtain international qualifications without going through intermediary organizations.",
              })}
            </p>
            <br />
          </motion.div>
          <div className="w-full mx-auto sm:gap-8 lg:col-span-1 xl:col-span-4 sm:grid-cols-2 lg:gap-4 xl:gap-8 lg:order-2 sm:max-w-none sm:mx-0">
            <img
              className="object-cover"
              src="/images/certificate.png"
              alt="Cambridge"
            ></img>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="max-w-xl mx-auto lg:max-w-screen-xl text-lg leading-relaxed text-purple-800">
          {f({
            id: "Program.ProgramSummary3",
            defaultMessage:
              "From September 2018, Cambridge International Examinations (CIE) would be known as Cambridge Assessment International Education (CAIE) across the global. The name change has been done keeping in mind the vital role played by assessment and education in all activities of the organization, particularly its commitment to help schools develop the whole education they provide for learners. With its efforts, Cambridge has jumped from # 4 to # 2 on the list of the most prestigious universities in the world. Topping the table is Oxford University (UK). The rankings are published by Times Higher Education (THE) - a news and high-level news magazine - which summarizes, analyzes and ranks universities around the world since 2004.",
          })}
        </p>
      </motion.div>
    </section>
  );
};
export default Certificate;
