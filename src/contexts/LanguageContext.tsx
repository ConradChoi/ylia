"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { translations } from "@/lib/i18n";
import { track } from "@/lib/analytics";
import type { Language, Translation } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Language;
  setLang: (l: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations["en"],
});

const STORAGE_KEY = "ylia-lang";

function isLanguage(v: unknown): v is Language {
  return typeof v === "string" && v in translations;
}

/* 선택 언어 저장소: localStorage를 쓰고, 막혀 있으면 메모리로 대체 */
let memoryLang: Language | null = null;
const listeners = new Set<() => void>();

function readLang(): Language | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {}
  return memoryLang;
}

function writeLang(l: Language) {
  memoryLang = l;
  try {
    localStorage.setItem(STORAGE_KEY, l);
  } catch {}
  listeners.forEach((notify) => notify());
}

function subscribe(notify: () => void) {
  listeners.add(notify);
  window.addEventListener("storage", notify);
  return () => {
    listeners.delete(notify);
    window.removeEventListener("storage", notify);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  /* 첫 방문(및 서버 렌더)은 영어, 이후엔 마지막으로 선택한 언어 */
  const lang = useSyncExternalStore(subscribe, readLang, () => null) ?? "en";

  const setLang = (l: Language) => {
    writeLang(l);
    track("language_change", { language: l });
  };

  useEffect(() => {
    const { title, description, ogLocale } = translations[lang].meta;
    document.documentElement.lang = lang;
    document.title = title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', ogLocale);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
