import { useIntl } from "react-intl";
const ContactInformation = () => {
  const { formatMessage: f } = useIntl();
  return (
    <section className="relative w-full px-4 pt-56 bg-white -mb-52 -translate-y-52 sm:pt-64 lg:pt-72 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32">
          <div className="flex items-center">
            <h2 className="max-w-4xl text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "Home.ContactUs",
                defaultMessage: "Contact us",
              })}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-12 sm:mt-14 lg:mt-20 sm:grid-cols-4 lg:grid-cols-3 sm:gap-6 xl:gap-12">
          <div className="px-4 py-8 bg-yellow-200 sm:col-span-2 lg:col-span-1 sm:p-8 rounded-3xl">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex items-center justify-center bg-yellow-400 rounded-2xl w-14 h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-purple-700"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="11" r="3" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                </span>
              </div>
              <div className="flex-1 ml-6 sm:mt-3 lg:mt-0 sm:ml-0 lg:ml-6">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  {f({
                    id: "Home.Address",
                    defaultMessage: "Address",
                  })}
                </h5>
                <p className="mt-1.5 text-base text-purple-800 leading-relaxed">
                  {f({
                    id: "Home.AddressDetail",
                    defaultMessage: "Le Loi, Vinh City, Nghe An, Vietnam",
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-8 sm:col-span-2 lg:col-span-1 sm:p-8 sm:py-10 rounded-3xl bg-purple-50">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex items-center justify-center bg-purple-200 rounded-2xl w-14 h-14">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-purple-700"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                </span>
              </div>
              <div className="flex-1 ml-6 sm:mt-3 lg:mt-0 sm:ml-0 lg:ml-6">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  {f({
                    id: "Home.Email",
                    defaultMessage: "Email",
                  })}
                </h5>
                <p className="mt-1.5 text-base text-purple-800 leading-relaxed">
                  bluesky@edu.vn
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-8 sm:col-start-2 sm:col-span-2 lg:col-start-3 lg:col-span-1 sm:p-8 sm:py-10 rounded-3xl bg-rose-50">
            <div className="flex sm:flex-col lg:flex-row">
              <div>
                <span className="flex items-center justify-center rounded-2xl w-14 h-14 bg-rose-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-purple-700"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </span>
              </div>
              <div className="flex-1 ml-6 sm:mt-3 lg:mt-0 sm:ml-0 lg:ml-6">
                <h5 className="flex items-center text-xl font-semibold text-purple-900">
                  {f({
                    id: "Home.Phone",
                    defaultMessage: "Phone",
                  })}
                </h5>
                <p className="mt-1.5 text-base text-purple-800 leading-relaxed">
                  0818 700 990
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:mx-auto lg:mt-24 rounded-3xl lg:max-w-screen-xl">
        <iframe
          className="w-full rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.666909035698!2d105.66781575012367!3d18.678937369125183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce6953719587%3A0x65672bcb280674d7!2sBlue%20Sky%20Academy!5e0!3m2!1sen!2s!4v1639578588082!5m2!1sen!2s"
          height="600"
          style={{
            border: "0",
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactInformation;
