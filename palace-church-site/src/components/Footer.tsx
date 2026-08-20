import Image from "next/image";
import Link from "next/link";
import { CHURCH_INFO, SERVICE_TIMES } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="visit" className="border-t border-surface-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Palace Church logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="text-lg font-semibold">{CHURCH_INFO.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-text-secondary">
            {CHURCH_INFO.address}
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            {CHURCH_INFO.phone} &middot; {CHURCH_INFO.email}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
            Service Times
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            {SERVICE_TIMES.map((s) => (
              <li key={s.day}>
                <span className="font-medium text-foreground">{s.day}</span>{" "}
                &middot; {s.time} &middot; {s.type}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-text-muted">
            Connect
          </h3>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>
              <a
                href={`https://instagram.com/${CHURCH_INFO.instagram.replace("@", "")}`}
                className="hover:text-foreground"
              >
                {CHURCH_INFO.instagram}
              </a>
            </li>
            <li>
              <Link href="/give" className="hover:text-foreground">
                Give Online
              </Link>
            </li>
            <li>
              <a href={`mailto:${CHURCH_INFO.email}`} className="hover:text-foreground">
                {CHURCH_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-surface-border px-6 py-6 text-center text-xs text-text-muted">
        &copy; {new Date().getFullYear()} {CHURCH_INFO.name}. All rights reserved.
      </div>
    </footer>
  );
}
