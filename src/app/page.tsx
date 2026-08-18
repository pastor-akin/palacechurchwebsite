import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ConnectCarousel from "@/components/ConnectCarousel";
import { GROUPS, MINISTRIES, SERVICE_TIMES } from "@/lib/data";

const EXPERIENCES = [
  {
    title: "In Person",
    description:
      "Join us at our Stoughton campus every Sunday at 10:00 AM. Come as you are.",
  },
  {
    title: "Livestream",
    description:
      "Can't make it in person? Watch our service live wherever you are.",
  },
  {
    title: "Bible Study",
    description:
      "Grow deeper in the Word every Wednesday at 7:00 PM, in person or online.",
  },
  {
    title: "Groups",
    description:
      "Find community throughout the week in a small group near you.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <HeroSection />

        {/* Service times strip */}
        <section className="border-y border-surface-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 py-6 text-center">
            {SERVICE_TIMES.map((s) => (
              <div key={s.day}>
                <p className="text-sm text-text-muted">{s.type}</p>
                <p className="text-lg font-semibold">
                  {s.day} &middot; {s.time}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ConnectCarousel />

        {/* Ways to experience */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-3 text-center text-3xl font-bold sm:text-4xl">
            Ways to Experience Palace Church
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-text-secondary">
            However you connect, there's a place for you here.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.title}
                className="rounded-2xl border border-surface-border bg-surface p-6 transition hover:border-primary-light"
              >
                <h3 className="mb-2 text-lg font-semibold">{exp.title}</h3>
                <p className="text-sm text-text-secondary">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community image break */}
        <section className="relative isolate overflow-hidden py-24">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/church-community.jpg"
              alt="Palace Church community"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              You were made for community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Life is better together. Find a group, serve on a team, or just
              come say hello — we'd love to meet you.
            </p>
          </div>
        </section>

        {/* Groups */}
        <section id="groups" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-3 text-center text-3xl font-bold sm:text-4xl">
            Find a Group
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-center text-text-secondary">
            Small groups meeting throughout the week to grow in faith and
            friendship.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {GROUPS.map((g) => (
              <div
                key={g.id}
                className="rounded-2xl border border-surface-border bg-surface-elevated p-6"
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary-light">
                  {g.category}
                </p>
                <h3 className="mb-2 text-lg font-semibold">{g.name}</h3>
                <p className="mb-4 text-sm text-text-secondary">
                  {g.description}
                </p>
                <p className="text-xs text-text-muted">
                  {g.day} &middot; {g.time} &middot; {g.location}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  Led by {g.leader}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ministries */}
        <section className="border-t border-surface-border bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-14 text-center text-3xl font-bold sm:text-4xl">
              Ministries
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MINISTRIES.map((m) => (
                <Link
                  key={m.slug}
                  href={`/ministries/${m.slug}`}
                  className="rounded-2xl border border-surface-border bg-background p-6 transition hover:border-primary-light"
                >
                  <h3 className="mb-2 text-lg font-semibold">{m.title}</h3>
                  <p className="text-sm text-text-secondary">{m.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Get involved */}
        <section id="serve" className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Get Involved</h2>
          <p className="mx-auto mb-10 max-w-2xl text-text-secondary">
            Volunteer on a team, lead a group, or explore ways to serve at
            Palace Church.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:church@palacechurch.boston"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Volunteer
            </Link>
            <Link
              href="/give"
              className="rounded-full border border-surface-border px-8 py-3 font-semibold transition hover:border-primary-light"
            >
              Give
            </Link>
          </div>
        </section>

        {/* Events placeholder */}
        <section id="events" className="border-t border-surface-border py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="text-text-secondary">
              No events posted yet — check back soon, or add your first event
              here.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
