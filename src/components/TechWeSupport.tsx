import fortinetLogo from "@/assets/vendors/fortinet.png";
import sophosLogo from "@/assets/vendors/sophos.png";
import sentineloneLogo from "@/assets/vendors/sentinelone.png";
import microsoftLogo from "@/assets/vendors/microsoft.png";
import vmwareLogo from "@/assets/vendors/vmware.png";
import ciscoLogo from "@/assets/vendors/cisco.png";

const techs = [
  { name: "Fortinet", logo: fortinetLogo },
  { name: "Sophos", logo: sophosLogo },
  { name: "SentinelOne", logo: sentineloneLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "VMware", logo: vmwareLogo },
  { name: "Cisco", logo: ciscoLogo },
];

const TechWeSupport = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-3xl font-bold text-primary md:text-4xl">
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
                className="h-10 max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWeSupport;
