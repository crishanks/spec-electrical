import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";
import { SERVICES, TESTIMONIALS } from "@/lib/data";

type ServiceItem = { id: string; name: string; tagline: string; icon: string; slug: string };
type TestimonialItem = { id: string; customerName: string; location: string; quote: string; rating: number };
type WhyUsItem = { icon: string; title: string; description: string };
type TrustItem = { icon: string; label: string; detail: string };

interface SanitySection {
  _type: string;
  _key: string;
  [key: string]: unknown;
}

interface PageBuilderProps {
  sections: SanitySection[];
  services?: ServiceItem[];
  testimonials?: TestimonialItem[];
  serviceAreas?: string[];
}

export default function PageBuilder({
  sections,
  services = SERVICES,
  testimonials = TESTIMONIALS,
  serviceAreas,
}: PageBuilderProps) {
  return (
    <>
      {sections.map((section) => {
        const key = section._key;
        switch (section._type) {
          case "heroBlock":
            return (
              <Hero
                key={key}
                badgeText={section.badgeText as string | undefined}
                headline={section.headline as string | undefined}
                accentWord={section.accentWord as string | undefined}
                subheading={section.subheading as string | undefined}
                imageUrl={section.imageUrl as string | undefined}
                serviceAreas={serviceAreas}
              />
            );
          case "trustBarBlock":
            return <TrustBar key={key} items={section.items as TrustItem[] | undefined} />;
          case "servicesGridBlock":
            return (
              <ServicesGrid
                key={key}
                services={services}
                eyebrow={section.eyebrow as string | undefined}
                heading={section.heading as string | undefined}
                description={section.description as string | undefined}
                ctaLabel={section.ctaLabel as string | undefined}
                ctaHref={section.ctaHref as string | undefined}
              />
            );
          case "whyUsBlock":
            return (
              <WhyUs
                key={key}
                eyebrow={section.eyebrow as string | undefined}
                heading={section.heading as string | undefined}
                items={section.items as WhyUsItem[] | undefined}
              />
            );
          case "testimonialsBlock":
            return (
              <Testimonials
                key={key}
                testimonials={testimonials}
                eyebrow={section.eyebrow as string | undefined}
                heading={section.heading as string | undefined}
                description={section.description as string | undefined}
              />
            );
          case "contactCtaBlock":
            return (
              <ContactCTA
                key={key}
                heading={section.heading as string | undefined}
                description={section.description as string | undefined}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
