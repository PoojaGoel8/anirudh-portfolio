import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Seo } from "@/components/portfolio/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Seo
        path="/404"
        title="Page not found — Anirudh Dalmia"
        description="The requested page could not be found."
      />
      <section className="not-found section-shell">
        <p className="eyebrow">404 · Off the map</p>
        <h1>The path changed. The purpose didn’t.</h1>
        <p>There is no portfolio page at <code>{location.pathname}</code>.</p>
        <Link className="button button-primary" to="/">
          <ArrowLeft size={16} /> Return home
        </Link>
      </section>
    </>
  );
};

export default NotFound;
