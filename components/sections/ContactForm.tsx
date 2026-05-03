"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/data";

const inputCls =
  "w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-sm";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setStatus(res.ok ? "success" : "error");
      } catch {
        setStatus("error");
      }
    } else {
      // Demo mode — simulate success
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 p-8 rounded-2xl bg-slate-900 border border-amber-500/30">
        <CheckCircle className="w-12 h-12 text-amber-400" />
        <h2 className="text-2xl font-bold text-white">Message Received!</h2>
        <p className="text-slate-300">
          Thanks for reaching out. We&apos;ll be in touch within 1 hour.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-amber-400 hover:text-amber-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5">Name *</label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-1.5">Phone *</label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputCls}
        />
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium mb-1.5">Service Needed</label>
        <select name="service" value={form.service} onChange={handleChange} className={inputCls}>
          <option value="">Select a service…</option>
          <option>Residential Electrical</option>
          <option>Commercial Electrical</option>
          <option>Panel Upgrade</option>
          <option>EV Charger Installation</option>
          <option>Emergency Service</option>
          <option>Lighting Installation</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium mb-1.5">
          Tell us about your project
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Describe what you need done…"
          className={inputCls}
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please call us at {COMPANY.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-slate-950 font-bold text-base transition-colors"
      >
        {status === "submitting" ? "Sending…" : "Send My Request"}
      </button>
      <p className="text-slate-500 text-xs">
        We never share your information. By submitting, you agree to be contacted about your project.
      </p>
    </form>
  );
}
