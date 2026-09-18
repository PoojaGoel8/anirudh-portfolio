import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on navigation. The browser only restores scroll for
 * real document loads, so without this a client-side route change lands you
 * partway down the next page.
 */
export function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
