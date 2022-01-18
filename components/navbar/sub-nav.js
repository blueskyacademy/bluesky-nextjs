import useSticky from "../../hooks/useSticky";
import Link from "next/link";
import { useIntl } from "react-intl";
export function SubNav({ slug = "home" }) {
  const { isSticky, stickyRef } = useSticky();
  const { formatMessage: f } = useIntl();
  const NAVIGATIONS = {
    home: [
      {
        title: f({
          id: "Home.EducationProgram",
          defaultMessage: "Education Program",
        }),
        href: "#program",
      },
      {
        title: f({
          id: "Home.OurGallery",
          defaultMessage: "Our Gallery",
        }),
        href: "#gallery",
      },
      {
        title: f({
          id: "Home.Parent",
          defaultMessage: "Parent",
        }),
        href: "#parents",
      },
      {
        title: f({
          id: "Home.FAQ",
          defaultMessage: "FAQ",
        }),
        href: "#faq",
      },
    ],
    about: [
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
    ],
  };
  if (!NAVIGATIONS[slug]) return null;
  return (
    <nav
      ref={stickyRef}
      className={`relative shadow-xl ${
        isSticky ? "sticky bg-yellow-50 border-b hidden md:block" : "hidden"
      }`}
      style={{
        zIndex: 40,
        minHeight: 50,
      }}
    >
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-center items-center space-x-8 lg:flex justify-items-center mx-auto">
          {NAVIGATIONS[slug]?.map((item, idx) => (
            <Link href={item.href} key={`${item.title}-${idx}`}>
              <a className="font-medium tracking-wide text-purple-800 transition-colors duration-200 cursor-pointer text-lg">
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
