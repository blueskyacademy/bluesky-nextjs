import Link from "next/link";
import { useRouter } from "next/router";
export function NavLink({ href, title, color, ...props }) {
  const { pathname } = useRouter();
  const isActive =
    pathname === "/"
      ? pathname.startsWith(href)
      : pathname.startsWith(href === "/" ? "home" : href);
  if (!href) {
    return (
      <div className="relative group">
        <span
          className={`relative z-10 text-lg ${
            color ? color : "text-primary-100 group-hover:text-primary-80"
          } duration-300 ease-in-out whitespace-nowrap ${
            isActive ? "font-bold" : "font-medium"
          }`}
        >
          {title}
        </span>
        <span
          className={`absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100 ${
            isActive && "scale-x-100"
          }`}
        ></span>
      </div>
    );
  }
  return (
    <Link href={href}>
      <a {...props}>
        <div className="relative group">
          <span
            className={`relative z-10 text-lg  ${
              color ? color : "text-primary-100 group-hover:text-primary-80"
            } duration-300 ease-in-out whitespace-nowrap ${
              isActive ? "font-bold" : "font-medium"
            }`}
          >
            {title}
          </span>
          <span
            className={`absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100 ${
              isActive && "scale-x-1 md:scale-x-100"
            }`}
          ></span>
        </div>
      </a>
    </Link>
  );
}
