import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COURSES } from "@/lib/data";

export function generateStaticParams() {
  return COURSES.filter((c) => c.modules && c.modules.length > 0).map(
    (c) => ({ id: c.id })
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);
  if (!course) return {};
  return {
    title: `${course.title} | Palace Church`,
    description: course.description,
  };
}

// TODO(supabase): once accounts are real, this page should check whether the
// visitor is signed in and, if so, track their progress through each step and
// unlock certification on completion. For now every visitor sees the full
// course preview, and the sign-up CTA is what unlocks progress tracking.

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id);

  if (!course || !course.modules || course.modules.length === 0) {
    notFound();
  }

  const totalSteps = course.modules.reduce(
    (sum, m) => sum + m.steps.length,
    0
  );
  let stepCounter = 0;

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="border-b border-surface-border bg-surface">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: course.color }}
            >
              {course.badge}
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl">{course.title}</h1>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              {course.description}
            </p>
            <div className="mt-5 flex items-center justify-center gap-4 text-xs font-medium text-text-muted">
              {course.duration ? (
                <span className="flex items-center gap-1">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  {course.duration}
                </span>
              ) : null}
              <span className="flex items-center gap-1">
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
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                {totalSteps} steps
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-14">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-surface-border bg-surface p-5">
            <p className="text-sm text-text-secondary">
              Reading along? Sign up to track your progress
              {course.title === "Serving at Palace Church"
                ? " and get certified"
                : ""}
              .
            </p>
            <Link
              href={`/signup?course=${course.id}`}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Sign Up
            </Link>
          </div>

          <div className="space-y-10">
            {course.modules.map((module, mi) => (
              <div key={mi}>
                <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary-light">
                  Module {mi + 1} · {module.title}
                </h2>

                <div className="space-y-6">
                  {module.steps.map((step, si) => {
                    stepCounter += 1;
                    return (
                      <div
                        key={si}
                        className="rounded-2xl border border-surface-border bg-surface p-6"
                      >
                        <div className="mb-3 flex items-center gap-3">
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                            style={{ backgroundColor: course.color }}
                          >
                            {stepCounter}
                          </span>
                          <h3 className="text-base font-bold">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {step.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-surface-border bg-surface p-8 text-center">
            <h2 className="mb-2 text-lg font-bold">
              Ready to go further?
            </h2>
            <p className="mx-auto mb-6 max-w-md text-sm text-text-secondary">
              Sign up for a free Palace Church account to track your progress
              through this course
              {course.title === "Serving at Palace Church"
                ? " and become a Certified Palace Church Volunteer"
                : ""}
              .
            </p>
            <Link
              href={`/signup?course=${course.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Sign Up to Access
            </Link>
          </div>

          <p className="mt-8 text-center text-xs text-text-muted">
            <Link
              href="/resources"
              className="font-medium text-primary-light hover:underline"
            >
              &larr; Back to Courses
            </Link>
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
