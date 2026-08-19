import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Beliefs & Values | Palace Church",
  description: "What Palace Church believes.",
};

export default function BeliefsPage() {
  return (
    <ComingSoonPage
      eyebrow="Beliefs & Values"
      title="Coming Soon"
      description="This page is a placeholder for now — this is where we'll share Palace Church's statement of faith and core values."
    />
  );
}
