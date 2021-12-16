import Link from "next/link";
import { useRouter } from "next/router";
export function NavLink({ href, exact, children, ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += " text-bluesky-900 border-b-2 border-bluesky-900";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
