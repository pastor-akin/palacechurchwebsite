import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#groups", label: "Groups" },
  { href: "/#events", label: "Events" },
  { href: "/#serve", label: "Serve" },
  { href: "/give", label: "Give" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Palace Church logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-semibold tracking-tight">
            Palace Church
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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
          href="/give"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
        >
          Give
        </Link>
      </div>
    </header>
  );
}
