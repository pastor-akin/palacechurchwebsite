import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SalvationForm from "@/components/SalvationForm";

export const metadata: Metadata = {
  title: "Just Accepted Jesus | Palace Church",
  description:
    "Just accepted Jesus? Let Palace Church know so we can celebrate with you and help you take your next steps in faith.",
};

export default function SalvationPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <SalvationForm />
      </main>
      <Footer />
    </>
  );
}
