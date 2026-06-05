"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/lib/i18n";
import type { Language, Translation } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ko",
  setLang: () => {},
  t: translations["ko"],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ko");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
