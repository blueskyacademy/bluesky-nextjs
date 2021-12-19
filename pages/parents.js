import Layout from "../components/layout";
import Testimonial from "../components/testimonial";
import { useHashFragment } from "../hooks/useHashFragment";

export default function Parents() {
  useHashFragment();
  return (
    <Layout>
      <img
        className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-screen'
        src='https://www.bsa.edu.vn/uploads/school_level/image/1/11.jpg'
        alt=''
      />
      <Testimonial id='story' />
    </Layout>
  );
}
