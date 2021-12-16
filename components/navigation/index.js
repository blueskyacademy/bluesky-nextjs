import { useState } from "react";
import { useRouter } from "next/router";
import { NavLink } from "./nav-link";
import { UpperNavigation } from "./upper-navigation";
import { SubNav } from "./sub-nav";

const MENU = [
  { title: "HOME", slug: "home", path: "/" },
  { title: "ABOUT BSA", slug: "about", path: "/about" },
  { title: "TEACHERS", slug: "teachers", path: "/teachers" },
  { title: "NEWS & EVENTS", slug: "posts", path: "/posts" },
  { title: "ADMISSIONS", slug: "admission", path: "/admission" },
  { title: "PARENTS", slug: "parents", path: "/parents" },
  { title: "RECRUITMENT", slug: "recruitment", path: "/recruitment" },
  { title: "CONTACT", slug: "contact", path: "/contact" },
];

export default function Navigation() {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);
  const [currentSlug, setCurrentSlug] = useState(pathname.slice(1) || "home");

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <UpperNavigation />
      <nav
        className={`container mx-auto flex items-center flex-wrap bg-white pb-5`}
      >
        <button
          className='inline-flex p-3 rounded lg:hidden ml-auto hover:text-red-500 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:mx-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
            {MENU.map((item, idx) => (
              <div
                onClick={() => setCurrentSlug(item.slug)}
                key={`menu-${item.path}-${idx}`}
              >
                <NavLink
                  href={item.path}
                  exact
                  className='lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center text-gray-700 justify-center hover:text-bluesky-900'
                >
                  {item.title}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </nav>
      <SubNav slug={currentSlug} />
    </div>
  );
}
