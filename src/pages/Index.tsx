import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OurApproachSection from "@/components/OurApproachSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TechWeSupport from "@/components/TechWeSupport";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OutcomesSection from "@/components/OutcomesSection";
import FinalCTASection from "@/components/FinalCTASection";
import VAPTSection from "@/components/VAPTSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollReveal from "@/components/ScrollReveal";
import StartupTeaser from "@/components/StartupTeaser";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Crabtree Solutions Inc. – Managed IT &amp; Cybersecurity</title>
        <meta name="description" content="We identify your IT & security risks first — then deliver the right solution. Managed IT, cybersecurity, and infrastructure support for healthcare, legal, staffing, and SMBs." />
        <link rel="canonical" href="https://crabtreesolutions.us/" />
        <meta property="og:title" content="Crabtree Solutions Inc. – Managed IT & Cybersecurity" />
        <meta property="og:description" content="Managed IT services and enterprise cybersecurity solutions for businesses across the United States." />
        <meta property="og:url" content="https://crabtreesolutions.us/" />
        <meta property="og:type" content="website" />
      </Helmet>
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
        <VAPTSection />
      </ScrollReveal>
      <ScrollReveal>
        <StartupTeaser />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUsSection />
      </ScrollReveal>
      <ScrollReveal>
        <TechWeSupport />
      </ScrollReveal>
      <ScrollReveal>
        <WhoWeHelpSection />
      </ScrollReveal>
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>
      <ScrollReveal>
        <OutcomesSection />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTASection />
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
