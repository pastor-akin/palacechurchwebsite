import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/give", label: "Give" },
  { href: "/#groups", label: "Groups" },
  { href: "/#serve", label: "Serve" },
  { href: "/#events", label: "Events" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <button
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center text-text-secondary md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="h-5 w-5"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Palace Church logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">
            Palace Church
          </span>
        </Link>

        <div className="hidden flex-1 items-center rounded-full border border-surface-border px-4 py-2 text-sm text-text-muted lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-4 w-4 flex-shrink-0"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none placeholder:text-text-muted"
          />
        </div>

        <nav className="ml-auto hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/login"
          aria-label="Log In"
          title="Log In"
          className="ml-auto flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-surface-border text-text-secondary transition hover:border-primary-light hover:text-foreground md:ml-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
