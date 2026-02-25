import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE_1 } from "@/lib/constants";
import { SITE_URL } from "@/lib/seoConfig";

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category?: string;
}

const ProductSchema = ({ name, description, image, category = "Home Safety Products" }: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `${SITE_URL}${image}`,
    brand: {
      "@type": "Brand",
      name: BUSINESS_NAME,
    },
    category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ProductSchema;
