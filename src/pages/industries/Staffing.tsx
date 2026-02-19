import { Shield, Server, Lock, FileCheck } from "lucide-react";
import IndustryPageLayout from "@/components/IndustryPageLayout";

const StaffingPage = () => (
  <IndustryPageLayout
    title="Staffing Agency IT Services"
    metaTitle="IT & Cybersecurity for Staffing Agencies – Crabtree Solutions"
    metaDescription="Managed IT, cybersecurity, and infrastructure support for staffing and recruitment agencies. Protect candidate data and streamline operations."
    canonicalPath="/industries/staffing"
    headline="Reliable IT for Staffing & Recruitment Agencies"
    subheadline="Staffing IT & Security"
    intro="We help staffing agencies protect sensitive candidate and client data, secure ATS platforms, and build IT infrastructure that scales with your placements."
    challenges={[
      { icon: <Lock className="h-6 w-6" />, title: "PII Protection", description: "Safeguard candidate SSNs, background checks, and employment records with proper encryption and access controls." },
      { icon: <Server className="h-6 w-6" />, title: "ATS & Platform Uptime", description: "Ensure your applicant tracking systems and CRMs run reliably to avoid missed placements." },
      { icon: <Shield className="h-6 w-6" />, title: "Multi-Office Security", description: "Consistent security across headquarters, branch offices, and remote recruiters." },
      { icon: <FileCheck className="h-6 w-6" />, title: "Compliance Requirements", description: "Meet SOC 2, state privacy laws, and client security requirements for enterprise contracts." },
    ]}
    services={[
      "ATS and CRM platform support",
      "Endpoint protection for remote recruiters",
      "Secure VPN for multi-office connectivity",
      "Email security and anti-phishing",
      "Data backup and recovery",
      "Cloud infrastructure management",
      "Security assessments and penetration testing",
      "IT help desk for distributed teams",
    ]}
    compliance={["SOC 2", "PCI DSS", "State Privacy Laws"]}
    ctaText="Schedule a Staffing IT Assessment"
  />
);

export default StaffingPage;
