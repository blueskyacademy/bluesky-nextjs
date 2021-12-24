import { NavLink } from "./nav-link";
import Link from "next/link";
import { useRouter } from "next/router";

const MENU = [
  { title: "Home", slug: "home", path: "/" },
  { title: "About BSA", slug: "about", path: "/about" },
  { title: "Teachers", slug: "teachers", path: "/teachers" },
  { title: "Gallery", slug: "gallery", path: "/gallery" },
  // { title: "Classes", slug: "classes", path: "/classes/kindergarten" },
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
      <nav className="flex items-center max-w-screen-xl mx-auto border-b border-purple-200/30">
        <Link href="/">
          <a className="inline-flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-32 w-auto rounded"
            />
          </a>
        </Link>

        <div className="flex items-center justify-between w-full ml-4 pt-8">
          <div className="items-center justify-between hidden lg:flex md:space-x-2 lg:space-x-4">
            {MENU.map((item, idx) => (
              <div key={`menu-${item.path}-${idx}`}>
                <NavLink href={item.path} title={item.title} exact></NavLink>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
