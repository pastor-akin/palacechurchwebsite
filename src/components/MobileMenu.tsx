"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CHURCH_INFO } from "@/lib/data";

type Item = {
  label: string;
  subtitle: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
};

const icon = (path: React.ReactNode) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 flex-shrink-0"
  >
    {path}
  </svg>
);

const EXTERNAL_ICON = icon(
  <>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </>
);

const GET_INVOLVED: Item[] = [
  {
    label: "Visit Palace Church",
    subtitle: "Find us in Stoughton, MA",
    href: "/about#who-we-are",
    icon: icon(
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5" />
      </>
    ),
  },
  {
    label: "Live Streams",
    subtitle: "Join us from anywhere",
    href: "/sermons",
    icon: icon(
      <>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="m10 9 5 3-5 3V9Z" />
      </>
    ),
  },
  {
    label: "Groups",
    subtitle: "Relationships to grow your faith",
    href: "/#groups",
    icon: icon(
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    label: "Giving",
    subtitle: "Generosity in action",
    href: "/give",
    icon: icon(
      <>
        <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7c-1.5-3-6-3-6 0 1 2 6 0 6 0Zm0 0c1.5-3 6-3 6 0-1 2-6 0-6 0Z" />
      </>
    ),
  },
  {
    label: "Volunteer",
    subtitle: "Serve at Palace Church",
    href: "/#serve",
    icon: icon(
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
      </>
    ),
  },
  {
    label: "Events",
    subtitle: "Meaningful experiences",
    href: "/#events",
    icon: icon(
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    label: "Salvation",
    subtitle: "Receive God's grace",
    href: "/salvation",
    icon: icon(
      <>
        <line x1="12" y1="3" x2="12" y2="21" />
        <line x1="6" y1="8" x2="18" y2="8" />
      </>
    ),
  },
  {
    label: "Baptism",
    subtitle: "Celebrate new beginnings",
    href: "/baptism",
    icon: icon(
      <>
        <path d="M2 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
        <path d="M2 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      </>
    ),
  },
  {
    label: "Need Prayer?",
    subtitle: "Support through faith",
    href: "/prayer",
    icon: icon(
      <>
        <path d="M7 3v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3" />
        <path d="M17 3v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2V3" />
        <path d="M11 11v10" />
        <path d="M13 11v10" />
      </>
    ),
  },
];

const DISCOVER: Item[] = [
  {
    label: "Sermons",
    subtitle: "",
    href: "/sermons",
    icon: icon(
      <path d="M19 21 12 17l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" />
    ),
  },
  {
    label: "Study Guides",
    subtitle: "",
    href: "/study-guides",
    icon: icon(
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
  },
  {
    label: "Store",
    subtitle: "",
    href: "/give",
    icon: icon(
      <>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
    external: true,
  },
];

const MINISTRIES: Item[] = [
  {
    label: "Outreach",
    subtitle: "Volunteer in your community",
    href: "/ministries/outreach",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
  {
    label: "NextGen",
    subtitle: "",
    href: "/ministries/childrens",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
  {
    label: "Young Adults",
    subtitle: "",
    href: "/ministries/young-adults",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
  {
    label: "Worship",
    subtitle: "",
    href: "/ministries/worship",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
  {
    label: "Prayer",
    subtitle: "",
    href: "/ministries/prayer",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
  {
    label: "Deliverance",
    subtitle: "",
    href: "/ministries/deliverance",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
  {
    label: "Families",
    subtitle: "",
    href: "/ministries/families",
    icon: icon(<circle cx="12" cy="12" r="9" />),
  },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: `https://instagram.com/${CHURCH_INFO.instagram.replace("@", "")}`,
    icon: icon(
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: icon(
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: icon(
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" />
      </>
    ),
  },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  const pathname = usePathname();
  return (
    <div className="border-b border-surface-border py-5">
      <h3 className="mb-2 px-5 text-xl font-bold">{title}</h3>
      <div>
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3 transition ${
                isActive ? "bg-surface-elevated" : "hover:bg-surface"
              }`}
            >
              <span className="text-text-secondary">{item.icon}</span>
              <span className="flex-1">
                <span className="block text-sm font-medium">
                  {item.label}
                </span>
                {item.subtitle && (
                  <span className="block text-xs text-text-muted">
                    {item.subtitle}
                  </span>
                )}
              </span>
              {item.external && (
                <span className="text-text-muted">{EXTERNAL_ICON}</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-y-0 left-0 w-full max-w-sm overflow-y-auto bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-surface-border px-5 py-4">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary hover:bg-surface"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <Section title="Get Involved" items={GET_INVOLVED} />
        <Section title="Discover" items={DISCOVER} />
        <Section title="Ministries" items={MINISTRIES} />

        <div className="border-b border-surface-border px-5 py-4 text-sm">
          <Link href="/about" className="block py-2 hover:text-primary">
            About Palace Church
          </Link>
          <Link href="/beliefs" className="block py-2 hover:text-primary">
            Beliefs &amp; Values
          </Link>
        </div>

        <div className="border-b border-surface-border px-5 py-6">
          <h3 className="mb-2 text-xl font-bold">MyPalace</h3>
          <p className="mb-1 text-sm text-text-secondary">
            Looking to view your group details or giving history?
          </p>
          <p className="mb-4 text-sm text-text-secondary">
            MyPalace is our church&apos;s portal for those who give or lead a
            group.
          </p>
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 rounded-full bg-surface-elevated px-5 py-3 text-sm font-semibold transition hover:bg-surface-border"
          >
            Access MyPalace
            {EXTERNAL_ICON}
          </Link>
        </div>

        <div className="px-5 py-6 text-sm text-text-secondary">
          <p>{CHURCH_INFO.address}</p>
          <p className="mt-1">{CHURCH_INFO.phone}</p>
          <p className="mt-4 text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {CHURCH_INFO.name}. All rights
            reserved.
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated text-text-secondary transition hover:text-foreground"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
