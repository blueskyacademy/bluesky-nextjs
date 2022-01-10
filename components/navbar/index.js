import { useRouter } from "next/router";
import DropdownLink from "./dropdown-link";
import { useState } from "react";
import { SubNav } from "./sub-nav";

const MENU = [
  {
    title: "Home",
    slug: "home",
    path: "/",
    subPages: [
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
    subPages: [
      {
        title: "Vision & Mission",
        href: "/about#vision",
      },
      {
        title: "Core Values",
        href: "/about#core",
      },
      {
        title: "Message from Principal",
        href: "/about#message",
      },
      {
        title: "Co-founders",
        href: "/about#founder",
      },
    ],
  },
  { title: "Teachers", slug: "teachers", path: "/teachers" },
  { title: "Gallery", slug: "gallery", path: "/gallery" },
  {
    title: "Programs",
    slug: "Programs",
    path: "/programs",
    subPages: [
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
    ],
  },
  { title: "News", slug: "posts", path: "/posts" },
  { title: "Parents", slug: "parents", path: "/parents" },
  { title: "Schedules", slug: "schedules", path: "/schedules" },
  { title: "Admission", slug: "admission", path: "/admission" },
  { title: "Careers", slug: "recruitment", path: "recruitment" },
  { title: "Contact", slug: "contact", path: "/contact" },
];

const formatNavigations = (navigations = []) => {
  const result = [];
  for (let item of navigations) {
    const subPagesNavigation = item?.subPagesCollection?.items ?? [];
    let newNavigation = {};
    switch (item.slug) {
      case "home":
        newNavigation = {
          ...item,
          subPages: [
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
            ...subPagesNavigation,
          ],
        };
        result.push(newNavigation);
        break;
      case "about":
        newNavigation = {
          ...item,
          subPages: [
            {
              title: "Vision & Mission",
              href: "/about#vision",
            },
            {
              title: "Core Values",
              href: "/about#core",
            },
            {
              title: "Message from Principal",
              href: "/about#message",
            },
            {
              title: "Co-founders",
              href: "/about#founder",
            },
            ...subPagesNavigation,
          ],
        };
        result.push(newNavigation);
        break;
      case "program":
        newNavigation = {
          ...item,
          subPages: [
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
            ...subPagesNavigation,
          ],
        };
        result.push(newNavigation);
        break;
      default:
        newNavigation = {
          ...item,
          subPages: subPagesNavigation,
        };
        result.push(newNavigation);
    }
  }
  return result;
};
const Navbar = ({ navigations }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [currentSlug, setCurrentSlug] = useState(pathname.slice(1) || "home");
  const renderNavigations = formatNavigations(navigations);
  console.log("renderNavigations", renderNavigations);

  return (
    <div className="bg-transparent sticky-bar">
      <div className="max-w-screen-xl mx-auto">
        <nav className="bg-transparent flex justify-between items-center">
          <a>
            <img
              className="h-28"
              src="/images/logo-blue-text-small.png"
              alt=""
            />
          </a>
          <div>
            <div className="flex flex-row-reverse mb-4">
              <img
                className="px-2"
                style={{ height: 24, cursor: "pointer" }}
                alt="VietNam"
                src="/images/vi_flag.png"
                onClick={() =>
                  router.push({ pathname, query }, asPath, { locale: "vi-VN" })
                }
              />
              <img
                src="/images/en_flag.jpg"
                style={{ height: 24, width: 36, cursor: "pointer" }}
                onClick={() =>
                  router.push({ pathname, query }, asPath, { locale: "en-US" })
                }
              />
            </div>

            <div
              className={`items-center justify-between hidden lg:flex md:space-x-2 lg:space-x-4`}
            >
              {renderNavigations?.map((item, idx) => (
                <div
                  key={`menu-${item.path}-${idx}`}
                  onClick={() => setCurrentSlug(item.slug)}
                >
                  <DropdownLink
                    title={item.title}
                    path={item.path}
                    subPages={item?.subPages}
                  />
                </div>
              ))}
            </div>
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
      <SubNav slug={currentSlug} />
    </div>
  );
};

export default Navbar;
