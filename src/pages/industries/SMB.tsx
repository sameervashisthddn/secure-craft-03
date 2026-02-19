import { Shield, Server, Lock, FileCheck } from "lucide-react";
import IndustryPageLayout from "@/components/IndustryPageLayout";

const SMBPage = () => (
  <IndustryPageLayout
    title="SMB IT Services"
    metaTitle="Managed IT for Small & Midsize Businesses – Crabtree Solutions"
    metaDescription="Enterprise-grade IT services and cybersecurity for small and midsize businesses. Get the right IT infrastructure without enterprise costs."
    canonicalPath="/industries/smb"
    headline="Enterprise-Grade IT for Small & Midsize Businesses"
    subheadline="SMB IT & Cybersecurity"
    intro="We bring enterprise-level IT security and infrastructure to growing businesses — right-sized and budget-conscious, without unnecessary complexity."
    challenges={[
      { icon: <Shield className="h-6 w-6" />, title: "Cybersecurity on a Budget", description: "Get layered security protections without enterprise price tags. We prioritize high-impact defenses first." },
      { icon: <Server className="h-6 w-6" />, title: "Growth-Ready Infrastructure", description: "Build IT systems that scale with your business instead of holding it back." },
      { icon: <Lock className="h-6 w-6" />, title: "Data Protection", description: "Protect customer data, financials, and intellectual property with proper security controls." },
      { icon: <FileCheck className="h-6 w-6" />, title: "Vendor Management", description: "Stop juggling multiple IT vendors. We consolidate and manage your technology stack." },
    ]}
    services={[
      "Full managed IT services",
      "Cybersecurity assessment and monitoring",
      "Cloud migration and management",
      "VPN and firewall setup",
      "Email security and Microsoft 365 management",
      "IT help desk and user support",
      "Backup and disaster recovery",
      "Technology roadmap planning",
    ]}
    compliance={["SOC 2", "PCI DSS", "NIST CSF"]}
    ctaText="Schedule a Free IT Assessment"
  />
);

export default SMBPage;
