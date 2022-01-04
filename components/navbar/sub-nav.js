import useSticky from "../../hooks/useSticky";
import Link from "next/link";

const NAVIGATIONS = {
  home: [
    {
      title: "Program Education",
      href: "#program",
    },
    {
      title: "Gallery",
      href: "#gallery",
    },
    {
      title: "Parents",
      href: "#parents",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ],
  about: [
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
};

export function SubNav({ slug = "home" }) {
  const { isSticky, stickyRef } = useSticky();
  if (!NAVIGATIONS[slug]) return null;
  return (
    <nav
      ref={stickyRef}
      className={`relative shadow-xl ${
        isSticky ? "sticky bg-yellow-50 border-b" : "hidden"
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
