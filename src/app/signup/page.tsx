import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sign Up | Palace Church",
  description: "Create a free Palace Church account to access our courses.",
};

export default function SignupPage() {
  return (
    <>
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-surface p-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-light">
            Create Account
          </p>
          <h1 className="mb-3 text-2xl font-bold">Coming Soon</h1>
          <p className="mb-6 text-sm text-text-secondary">
            Account sign-up is a placeholder for now — this is where you'll
            create a free account to access our courses, save your progress,
            and manage your giving and groups.
          </p>

          <div className="space-y-3 text-left">
            <label className="block text-xs font-medium text-text-muted">
              Full Name
              <input
                type="text"
                disabled
                placeholder="Your full name"
                className="mt-1 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-text-muted"
              />
            </label>
            <label className="block text-xs font-medium text-text-muted">
              Email
              <input
                type="email"
                disabled
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-text-muted"
              />
            </label>
            <label className="block text-xs font-medium text-text-muted">
              Password
              <input
                type="password"
                disabled
                placeholder="••••••••"
                className="mt-1 w-full rounded-lg border border-surface-border bg-surface-elevated px-3 py-2 text-sm text-text-muted"
              />
            </label>
            <button
              disabled
              className="w-full cursor-not-allowed rounded-full bg-primary/40 px-5 py-2 text-sm font-semibold text-white"
            >
              Sign Up (Coming Soon)
            </button>
          </div>

          <p className="mt-6 text-xs text-text-muted">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary-light hover:underline"
            >
              Log in
            </Link>
          </p>

          <Link
            href="/resources"
            className="mt-4 inline-block text-sm font-medium text-primary-light hover:underline"
          >
            &larr; Back to Courses
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
