import { useRouter } from "next/router";
import { useState } from "react";
import ApplicationForm from "../../components/application-form";
import Job from "../../components/job";
import Layout from "../../components/layout";
import { getAllJobs, getJob } from "../../lib/api";

export default function JobPage({ job }) {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusForm, setStatusForm] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleChangeFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", form?.fullName);
    formData.append("email", form?.email);
    formData.append("title", job?.title);
    formData.append("cv", selectedFile);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    setIsLoading(true);
    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("result", result);
      setStatusForm("success");
    } catch (error) {
      console.log("error", error);
    }
    setIsLoading(false);
  };

  if (!router.isFallback && !job) {
    return <h1>404 - Page Not Found</h1>;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading ...</h1>
      ) : (
        <div className='bg-gray-100'>
          <div className='px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 '>
            <div className='flex flex-col justify-between lg:flex-row w-full'>
              <Job
                title={job.title}
                start={job.start}
                expire={job.expire}
                requirement={job.requirement}
                benefit={job.benefit}
              />
              <ApplicationForm
                handleSubmit={handleSubmit}
                handleChangeForm={handleChangeForm}
                handleChangeFile={handleChangeFile}
                selectedFile={selectedFile}
                status={statusForm}
                isLoading={isLoading}
              />
              <div className='w-1'></div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
export async function getStaticProps({ params, locale }) {
  const data = await getJob(params.slug, locale);

  return {
    props: {
      job: data ?? null,
    },
  };
}

export async function getStaticPaths({ locale }) {
  const allJobs = await getAllJobs(locale || "en-US");

  return {
    paths: allJobs?.map(({ slug }) => `/recruitment/${slug}`) ?? [],
    fallback: true,
  };
}
