import { motion } from "framer-motion";
import { Phone, Check, Star, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import OrganizationSchema from "@/components/schemas/OrganizationSchema";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import { CALL_LINK, BUSINESS_NAME, WHATSAPP_LINK } from "@/lib/constants";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/analytics";

import serviceBalconyBeforeAfter from "@/assets/service-balcony-before-after.jpeg";
import serviceWindowBeforeAfter from "@/assets/service-window-before-after.jpeg";
import serviceStaircase from "@/assets/service-staircase-new.jpeg";
import servicePet from "@/assets/service-pet-new.jpeg";
import serviceChildSafety from "@/assets/service-child-safety.jpeg";
import serviceBalconyFamily from "@/assets/service-balcony-family.jpeg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSports from "@/assets/service-sports.jpg";
import { start } from "repl";

const services = [
  { image: serviceBalconyBeforeAfter, slug: "balcony-invisible-grills", title: "Balcony Invisible Grills", desc: "Our Balcony Invisible Grills provide the perfect balance between safety and style. Designed with high-quality stainless steel cables, these grills ensure strong protection while maintaining a clear and open view.", points: ["Apartments and high-rise buildings", "Homes with children and elderly", "Bird and pigeon protection", "Modern balcony appearance"], label: "Ideal for" },
  { image: serviceWindowBeforeAfter, slug: "window-invisible-grills", title: "Window Invisible Grills", desc: "Window Invisible Grills protect your home without affecting ventilation or natural light. Nearly invisible with strong security against accidents and bird entry.", points: ["Crystal clear visibility", "Strong safety barrier", "Rust-proof stainless steel", "Modern and elegant design", "Suitable for all window types"], label: "Benefits" },
  { image: serviceStaircase, slug: "staircase-invisible-grills", title: "Staircase Invisible Grills", desc: "Specially designed to prevent accidental falls and improve safety inside your home. Ideal for houses with children and elderly family members.", points: ["Duplex homes", "Villas", "Apartments with internal staircases", "Child and senior citizen safety"], label: "Best for" },
  { image: servicePet, slug: "pet-safety-grills", title: "Invisible Grills for Pet Safety", desc: "Keep your furry friends safe on balconies and windows without making them feel trapped. Durable, pet-friendly, and professionally installed.", points: ["Dogs and cats", "High-rise apartments", "Balcony and window safety", "Comfortable and secure living"], label: "Perfect for" },
  { image: serviceChildSafety, slug: "child-safety-grills", title: "Invisible Grills for Child Safety", desc: "Maximum security with premium tension cables and professional installation. Reduce the risk of falls while keeping your home bright and open.", points: ["Strong stainless steel cables", "Child-friendly spacing", "Long-lasting durability", "Neat and invisible appearance", "Trusted installation service"], label: "Features" },
  { image: serviceCommercial, slug: "commercial-invisible-grills", title: "Commercial High-Rise Solutions", desc: "Professional invisible grill installations for commercial buildings, offices, and high-rise complexes with industrial-grade materials.", points: ["Office buildings", "Shopping complexes", "Hospitals and schools", "Corporate apartments", "High-rise towers"], label: "Suitable for" },
  { image: serviceSports, slug: "sports-stadium-nets", title: "Sports & Stadium Nets", desc: "Built for safety and durability in sports facilities. Prevent balls from going out of bounds and protect spectators and property.", points: ["Cricket nets", "Football grounds", "Badminton courts", "Stadiums and sports academies", "Training facilities"], label: "Applications" },
];

const trustBadges = [
  "12+ Years Experience",
  "1500+ Installations",
  "Premium Stainless Steel",
  "10 Year Warranty",
];

const recentInstallations = [
  { image: serviceBalconyBeforeAfter, alt: "Balcony invisible grill installation project" },
  { image: serviceWindowBeforeAfter, alt: "Window invisible grill completed installation" },
  { image: serviceChildSafety, alt: "Child safety invisible grill on balcony" },
  { image: servicePet, alt: "Pet safety invisible grill project" },
  { image: serviceStaircase, alt: "Staircase invisible grill installation" },
  { image: serviceBalconyFamily, alt: "Family balcony invisible grill installation" },
];

const pricing = [
  { type: "Balcony Invisible Grills", priceStartFrom: "₹120 Sq Ft" },
  { type: "Window Invisible Grills", priceStartFrom: "₹120 Sq Ft" },
];

const installationAreas = [
  "Hyderabad",
  "Vijayawada",
  "Gachibowli",
  "Madhapur",
  "Kukatpally",
  "LB Nagar",
  "Miyapur",
];

const faqs = [
  {
    question: "How much do invisible grills cost?",
    answer: "Prices start from ₹900 per sq ft depending on balcony/window size and installation requirements.",
  },
  {
    question: "How long does installation take?",
    answer: "Most balcony installations are completed in 2 to 3 hours with same-day service in many areas.",
  },
  {
    question: "Are invisible grills safe for children?",
    answer: "Yes. High-tension stainless steel cables are built to provide strong child safety without blocking your view.",
  },
];

const whyChooseUs = [
  "Premium stainless steel materials",
  "Professional installation team",
  "Long-lasting and rust-free solutions",
  "Modern and elegant designs",
	"Transparent, value-for-money quotations",
  "Trusted service in Vijayawada & Hyderabad",
];

const Services = () => {
  return (
    <Layout>
      <SEO
      title="Invisible Grill Installation in Hyderabad & Vijayawada"
        description="Invisible grill installation in Hyderabad & Vijayawada with free site visit, free measurement, and same day installation. Child safety, balcony, window and bird protection grills from ₹120 per sq ft."
        keywords="invisible grill installation Hyderabad Vijayawada, child safety invisible grills, balcony invisible grills, window invisible grills, bird protection grills, free site visit"
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
        description="Complete range of invisible grill installation services in Vijayawada & Hyderabad including balcony, window, staircase, and safety solutions"
        serviceType="Home Safety & Installation"
      />
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-4">
              Invisible Grill Installation in Hyderabad & Vijayawada
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="text-primary-foreground/90 text-lg md:text-xl font-medium mb-4">
              Free Site Visit | Free Measurement | Same Day Installation
            </motion.p>
            <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-4xl mx-auto mb-6">
              <li className="bg-primary-foreground/10 rounded-lg px-4 py-3 text-sm md:text-base">✔ Child Safety Invisible Grills</li>
              <li className="bg-primary-foreground/10 rounded-lg px-4 py-3 text-sm md:text-base">✔ Balcony & Window Invisible Grills</li>
              <li className="bg-primary-foreground/10 rounded-lg px-4 py-3 text-sm md:text-base">✔ Bird Protection Grills</li>
            </motion.ul>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="font-semibold text-2xl md:text-3xl mb-6">
              Starting from Min. 120 Sq Ft
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href={CALL_LINK}
                onClick={(e) => { e.preventDefault(); trackPhoneCall("6303758255", CALL_LINK); }}
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); trackWhatsAppClick(WHATSAPP_LINK); }}
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} /> WhatsApp Now
              </a>
              <a
                href="#free-site-visit"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <MapPin size={18} /> Get Free Site Visit
              </a>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-primary-foreground text-lg font-semibold mb-8">
              Call Now - 6303758255 | WhatsApp for Price
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {trustBadges.map((badge) => (
                <div key={badge} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-3 py-4 text-sm font-medium">
                  ⭐ {badge}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Installations */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Recent Invisible Grill Installations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real installation photos from our projects in Hyderabad and Vijayawada.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {recentInstallations.map((project, index) => (
              <motion.div
                key={project.alt}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-xl shadow-card"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card p-6 md:p-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Invisible Grill Pricing
            </h2>
            <div className="space-y-4 mb-6">
              {pricing.map((row) => (
                <div key={row.type} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground">{row.type}</p>
                  <p className="font-bold text-primary text-right">{row.priceStartFrom}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground font-medium">Free Site Visit & Measurement</p>
          </div>
        </div>
      </section>

      {/* Installation Areas */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
              Invisible Grill Installation Areas
            </h2>
            <p className="text-muted-foreground">
              Fast installation coverage for major localities in Hyderabad and Vijayawada.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {installationAreas.map((area) => (
              <span key={area} className="px-5 py-2.5 rounded-full bg-card border border-border text-foreground text-sm font-medium shadow-sm">
                {area}
              </span>
            ))}
          </div>
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
                    onClick={(e) => { e.preventDefault(); trackPhoneCall("6303758255", CALL_LINK); }}
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

      {/* WhatsApp Lead */}
      <section id="free-site-visit" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 text-center shadow-card">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Get Instant Quote on WhatsApp</h2>
            <p className="text-primary-foreground/85 text-lg mb-8">
              Send your balcony photo and get price instantly from our installation team.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.preventDefault(); trackWhatsAppClick(WHATSAPP_LINK); }}
              className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="bg-card p-6 rounded-xl shadow-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas + Map */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Service Areas</h2>
            <p className="text-muted-foreground">Vijayawada, Hyderabad, and nearby areas.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-card border border-border rounded-xl p-4 text-center font-medium">Vijayawada</div>
            <div className="bg-card border border-border rounded-xl p-4 text-center font-medium">Hyderabad</div>
            <div className="bg-card border border-border rounded-xl p-4 text-center font-medium">Nearby Areas</div>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122513.53388484539!2d80.54348365!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Invisible Grill Service Areas Map"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Home?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Get a free site visit and consultation from our expert team.</p>
          <a href={CALL_LINK} onClick={(e) => { e.preventDefault(); trackPhoneCall("6303758255", CALL_LINK); }} className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-floating">
            <Phone size={20} /> Call Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
