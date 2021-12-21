import useSticky from "../../hooks/useSticky";
import Link from "next/link";

const NAVIGATIONS = {
  home: [
    {
      title: "PROGRAM EDUCATION",
      href: "#program",
    },
    {
      title: "VIDEO",
      href: "#video",
    },
    {
      title: "GALLERY",
      href: "#gallery",
    },
    {
      title: "NEWS",
      href: "#news",
    },
  ],
  about: [
    {
      title: "INTRODUCTION",
      href: "#introduction",
    },
    {
      title: "ACCREDITION",
      href: "#accredition",
    },
    {
      title: "VISION",
      href: "#vision",
    },
    {
      title: "MISSION",
      href: "#mision",
    },
    {
      title: "CORE VALUES",
      href: "#core",
    },
    {
      title: "CO-FOUNDERS",
      href: "#cofounder",
    },
  ],
  admission: [
    {
      title: "WHY BSA",
      href: "#why",
    },
    {
      title: "APPLY TO BSA",
      href: "#apply",
    },
    {
      title: "ADMISSION INQUERY",
      href: "#gioithieu",
    },
    {
      title: "OUR FEES",
      href: "#gioithieu",
    },
  ],
  parents: [
    {
      title: "PARENT STORY",
      href: "#story",
    },
    {
      title: "INSTRUCTION LEARNING ONLINE",
      href: "#learning",
    },
  ],
  recruitment: [
    {
      title: "JOBS AT BSA",
      href: "#jobs",
    },
    {
      title: "BENEFITS",
      href: "#benefits",
    },
    {
      title: "TEACHER DEVELOPMENT",
      href: "#gioithieu",
    },
  ],
};

export function SubNav({ slug = "home" }) {
  const { isSticky, stickyRef } = useSticky();
  if (!NAVIGATIONS[slug]) return null;
  return (
    <nav
      ref={stickyRef}
      className={`bg-bluesky-900 relative ${isSticky && "sticky"}`}
      style={{
        boxShadow: "0px 2px 5px 0px rgb(0 0 0 / 75%)",
        zIndex: 999,
        minHeight: 50,
      }}
    >
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex justify-center items-center space-x-8 lg:flex justify-items-center mx-auto">
          {NAVIGATIONS[slug]?.map((item, idx) => (
            <Link href={item.href} key={`${item.title}-${idx}`}>
              <a
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 cursor-pointer"
              >
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
