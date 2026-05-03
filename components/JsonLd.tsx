import { COMPANY } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    name: COMPANY.name,
    description: `Licensed electricians serving ${COMPANY.serviceAreas.join(", ")} and surrounding areas. Residential, commercial, panel upgrades, EV charger installation, and 24/7 emergency service.`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressLocality: "Springfield",
      addressRegion: "IL",
      postalCode: "62701",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.7817,
      longitude: -89.6501,
    },
    areaServed: COMPANY.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    image: [],
    sameAs: [],
    hasMap: `https://maps.google.com/?q=${COMPANY.address},${COMPANY.city}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
