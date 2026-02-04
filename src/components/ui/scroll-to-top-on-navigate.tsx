"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
