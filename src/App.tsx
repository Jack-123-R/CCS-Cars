
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Lazy load all service detail pages
const InteriorDeepClean = lazy(() => import("./pages/services/InteriorDeepClean"));
const PremiumInteriorProtection = lazy(() => import("./pages/services/PremiumInteriorProtection"));
const PaintCorrectionCeramic = lazy(() => import("./pages/services/PaintCorrectionCeramic"));
const EngineBayDetailing = lazy(() => import("./pages/services/EngineBayDetailing"));
const HeadlightRestoration = lazy(() => import("./pages/services/HeadlightRestoration"));
const PaintProtectionFilm = lazy(() => import("./pages/services/PaintProtectionFilm"));
const MobileDetailing = lazy(() => import("./pages/services/MobileDetailing"));

// Lightweight fallback skeleton for lazy routes
const PageSkeleton = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center">
    <div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse mb-4" />
    <div className="h-8 w-64 bg-gray-100 rounded mb-2 animate-pulse" />
    <div className="h-4 w-40 bg-gray-100 rounded animate-pulse" />
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {/* Wrap service detail routes in Suspense */}
              <Route
                path="/services/interior-deep-clean"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <InteriorDeepClean />
                  </Suspense>
                }
              />
              <Route
                path="/services/premium-interior-protection"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <PremiumInteriorProtection />
                  </Suspense>
                }
              />
              <Route
                path="/services/paint-correction-ceramic"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <PaintCorrectionCeramic />
                  </Suspense>
                }
              />
              <Route
                path="/services/engine-bay-detailing"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <EngineBayDetailing />
                  </Suspense>
                }
              />
              <Route
                path="/services/headlight-restoration"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <HeadlightRestoration />
                  </Suspense>
                }
              />
              <Route
                path="/services/paint-protection-film"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <PaintProtectionFilm />
                  </Suspense>
                }
              />
              <Route
                path="/services/mobile-detailing"
                element={
                  <Suspense fallback={<PageSkeleton />}>
                    <MobileDetailing />
                  </Suspense>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
