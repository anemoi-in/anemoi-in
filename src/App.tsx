import React, { useEffect, useState } from "react";
import { parseHash, takePendingSection, scrollToSelector, type Route } from "./router";
import { Nav, Footer } from "./layout";
import Home from "./pages/Home";
import IndustryPage from "./pages/IndustryPage";
import MaterialPage from "./pages/MaterialPage";
import { BlogIndex, Article } from "./pages/Blog";
import QuotePage from "./pages/QuotePage";

function routeKey(r: Route): string {
  switch (r.name) {
    case "home":
      return "home";
    case "material":
      return `material:${r.id}`;
    case "industry":
      return `industry:${r.id}`;
    case "blog":
      return "blog";
    case "article":
      return `article:${r.slug}`;
    case "quote":
      return "quote";
  }
}

export default function App() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const pending = takePendingSection();
    if (pending) {
      scrollToSelector(pending);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [route]);

  let page: React.ReactNode;
  switch (route.name) {
    case "home":
      page = <Home />;
      break;
    case "material":
      page = <MaterialPage id={route.id} />;
      break;
    case "industry":
      page = <IndustryPage id={route.id} />;
      break;
    case "blog":
      page = <BlogIndex />;
      break;
    case "article":
      page = <Article slug={route.slug} />;
      break;
    case "quote":
      page = <QuotePage />;
      break;
  }

  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <Nav route={route} />
      <main key={routeKey(route)}>{page}</main>
      <Footer />
    </div>
  );
}
