import { useRouter } from "next/router";
import DropdownLink from "./dropdown-link";
import { useState } from "react";
import { SubNav } from "./sub-nav";
import { useIntl } from "react-intl";

const Navbar = ({ navigations, className }) => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [active, setActive] = useState(false);
  const { formatMessage: f } = useIntl();
  const handleClick = () => {
    setActive(!active);
  };
  const [currentSlug, setCurrentSlug] = useState(pathname.slice(1) || "home");
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
                title: f({
                  id: "Home.EducationProgram",
                  defaultMessage: "Education Program",
                }),
                href: "/#program",
              },
              {
                title: f({
                  id: "Home.OurGallery",
                  defaultMessage: "Our Gallery",
                }),
                href: "/#gallery",
              },
              {
                title: f({
                  id: "Home.Parent",
                  defaultMessage: "Parent",
                }),
                href: "/#parents",
              },
              {
                title: f({
                  id: "Home.FAQ",
                  defaultMessage: "FAQ",
                }),
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
                title: f({
                  id: "About.VisionMission",
                  defaultMessage: "Vision & Mission",
                }),
                href: "/about#vision",
              },
              {
                title: f({
                  id: "About.CoreValues",
                  defaultMessage: "Core values",
                }),
                href: "/about#core",
              },
              {
                title: f({
                  id: "About.MessageFromThePrincipal",
                  defaultMessage: "Message from Principal",
                }),
                href: "/about#message",
              },
              {
                title: f({
                  id: "About.Founders",
                  defaultMessage: "Founders",
                }),
                href: "/about#founder",
              },
              ...subPagesNavigation,
            ],
          };
          result.push(newNavigation);
          break;
        case "programs":
          newNavigation = {
            ...item,
            subPages: [
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
                  defaultMessage: "Primary",
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
  const renderNavigations = formatNavigations(navigations);

  return (
    <div className={className}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between border-b border-purple-200/30">
          <a>
            <img
              className="h-24 rounded"
              //src="/images/logo-blue-text-small.png"
              src="/images/logo.png"
              alt=""
            />
          </a>
          <div>
            <ul className="flex mt-2 space-x-6 pt-2">
              <li className="flex flex-shrink max-w-xs">
                <div>
                  <span
                    className="
                flex
                items-center
                justify-center
                bg-yellow-400
                rounded-2xl
                 w-9
                h-9
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
                <div className="flex-1 mt-2 ml-2 xl:ml-2">
                  <h5 className="flex items-center text-base text-purple-900">
                    {f({
                      id: "Home.AddressDetail",
                      defaultMessage: "Le Loi, Vinh City, Nghe An, Vietnam",
                    })}
                  </h5>
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
                 w-9
                h-9
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
                <div className="flex-1 ml-2 xl:ml-2 mt-2">
                  <h5 className="flex items-center text-base text-purple-900">
                    bluesky@edu.vn
                  </h5>
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
                w-9
                h-9
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
                <div className="flex-1 ml-2 xl:ml-2 mt-2">
                  <h5 className="flex items-center text-base text-purple-900">
                    +84 238 357 9779
                  </h5>
                </div>
              </li>
            </ul>
            <div className="flex flex-row-reverse mt-4">
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
          </div>
        </div>

        <nav className="bg-transparent mt-3 pt-3">
          <div className={`items-center justify-between hidden lg:flex`}>
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
