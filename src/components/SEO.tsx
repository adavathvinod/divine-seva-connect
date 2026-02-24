import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, LOCATION, PHONE_1 } from "@/lib/constants";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  type?: string;
}

const SEO = ({ title, description, keywords, canonical, type = "website" }: SEOProps) => {
  const fullTitle = `${title} | ${BUSINESS_NAME} | Vijayawada`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    description,
    telephone: `+91${PHONE_1}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Singh Nagar, Bombay Colony",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    url: canonical || "https://shivasakthi-grills.lovable.app",
    image: "/og-image.png",
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content="/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/og-image.png" />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
