import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Building2,
  Cpu,
  Plug,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
  Phone,
} from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { getServices } from "@/sanity/lib/queries";
import { SERVICES, COMPANY } from "@/lib/data";

type ServiceItem = {
  id?: string;
  name: string;
  tagline?: string;
  description?: string;
  icon?: string;
  slug: string;
};

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Residential, commercial, panel upgrades, EV charger installation, emergency service, and lighting. Licensed electricians serving Springfield, IL.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Building2,
  Cpu,
  Plug,
  AlertTriangle,
  Lightbulb,
};

export default async function ServicesPage() {
  const sanityServices = await getServices();
  const services: ServiceItem[] = sanityServices ?? SERVICES;

  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 border-b border-slate-800 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">Services</span>
          </nav>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Our Electrical Services
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl text-lg">
            From a single outlet to a full commercial build-out, Apex Electric has the
            experience and equipment to get the job done right — the first time.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon ?? "Home"] ?? Home;
            const isEven = i % 2 === 0;
            return (
              <div
                key={svc.id ?? svc.slug}
                id={svc.slug}
                className={`scroll-mt-20 flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-start`}
              >
                {/* Icon block */}
                <div className="shrink-0 w-full lg:w-64 xl:w-72 flex flex-col items-start gap-4 p-8 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-amber-500/10">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </span>
                  <h2 className="text-white font-extrabold text-2xl">{svc.name}</h2>
                  {svc.tagline && (
                    <p className="text-amber-400 text-sm font-semibold">{svc.tagline}</p>
                  )}
                  <a
                    href={COMPANY.phoneHref}
                    className="mt-2 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call for Pricing
                  </a>
                </div>

                {/* Description */}
                <div className="flex-1">
                  {svc.description ? (
                    <p className="text-slate-300 text-lg leading-relaxed">{svc.description}</p>
                  ) : (
                    <p className="text-slate-500 italic">Description coming soon.</p>
                  )}
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
                  >
                    Request a free estimate <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
