import { Shield, Server, Lock, FileCheck } from "lucide-react";
import IndustryPageLayout from "@/components/IndustryPageLayout";

const HealthcarePage = () => (
  <IndustryPageLayout
    title="Healthcare IT Services"
    metaTitle="Healthcare IT & Cybersecurity Services – Crabtree Solutions"
    metaDescription="Healthcare-focused managed IT, cybersecurity, and infrastructure support designed to strengthen HIPAA-aligned safeguards, security controls, operational reliability, and compliance readiness."
    canonicalPath="/industries/healthcare/"
    headline="Secure IT Infrastructure for Healthcare Providers"
    subheadline="Healthcare IT & Cybersecurity"
    intro="We help clinics, hospitals, and health-tech companies protect patient data, strengthen HIPAA-aligned safeguards and compliance readiness, and build reliable IT infrastructure that supports care delivery."
    challenges={[
      { icon: <Shield className="h-6 w-6" />, title: "HIPAA-Aligned Security & Compliance Readiness", description: "Strengthen technical safeguards, access controls, audit trails, and documentation that support HIPAA compliance readiness." },
      { icon: <Lock className="h-6 w-6" />, title: "Patient Data Protection", description: "Help protect PHI through appropriate encryption, endpoint, network, cloud, and access controls based on the approved service scope." },
      { icon: <Server className="h-6 w-6" />, title: "System Reliability", description: "Improve uptime and reliability for EHR systems, telehealth platforms, and critical clinical applications with monitoring and proactive maintenance." },
      { icon: <FileCheck className="h-6 w-6" />, title: "Audit Readiness", description: "Maintain documentation and configurations that support OCR audit readiness and applicable breach-response requirements." },
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
