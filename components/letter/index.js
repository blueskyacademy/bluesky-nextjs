import { motion } from "framer-motion";

const Letter = ({ id, message }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full max-w-screen-xl ml-auto bg-purple-600 rounded-l-5xl"></div>

      <img
        src="/svg/dots-chaos.svg"
        className="absolute bottom-0 right-0 z-10 hidden h-auto transform 2xl:block w-80"
        alt=""
      />
      <img
        src="/svg/dots-strip.svg"
        className="absolute z-10 hidden h-auto transform 2xl:block top-1 right-20 w-36"
        alt=""
      />

      <div className="relative w-full px-4 py-16 bg-purple-600 2xl:max-w-screen-xl 2xl:mx-auto 2xl:rounded-l-5xl sm:px-6 lg:pr-0 sm:py-24 lg:py-0">
        <div className="relative grid gap-12 lg:grid-cols-2 2xl:gap-4 lg:pr-10 2xl:pr-0">
          <div className="relative grid order-2 w-full max-w-2xl grid-cols-2 gap-3 mx-auto lg:order-1 sm:gap-6 lg:py-32 lg:max-w-none">
            <img
              src="/svg/dots-purple-mess.svg"
              className="absolute hidden transform lg:block top-12 -right-16 2xl:right-0 "
              alt=""
            />
            <img
              src="/svg/dots-grid.svg"
              className="absolute top-0 hidden h-auto transform translate-y-12 right-2 w-80"
              alt=""
            />
            <div className="col-span-2 transform aspect-w-3 aspect-h-4 2xl:-translate-x-16">
              <img
                src="/images/principal.jpeg"
                className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                alt="Program description 01"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/letter1.jpg"
                  className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 02"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/letter2.jpg"
                  className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 03"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2 lg:py-36">
            <motion.div
              className="relative z-20 mx-auto prose prose-lg prose-light sm:prose-xl text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-4xl text-white">{message?.title}</h2>
              <div
                className="text-base leading-loose tracking-wide"
                style={{
                  whiteSpace: "pre-line",
                }}
              >
                {message?.content}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
