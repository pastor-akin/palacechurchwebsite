import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CHURCH_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Young Adults | Palace Church",
  description:
    "Palace Young Adults is a community for anyone in their late teens through thirties chasing purpose, navigating life transitions, and growing in faith together.",
};

const BENEFITS = [
  {
    title: "Find Authentic Relationships",
    description:
      "Build real friendships with people in the same season of life — navigating school, careers, and everything in between.",
  },
  {
    title: "Navigate Life With Jesus At The Center",
    description:
      "Walk through the ups and downs of your twenties and thirties with a community that keeps Christ at the center of it all.",
  },
  {
    title: "Build Your Faith Through Real Conversations",
    description:
      "Ask honest questions and grow deeper in your faith through open, judgment-free conversation.",
  },
];

const GATHERINGS = [
  {
    title: "Young Adult Nights",
    description:
      "Young Adult Nights bring us together for live worship, practical teaching, and real conversation in small groups. Each night offers authentic community, spiritual growth, and a chance to build lasting friendships in a relaxed, welcoming space.",
    image: "/images/hero-stage-2.jpg",
  },
  {
    title: "Young Adult Gatherings",
    description:
      "A few times a year, we come together as one Young Adults community to connect, worship, and hear a powerful message in person. Follow us on Instagram to stay up to date on the next one.",
    image: "/images/hero-stage-3.jpg",
  },
];

const FAQS = [
  {
    q: "Who can come to Young Adults?",
    a: "Anyone in their late teens through thirties — whether you're in school, just starting your career, or somewhere in between. If you're looking for community, you're welcome here.",
  },
  {
    q: "Are there small groups or Bible studies?",
    a: "Yes. Alongside our weekly gathering, we have smaller groups that meet throughout the week to dig deeper into Scripture and build closer friendships.",
  },
  {
    q: "Do I have to come every week?",
    a: "Not at all — come whenever you can. We'd just love to meet you the first time you're able to join us.",
  },
  {
    q: "How can I get involved or serve?",
    a: `We'd love that. Reach out to us at ${CHURCH_INFO.email} and we'll connect you with our Young Adults team.`,
  },
];

export default function YoungAdultsMinistryPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/images/hero-stage.jpg"
              alt="Palace Young Adults — placeholder image, replace with your own photo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-12 sm:pb-16">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
                NextGen &middot; Young Adults
              </p>
              <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-5xl">
                Palace Young Adults
              </h1>
              <p className="mt-3 max-w-xl text-white/80">
                Our desire is to see the young adults in our church find
                their God-given purpose.
              </p>
              <div className="mt-6">
                <Link
                  href="/#groups"
                  className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Find a YA Group
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Welcome
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            There&apos;s a place for you at Palace Young Adults
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-text-secondary">
            Whether you&apos;re in college, just starting your career, or
            simply looking for community, Palace Young Adults has a place
            for you. This is where young adults build real connections, grow
            in their faith, and walk alongside each other — discovering
            their purpose in Christ.
          </p>
        </section>

        {/* Meeting info */}
        <section className="bg-surface py-14">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              We Can&apos;t Wait To Meet You
            </h2>
            <p className="text-text-secondary">
              We meet every Wednesday night at{" "}
              <span className="font-semibold text-foreground">
                {CHURCH_INFO.location}
              </span>
              , online and in person.
            </p>
            <div className="mt-6 inline-flex flex-wrap justify-center gap-6 rounded-2xl border border-surface-border bg-background px-6 py-4">
              <div>
                <p className="text-xs text-text-muted">Gathering</p>
                <p className="font-semibold">
                  Wednesdays &middot; 8:00 PM
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted">Where</p>
                <p className="font-semibold">{CHURCH_INFO.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-3">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-surface-border bg-surface p-6"
              >
                <h3 className="mb-2 text-lg font-bold">{b.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/#groups"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Find a YA Group
            </Link>
          </div>
        </section>

        {/* Community support */}
        <section className="bg-surface py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Expect to find friends who support &amp; encourage your walk
                with Jesus
              </h2>
              <p className="leading-relaxed text-text-secondary">
                The twenties and thirties come with big questions and bigger
                transitions — new cities, new jobs, new relationships. Palace
                Young Adults exists so you don&apos;t have to navigate any of
                it alone. Come find a group of people who will pray with
                you, celebrate with you, and point you back to Jesus.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/church-community.jpg"
                alt="Palace Young Adults community — placeholder image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gatherings */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-16">
            {GATHERINGS.map((g, i) => (
              <div
                key={g.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={g.image}
                    alt={`${g.title} — placeholder image`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                    {g.title}
                  </h2>
                  <p className="leading-relaxed text-text-secondary">
                    {g.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social */}
        <section className="bg-surface py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Stay Connected With Palace Young Adults
            </h2>
            <p className="mb-6 leading-relaxed text-text-secondary">
              Follow along for updates on our next gathering, worship nights,
              and everything happening in Young Adults.
            </p>
            <a
              href={`https://instagram.com/${CHURCH_INFO.instagram.replace(
                "@",
                ""
              )}`}
              className="inline-block rounded-full bg-foreground px-8 py-3 font-semibold text-background transition hover:opacity-90"
            >
              Follow on Instagram
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-surface-border bg-surface p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {faq.q}
                    <span className="ml-4 flex-shrink-0 text-text-muted transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
          <Link
            href="/#ministries"
            className="text-sm font-medium text-primary-light hover:underline"
          >
            &larr; Back to Ministries
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
