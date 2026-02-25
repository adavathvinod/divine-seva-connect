import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE_1, PHONE_2, ADDRESS } from "@/lib/constants";
import { SITE_URL, SERVICE_AREAS, BUSINESS_REVIEWS, SOCIAL_PROFILES, PAYMENT_METHODS } from "@/lib/seoConfig";

const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    description: "Premium invisible grills installation service in Vijayawada for balconies, windows, staircases, and child safety. Rust-free stainless steel grills with professional installation.",
    url: SITE_URL,
    telephone: `+91${PHONE_1}`,
    paymentAccepted: PAYMENT_METHODS.join(", "),
    currenciesAccepted: "INR",
    email: "shivasakthi.grills@gmail.com",
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Singh Nagar, Bombay Colony",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      postalCode: "520010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.5062",
      longitude: "80.6480",
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: area.state,
      },
    })),
    sameAs: SOCIAL_PROFILES,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: BUSINESS_REVIEWS.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: BUSINESS_REVIEWS.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.datePublished,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.reviewBody,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Invisible Grills Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Balcony Invisible Grills Installation",
            description: "Premium balcony invisible grills for child safety and bird protection",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Window Invisible Grills Installation",
            description: "Window safety grills with crystal clear visibility",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Child Safety Grills",
            description: "Maximum protection invisible grills for children safety",
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
