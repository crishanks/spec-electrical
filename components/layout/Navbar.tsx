"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { COMPANY } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-amber-500">
              <Zap className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
            </span>
            <span className="font-bold text-lg text-white tracking-tight">
              {COMPANY.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={COMPANY.phoneHref}
              className="text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-800 py-3 pb-4 space-y-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === href
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-800 mt-2 flex flex-col gap-2">
              <a
                href={COMPANY.phoneHref}
                className="block px-3 py-2 text-sm font-semibold text-amber-400"
              >
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md bg-amber-500 text-slate-950 text-sm font-bold text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
