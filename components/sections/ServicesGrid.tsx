import Link from "next/link";
import {
  Home,
  Building2,
  Cpu,
  Plug,
  AlertTriangle,
  Lightbulb,
  ChevronRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Building2,
  Cpu,
  Plug,
  AlertTriangle,
  Lightbulb,
};

interface ServiceCardProps {
  name: string;
  tagline: string;
  icon: string;
  slug: string;
}

function ServiceCard({ name, tagline, icon, slug }: ServiceCardProps) {
  const Icon = ICON_MAP[icon] ?? Home;
  return (
    <Link
      href={`/services#${slug}`}
      className="group flex flex-col gap-4 p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all"
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
        <Icon className="w-6 h-6 text-amber-400" />
      </span>
      <div>
        <h3 className="text-white font-bold text-base mb-1">{name}</h3>
        <p className="text-slate-400 text-sm leading-snug">{tagline}</p>
      </div>
      <span className="mt-auto inline-flex items-center gap-1 text-amber-400 text-sm font-medium group-hover:gap-2 transition-all">
        Learn more <ChevronRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

interface ServicesGridProps {
  services?: typeof SERVICES;
}

export default function ServicesGrid({ services = SERVICES }: ServicesGridProps) {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Electrical Services for Every Need
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            From a single outlet to a full commercial build-out, Apex Electric has
            the experience and equipment to get the job done right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <ServiceCard
              key={svc.id}
              name={svc.name}
              tagline={svc.tagline}
              icon={svc.icon}
              slug={svc.slug}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-amber-500/40 text-white hover:text-amber-400 font-semibold text-sm transition-colors"
          >
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
