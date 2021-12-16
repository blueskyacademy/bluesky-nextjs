import { useEffect } from "react";
import { useRouter } from "next/router";
export function useHashFragment() {
  const router = useRouter();
  useEffect(() => {
    const onHashChangeStart = (url) => {
      console.log(`Path changing to ${url}`);
      const hash = window.location.hash;
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      console.log("element", element);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);
}
