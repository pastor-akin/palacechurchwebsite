"use client";

import { useState } from "react";
import Link from "next/link";

// Mirrors app/salvation.tsx from the Palace Church app (the "Just Accepted
// Jesus" / "Just Saved" form). Submissions are NOT wired to a backend yet —
// this only simulates a successful submit locally.
//
// TODO(supabase): once the website's Supabase backend is connected, replace
// handleSubmit's local setSubmitted(true) with the same flow the app uses —
// notify the pastor, create/append to a chat session, and send the
// notify-direct-chat email via a Supabase Edge Function. See
// app/salvation.tsx in the-palace-app-v2 for the reference implementation.

const COURSE_URL =
  "https://www.palacechurch.boston/challenge-page/55a93a56-b015-42a2-92b0-08fae86da3f7";

export default function SalvationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = name.trim() && email.trim() && !submitting;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }
    setError("");
    setSubmitting(true);

    // TODO(supabase): send this to the pastor/backend once Supabase is wired up.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
          <span className="text-4xl">🎉</span>
        </div>
        <h1 className="text-2xl font-bold sm:text-3xl">
          Welcome to the Family!
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-text-secondary">
          Pastor Akin has been notified and will be in touch soon. Your next
          step is to complete the Christian 101 course below.
        </p>
        <a
          href={COURSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-dark"
        >
          Start Christian 101 Course
        </a>
        <Link
          href="/"
          className="mt-6 block text-sm font-medium text-text-muted hover:text-foreground"
        >
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      {/* Banner */}
      <div className="mb-8 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
        <p className="mb-2 text-4xl">🎉</p>
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          Welcome to the Family!
        </h1>
        <p className="leading-relaxed text-text-secondary">
          We are so excited for you! Fill out the form below so we can
          celebrate with you and help you take your next steps in faith.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Info card */}
        <div className="rounded-2xl border border-surface-border bg-surface p-6">
          <h2 className="mb-4 font-bold">Tell Us About You</h2>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-text-secondary">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full rounded-xl border border-surface-border bg-surface-elevated px-4 py-3 text-sm outline-none placeholder:text-text-muted focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-text-secondary">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full rounded-xl border border-surface-border bg-surface-elevated px-4 py-3 text-sm outline-none placeholder:text-text-muted focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-text-secondary">
                Phone <span className="text-text-muted">(optional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(617) 000-0000"
                className="w-full rounded-xl border border-surface-border bg-surface-elevated px-4 py-3 text-sm outline-none placeholder:text-text-muted focus:border-primary"
              />
            </div>
          </div>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
        </div>

        {/* Next step */}
        <div className="rounded-2xl border border-surface-border bg-surface p-6">
          <h2 className="mb-2 font-bold">Your Next Step</h2>
          <p className="mb-4 text-sm leading-relaxed text-text-secondary">
            Complete the Christian 101 + Baptism course on our website. It
            will help ground you in your new faith.
          </p>
          <a
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-primary/20"
          >
            Open Christian 101 Course
          </a>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:bg-primary-dark disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Let the Pastor Know"}
        </button>
      </form>
    </div>
  );
}
