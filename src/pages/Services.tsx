import { motion } from "framer-motion";
import { Phone, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import OrganizationSchema from "@/components/schemas/OrganizationSchema";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import { CALL_LINK, BUSINESS_NAME } from "@/lib/constants";
import { servicePages } from "@/lib/serviceData";

import serviceBalconyBeforeAfter from "@/assets/service-balcony-before-after.jpeg";
import serviceWindowBeforeAfter from "@/assets/service-window-before-after.jpeg";
import serviceStaircase from "@/assets/service-staircase-new.jpeg";
import servicePet from "@/assets/service-pet-new.jpeg";
import serviceChildSafety from "@/assets/service-child-safety.jpeg";
import serviceBalconyFamily from "@/assets/service-balcony-family.jpeg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const services = [
  { image: serviceBalconyBeforeAfter, slug: "balcony-invisible-grills", title: "Balcony Invisible Grills", desc: "Our Balcony Invisible Grills provide the perfect balance between safety and style. Designed with high-quality stainless steel cables, these grills ensure strong protection while maintaining a clear and open view.", points: ["Apartments and high-rise buildings", "Homes with children and elderly", "Bird and pigeon protection", "Modern balcony appearance"], label: "Ideal for" },
  { image: serviceWindowBeforeAfter, slug: "window-invisible-grills", title: "Window Invisible Grills", desc: "Window Invisible Grills protect your home without affecting ventilation or natural light. Nearly invisible with strong security against accidents and bird entry.", points: ["Crystal clear visibility", "Strong safety barrier", "Rust-proof stainless steel", "Modern and elegant design", "Suitable for all window types"], label: "Benefits" },
  { image: serviceStaircase, slug: "staircase-invisible-grills", title: "Staircase Invisible Grills", desc: "Specially designed to prevent accidental falls and improve safety inside your home. Ideal for houses with children and elderly family members.", points: ["Duplex homes", "Villas", "Apartments with internal staircases", "Child and senior citizen safety"], label: "Best for" },
  { image: servicePet, slug: "pet-safety-grills", title: "Invisible Grills for Pet Safety", desc: "Keep your furry friends safe on balconies and windows without making them feel trapped. Durable, pet-friendly, and professionally installed.", points: ["Dogs and cats", "High-rise apartments", "Balcony and window safety", "Comfortable and secure living"], label: "Perfect for" },
  { image: serviceChildSafety, slug: "child-safety-grills", title: "Invisible Grills for Child Safety", desc: "Maximum security with premium tension cables and professional installation. Reduce the risk of falls while keeping your home bright and open.", points: ["Strong stainless steel cables", "Child-friendly spacing", "Long-lasting durability", "Neat and invisible appearance", "Trusted installation service"], label: "Features" },
  { image: serviceCommercial, slug: "commercial-invisible-grills", title: "Commercial High-Rise Solutions", desc: "Professional invisible grill installations for commercial buildings, offices, and high-rise complexes with industrial-grade materials.", points: ["Office buildings", "Shopping complexes", "Hospitals and schools", "Corporate apartments", "High-rise towers"], label: "Suitable for" },
  { image: serviceSports, slug: "sports-stadium-nets", title: "Sports & Stadium Nets", desc: "Built for safety and durability in sports facilities. Prevent balls from going out of bounds and protect spectators and property.", points: ["Cricket nets", "Football grounds", "Badminton courts", "Stadiums and sports academies", "Training facilities"], label: "Applications" },
];

const whyChooseUs = [
  "Premium stainless steel materials",
  "Professional installation team",
  "Long-lasting and rust-free solutions",
  "Modern and elegant designs",
	"Transparent, value-for-money quotations",
  "Trusted service in Vijayawada",
];

const Services = () => {
  return (
    <Layout>
      <SEO
      title="Invisible Grill Services in Vijayawada"
        description="Complete invisible grill services in Vijayawada - Balcony, window, staircase, child safety, pet safety, commercial & sports nets. Call 6303758255."
        keywords="invisible grill services Vijayawada, balcony grills, window grills, child safety grills, pet safety, commercial grills"
        canonical="/services"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <OrganizationSchema />
      <ServiceSchema
        serviceName="Invisible Grills Installation Services"
        description="Complete range of invisible grill installation services including balcony, window, staircase, and safety solutions"
        serviceType="Home Safety & Installation"
      />
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-6">
			Invisible Grill Services in Vijayawada
		  </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Complete range of invisible grill solutions for every need
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-20 md:space-y-28">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-14 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.desc}
                </p>

                <p className="font-semibold text-foreground mb-3">{service.label}:</p>
                <ul className="space-y-2 mb-8">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check size={16} className="text-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={CALL_LINK}
                    className="inline-flex items-center gap-2 gradient-cta text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose {BUSINESS_NAME}?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-card p-5 rounded-xl shadow-card"
              >
                <Star size={20} className="text-primary shrink-0" />
                <span className="text-foreground font-medium text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Home?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get a free site visit and consultation from our expert team.</p>
          <a href={CALL_LINK} className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-floating">
            <Phone size={20} /> Call Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
