import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? "text-amber-400 fill-amber-400" : "text-slate-600"}`}
        />
      ))}
    </div>
  );
}

interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  quote: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  eyebrow?: string;
  heading?: string;
  description?: string;
}

export default function Testimonials({
  testimonials = TESTIMONIALS,
  eyebrow = "Customer Reviews",
  heading = "What Our Customers Say",
  description = "Don't take our word for it — hear from Springfield-area homeowners and businesses.",
}: TestimonialsProps) {
  return (
    <section className="bg-slate-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{heading}</h2>
          {description && <p className="mt-4 text-slate-400">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-4 p-6 rounded-xl bg-slate-900 border border-slate-800"
            >
              <Stars count={t.rating} />
              <blockquote className="text-slate-300 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm shrink-0"
                  aria-hidden
                >
                  {t.customerName.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.customerName}</p>
                  <p className="text-slate-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
