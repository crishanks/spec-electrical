export const COMPANY = {
  name: "Apex Electric",
  tagline: "Powering Homes & Businesses Since 2003",
  phone: "(555) 847-2900",
  phoneHref: "tel:5558472900",
  email: "info@apexelectric.com",
  address: "1204 Commerce Blvd",
  city: "Springfield, IL 62701",
  license: "IL EC License #EC.0001234",
  founded: "2003",
  serviceAreas: [
    "Springfield",
    "Chatham",
    "Sherman",
    "Rochester",
    "Riverton",
    "Auburn",
    "Williamsville",
  ],
};

export const SERVICES = [
  {
    id: "residential",
    name: "Residential Electrical",
    tagline: "Safe, reliable electrical work for your home",
    description:
      "From outlets and switches to whole-home rewiring, our licensed electricians handle every residential job with care and precision. We work in all types of homes, from older houses needing updates to new construction builds.",
    icon: "Home",
    slug: "residential-electrical",
  },
  {
    id: "commercial",
    name: "Commercial Electrical",
    tagline: "Code-compliant electrical for your business",
    description:
      "We serve retail stores, offices, restaurants, and industrial facilities. Our commercial team handles tenant buildouts, service upgrades, lighting retrofits, and code compliance work across the greater Springfield area.",
    icon: "Building2",
    slug: "commercial-electrical",
  },
  {
    id: "panel",
    name: "Panel Upgrades",
    tagline: "200A upgrades, breaker replacement & more",
    description:
      "Older panels can be fire hazards and can't handle modern electrical loads. We upgrade 60A and 100A services to 200A+, replace faulty breakers, and install subpanels for additions, garages, and workshops.",
    icon: "Cpu",
    slug: "panel-upgrades",
  },
  {
    id: "ev",
    name: "EV Charger Installation",
    tagline: "Level 2 home and commercial charging",
    description:
      "We install Level 2 EV charging stations (240V) for all major vehicle brands. Whether you need a single home charger or a multi-unit commercial station, we handle the permitting, installation, and inspection.",
    icon: "Plug",
    slug: "ev-charger-installation",
  },
  {
    id: "emergency",
    name: "Emergency Service",
    tagline: "24/7 rapid response when you need it most",
    description:
      "Electrical emergencies don't wait for business hours. We offer 24/7 emergency response for power outages, tripped breakers that won't reset, burning smells, sparking outlets, and any situation that poses a safety risk.",
    icon: "AlertTriangle",
    slug: "emergency-service",
  },
  {
    id: "lighting",
    name: "Lighting Installation",
    tagline: "LED upgrades, landscape & smart lighting",
    description:
      "Upgrade your home or business with modern LED recessed lighting, smart lighting systems, outdoor landscape lighting, under-cabinet lighting, and commercial sign and display lighting. We design and install complete lighting solutions.",
    icon: "Lightbulb",
    slug: "lighting-installation",
  },
];

export const TESTIMONIALS = [
  {
    id: "1",
    customerName: "Mark T.",
    location: "Springfield, IL",
    quote:
      "Apex upgraded our 100A panel to 200A and installed two EV chargers all in one day. The crew was professional, the work was clean, and they pulled all the permits. Couldn't ask for more.",
    rating: 5,
  },
  {
    id: "2",
    customerName: "Sarah M.",
    location: "Chatham, IL",
    quote:
      "Called them at 10pm because a breaker kept tripping. They were at my house within the hour, found a faulty breaker, and had us back up safely before midnight. Absolute lifesavers.",
    rating: 5,
  },
  {
    id: "3",
    customerName: "David L.",
    location: "Sherman, IL",
    quote:
      "Got three quotes for a whole-home rewire. Apex was the best price and the most thorough. They explained every step, showed up when they said they would, and cleaned up every day. Highly recommend.",
    rating: 5,
  },
];

export const WHY_US = [
  {
    icon: "FileText",
    title: "Upfront Pricing",
    description:
      "We provide written estimates before any work starts — no surprise charges, no hidden fees. You know exactly what you're paying before we pick up a tool.",
  },
  {
    icon: "Award",
    title: "Master Electricians",
    description:
      "Every job is performed or directly supervised by a licensed Master Electrician. We don't cut corners — your safety and code compliance are non-negotiable.",
  },
  {
    icon: "ShieldCheck",
    title: "1-Year Warranty",
    description:
      "All workmanship is backed by our 1-year warranty. If something we installed doesn't perform as expected, we come back and make it right — at no charge.",
  },
];
