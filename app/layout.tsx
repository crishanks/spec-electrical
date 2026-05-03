import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";
import { COMPANY } from "@/lib/data";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://apexelectric.vercel.app"),
  title: {
    default: `${COMPANY.name} — Licensed Electricians in Springfield, IL`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Apex Electric provides residential and commercial electrical services in Springfield, IL. Licensed, insured, 24/7 emergency service. Get a free estimate today.",
  keywords: [
    "electrician Springfield IL",
    "residential electrician",
    "commercial electrician",
    "panel upgrade Springfield",
    "EV charger installation",
    "emergency electrician",
    "licensed electrician Illinois",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
