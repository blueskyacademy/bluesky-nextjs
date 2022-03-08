import { useEffect } from "react";
import { useRouter } from "next/router";
export function useHashFragment() {
  const router = useRouter();
  useEffect(() => {
    const onHashChangeStart = (url) => {
      const hash = window.location.hash;
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
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
