import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Study Guides | Palace Church",
  description: "Sermon study guides from Palace Church.",
};

export default function StudyGuidesPage() {
  return (
    <ComingSoonPage
      eyebrow="Discover"
      title="Study Guides — Coming Soon"
      description="This page is a placeholder for now — this is where you'll find study guides to go deeper on past sermons."
    />
  );
}
