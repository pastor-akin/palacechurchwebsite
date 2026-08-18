import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palace Church | Stoughton, MA",
  description:
    "Palace Church is a community in Stoughton, MA passionate about worship, prayer, and connection. Join us Sundays at 10:00 AM.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
