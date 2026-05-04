import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { getFeaturedServices, getTestimonials, getSiteSettings } from "@/sanity/lib/queries";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

export default async function HomePage() {
  const [sanityServices, sanityTestimonials, settings] = await Promise.all([
    getFeaturedServices(),
    getTestimonials(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero
        badgeText={settings?.heroBadgeText}
        headline={settings?.heroHeadline}
        accentWord={settings?.heroAccentWord}
        subheading={settings?.heroSubheading}
        imageUrl={settings?.heroImageUrl}
        serviceAreas={settings?.serviceAreas}
      />
      <TrustBar />
      <ServicesGrid services={sanityServices ?? SERVICES} />
      <WhyUs />
      <Testimonials testimonials={sanityTestimonials ?? TESTIMONIALS} />
      <ContactCTA />
    </>
  );
}
