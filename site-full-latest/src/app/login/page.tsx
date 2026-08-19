import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Log In | Palace Church",
  description: "Member login for Palace Church.",
};

export default function LoginPage() {
  return (
    <>
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-surface p-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-light">
            Member Login
          </p>
          <h1 className="mb-3 text-2xl font-bold">Coming Soon</h1>
          <p className="mb-6 text-sm text-text-secondary">
            Member login is a placeholder for now — this is where members
            will sign in to manage their account, giving, and groups.
          </p>

          <div className="space-y-3 text-left">
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
              Log In (Coming Soon)
            </button>
          </div>

          <Link
            href="/"
            className="mt-6 inline-block text-sm font-medium text-primary-light hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
