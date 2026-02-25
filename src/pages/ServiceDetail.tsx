import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Check, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ProductSchema from "@/components/schemas/ProductSchema";
import ServiceSchema from "@/components/schemas/ServiceSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";
import HowToSchema from "@/components/schemas/HowToSchema";
import ImageObjectSchema from "@/components/schemas/ImageObjectSchema";
import { CALL_LINK, WHATSAPP_LINK, BUSINESS_NAME } from "@/lib/constants";
import { servicePages } from "@/lib/serviceData";

import serviceBalconyBeforeAfter from "@/assets/service-balcony-before-after.jpeg";
import serviceWindowBeforeAfter from "@/assets/service-window-before-after.jpeg";
import serviceStaircase from "@/assets/service-staircase-new.jpeg";
import servicePet from "@/assets/service-pet-new.jpeg";
import serviceChildSafety from "@/assets/service-child-safety.jpeg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceSports from "@/assets/service-sports.jpg";

const imageMap: Record<string, string> = {
  balcony: serviceBalconyBeforeAfter,
  window: serviceWindowBeforeAfter,
  staircase: serviceStaircase,
  pet: servicePet,
  child: serviceChildSafety,
  commercial: serviceCommercial,
  sports: serviceSports,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicePages.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <section className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary hover:underline">← Back to Services</Link>
        </section>
      </Layout>
    );
  }

  const otherServices = servicePages.filter((s) => s.slug !== slug);

  const installationSteps = [
    { name: "Site Visit & Measurement", text: "Our experts visit your location to take precise measurements and assess requirements." },
    { name: "Material Selection", text: "Choose from premium stainless steel cables and fittings based on your needs." },
    { name: "Professional Installation", text: "Skilled technicians install the invisible grills with proper tensioning and alignment." },
    { name: "Quality Check & Handover", text: "Final inspection ensures everything meets our quality standards before handover." },
  ];

  return (
    <Layout>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
        canonical={`/services/${service.slug}`}
      />
      <ProductSchema
        name={service.title}
        description={service.metaDescription}
        image={imageMap[service.imageKey]}
      />
      <ServiceSchema
        serviceName={service.title}
        description={service.metaDescription}
        serviceType="Home Safety Installation"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
      />
      <HowToSchema
        name={`How to Install ${service.title}`}
        description={`Step-by-step guide for professional ${service.title} installation`}
        steps={installationSteps}
      />
      <ImageObjectSchema
        images={[{
          url: imageMap[service.imageKey],
          caption: `${service.title} - Professional Installation in Vijayawada`,
        }]}
      />

      {/* Hero */}
      <section className="gradient-hero text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold mb-6">
            {service.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Professional {service.title} Installation in Vijayawada by {BUSINESS_NAME}
          </motion.p>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft size={16} /> Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src={imageMap[service.imageKey]}
                alt={`${service.title} installation in Vijayawada by ${BUSINESS_NAME}`}
                className="w-full rounded-2xl shadow-card object-cover aspect-[4/3]"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>

              <h3 className="font-semibold text-foreground mb-3">{service.label}:</h3>
              <ul className="space-y-2 mb-8">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Check size={16} className="text-primary shrink-0" /> {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={CALL_LINK} className="inline-flex items-center gap-2 gradient-cta text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Phone size={16} /> 📞 Call Now
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[hsl(142,70%,45%)] text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  💬 WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">Our Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
