import type { Metadata } from "next";
import ComingSoonPage from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Baptism | Palace Church",
  description: "Celebrate new beginnings through baptism at Palace Church.",
};

export default function BaptismPage() {
  return (
    <ComingSoonPage
      eyebrow="Baptism"
      title="Coming Soon"
      description="This page is a placeholder for now — this is where you'll be able to learn about and sign up for baptism at Palace Church."
    />
  );
}
