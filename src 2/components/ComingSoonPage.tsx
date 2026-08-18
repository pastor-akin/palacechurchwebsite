import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComingSoonPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-md rounded-2xl border border-surface-border bg-surface p-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-light">
            {eyebrow}
          </p>
          <h1 className="mb-3 text-2xl font-bold">{title}</h1>
          <p className="mb-6 text-sm text-text-secondary">{description}</p>
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
