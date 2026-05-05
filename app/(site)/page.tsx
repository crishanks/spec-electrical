import PageBuilder from "@/components/PageBuilder";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { getFeaturedServices, getTestimonials, getSiteSettings, getPage } from "@/sanity/lib/queries";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

export default async function HomePage() {
  const [page, sanityServices, sanityTestimonials, settings] = await Promise.all([
    getPage("home"),
    getFeaturedServices(),
    getTestimonials(),
    getSiteSettings(),
  ]);

  const services = sanityServices ?? SERVICES;
  const testimonials = sanityTestimonials ?? TESTIMONIALS;

  if (page?.sections?.length) {
    return (
      <PageBuilder
        sections={page.sections}
        services={services}
        testimonials={testimonials}
        serviceAreas={settings?.serviceAreas}
      />
    );
  }

  // Fallback when no page document exists in Sanity yet
  return (
    <>
      <Hero serviceAreas={settings?.serviceAreas} />
      <TrustBar />
      <ServicesGrid services={services} />
      <WhyUs />
      <Testimonials testimonials={testimonials} />
      <ContactCTA />
    </>
  );
}
