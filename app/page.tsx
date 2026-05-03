import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { getFeaturedServices, getTestimonials } from "@/sanity/lib/queries";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

export default async function HomePage() {
  const [sanityServices, sanityTestimonials] = await Promise.all([
    getFeaturedServices(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid services={sanityServices ?? SERVICES} />
      <WhyUs />
      <Testimonials testimonials={sanityTestimonials ?? TESTIMONIALS} />
      <ContactCTA />
    </>
  );
}
