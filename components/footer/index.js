import { getYear } from "date-fns";
import Link from "next/link";
export default function Footer() {
  const year = getYear(new Date());
  const WEBSITE_LINKS = [
    { title: "Teachers", slug: "teachers", path: "/teachers" },
    { title: "Gallery", slug: "gallery", path: "/gallery" },
    { title: "Programs", slug: "programs", path: "/programs" },
    { title: "News", slug: "posts", path: "/posts" },
    { title: "Parents", slug: "parents", path: "/parents" },
  ];
  const PROGRAM_LINKS = [
    {
      title: "Kindergarten",
      href: "/programs/kindergarten",
    },
    {
      title: "Primary",
      href: "/programs/primary",
    },
    {
      title: "Secondary",
      href: "/programs/secondary",
    },
  ];
  return (
    <footer className="px-4 pt-16 space-y-8 bg-yellow-50 divide-y sm:pt-20 sm:px-6 lg:px-8 divide-purple-400/20">
      <div className="grid max-w-md mx-auto gap-y-8 sm:gapy-12 sm:gap-x-8 md:gap-x-12 sm:max-w-none lg:max-w-screen-2xl sm:grid-cols-2 lg:grid-cols-11 lg:gap-8 xl:gap-12">
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
            <img src="/images/cie-logo.png" className="h-24" />
          </div>

          <div className="w-full mt-5 lg:mt-6">
            <div className="flex justify-start space-x-4">
              <a
                className="flex items-center justify-center w-10 h-10 text-white duration-300 ease-in-out bg-purple-500 rounded-full hover:bg-purple-600"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </a>

              <a
                className="flex items-center justify-center w-10 h-10 text-white transition duration-300 ease-in-out bg-purple-500 rounded-full hover:bg-purple-600"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-shrink sm:order-4 lg:order-none lg:col-span-2">
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Website Link</span>
            <span
              className="
            absolute
            left-0
            z-10
            w-12
            h-1
            rounded-lg
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            -bottom-1
          "
            ></span>
          </h6>

          <ul className="mt-6 text-lg divide-y divide-purple-400/20">
            {WEBSITE_LINKS.map((item) => (
              <li
                key={`footer-${item.title}`}
                className="
            pb-2
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
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Programs</span>
            <span
              className="
            absolute
            left-0
            z-10
            w-12
            h-1
            rounded-lg
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            -bottom-1
          "
            ></span>
          </h6>

          <ul className="mt-6 text-lg divide-y divide-purple-400/20">
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
          <h6 className="relative text-xl font-bold tracking-wide text-purple-900">
            <span className="relative z-20">Contact us</span>
            <span
              className="
            absolute
            left-0
            z-10
            w-12
            h-1
            rounded-lg
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            -bottom-1
          "
            ></span>
          </h6>

          <ul className="flex flex-col mt-6 space-y-5">
            <li className="flex flex-shrink max-w-xs">
              <div>
                <span
                  className="
                flex
                items-center
                justify-center
                bg-yellow-400
                rounded-2xl
                w-11
                h-11
              "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-700"
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
              <div className="flex-1 mt-0 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Address
                </h5>
                <p
                  className="
                mt-0.5
                text-sm text-purple-800
                leading-relaxed
                text-opacity-90
              "
                >
                  Le Loi, Vinh City, Nghe An, Vietnam
                </p>
              </div>
            </li>

            <li className="flex flex-shrink-0">
              <div>
                <span
                  className="
                flex
                items-center
                justify-center
                bg-purple-200
                rounded-2xl
                w-11
                h-11
              "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-700"
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
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Email
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
                <span
                  className="
                flex
                items-center
                justify-center
                rounded-2xl
                w-11
                h-11
                bg-rose-200
              "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-purple-700"
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
              <div className="flex-1 ml-3 xl:ml-4">
                <h5 className="flex items-center text-base font-semibold text-purple-900">
                  Phone
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
