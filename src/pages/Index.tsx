import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OurApproachSection from "@/components/OurApproachSection";
import AssessmentCoversSection from "@/components/AssessmentCoversSection";
import CoreServicesSection from "@/components/CoreServicesSection";
import ServicePackagesSection from "@/components/ServicePackagesSection";
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
      <Seo
        title="Crabtree Solutions Inc. | Security-First Managed IT for U.S. SMBs"
        description="Crabtree Solutions Inc. provides security-first managed IT, cybersecurity, Microsoft 365, firewall management, customer-specific site-to-site IPsec VPN deployment, endpoint protection, backup readiness, and compliance-aligned support for small U.S. businesses."
        path="/"
      />

      <Navbar />
      <HeroSection />
      <ScrollReveal><WhatWeDoSection /></ScrollReveal>
      <ScrollReveal><OurApproachSection /></ScrollReveal>
      <ScrollReveal><AssessmentCoversSection /></ScrollReveal>
      <ScrollReveal><CoreServicesSection /></ScrollReveal>
      <ScrollReveal><ServicePackagesSection /></ScrollReveal>
      <ScrollReveal><VAPTSection /></ScrollReveal>
      <ScrollReveal><StartupTeaser /></ScrollReveal>
      <ScrollReveal><WhyChooseUsSection /></ScrollReveal>
      <ScrollReveal><TechWeSupport /></ScrollReveal>
      <ScrollReveal><WhoWeHelpSection /></ScrollReveal>
      <ScrollReveal><TestimonialsSection /></ScrollReveal>
      <ScrollReveal><OutcomesSection /></ScrollReveal>
      <ScrollReveal><FinalCTASection /></ScrollReveal>
      <ScrollReveal><AboutSection /></ScrollReveal>
      <ScrollReveal><ContactSection /></ScrollReveal>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
