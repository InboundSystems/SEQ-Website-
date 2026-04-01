interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  areaServed?: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  areaServed = "Brisbane, QLD",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "SEQ Landscaping & Garden Maintenance",
      telephone: "0490770382",
      address: {
        "@type": "PostalAddress",
        streetAddress: "48 Downes St",
        addressLocality: "Tarragindi",
        addressRegion: "QLD",
        postalCode: "4105",
        addressCountry: "AU",
      },
    },
    areaServed,
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
