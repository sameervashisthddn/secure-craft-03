import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import StartupServices from "./pages/StartupServices";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HealthcarePage from "./pages/industries/Healthcare";
import LegalPage from "./pages/industries/Legal";
import StaffingPage from "./pages/industries/Staffing";
import SMBPage from "./pages/industries/SMB";
import PartnerPortal from "./pages/PartnerPortal";
import Partnerships from "./pages/Partnerships";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/startup" element={<StartupServices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/industries/healthcare" element={<HealthcarePage />} />
            <Route path="/industries/legal" element={<LegalPage />} />
            <Route path="/industries/staffing" element={<StaffingPage />} />
            <Route path="/industries/smb" element={<SMBPage />} />
            <Route path="/partner" element={<PartnerPortal />} />
            <Route path="/partnerships" element={<Partnerships />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
