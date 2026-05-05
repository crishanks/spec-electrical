import { FileText, Award, ShieldCheck } from "lucide-react";
import { WHY_US } from "@/lib/data";

const ICON_MAP: Record<string, React.ElementType> = { FileText, Award, ShieldCheck };

interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyUsProps {
  eyebrow?: string;
  heading?: string;
  items?: WhyUsItem[];
}

export default function WhyUs({
  eyebrow = "Why Apex Electric",
  heading = "The Apex Difference",
  items = WHY_US,
}: WhyUsProps) {
  return (
    <section className="bg-slate-900 py-16 sm:py-24 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map(({ icon, title, description }) => {
            const Icon = ICON_MAP[icon] ?? ShieldCheck;
            return (
              <div key={title} className="flex flex-col items-start gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 shrink-0">
                  <Icon className="w-6 h-6 text-slate-950" />
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-400 leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
