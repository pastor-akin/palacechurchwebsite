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
  const [progress, setProgress] = useState(0);
  const [onDark, setOnDark] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const contentRef = useRef<HTMLDivElement | null>(null);
  const darkZoneRef = useRef<HTMLDivElement | null>(null);

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

    const darkObserver = new IntersectionObserver(
      ([entry]) => setOnDark(entry.isIntersecting),
      { rootMargin: "-96px 0px -60% 0px" }
    );
    if (darkZoneRef.current) darkObserver.observe(darkZoneRef.current);

    const onScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const scrolled = window.innerHeight * 0.3 - rect.top;
      const pct = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      darkObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="flex-1">
        <div
          ref={contentRef}
          className="mx-auto grid max-w-6xl gap-2 px-6 py-6 lg:grid-cols-[1fr_240px] lg:gap-8 lg:py-10"
        >
          <div className="order-2 space-y-20 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-[16/8] w-full">
                <Image
                  src="/images/hero-stage.jpg"
                  alt="Palace Church worship gathering (placeholder — replace with your own photo)"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <section id="who-we-are" className="scroll-mt-28">
              <div ref={darkZoneRef}>
              <div className="relative rounded-3xl bg-[#111113] px-6 py-14 text-white sm:px-12 sm:py-16 lg:-mr-[272px] lg:rounded-r-none lg:pr-[300px]">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  See What God Can Do Through You
                </h2>
                <p className="mt-3 text-lg text-white/70">
                  We are here to help you deepen your faith and discover your
                  purpose.
                </p>
                <p className="mt-6 leading-relaxed text-white/60">
                  Since our founding, we&apos;ve witnessed people begin a
                  relationship with Christ and grow in their faith right here
                  in {CHURCH_INFO.location}. From meaningful worship to
                  relatable teaching, you&apos;ll experience hope and
                  strengthen your faith as you discover who God has made you
                  to be.
                </p>

                <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-stage.jpg"
                    alt="Palace Church worship gathering (placeholder — replace with your own photo)"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="relative mt-10 rounded-3xl bg-[#111113] px-6 py-14 text-center text-white sm:px-12 sm:py-20 lg:-mr-[272px] lg:rounded-r-none lg:pr-[300px]">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/50">
                  Who We Are
                </p>
                <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
                  We exist so that people far from God will be raised to life
                  in Christ.
                </h2>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto my-10 h-10 w-10 text-white/40"
                >
                  <path d="M12 2v20" />
                  <path d="M8 6h8" />
                </svg>

                <div className="grid gap-4 text-left sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-6 text-center">
                    <h3 className="mb-3 text-xl font-bold">Our Beliefs</h3>
                    <p className="mb-6 text-sm leading-relaxed text-white/60">
                      What do we believe about God, faith, and the Bible?
                      Check out how God&apos;s Word guides our beliefs.
                    </p>
                    <Link
                      href="/beliefs"
                      className="inline-block w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      Learn more
                    </Link>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-6 text-center">
                    <h3 className="mb-3 text-xl font-bold">Our Values</h3>
                    <p className="mb-6 text-sm leading-relaxed text-white/60">
                      Learn more about the values that keep us focused on
                      what truly matters — reaching people with the gospel.
                    </p>
                    <Link
                      href="/beliefs"
                      className="inline-block w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
              </div>

              <div className="mt-10">
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
              </div>
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

          <aside className="relative z-10 order-1 border-b border-surface-border pb-4 lg:order-2 lg:border-b-0 lg:pb-0">
            <div className="sticky top-16 flex items-start justify-end gap-4 py-4 lg:top-24 lg:py-0">
              <nav className="space-y-4 pt-1 text-right">
                <p
                  className={`text-base font-bold transition ${
                    onDark ? "text-white" : "text-foreground"
                  }`}
                >
                  About
                </p>
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block text-sm leading-snug transition ${
                      onDark
                        ? s.id === active
                          ? "font-semibold text-white"
                          : "text-white/60 hover:text-white"
                        : active === s.id
                        ? "font-semibold text-foreground"
                        : "text-text-secondary hover:text-foreground"
                    }`}
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
              <div
                className={`relative h-[420px] w-[3px] flex-shrink-0 rounded-full transition-colors ${
                  onDark ? "bg-white/20" : "bg-surface-border"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 w-full rounded-full transition-all ${
                    onDark ? "bg-white" : "bg-foreground"
                  }`}
                  style={{ height: `${Math.max(6, progress * 100)}%` }}
                />
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
