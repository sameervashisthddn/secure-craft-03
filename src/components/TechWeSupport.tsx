import fortinetLogo from "@/assets/vendors/fortinet.png";
import sophosLogo from "@/assets/vendors/sophos.png";
import sentineloneLogo from "@/assets/vendors/sentinelone.png";
import microsoftLogo from "@/assets/vendors/microsoft.png";
import vmwareLogo from "@/assets/vendors/vmware.png";
import ciscoLogo from "@/assets/vendors/cisco.png";

const techs = [
  { name: "Fortinet", logo: fortinetLogo, className: "h-12 max-w-[140px]" },
  { name: "Sophos", logo: sophosLogo, className: "h-36 max-w-[200px]" },
  { name: "SentinelOne", logo: sentineloneLogo, className: "h-36 max-w-[200px]" },
  { name: "Microsoft", logo: microsoftLogo, className: "h-12 max-w-[140px]" },
  { name: "VMware", logo: vmwareLogo, className: "h-12 max-w-[140px]" },
  { name: "Cisco", logo: ciscoLogo, className: "h-12 max-w-[140px]" },
];

const TechWeSupport = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary md:text-4xl">
          Technologies We Support
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-center rounded-xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={t.logo}
                alt={t.name}
                className={`${t.className} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWeSupport;
