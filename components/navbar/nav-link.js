import Link from "next/link";
import { useRouter } from "next/router";
export function NavLink({ href, title, ...props }) {
  const { pathname } = useRouter();
  const isActive =
    pathname === "/"
      ? pathname.startsWith(href)
      : pathname.startsWith(href === "/" ? "home" : href);
  return (
    <Link href={href}>
      <a {...props}>
        <div className="relative p-0.5 group">
          <span className="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
            {title}
          </span>
          <span
            className={`absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100 ${
              isActive && "scale-x-100"
            }`}
          ></span>
        </div>
      </a>
    </Link>
  );
}
