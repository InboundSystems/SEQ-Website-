export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapeDesigner",
    name: "SEQ Landscaping & Garden Maintenance",
    url: "https://seqlandscaping.base44.app",
    telephone: "0490770382",
    email: "samhindmarsh@seqlandscaping.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "48 Downes St",
      addressLocality: "Tarragindi",
      addressRegion: "QLD",
      postalCode: "4105",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.5198195,
      longitude: 153.0372259,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "07:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
    areaServed: "Brisbane Southside, Greater Brisbane, Logan, Ipswich",
    sameAs: ["https://maps.app.goo.gl/BSSjyixBSvPesEku5"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
