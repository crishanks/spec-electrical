import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { getGalleryItems } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our completed electrical projects — panel upgrades, EV charger installations, lighting, and more. Serving Springfield, IL.",
};

const PLACEHOLDER_PROJECTS = [
  { id: "1", title: "200A Panel Upgrade", category: "panel", color: "from-amber-900/40 to-slate-900" },
  { id: "2", title: "Level 2 EV Charger Install", category: "ev", color: "from-blue-900/40 to-slate-900" },
  { id: "3", title: "Recessed Lighting Retrofit", category: "lighting", color: "from-yellow-900/40 to-slate-900" },
  { id: "4", title: "Commercial Office Wiring", category: "commercial", color: "from-emerald-900/40 to-slate-900" },
  { id: "5", title: "Whole-Home Rewire", category: "residential", color: "from-purple-900/40 to-slate-900" },
  { id: "6", title: "Landscape Lighting System", category: "lighting", color: "from-teal-900/40 to-slate-900" },
];

const CATEGORY_LABELS: Record<string, string> = {
  panel: "Panel Upgrade",
  ev: "EV Charger",
  lighting: "Lighting",
  commercial: "Commercial",
  residential: "Residential",
};

export default async function GalleryPage() {
  const sanityItems = await getGalleryItems();
  const hasSanityItems = sanityItems && sanityItems.length > 0;

  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-slate-500 text-sm mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-300">Gallery</span>
          </nav>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Project Gallery
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl text-lg">
            A look at recent electrical projects completed by our team across the Greater
            Springfield area.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {hasSanityItems ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sanityItems.map((item: { _id: string; title: string; category: string; description?: string }) => (
                <div
                  key={item._id}
                  className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-600 text-sm">
                    Project Photo
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-400 font-medium mb-2">
                      {CATEGORY_LABELS[item.category] ?? item.category}
                    </span>
                    <h3 className="text-white font-bold">{item.title}</h3>
                    {item.description && (
                      <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLACEHOLDER_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 group"
                >
                  <div
                    className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <span className="text-slate-500 text-sm">Project Photo</span>
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-400 font-medium mb-2">
                      {CATEGORY_LABELS[project.category]}
                    </span>
                    <h3 className="text-white font-bold">{project.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Greater Springfield Area
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-center text-slate-500 text-sm mt-12">
            Want to see your project here?{" "}
            <Link href="/contact" className="text-amber-400 hover:text-amber-300 transition-colors">
              Contact us for a free estimate.
            </Link>
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
