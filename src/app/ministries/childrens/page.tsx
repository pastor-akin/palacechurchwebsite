import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CHURCH_INFO, SERVICE_TIMES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Palace Kidz | Palace Church",
  description:
    "Palace Kidz is a safe, fun, and age-appropriate environment where kids from birth through 5th grade can know and love Jesus every week.",
};

const WHY_CARDS = [
  {
    title: "Bible Made Fun",
    description:
      "Age-appropriate Bible lessons, games, and worship that help kids actually enjoy learning about Jesus — not just sit through it.",
  },
  {
    title: "Safety First",
    description:
      "A secure check-in system with matching parent/child tags, background-checked volunteers, and clear pickup verification every week.",
  },
  {
    title: "A Place To Belong",
    description:
      "A warm, welcoming space where kids build real friendships and grow in faith alongside other kids their age.",
  },
];

const CHECK_IN_STEPS = [
  {
    step: "1",
    title: "Check In",
    description:
      "Stop by the Palace Kidz check-in table when you arrive. You and your child each get a matching security tag.",
  },
  {
    step: "2",
    title: "Enjoy the Service",
    description:
      "Head to service and worship worry-free — your child is being cared for by our trained, background-checked volunteers.",
  },
  {
    step: "3",
    title: "Pickup",
    description:
      "After service, bring your matching tag to your child's room for a quick, secure pickup.",
  },
];

const AGE_GROUPS = [
  {
    label: "Babies & Toddlers",
    range: "6 weeks – 2 years",
    image: "/images/hero-stage-2.jpg",
    description:
      "Babies and toddlers experience God's love through play, simple Bible stories, songs, and lots of cuddles from our nursery volunteers.",
  },
  {
    label: "Preschool",
    range: "3 years – Kindergarten",
    image: "/images/hero-stage-3.jpg",
    description:
      "Preschoolers discover the wonder of God through interactive Bible stories, worship, movement, and hands-on activities.",
  },
  {
    label: "Elementary",
    range: "1st – 5th Grade",
    image: "/images/church-community.jpg",
    description:
      "Elementary kids dig deeper into Scripture through Bible lessons, group discussion, worship, and games that make faith practical.",
  },
];

const NEXT_STEPS = [
  {
    title: "Child Dedication",
    description:
      "Publicly commit to raising your child in faith, surrounded by your Palace Church family.",
  },
  {
    title: "Salvation",
    description:
      "Help your child take their first step in a relationship with Jesus.",
  },
  {
    title: "Baptism",
    description:
      "Celebrate your child's decision to follow Jesus through baptism.",
  },
  {
    title: "Kidz Worship Playlist",
    description:
      "A collection of kid-friendly worship songs your family can enjoy together at home.",
  },
];

const READING_LIST = [
  "God's Story For Me — ages 0-3",
  "The Beginner's Bible — ages 3-6",
  "The Adventure Bible — ages 7-11",
  "The Action Bible — ages 9+",
];

const FAQS = [
  {
    q: "What will my child learn?",
    a: "Each week kids move through age-appropriate Bible lessons, worship, and activities built around the same theme the adults are hearing in service, so your whole family can talk about it together at home.",
  },
  {
    q: "How does check-in work?",
    a: "You'll check your child in at the Palace Kidz table before service. You and your child receive a matching security tag — you'll need that tag to pick them up afterward.",
  },
  {
    q: "Is Palace Kidz safe?",
    a: "Yes. All volunteers go through a background check and training, we use a matching-tag pickup system, and every classroom is staffed with more than one adult at all times.",
  },
  {
    q: "What ages do you serve?",
    a: "Palace Kidz welcomes kids from 6 weeks old through 5th grade, split into age-appropriate rooms (Babies & Toddlers, Preschool, and Elementary).",
  },
  {
    q: "Do I need to stay with my child?",
    a: "No — Palace Kidz is designed so you can enjoy the service knowing your child is cared for. Nursery-age parents are always welcome to stay if they'd prefer.",
  },
  {
    q: "Can my child get baptized or dedicated?",
    a: "Yes! Reach out to our Palace Kidz team and we'll walk you through what Child Dedication or Baptism looks like for your family.",
  },
  {
    q: "How do I get my family more connected?",
    a: `Come say hello at the Palace Kidz table on a Sunday, or reach out any time at ${CHURCH_INFO.email}.`,
  },
  {
    q: "Can I volunteer?",
    a: "We'd love to have you. Palace Kidz is entirely run by volunteers, and we're always looking for people who love kids and love Jesus.",
  },
];

