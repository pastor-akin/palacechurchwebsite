import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GIVE_AMOUNTS, GIVE_FUNDS, GIVING_PLATFORMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Give | Palace Church",
  description: "Support Palace Church's ministry through online giving.",
};

export default function GivePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Give
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Generosity changes everything
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-text-secondary">
            Thank you for partnering with Palace Church. Your giving supports
            our ministry, missions, and community here in Stoughton and
            beyond.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="rounded-2xl border border-surface-border bg-surface p-8">
            <h2 className="mb-4 text-lg font-semibold">Choose a Fund</h2>
            <div className="mb-8 grid gap-3 sm:grid-cols-2">
              {GIVE_FUNDS.map((f) => (
                <div
                  key={f.id}
                  className="rounded-xl border border-surface-border bg-surface-elevated p-4"
                >
                  <p className="font-medium">{f.label}</p>
                  <p className="mt-1 text-xs text-text-secondary">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-lg font-semibold">Suggested Amounts</h2>
            <div className="mb-2 flex flex-wrap gap-3">
              {GIVE_AMOUNTS.map((amount) => (
                <span
                  key={amount}
                  className="rounded-full border border-surface-border px-5 py-2 text-sm font-medium"
                >
                  ${amount}
                </span>
              ))}
            </div>
            <p className="text-xs text-text-muted">
              Online checkout coming soon — for now, give using one of the
              options below.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-24">
          <h2 className="mb-6 text-center text-lg font-semibold">
            Ways to Give
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {GIVING_PLATFORMS.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-surface-border bg-surface p-6 transition hover:border-primary-light"
              >
                <p className="mb-1 text-lg font-semibold">{p.name}</p>
                <p className="mb-3 text-sm text-text-secondary">
                  {p.description}
                </p>
                <p className="text-sm font-medium text-primary-light">
                  {p.handle}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
