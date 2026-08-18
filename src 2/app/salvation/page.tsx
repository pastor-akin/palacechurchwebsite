import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Salvation | Palace Church",
  description: "Learn about receiving God's grace at Palace Church.",
};

export default function SalvationPage() {
  return (
    <ComingSoonPage
      eyebrow="Salvation"
      title="Coming Soon"
      description="This page is a placeholder for now — this is where we'll share how to receive God's grace and start a relationship with Jesus."
    />
  );
}
