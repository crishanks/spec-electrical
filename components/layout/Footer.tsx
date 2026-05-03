import Link from "next/link";
import { Zap, Phone, Mail, MapPin, Globe, Share2 } from "lucide-react";
import { COMPANY } from "@/lib/data";

const SERVICES_LINKS = [
  { href: "/services#residential-electrical", label: "Residential Electrical" },
  { href: "/services#panel-upgrades", label: "Panel Upgrades" },
  { href: "/services#ev-charger-installation", label: "EV Charger Installation" },
  { href: "/services#emergency-service", label: "Emergency Service" },
  { href: "/services#lighting-installation", label: "Lighting Installation" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-amber-500">
                <Zap className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
              </span>
              <span className="font-bold text-lg text-white">{COMPANY.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">{COMPANY.tagline}</p>
            <p className="mt-3 text-slate-500 text-xs">{COMPANY.license}</p>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 rounded-md bg-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-md bg-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
                { href: "/services", label: "All Services" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    {COMPANY.address}
                    <br />
                    {COMPANY.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Licensed &amp; Insured · Serving Greater Springfield Since {COMPANY.founded}</p>
        </div>
      </div>
    </footer>
  );
}
