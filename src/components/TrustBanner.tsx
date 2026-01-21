import { Users, IndianRupee, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "250+",
    label: "Devotees Helped",
  },
  {
    icon: IndianRupee,
    value: "₹0",
    label: "Service Charge",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Trusted Service",
  },
];

export const TrustBanner = () => {
  return (
    <div className="bg-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-gold-light" />
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-gold-light">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
