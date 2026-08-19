import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APP_LINKS, CHURCH_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Deliverance Ministry | Palace Church",
  description:
    "Palace Church's Deliverance Ministry, led by Pastor Akin, helps people find freedom in Christ through prayer and biblical counsel. Requests begin with a readiness form in the Palace Church app.",
};

const STEPS = [
  {
    step: "1",
    title: "Download The App",
    description:
      "Get the Palace Church app on your phone — it's where every deliverance request starts.",
  },
  {
    step: "2",
    title: "Complete The Readiness Form",
    description:
      "Fill out our Deliverance Readiness Form in the app. It helps our team understand your situation and pray with wisdom before you meet.",
  },
  {
    step: "3",
    title: "We'll Follow Up",
    description:
      "Pastor Akin and our team will review your form and reach out to schedule a time to meet and pray with you.",
  },
];

const FAQS = [
  {
    q: "What is deliverance ministry?",
    a: "Deliverance ministry is a prayer-focused ministry that helps people find freedom from spiritual, emotional, and generational strongholds through Scripture, prayer, and biblical counsel.",
  },
  {
    q: "Why do I need to fill out a form first?",
    a: "Because this ministry is deeply personal, the readiness form helps Pastor Akin and our team understand your situation ahead of time, so the time we spend together in prayer is focused and prepared.",
  },
  {
    q: "Is this confidential?",
    a: "Yes. Whatever you share with our team is treated with care and confidentiality.",
  },
  {
    q: "Do I need to attend Palace Church to request this?",
    a: "No — this ministry is open to anyone seeking prayer and freedom in Christ, whether or not you currently attend Palace Church.",
  },
  {
    q: "How long does it take to hear back after I submit the form?",
    a: "Our team reviews requests regularly and will reach out to schedule a time to connect. If it's urgent, please also reach out to us directly.",
  },
];

export default function DeliveranceMinistryPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/images/hero-worship.jpg"
              alt="Palace Deliverance Ministry — placeholder image, replace with your own photo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end px-6 pb-10 sm:px-12 sm:pb-16">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
                Ministry &middot; Deliverance
              </p>
              <h1 className="max-w-2xl text-3xl font-bold text-white sm:text-5xl">
                Deliverance Ministry
              </h1>
              <p className="mt-3 max-w-xl text-white/80">
                Find freedom in Christ. Led by Pastor Akin, our Deliverance
                Ministry walks with you toward healing through prayer and
                biblical truth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={APP_LINKS.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M16.365 1.43c0 1.14-.437 2.086-1.31 2.836-.955.81-2.098 1.28-3.23 1.19a3.86 3.86 0 0 1 1.023-2.767c.9-.978 2.396-1.523 3.517-1.259zM20.66 17.34c-.363.85-.79 1.638-1.284 2.363-.68 1.01-1.238 1.71-1.667 2.098-.665.646-1.377.978-2.138.996-.548 0-1.208-.157-1.976-.475-.77-.317-1.478-.474-2.126-.474-.68 0-1.408.157-2.187.474-.78.318-1.408.484-1.888.5-.73.032-1.46-.309-2.19-.996-.464-.42-1.047-1.143-1.75-2.17-.753-1.096-1.372-2.367-1.856-3.813-.518-1.564-.778-3.078-.778-4.542 0-1.674.362-3.117 1.087-4.328a6.362 6.362 0 0 1 2.29-2.32 6.06 6.06 0 0 1 3.096-.87c.578 0 1.336.178 2.28.532.943.354 1.548.532 1.815.532.198 0 .87-.207 2.01-.62 1.078-.384 1.988-.543 2.735-.48 2.023.163 3.544.96 4.556 2.39-1.81 1.096-2.706 2.632-2.688 4.605.017 1.537.573 2.816 1.663 3.83.494.469 1.045.833 1.657 1.09-.133.386-.274.756-.424 1.113z" />
                  </svg>
                  Download for iOS
                </a>
                <a
                  href={APP_LINKS.googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M3.6 2.15C3.24 2.5 3 3.03 3 3.72v16.56c0 .69.24 1.22.6 1.57l.1.08L13.7 12 3.7 2.07l-.1.08zM16.9 15.2l-2.9-2.9V9.7l2.9-2.9 3.9 2.25c1.17.67 1.17 1.77 0 2.44l-3.9 2.26zM4.7 20.65 13.3 12 4.7 3.35C4.4 3.6 4.2 3.98 4.2 4.5v15c0 .52.2.9.5 1.15z" />
                  </svg>
                  Download for Android
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is it */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            What It Is
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Freedom is available to you
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-text-secondary">
            Our Deliverance Ministry, led by Pastor Akin, walks with people
            seeking freedom from spiritual, emotional, and generational
            strongholds through prayer and biblical counsel. Because of the
            personal nature of this ministry, every request begins with a
            readiness form in the Palace Church app, so our team can prepare
            to meet with you well.
          </p>
        </section>

        {/* How it works */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
              How It Works
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-center text-text-secondary">
              Every request for deliverance ministry starts the same way —
              through the Palace Church app.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {STEPS.map((s) => (
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
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={APP_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                Download for iOS
              </a>
              <a
                href={APP_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-surface-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
              >
                Download for Android
              </a>
            </div>
          </div>
        </section>

        {/* Leader */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-surface-elevated" />
          <h2 className="text-xl font-bold">Pastor Akin</h2>
          <p className="mt-1 text-sm text-text-muted">
            Leads Deliverance Ministry
          </p>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-text-secondary">
            Pastor Akin personally oversees every deliverance request, walking
            alongside you in prayer as you seek freedom and healing in
            Christ.
          </p>
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

        {/* Contact fallback */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm text-text-secondary">
            Questions before you download the app? Reach out to us at{" "}
            <a
              href={`mailto:${CHURCH_INFO.email}`}
              className="font-semibold text-primary hover:underline"
            >
              {CHURCH_INFO.email}
            </a>
          </p>
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
