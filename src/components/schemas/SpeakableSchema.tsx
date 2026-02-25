import { Helmet } from "react-helmet-async";

interface SpeakableSchemaProps {
  speakableSelectors: string[];
}

const SpeakableSchema = ({ speakableSelectors }: SpeakableSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SpeakableSchema;
