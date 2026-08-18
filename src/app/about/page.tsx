"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CHURCH_INFO, SERVICE_TIMES } from "@/lib/data";

const SECTIONS = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "church-experiences", label: "Church Experiences" },
  { id: "leadership", label: "Leadership" },
  { id: "what-to-expect", label: "What To Expect" },
  { id: "nextgen", label: "NextGen Ministries" },
  { id: "young-adults", label: "Young Adults" },
  { id: "outreach", label: "Outreach" },
];

const LEADERSHIP = [
  { name: "Pastor Akin", role: "Lead Pastor" },
  { name: "Pastor Eugene", role: "Pastor" },
  { name: "Pastor Ruth", role: "Pastor" },
];

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
];

export default function AboutPage() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            About
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            About Palace Church
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-text-secondary">
            Everything you need to know about who we are, what to expect, and
            how to get connected.
          </p>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 lg:grid-cols-[1fr_240px]">
          <div className="space-y-20">
            <section id="who-we-are" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Who We Are
              </h2>
              <p className="leading-relaxed text-text-secondary">
                Palace Church is a community in {CHURCH_INFO.location}{" "}
                passionate about worship, prayer, and connection. We believe
                church should be a place where anyone can belong, grow, and
                discover what God has for their life — no matter where
                they're starting from.
              </p>
              <p className="mt-4 leading-relaxed text-text-secondary">
                We meet at {CHURCH_INFO.address}. You can reach us at{" "}
                {CHURCH_INFO.phone} or {CHURCH_INFO.email}.
              </p>
            </section>

            <section id="church-experiences" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Church Experiences
              </h2>
              <p className="mb-6 leading-relaxed text-text-secondary">
                However you connect, there's a place for you here.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.title}
                    className="rounded-2xl border border-surface-border bg-surface p-5"
                  >
                    <h3 className="mb-2 font-semibold">{exp.title}</h3>
                    <p className="text-sm text-text-secondary">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-6 rounded-2xl border border-surface-border bg-surface-elevated p-5">
                {SERVICE_TIMES.map((s) => (
                  <div key={s.day}>
                    <p className="text-xs text-text-muted">{s.type}</p>
                    <p className="font-semibold">
                      {s.day} &middot; {s.time}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="leadership" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Leadership
              </h2>
              <p className="mb-6 leading-relaxed text-text-secondary">
                Meet the pastors leading Palace Church.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {LEADERSHIP.map((leader) => (
                  <div
                    key={leader.name}
                    className="rounded-2xl border border-surface-border bg-surface p-5 text-center"
                  >
                    <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-surface-elevated" />
                    <p className="font-semibold">{leader.name}</p>
                    <p className="text-sm text-text-muted">{leader.role}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="what-to-expect" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                What To Expect
              </h2>
              <p className="mb-6 leading-relaxed text-text-secondary">
                Come as you are. Expect passionate worship, practical
                teaching from Scripture, and a warm welcome from our team the
                moment you arrive.
              </p>

              <div className="overflow-hidden rounded-2xl border border-surface-border bg-black">
                <div className="relative aspect-video">
                  <Image
                    src="/images/hero-worship.jpg"
                    alt="Latest sermon placeholder"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-xl font-bold text-white">
                      SERMON TITLE
                    </p>
                    <p className="text-sm text-white/70">
                      Placeholder — replace with your latest sermon
                    </p>
                  </div>
                  <div className="absolute bottom-5 right-5">
                    <Link
                      href="/sermons"
                      className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-white/90"
                    >
                      View Latest Sermon
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/sermons"
                className="mt-4 inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary"
              >
                Watch more sermons online
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </section>

            <section id="nextgen" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                NextGen Ministries
              </h2>
              <p className="mb-4 leading-relaxed text-text-secondary">
                Our NextGen ministries give kids and students a safe,
                fun, age-appropriate environment to know and love Jesus every
                week.
              </p>
              <Link
                href="/ministries/childrens"
                className="font-semibold text-primary hover:underline"
              >
                Learn more about Children's Ministry &rarr;
              </Link>
            </section>

            <section id="young-adults" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Young Adults
              </h2>
              <p className="mb-4 leading-relaxed text-text-secondary">
                A community for anyone in their late teens through thirties
                chasing purpose, navigating life transitions, and growing in
                faith together.
              </p>
              <Link
                href="/ministries/young-adults"
                className="font-semibold text-primary hover:underline"
              >
                Learn more about Young Adults &rarr;
              </Link>
            </section>

            <section id="outreach" className="scroll-mt-28">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                Outreach
              </h2>
              <p className="mb-4 leading-relaxed text-text-secondary">
                Outreach is how Palace Church puts love into action — serving
                our neighbors in Stoughton through food drives, community
                events, and local partnerships.
              </p>
              <Link
                href="/ministries/outreach"
                className="font-semibold text-primary hover:underline"
              >
                Learn more about Outreach &rarr;
              </Link>
            </section>
          </div>

          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 border-l border-surface-border pl-5">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`block border-l-2 py-1.5 pl-4 -ml-[21px] text-sm transition ${
                    active === s.id
                      ? "border-primary font-semibold text-foreground"
                      : "border-transparent text-text-secondary hover:text-foreground"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
