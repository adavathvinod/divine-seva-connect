import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Shield, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import LocalBusinessSchema from "@/components/schemas/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import { CALL_LINK, WHATSAPP_LINK, BUSINESS_NAME } from "@/lib/constants";

interface LocationPageProps {
  location: string;
  postalCode: string;
  state: string;
}

const LocationPage = ({ location, postalCode, state }: LocationPageProps) => {
  const services = [
    "Balcony Invisible Grills",
    "Window Safety Grills",
    "Child Safety Grills",
    "Staircase Invisible Grills",
    "Pet Safety Grills",
    "Bird Protection Grills",
    "Commercial Invisible Grills",
  ];

  return (
    <Layout>
      <SEO
        title={`Invisible Grills Installation in ${location}`}
        description={`Professional invisible grills installation service in ${location}, ${state}. Balcony, window & child safety grills with premium stainless steel. Call ${BUSINESS_NAME} at 6303758255 for free site visit.`}
        keywords={`invisible grills ${location.toLowerCase()}, safety grills ${location.toLowerCase()}, balcony grills ${location.toLowerCase()}, window grills ${location.toLowerCase()}, child safety grills ${location.toLowerCase()}, ${location.toLowerCase()} invisible grills installation, best invisible grills ${location.toLowerCase()}`}
        canonical={`/location/${location.toLowerCase()}`}
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: location, url: `/location/${location.toLowerCase()}` },
        ]}
      />
      <ServiceSchema
        serviceName={`Invisible Grills Installation in ${location}`}
        description={`Professional invisible grills installation service covering all areas of ${location}`}
        serviceType="Home Safety Service"
        areaServed={[location]}
      />

      {/* Hero Section */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invisible Grills Installation in {location}
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8">
              Premium balcony, window & safety invisible grill installation across {location}, {state}. 
              Serving all areas with professional service and quality materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-floating"
              >
                <Phone size={20} /> Call Now for Free Site Visit
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services in {location}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <CheckCircle className="text-primary mb-3" size={32} />
                <h3 className="font-display text-xl font-semibold mb-2">{service}</h3>
                <p className="text-muted-foreground text-sm">
                  Professional installation in {location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in Location */}
      <section className="py-16 md:py-24 gradient-soft">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us in {location}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "Local Experts", desc: `Serving ${location} with expert knowledge of local requirements` },
              { icon: CheckCircle, title: "Quick Service", desc: `Fast response and installation across all areas of ${location}` },
              { icon: Phone, title: "24/7 Support", desc: "Always available for your safety needs" },
              { icon: MapPin, title: "Wide Coverage", desc: `Covering all neighborhoods in ${location}` },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <item.icon className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 gradient-cta text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Get Free Site Visit in {location}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quotation. Our experts will visit your location in {location} at your convenience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CALL_LINK}
              className="bg-primary-foreground text-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Phone size={20} /> Call Now: 6303758255
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
