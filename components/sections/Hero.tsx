import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 circuit-bg">
      {/* Amber glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(245,158,11,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Licensed &amp; Insured · 24/7 Emergency Service
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Expert Electrical{" "}
            <span className="text-amber-400">Services</span>{" "}
            You Can Trust
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
            Licensed, insured, and available 24/7. Apex Electric delivers safe,
            reliable electrical work for homes and businesses across the Greater
            Springfield area.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-colors shadow-lg shadow-amber-500/20"
            >
              Get a Free Estimate
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              {COMPANY.phone}
            </a>
          </div>

          <p className="mt-6 text-slate-500 text-sm">
            Serving Springfield, Chatham, Sherman, Rochester &amp; surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
}
