import { ClipboardCheck, Search, FileText, Settings, Monitor } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Infrastructure & Security Assessment",
    text: "We review your existing IT infrastructure, including servers, endpoints, network devices, firewall configurations, and access controls.",
  },
  {
    icon: Search,
    title: "Identify Risks and Inefficiencies",
    text: "We identify security gaps, reliability risks, and unnecessary infrastructure costs.",
  },
  {
    icon: FileText,
    title: "Provide Clear Recommendations",
    text: "We recommend practical improvements based on your actual business requirements.",
  },
  {
    icon: Settings,
    title: "Implement and Secure Your Environment",
    text: "We deploy approved solutions and strengthen your infrastructure.",
  },
  {
    icon: Monitor,
    title: "Ongoing Management and Monitoring",
    text: "We provide continuous support, monitoring, and infrastructure management.",
  },
];

const OurApproachSection = () => {
  return (
    <section id="approach" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-3xl font-bold text-primary md:text-4xl">
          Our Approach: Assessment First, Then Implementation
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-start rounded-xl border border-border bg-background p-6">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <s.icon className="mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
