import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { getFeaturedServices, getTestimonials, getSiteSettings, getHeroSettings } from "@/sanity/lib/queries";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

export default async function HomePage() {
  const [sanityServices, sanityTestimonials, settings, hero] = await Promise.all([
    getFeaturedServices(),
    getTestimonials(),
    getSiteSettings(),
    getHeroSettings(),
  ]);

  return (
    <>
      <Hero
        badgeText={hero?.badgeText}
        headline={hero?.headline}
        accentWord={hero?.accentWord}
        subheading={hero?.subheading}
        imageUrl={hero?.imageUrl}
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
