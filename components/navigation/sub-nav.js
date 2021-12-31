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
      title: "Vision",
      href: "#introduction",
    },
    {
      title: "Mission",
      href: "#accredition",
    },
    {
      title: "Core Values",
      href: "#vision",
    },
    {
      title: "Message from Principal",
      href: "#mision",
    },
    {
      title: "Co-founders",
      href: "#core",
    },
  ],
  programs: [
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
};

export function SubNav({ slug = "home" }) {
  const { isSticky, stickyRef } = useSticky();
  if (!NAVIGATIONS[slug]) return null;
  return (
    <nav
      ref={stickyRef}
      className={`relative ${
        isSticky ? "sticky bg-white border-b" : "bg-yellow-200"
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
              <a
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-purple-800 transition-colors duration-200 cursor-pointer text-lg"
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
