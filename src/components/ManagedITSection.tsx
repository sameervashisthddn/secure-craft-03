import { Server, Cloud, MonitorSmartphone, HardDrive, ShieldCheck, Settings } from "lucide-react";

const cards = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Design, deploy, and manage cloud environments across AWS, Azure, and Google Cloud — optimized for performance, cost, and security.",
  },
  {
    icon: Server,
    title: "On-Premise Server & Network Setup",
    desc: "Hardware deployment, rack & stack, cabling, and network configuration — delivered on-site with full documentation and handover.",
  },
  {
    icon: ShieldCheck,
    title: "Active Directory & Identity Management",
    desc: "AD, DNS, DHCP, and Group Policy configuration and ongoing management to keep your identity infrastructure secure and reliable.",
  },
  {
    icon: HardDrive,
    title: "Backup & Disaster Recovery",
    desc: "On-site and offsite backup solutions with tested recovery procedures so your business can bounce back from any disruption.",
  },
  {
    icon: MonitorSmartphone,
    title: "Monitoring & Maintenance",
    desc: "24/7 infrastructure monitoring, proactive patching, and health checks — delivered remotely or on-site based on your needs.",
  },
  {
    icon: Settings,
    title: "Remote & On-Site Support",
    desc: "Flexible delivery model combining remote management with on-site visits for hands-on tasks, ensuring minimal downtime.",
  },
];

const ManagedITSection = () => {
  return (
    <section id="managed-it" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="mb-3 text-3xl font-bold text-primary md:text-4xl">
          Managed IT & Infrastructure
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          We configure and maintain your IT infrastructure — on-premise and in the cloud — with flexible remote and on-site support tailored to your organization.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <c.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Platforms we support:</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Google Cloud</span>
          <span>Windows Server</span>
          <span>Linux</span>
          <span>VMware</span>
          <span>Hyper-V</span>
        </div>
      </div>
    </section>
  );
};

export default ManagedITSection;
