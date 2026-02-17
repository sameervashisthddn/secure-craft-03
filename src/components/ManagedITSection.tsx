import { ClipboardCheck, Server, ShieldCheck, TrendingDown, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ClipboardCheck,
    title: "Infrastructure Assessment & IT Audit",
    intro: "We perform a detailed audit of your IT infrastructure, including servers, endpoints, network devices, firewall configurations, remote access systems, and cloud services.",
    label: "This assessment helps identify:",
    items: [
      "Security vulnerabilities and misconfigurations",
      "Reliability risks and potential failure points",
      "Inefficient or outdated infrastructure",
      "Unnecessary licensing or infrastructure costs",
      "Compliance gaps related to security and access controls",
    ],
    footer: "We provide a clear, prioritized improvement plan so you can make informed decisions.",
  },
  {
    icon: Server,
    title: "Ongoing Infrastructure Management",
    intro: "We actively manage and support your IT infrastructure to ensure consistent performance, security, and uptime.",
    label: "This includes:",
    items: [
      "Server management (Windows, cloud, and hybrid environments)",
      "Network and firewall configuration and monitoring",
      "Endpoint management and security enforcement",
      "Secure remote access and VPN management",
      "Backup monitoring and recovery readiness",
      "Patch management and system updates",
    ],
    footer: "Our goal is to ensure your infrastructure remains stable, secure, and reliable.",
  },
  {
    icon: ShieldCheck,
    title: "Security Monitoring & Risk Reduction",
    intro: "We help reduce the risk of unauthorized access, data breaches, and system compromise by improving visibility and control across your IT environment.",
    label: "This includes:",
    items: [
      "Monitoring endpoint and network activity",
      "Reviewing access controls and authentication policies",
      "Identifying unusual or unauthorized system behavior",
      "Strengthening firewall and network segmentation",
      "Improving audit logging and incident visibility",
    ],
    footer: "This approach supports businesses that must maintain strong security and compliance readiness.",
  },
  {
    icon: TrendingDown,
    title: "Infrastructure Optimization & Cost Control",
    intro: "We help ensure your IT investment is aligned with your business requirements.",
    label: "This includes:",
    items: [
      "Identifying unnecessary or redundant services",
      "Recommending more reliable and cost-effective alternatives",
      "Improving infrastructure efficiency and scalability",
      "Ensuring you invest only where it provides real operational value",
    ],
    footer: "We focus on long-term reliability, not unnecessary upgrades.",
  },
  {
    icon: Lock,
    title: "Compliance-Aligned Infrastructure Support",
    intro: "For businesses handling sensitive data, we help ensure your infrastructure supports security and compliance requirements.",
    label: "This includes improving:",
    items: [
      "Access controls and user authentication",
      "System and access logging",
      "Secure remote access architecture",
      "Endpoint protection and monitoring",
      "Infrastructure visibility and audit readiness",
    ],
    footer: "This helps your organization maintain stronger security posture and compliance readiness.",
  },
];

const processSteps = [
  "Assess your current infrastructure",
  "Identify risks, inefficiencies, and improvement opportunities",
  "Provide clear, practical recommendations",
  "Implement approved improvements",
  "Provide ongoing monitoring and support",
];

const ManagedITSection = () => {
  return (
    <section id="managed-it" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
          Managed IT & Infrastructure Services
        </h2>
        <p className="mb-4 max-w-3xl text-lg font-medium text-foreground">
          Managed IT Services Built Around Your Actual Business Needs
        </p>
        <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          We don't start with product recommendations. We begin with a comprehensive review of your existing IT environment to understand how your systems operate, where risks exist, and whether your current setup is reliable, secure, and cost-effective.
        </p>
        <p className="mb-12 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Based on this assessment, we provide practical recommendations and ongoing management to improve security, stability, and long-term performance — without unnecessary spending.
        </p>

        {/* Service cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <s.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
              <p className="mb-2 text-sm font-medium text-foreground">{s.label}</p>
              <ul className="mb-3 space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-muted-foreground">{s.footer}</p>
            </div>
          ))}
        </div>

        {/* Our Approach */}
        <div className="rounded-xl border border-border bg-background p-8 md:p-10">
          <h3 className="mb-2 text-xl font-semibold text-foreground">
            Our Approach: Assessment First, Then Implementation
          </h3>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We believe effective IT management starts with understanding your environment — not selling predefined solutions.
          </p>
          <p className="mb-4 text-sm font-medium text-foreground">Our process:</p>
          <ol className="mb-6 space-y-2">
            {processSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mb-6 text-sm text-muted-foreground">
            This ensures your IT environment remains secure, reliable, and aligned with your business needs.
          </p>
          <a href="#contact">
            <Button size="lg">
              Request an Assessment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ManagedITSection;
