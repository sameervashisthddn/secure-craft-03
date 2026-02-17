import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OurApproachSection from "@/components/OurApproachSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import OutcomesSection from "@/components/OutcomesSection";
import FinalCTASection from "@/components/FinalCTASection";
import VAPTSection from "@/components/VAPTSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <OurApproachSection />
      <CoreServicesSection />
      <WhoWeHelpSection />
      <OutcomesSection />
      <FinalCTASection />
      <VAPTSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
