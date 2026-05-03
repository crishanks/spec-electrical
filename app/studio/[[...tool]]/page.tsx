import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const studioUrl = projectId
    ? `https://${projectId}.sanity.studio`
    : null;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <p className="text-amber-400 text-4xl mb-6">⚡</p>
        <h1 className="text-white text-3xl font-extrabold mb-4">Content Studio</h1>

        {studioUrl ? (
          <>
            <p className="text-slate-400 mb-6">
              Your Sanity Studio is ready. Click below to open the visual editor.
            </p>
            <a
              href={studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-colors"
            >
              Open Sanity Studio <ExternalLink className="w-4 h-4" />
            </a>
          </>
        ) : (
          <>
            <p className="text-slate-400 mb-4">
              To enable the content management studio, add your Sanity project credentials to{" "}
              <code className="text-amber-400 bg-slate-800 px-1.5 py-0.5 rounded">.env.local</code>.
            </p>
            <p className="text-slate-500 text-sm mb-6">
              See <code className="text-slate-400">.env.local.example</code> for setup instructions.
            </p>
          </>
        )}

        <div className="mt-8">
          <Link href="/" className="text-slate-500 hover:text-amber-400 text-sm transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
