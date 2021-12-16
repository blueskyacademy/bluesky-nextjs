import Layout from "../components/layout";

export default function Recruitment() {
  return (
    <Layout>
      <img
        className='object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-screen'
        src='https://www.bsa.edu.vn/uploads/school_level/image/1/11.jpg'
        alt=''
      />
      <Testimonial />
    </Layout>
  );
}
import React from "react";
import Testimonial from "../components/testimonial";
