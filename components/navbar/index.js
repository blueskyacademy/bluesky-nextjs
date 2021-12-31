import { NavLink } from "./nav-link";
import Link from "next/link";
import { useRouter } from "next/router";
import DropdownLink from "./dropdown-link";

const MENU = [
  { title: "Home", slug: "home", path: "/" },
  { title: "About BSA", slug: "about", path: "/about" },
  { title: "Teachers", slug: "teachers", path: "/teachers" },
  { title: "Gallery", slug: "gallery", path: "/gallery" },
  { title: "Classes", slug: "classes", path: "/classes/kindergarten" },
  { title: "News", slug: "posts", path: "/posts" },
  { title: "Schedules", slug: "schedules", path: "/schedules" },
  { title: "Admission", slug: "admission", path: "/admission" },
  { title: "Parents", slug: "parents", path: "/parents" },
  { title: "Recruitment", slug: "recruitment", path: "/recruitment" },
  { title: "Contact", slug: "contact", path: "/contact" },
];

const Navbar = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  return (
    <div className="px-4 sm:px-6">
      <div className="flex max-w-screen-xl mx-auto justify-between">
        <Link href="/">
          <a className="inline-flex items-center">
            <img
              src="/images/logo_white.png"
              alt="Logo"
              className="h-28 w-auto rounded"
            />
          </a>
        </Link>
        <div>
          <div className="hidden lg:block mt-5">
            <div className="flex flex-row-reverse">
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
          </div>
          <nav className="flex items-center max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between w-full pt-2">
              <div className="items-center justify-between hidden lg:flex md:space-x-2 lg:space-x-4">
                {MENU.map((item, idx) => (
                  <div key={`menu-${item.path}-${idx}`}>
                    <NavLink
                      href={item.path}
                      title={item.title}
                      exact
                    ></NavLink>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
      <DropdownLink />
    </div>
  );
};

export default Navbar;
