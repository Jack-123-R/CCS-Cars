
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import InteriorDeepClean from "./pages/services/InteriorDeepClean";
import PremiumInteriorProtection from "./pages/services/PremiumInteriorProtection";
import PaintCorrectionCeramic from "./pages/services/PaintCorrectionCeramic";
import EngineBayDetailing from "./pages/services/EngineBayDetailing";
import HeadlightRestoration from "./pages/services/HeadlightRestoration";
import PaintProtectionFilm from "./pages/services/PaintProtectionFilm";
import MobileDetailing from "./pages/services/MobileDetailing";
import NotFound from "./pages/NotFound";

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
              <Route path="/services/interior-deep-clean" element={<InteriorDeepClean />} />
              <Route path="/services/premium-interior-protection" element={<PremiumInteriorProtection />} />
              <Route path="/services/paint-correction-ceramic" element={<PaintCorrectionCeramic />} />
              <Route path="/services/engine-bay-detailing" element={<EngineBayDetailing />} />
              <Route path="/services/headlight-restoration" element={<HeadlightRestoration />} />
              <Route path="/services/paint-protection-film" element={<PaintProtectionFilm />} />
              <Route path="/services/mobile-detailing" element={<MobileDetailing />} />
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
