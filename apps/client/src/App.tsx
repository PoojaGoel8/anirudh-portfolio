import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/navigation/ScrollToTop";
import Index from "./pages/home/Index";
import WorkPage from "./pages/work/Index";
import ExperiencePage from "./pages/experience/Index";
import LeadershipPage from "./pages/leadership/Index";
import RecommendationsPage from "./pages/recommendations/Index";
import AboutPage from "./pages/about/Index";
import NotFound from "./pages/not-found/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      {/* BASE_URL mirrors vite's `base`, so the same bundle works at "/" in dev
          and under "/<repo>/" on GitHub Pages without hardcoding the repo name. */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
