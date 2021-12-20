import { useState } from "react";
import { format } from "date-fns";
import Map from "../components/map";
import Form from "../components/form";
import Layout from "../components/layout";

export default function Contact() {
  const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [statusForm, setStatusForm] = useState();

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...form,
      type: "Contact",
      submittedAt: format(Date.now(), "HH:mm:ss dd-MM-yyyy"),
    };
    setIsLoading(true);
    try {
      const response = await fetch("/api/sheet", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("result", result);
      setStatusForm("success");
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className='bg-gray-100'>
        <div className='px-10 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6'>
          <div className='flex flex-col justify-center lg:flex-row'>
            <div className='mb-12 mr-12 lg:max-w-lg lg:pr-5 lg:mb-0'>
              <div className='max-w-xl mb-6'>
                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none'>
                  Contact Information
                </h2>
                <div className='text-base text-gray-700 md:text-lg'>
                  Phường Lê Lợi, TP. Vinh, Tỉnh Nghệ An, Việt Nam
                </div>
                <hr className='my-3 border-gray-300' />
                <div className='text-base text-gray-700 md:text-lg'>
                  Điện thoại: +84 238 3 579 779, +84 238 3 579 559
                </div>
                <hr className='my-3 border-gray-300' />
                <div className='text-base text-gray-700 md:text-lg'>
                  Fax: +84 238 3 579 889
                </div>
                <hr className='my-3 border-gray-300' />
                <div className='text-base text-gray-700 md:text-lg'>
                  Email: bluesky@bsa.edu.vn
                </div>
                <hr className='my-3 border-gray-300' />
              </div>
            </div>
            <div className='px-5 pt-3 pb-5 border border-gray-300 rounded lg:w-2/5 bg-white shadow'>
              <Form
                handleChangeForm={handleChangeForm}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                status={statusForm}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-3'>
        <Map />
      </div>
    </Layout>
  );
}