export default function ChildrensMinistryPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/images/hero-stage.jpg"
              alt="Palace Kidz — placeholder image, replace with your own photo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-12 sm:pb-16">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
                NextGen &middot; Palace Kidz
              </p>
              <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-5xl">
                Welcome to Palace Kidz
              </h1>
              <p className="mt-3 max-w-xl text-white/80">
                See what God can do through your kids — a safe, fun place for
                them to know and love Jesus every week.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#groups"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                >
                  Find a Service Time
                </Link>
                <Link
                  href="mailto:church@palacechurch.boston"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Join the Kidz Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value proposition */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Our Commitment
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            A safe, welcoming environment for your kids to grow in faith
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-text-secondary">
            From infancy through 5th grade, Palace Kidz partners with you to
            help your child build a real relationship with Jesus — through
            creative Bible lessons, exciting worship, and engaging weekly
            activities.
          </p>
        </section>

        {/* Why Palace Kidz */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Why Palace Kidz
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {WHY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-surface-border bg-background p-6"
                >
                  <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Check-in process */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            How Check-In Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {CHECK_IN_STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mb-2 font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Age groups */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Age Groups
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {AGE_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="overflow-hidden rounded-2xl border border-surface-border bg-background"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={group.image}
                      alt={`${group.label} — placeholder image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold">{group.label}</h3>
                    <p className="mb-3 text-xs font-medium text-text-muted">
                      {group.range}
                    </p>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {group.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            Next Steps For Your Family
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {NEXT_STEPS.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-surface-border bg-surface p-5"
              >
                <h3 className="mb-2 font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Family Resources
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-surface-border bg-background p-6">
                <h3 className="mb-2 font-bold">Palace Kidz Online</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  Worship, games, and Bible stories your kids can enjoy
                  between Sundays.
                </p>
                <Link
                  href="/sermons"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Visit channel &rarr;
                </Link>
              </div>
              <div className="rounded-2xl border border-surface-border bg-background p-6">
                <h3 className="mb-2 font-bold">Parent Blog</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  Weekly recaps of what your kids are learning, so you can
                  keep the conversation going at home.
                </p>
                <Link
                  href="/sermons"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Read the blog &rarr;
                </Link>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-surface-border bg-background p-6">
              <h3 className="mb-3 font-bold">Recommended Bibles By Age</h3>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                {READING_LIST.map((item) => (
                  <li key={item}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Volunteer */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Serve in Palace Kidz
          </h2>
          <p className="mx-auto mb-6 max-w-xl leading-relaxed text-text-secondary">
            Palace Kidz runs entirely on volunteers who love kids and love
            Jesus. If that's you, we'd love to have you on the team.
          </p>
          <Link
            href="mailto:church@palacechurch.boston"
            className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Join the Kidz Team
          </Link>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-surface-border bg-background p-5"
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

        {/* Service times footer strip */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
            Palace Kidz meets during every service
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {SERVICE_TIMES.map((s) => (
              <div key={s.day}>
                <p className="text-xs text-text-muted">{s.type}</p>
                <p className="font-semibold">
                  {s.day} &middot; {s.time}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/#ministries"
            className="mt-8 inline-block text-sm font-medium text-primary-light hover:underline"
          >
            &larr; Back to Ministries
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
