import Link from "next/link";
import Image from "next/image";
import { Phone, ChevronRight } from "lucide-react";
import { COMPANY } from "@/lib/data";

interface HeroProps {
  badgeText?: string;
  headline?: string;
  accentWord?: string;
  subheading?: string;
  imageUrl?: string;
  serviceAreas?: string[];
}

export default function Hero({
  badgeText = "Licensed & Insured · 24/7 Emergency Service",
  headline = "Expert Electrical Services You Can Trust",
  accentWord = "Services",
  subheading = `Licensed, insured, and available 24/7. ${COMPANY.name} delivers safe, reliable electrical work for homes and businesses across the Greater ${COMPANY.serviceAreas[0]} area.`,
  imageUrl,
  serviceAreas,
}: HeroProps) {
  const accentIdx = accentWord ? headline.indexOf(accentWord) : -1;
  const before = accentIdx > -1 ? headline.slice(0, accentIdx) : headline;
  const after = accentIdx > -1 ? headline.slice(accentIdx + accentWord.length) : "";
  const hasAccent = accentIdx > -1;

  const areasText =
    serviceAreas && serviceAreas.length > 0
      ? `Serving ${serviceAreas.join(", ")} & surrounding areas`
      : `Serving ${COMPANY.serviceAreas.join(", ")} & surrounding areas`;

  return (
    <section className="relative overflow-hidden bg-slate-950 circuit-bg">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
      )}

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
            {badgeText}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            {hasAccent ? (
              <>
                {before}
                <span className="text-amber-400">{accentWord}</span>
                {after}
              </>
            ) : (
              headline
            )}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
            {subheading}
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

          <p className="mt-6 text-slate-500 text-sm">{areasText}</p>
        </div>
      </div>
    </section>
  );
}
