import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Footer from "@/components/layout/Footer";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | YLIA Co., Ltd.",
  description: "Privacy Policy of YLIA Co., Ltd. (개인정보처리방침)",
  alternates: { canonical: "https://ylia.io/privacy" },
};

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
      <Footer />
    </LanguageProvider>
  );
}
