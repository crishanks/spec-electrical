import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";
import { COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request a free electrical estimate in Springfield, IL. We respond within 1 hour. 24/7 emergency service available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">Contact</span>
          </nav>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Request a Free Estimate
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl text-lg">
            We respond within 1 hour during business hours. For emergencies, call us directly —
            24/7.
          </p>
        </div>
      </section>

      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <ContactForm />

            {/* Contact info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
                <h2 className="text-white font-bold text-xl">Contact Information</h2>

                <a href={COMPANY.phoneHref} className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 shrink-0">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Call or Text</p>
                    <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                      {COMPANY.phone}
                    </p>
                  </div>
                </a>

                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Email</p>
                    <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 shrink-0">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Address</p>
                    <p className="text-white font-semibold">
                      {COMPANY.address}
                      <br />
                      {COMPANY.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 shrink-0">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-xs mb-0.5">Hours</p>
                    <p className="text-white font-semibold">Mon–Fri: 7am–6pm</p>
                    <p className="text-white">Sat: 8am–2pm</p>
                    <p className="text-amber-400 text-sm font-medium">Emergency: 24/7</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <h3 className="text-amber-400 font-bold mb-2">⚡ Electrical Emergency?</h3>
                <p className="text-slate-300 text-sm mb-3">
                  Burning smell, sparking outlet, or complete power loss? Don&apos;t wait —
                  call us immediately.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Now — 24/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
