import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MINISTRIES } from "@/lib/data";

export function generateStaticParams() {
  return MINISTRIES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ministry = MINISTRIES.find((m) => m.slug === slug);
  if (!ministry) return {};
  return {
    title: `${ministry.title} | Palace Church`,
    description: ministry.summary,
  };
}

export default async function MinistryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ministry = MINISTRIES.find((m) => m.slug === slug);
  if (!ministry) notFound();

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Ministry
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">{ministry.title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-text-secondary">
            {ministry.summary}
          </p>
        </section>

        {ministry.hasVideo && (
          <section className="mx-auto max-w-4xl px-6 pb-16">
            <div className="overflow-hidden rounded-2xl border border-surface-border">
              <video
                className="aspect-video w-full bg-black"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/worship-dummy.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mt-3 text-center text-xs text-text-muted">
              Dummy video — replace with your own worship reel.
            </p>
          </section>
        )}

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <div className="rounded-2xl border border-surface-border bg-surface p-8">
            <p className="text-text-secondary leading-relaxed">
              {ministry.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-surface-border bg-surface-elevated p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  Meets
                </p>
                <p className="mt-1 text-sm font-medium">
                  {ministry.meetingInfo}
                </p>
              </div>
              {ministry.leader && (
                <div className="rounded-xl border border-surface-border bg-surface-elevated p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Led By
                  </p>
                  <p className="mt-1 text-sm font-medium">{ministry.leader}</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="mailto:church@palacechurch.boston"
                className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
              >
                Get Involved
              </Link>
            </div>
          </div>

          <Link
            href="/#about"
            className="mt-8 block text-center text-sm font-medium text-primary-light hover:underline"
          >
            &larr; Back to Home
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
