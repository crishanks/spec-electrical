import { ShieldCheck, Clock, Star, Award } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = { ShieldCheck, Clock, Star, Award };

const DEFAULT_ITEMS = [
  { icon: "ShieldCheck", label: "Licensed & Insured", detail: "All work fully bonded" },
  { icon: "Award", label: "20+ Years Experience", detail: "In business since 2003" },
  { icon: "Star", label: "5-Star Rated", detail: "Google & HomeAdvisor" },
  { icon: "Clock", label: "24/7 Emergency", detail: "Always available" },
];

interface TrustItem {
  icon: string;
  label: string;
  detail: string;
}

interface TrustBarProps {
  items?: TrustItem[];
}

export default function TrustBar({ items = DEFAULT_ITEMS }: TrustBarProps) {
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon, label, detail }) => {
            const Icon = ICON_MAP[icon] ?? ShieldCheck;
            return (
              <div key={label} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </span>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{label}</p>
                  <p className="text-slate-400 text-xs">{detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
