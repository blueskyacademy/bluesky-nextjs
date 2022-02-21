import { getYear } from "date-fns";
import Link from "next/link";
import { useIntl } from "react-intl";
export default function Footer() {
  const { formatMessage: f } = useIntl();
  const year = getYear(new Date());
  const WEBSITE_LINKS = [
    {
      title: f({
        id: "Home.Teachers",
        defaultMessage: "Teachers",
      }),
      slug: "teachers",
      path: "/teachers",
    },
    {
      title: f({
        id: "Home.OurGallery",
        defaultMessage: "Our Gallery",
      }),
      slug: "gallery",
      path: "/gallery",
    },
    {
      title: f({
        id: "Home.EducationProgram",
        defaultMessage: "Education Program",
      }),
      slug: "programs",
      path: "/programs",
    },
    {
      title: f({
        id: "Home.NewsAndEvents",
        defaultMessage: "News and Events",
      }),
      slug: "posts",
      path: "/posts",
    },
    {
      title: f({
        id: "Home.Parent",
        defaultMessage: "Parent",
      }),
      slug: "parents",
      path: "/parents",
    },
  ];
  const PROGRAM_LINKS = [
    {
      title: f({
        id: "Home.Kindergarten",
        defaultMessage: "Kindergarten",
      }),
      href: "/programs/kindergarten",
    },
    {
      title: f({
        id: "Home.PrimarySchool",
        defaultMessage: "Primary School",
      }),
      href: "/programs/primary",
    },
    {
      title: f({
        id: "Home.Secondary",
        defaultMessage: "Secondary",
      }),
      href: "/programs/secondary",
    },
  ];
  return (
    <footer className="px-4 pt-16 space-y-8 bg-yellow-100 divide-y sm:pt-20 sm:px-6 lg:px-8 divide-purple-400/20">
      <div className="grid mx-auto gap-y-8 sm:gap-y-12 sm:gap-x-8 md:gap-x-12 sm:max-w-none lg:max-w-screen-3xl sm:grid-cols-2 lg:grid-cols-11 lg:gap-8 xl:gap-12">
        <div className="flex flex-col lg:mx-auto lg:col-span-4">
          <div className="flex items-center">
            <div className="flex-grow-0 flex-shrink-0 w-60">
              <Link href="/">
                <a>
                  <img
                    src="/images/Horizontal-logo.png"
                    alt="BSA"
                    className="h-20"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <img src="/images/cie-logo.png" className="h-24" alt="" />
          </div>

          <div className="w-full mt-5 lg:mt-6">
            <div className="flex justify-start space-x-4">
              <a href="#">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="20" fill="#3B5998" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="#">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink sm:order-4 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-primary-100">
            <span className="relative z-20 border-dashed border-b-2 border-primary-100">
              {f({
                id: "Home.WebsiteLinks",
                defaultMessage: "Website Links",
              })}
            </span>
          </h6>

          <ul className="mt-6 text-lg">
            {WEBSITE_LINKS.map((item) => (
              <li
                key={`footer-${item.title}`}
                className="
            pt-2
            font-medium
            text-purple-700
            duration-300
            ease-in-out
            hover:text-purple-600
          "
              >
                <Link href={item.path}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink sm:order-3 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-primary-100">
            <span className="relative z-20 border-dashed border-b-2 border-primary-100">
              {f({
                id: "Home.EducationProgram",
                defaultMessage: "Education Program",
              })}
            </span>
          </h6>

          <ul className="mt-6 text-lg">
            {PROGRAM_LINKS.map((item) => (
              <li
                key={item.title}
                className="
            pt-2
            font-medium
            text-purple-700
            duration-300
            ease-in-out
            hover:text-purple-600
          "
              >
                <Link href={item.href}>
                  <a> {item.title} </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:order-2 lg:order-none lg:col-span-3 lg:mx-auto">
          <Link href="/contact">
            <a href="#">
              <h6 className="relative text-xl font-bold tracking-wide text-primary-100">
                <span className="relative z-20 border-dashed border-b-2 border-primary-100">
                  {f({
                    id: "Home.ContactUs",
                    defaultMessage: "Contact us",
                  })}
                </span>
              </h6>
            </a>
          </Link>

          <ul className="flex flex-col mt-6 space-y-5">
            <li className="flex flex-shrink max-w-xs">
              <div>
                <a
                  target="_blank"
                  href="https://goo.gl/maps/CgmybxdDH9Tv8oz5A"
                  rel="noopener noreferrer"
                >
                  <span
                    className="
                flex
                items-center
                justify-center
                bg-warning-60
                rounded
                w-11
                h-11
              "
                  >
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
                </a>
              </div>
              <div className="flex-1 mt-0 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  {f({
                    id: "Home.Address",
                    defaultMessage: "Address",
                  })}
                </h5>
                <p
                  className="
                mt-0.5
                text-sm text-purple-800
                leading-relaxed
                text-opacity-90
              "
                >
                  {f({
                    id: "Home.AddressDetail",
                    defaultMessage: "Le Loi, Vinh City, Nghe An, Vietnam",
                  })}
                </p>
              </div>
            </li>

            <li className="flex flex-shrink-0">
              <div>
                <a href="mailto:bluesky@edu.vn?subject = Feedback&body = Message">
                  <span
                    className="
                flex
                items-center
                justify-center
                bg-success-40
                rounded
                w-11
                h-11
              "
                  >
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
                </a>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  {f({
                    id: "Home.Email",
                    defaultMessage: "Email",
                  })}
                </h5>
                <p
                  className="
                mt-0.5
                text-sm text-purple-800
                leading-relaxed
                text-opacity-90
              "
                >
                  bluesky@edu.vn
                </p>
              </div>
            </li>

            <li className="flex flex-shrink-0">
              <div>
                <a href="tel:+84 238 357 9559">
                  <span
                    className="
                flex
                items-center
                justify-center
                rounded
                w-11
                h-11
                bg-purple-200
              "
                  >
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
                </a>
              </div>
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  {f({
                    id: "Home.Phone",
                    defaultMessage: "Phone",
                  })}
                </h5>
                <p
                  className="
                mt-0.5
                text-sm text-purple-800
                leading-relaxed
                text-opacity-90
              "
                >
                  +84 238 357 9779
                  <br />
                  +84 238 357 9559
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-md py-8 mx-auto sm:flex-row sm:max-w-none lg:max-w-screen-2xl">
        <span className="text-base text-purple-800/90">
          © {year} Blue Sky Academy
        </span>
      </div>
    </footer>
  );
}
