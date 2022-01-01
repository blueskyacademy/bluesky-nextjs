import { useRouter } from "next/router";
import DropdownLink from "./dropdown-link";
import { useState } from "react";

const MENU = [
  {
    title: "Home",
    slug: "home",
    path: "/",
    subMenu: [
      {
        title: "Program Education",
        href: "/#program",
      },
      {
        title: "Gallery",
        href: "/#gallery",
      },
      {
        title: "Parents",
        href: "/#parents",
      },
      {
        title: "FAQ",
        href: "/#faq",
      },
    ],
  },
  {
    title: "About us",
    slug: "about",
    path: "/about",
    subMenu: [
      {
        title: "Vision",
        href: "/about#introduction",
      },
      {
        title: "Mission",
        href: "/about#accredition",
      },
      {
        title: "Core Values",
        href: "/about#vision",
      },
      {
        title: "Message from Principal",
        href: "/about#mision",
      },
      {
        title: "Co-founders",
        href: "/about#core",
      },
    ],
  },
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
const Navbar = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="bg-transparent sticky-bar">
      <div className="max-w-screen-xl mx-auto">
        <nav className="bg-transparent flex justify-between items-center">
          <a>
            <img className="h-28" src="/images/logo.png" alt="" />
          </a>
          <div
            className={`items-center justify-between hidden lg:flex md:space-x-2 lg:space-x-4`}
          >
            {MENU.map((item, idx) => (
              <div key={`menu-${item.path}-${idx}`}>
                <DropdownLink
                  title={item.title}
                  path={item.path}
                  exact
                  subMenu={item?.subMenu}
                />
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300">
              <svg
                className="fill-current h-4 w-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
