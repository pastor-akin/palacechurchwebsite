import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Courses | Palace Church",
  description:
    "Explore Palace Church's courses — Fasting 101, Serving at Palace Church, Christian 101 + Baptism, and Child Safe Class. Sign up for a free account to start a course.",
};

// TODO(supabase): once the website has real accounts, replace the
// "Sign Up to Access" link below with a real auth check — signed-in
// visitors should see a "Start Course" button that opens `course.link`
// directly (in a new tab), while guests keep seeing the sign-up prompt.

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-light">
            Resources
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">Courses</h1>
          <p className="mx-auto mt-5 max-w-xl text-text-secondary">
            Grow deeper in your faith and get equipped to serve, right from
            your phone or computer. Browse what's available below — you'll
            need a free Palace Church account to actually start a course.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-surface-border bg-surface p-5">
            <p className="text-sm text-text-secondary">
              Already have an account?
            </p>
            <Link
              href="/login"
              className="rounded-full border border-surface-border bg-background px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
            >
              Log In
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="grid gap-5 sm:grid-cols-2">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="flex flex-col rounded-2xl border border-surface-border bg-surface p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                    style={{ backgroundColor: course.color }}
                  >
                    {course.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3.5 w-3.5"
                    >
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Sign-in required
                  </span>
                </div>

                <h2 className="mb-2 text-lg font-bold">{course.title}</h2>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-text-secondary">
                  {course.description}
                </p>

                <div className="flex flex-col gap-2 sm:flex-row">
                  {course.modules && course.modules.length > 0 ? (
                    <Link
                      href={`/resources/${course.id}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-surface-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-elevated"
                    >
                      Preview Course
                    </Link>
                  ) : null}
                  <Link
                    href={`/signup?course=${course.id}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    Sign Up to Access
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-text-muted">
            More courses are added regularly — check back soon.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
