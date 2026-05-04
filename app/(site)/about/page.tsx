import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, CheckCircle } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { COMPANY, WHY_US } from "@/lib/data";
import { ShieldCheck, FileText, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Apex Electric has been serving Springfield, IL since 2003. Licensed master electricians, upfront pricing, and a 1-year workmanship warranty.",
};

const ICON_MAP: Record<string, React.ElementType> = { FileText, Award, ShieldCheck };

const CREDENTIALS = [
  "Illinois Master Electrician License",
  "General liability & workers' comp insured",
  "OSHA 10 certified crew members",
  "HomeAdvisor screened & approved",
  "Better Business Bureau accredited",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">About</span>
          </nav>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            About Apex Electric
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                20+ Years Serving Greater Springfield
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Apex Electric was founded in {COMPANY.founded} with a simple goal: provide
                  electricians that Springfield-area homeowners and business owners could actually
                  trust. No upselling, no hidden fees, no excuses — just solid electrical work done
                  right the first time.
                </p>
                <p>
                  Our founder, a licensed Master Electrician, started the business out of a single
                  truck. Today, Apex Electric has grown into a full-service electrical contractor
                  serving residential and commercial clients across the greater Springfield area —
                  but our values haven't changed.
                </p>
                <p>
                  Every job we take, from changing an outlet to wiring a commercial build-out, is
                  treated with the same level of care. We pull permits, follow code, and stand
                  behind every installation with our 1-year workmanship warranty.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-5">Licenses &amp; Credentials</h3>
                <ul className="space-y-3">
                  {CREDENTIALS.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-slate-500 text-sm">{COMPANY.license}</p>
              </div>

              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-400" /> Service Area
                </h3>
                <div className="flex flex-wrap gap-2">
                  {COMPANY.serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-slate-400 text-sm">
                  Not seeing your area? Call us — we may still be able to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-900 border-y border-slate-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
            The Apex Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_US.map(({ icon, title, description }) => {
              const Icon = ICON_MAP[icon] ?? ShieldCheck;
              return (
                <div key={title} className="flex flex-col gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 shrink-0">
                    <Icon className="w-6 h-6 text-slate-950" />
                  </span>
                  <h3 className="text-white font-bold text-lg">{title}</h3>
                  <p className="text-slate-400 leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
