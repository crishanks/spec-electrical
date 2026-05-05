import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/data";

interface ContactCTAProps {
  heading?: string;
  description?: string;
}

export default function ContactCTA({
  heading = "Ready to get started?",
  description = "Call us today or request a free estimate online. We respond within 1 hour.",
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden bg-amber-500">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
              {heading}
            </h2>
            <p className="mt-2 text-slate-800 text-lg">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-900 text-white font-bold text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 font-bold text-base transition-colors"
            >
              Request an Estimate
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
