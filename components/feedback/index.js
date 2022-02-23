import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialCard = ({ content, img, title, description, type }) => {
  const { formatMessage: f } = useIntl();
  const TYPE = {
    teacher: f({
      id: "Home.TeacherSharing",
      defaultMessage: "Teacher's Sharing",
    }),
    parent: f({
      id: "Home.ParentSharing",
      defaultMessage: "Parent's Sharing",
    }),
    student: f({
      id: "Home.StudentSharing",
      defaultMessage: "Student's Sharing",
    }),
  };
  return (
    <motion.div className="px-8 py-8 mx-4 transition duration-300 ease-in-out bg-yellow-200 sm:px-6 md:px-8 lg:px-5 2xl:px-8 rounded-3xl h-full">
      <h3 className="mb-5 text-xl font-bold text-purple-900 text-center">
        {type ? TYPE[type] : ""}
      </h3>
      <img
        src={img}
        className="object-cover w-20 h-20 border-2 border-yellow-300 rounded-full filter drop-shadow-2xl mx-auto"
        alt="Testimonial 01"
      />
      <p className="mt-3 text-lg font-bold text-purple-900 text-center">
        {title}
      </p>
      <p className="mt-1 text-lg text-gray-800 italic text-center">
        {description}
      </p>
      <p className="mt-5 text-lg text-purple-800">{content}</p>
    </motion.div>
  );
};

const Feedback = ({ id, testimonials }) => {
  const { formatMessage: f } = useIntl();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id={id} className="md:mt-12 bg-primary-100">
      <div
        style={{
          backgroundImage: "url(/images/mask.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        <div className="px-4 mx-auto lg:max-w-screen-2xl sm:px-6 py-20 sm:py-20 lg:py-20">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="max-w-4xl text-center text-white text-5xl sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "Home.OurStories",
                defaultMessage: "Our Stories",
              })}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-50">
              {f({
                id: "Home.ParentFeedbackSummary",
                defaultMessage:
                  "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.",
              })}
            </p>
          </div>
          {/* <div className="grid gap-8 mt-12 md:gap-8 sm:gap-6 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 xl:grid-cols-3 sm:grid-cols-2 2xl:gap-12 lg:gap-6 lg:max-w-screen-xl mx-auto"> */}
          <div className="mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 lg:max-w-screen-xl mx-auto">
            <Carousel responsive={responsive}>
              {testimonials.map((item, idx) => (
                <TestimonialCard
                  key={`testimonial-${idx}`}
                  content={item?.content}
                  img={item?.photo?.url}
                  title={item?.parent}
                  description={item?.description}
                  type={item?.type}
                />
              ))}
            </Carousel>
          </div>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
