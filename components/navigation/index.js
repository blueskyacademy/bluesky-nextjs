import { useState } from "react";
import { useRouter } from "next/router";
import { NavLink } from "./nav-link";
import { SubNav } from "./sub-nav";
import Link from "next/link";

const MENU = [
  { title: "Home", slug: "home", path: "/" },
  { title: "About us", slug: "about", path: "/about" },
  { title: "Teachers", slug: "teachers", path: "/teachers" },
  { title: "Gallery", slug: "gallery", path: "/gallery" },
  { title: "Programs", slug: "programs", path: "/programs" },
  { title: "News", slug: "posts", path: "/posts" },
  { title: "Parents", slug: "parents", path: "/parents" },
  { title: "Schedules", slug: "schedules", path: "/schedules" },
  { title: "Admission", slug: "admission", path: "/admission" },
  { title: "Careers", slug: "recruitment", path: "/recruitment" },
  { title: "Contact", slug: "contact", path: "/contact" },
];

export default function Navigation() {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [active, setActive] = useState(false);
  const [currentSlug, setCurrentSlug] = useState(pathname.slice(1) || "home");

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto grid grid-cols-12">
        <div className="">
          <Link href="/">
            <a className="">
              <img
                src="/images/logo_white.png"
                className="h-28 w-28"
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        <div className="col-span-11">
          <div className="flex flex-row-reverse mt-2">
            <img
              className="px-2"
              style={{ height: 24, cursor: "pointer" }}
              alt="VietNam"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg"
              onClick={() =>
                router.push({ pathname, query }, asPath, { locale: "vi-VN" })
              }
            />
            <img
              style={{ height: 24, cursor: "pointer" }}
              alt="VietNam"
              src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
              onClick={() =>
                router.push({ pathname, query }, asPath, { locale: "en-US" })
              }
            />
          </div>
          <nav className={`mx-auto flex items-center flex-wrap bg-white pt-6`}>
            <button
              className="inline-flex p-3 rounded lg:hidden ml-auto hover:text-red-500 outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              className={`${
                active ? "" : "hidden"
              }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
              <div className="lg:inline-flex lg:flex-row lg:mx-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                {MENU.map((item, idx) => (
                  <div
                    onClick={() => setCurrentSlug(item.slug)}
                    key={`menu-${item.path}-${idx}`}
                  >
                    <NavLink
                      href={item.path}
                      exact
                      className="lg:inline-flex text-lg lg:w-auto w-full px-3 py-2 font-semibold items-center text-gray-700 justify-center hover:text-bluesky-900"
                    >
                      {item.title}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <SubNav slug={currentSlug} />
    </>
  );
}
