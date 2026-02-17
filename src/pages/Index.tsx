import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OurApproachSection from "@/components/OurApproachSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import TechWeSupport from "@/components/TechWeSupport";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import OutcomesSection from "@/components/OutcomesSection";
import FinalCTASection from "@/components/FinalCTASection";
import VAPTSection from "@/components/VAPTSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>
      <ScrollReveal>
        <OurApproachSection />
      </ScrollReveal>
      <ScrollReveal>
        <CoreServicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <TechWeSupport />
      </ScrollReveal>
      <ScrollReveal>
        <WhoWeHelpSection />
      </ScrollReveal>
      <ScrollReveal>
        <OutcomesSection />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTASection />
      </ScrollReveal>
      <ScrollReveal>
        <VAPTSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
