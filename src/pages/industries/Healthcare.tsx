import { Shield, Server, Lock, FileCheck } from "lucide-react";
import IndustryPageLayout from "@/components/IndustryPageLayout";

const HealthcarePage = () => (
  <IndustryPageLayout
    title="Healthcare IT Services"
    metaTitle="Healthcare IT & Cybersecurity Services – Crabtree Solutions"
    metaDescription="HIPAA-compliant managed IT services, cybersecurity, and infrastructure support for healthcare providers. Protect patient data and ensure compliance."
    canonicalPath="/industries/healthcare"
    headline="Secure IT Infrastructure for Healthcare Providers"
    subheadline="Healthcare IT & Cybersecurity"
    intro="We help clinics, hospitals, and health-tech companies protect patient data, maintain HIPAA compliance, and build reliable IT infrastructure that supports care delivery."
    challenges={[
      { icon: <Shield className="h-6 w-6" />, title: "HIPAA Compliance", description: "Navigate complex regulatory requirements with properly configured systems, access controls, and audit trails." },
      { icon: <Lock className="h-6 w-6" />, title: "Patient Data Protection", description: "Encrypt and secure PHI across all endpoints, networks, and cloud environments." },
      { icon: <Server className="h-6 w-6" />, title: "System Uptime", description: "Ensure 24/7 availability for EHR systems, telehealth platforms, and critical clinical applications." },
      { icon: <FileCheck className="h-6 w-6" />, title: "Audit Readiness", description: "Maintain documentation and configurations that satisfy OCR audits and breach notification requirements." },
    ]}
    services={[
      "HIPAA-aligned security assessments",
      "EHR system support and integration",
      "Endpoint protection for clinical workstations",
      "Secure remote access for telehealth",
      "Email security and phishing prevention",
      "Backup and disaster recovery planning",
      "Network segmentation for medical devices",
      "Staff security awareness training",
    ]}
    compliance={["HIPAA", "HITECH", "SOC 2", "NIST CSF"]}
    ctaText="Schedule a Healthcare IT Assessment"
  />
);

export default HealthcarePage;
