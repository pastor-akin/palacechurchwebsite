import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Need Prayer? | Palace Church",
  description: "Request prayer support from Palace Church.",
};

export default function PrayerPage() {
  return (
    <ComingSoonPage
      eyebrow="Need Prayer?"
      title="Coming Soon"
      description="This page is a placeholder for now — this is where you'll be able to submit a prayer request to our prayer team."
    />
  );
}
