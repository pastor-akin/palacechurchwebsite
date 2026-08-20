import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sermons | Palace Church",
  description: "Watch sermons from Palace Church.",
};

export default function SermonsPage() {
  return (
    <>
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-md rounded-2xl border border-surface-border bg-surface p-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-light">
            Sermons
          </p>
          <h1 className="mb-3 text-2xl font-bold">Coming Soon</h1>
          <p className="mb-6 text-sm text-text-secondary">
            Our sermon library is a placeholder for now — this is where
            you'll be able to watch and listen to past messages.
          </p>
          <Link
            href="/"
            className="inline-block text-sm font-medium text-primary-light hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
