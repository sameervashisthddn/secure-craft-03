import { Shield, Lock, FileCheck, Server } from "lucide-react";
import IndustryPageLayout from "@/components/IndustryPageLayout";

const LegalPage = () => (
  <IndustryPageLayout
    title="Legal IT Services"
    metaTitle="IT & Cybersecurity for Law Firms – Crabtree Solutions"
    metaDescription="Managed IT, data protection, and cybersecurity support for law firms, designed to strengthen client confidentiality, reliability, and security readiness."
    canonicalPath="/industries/legal/"
    headline="Trusted IT Solutions for Law Firms"
    subheadline="Legal IT & Security"
    intro="We partner with law firms to protect client privilege, secure sensitive case files, and deliver reliable IT systems that support legal workflows."
    challenges={[
      { icon: <Lock className="h-6 w-6" />, title: "Client Confidentiality", description: "Protect attorney-client privilege with encrypted communications, secure file sharing, and access controls." },
      { icon: <Shield className="h-6 w-6" />, title: "Cyber Threat Protection", description: "Law firms are prime targets for ransomware and phishing. We implement layered defenses to keep threats out." },
      { icon: <Server className="h-6 w-6" />, title: "Document Management", description: "Secure and streamline DMS platforms with proper access controls, backup, and version management." },
      { icon: <FileCheck className="h-6 w-6" />, title: "Regulatory Compliance", description: "Support alignment with applicable ABA cybersecurity guidance, state bar obligations, and data protection requirements." },
    ]}
    services={[
      "Secure document management system support",
      "Email encryption and advanced threat protection",
      "Endpoint security for attorneys and staff",
      "Secure remote access for hybrid work",
      "VPN and firewall management",
      "Data loss prevention (DLP)",
      "Backup and disaster recovery",
      "Security awareness training for legal staff",
    ]}
    compliance={["ABA Guidelines", "SOC 2", "GDPR", "State Bar Requirements"]}
    ctaText="Schedule a Legal IT Assessment"
  />
);

export default LegalPage;
