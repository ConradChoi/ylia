"use client";

import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { PRIVACY_POLICY } from "@/lib/privacy";
import { cn } from "@/lib/utils";

/* 한국어 화면은 국문, 그 외 언어는 영문 방침을 보여준다 */
export default function PrivacyContent() {
  const { lang, setLang } = useLang();
  const p = lang === "ko" ? PRIVACY_POLICY.ko : PRIVACY_POLICY.en;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-sm text-[var(--color-blue)] hover:underline">
          ← {p.back}
        </Link>
        <div className="flex gap-2">
          {(["ko", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={cn(
                "px-3 py-1.5 text-xs rounded-md border transition-colors",
                (lang === "ko" ? "ko" : "en") === l
                  ? "border-[var(--color-blue)] text-[var(--color-blue)] font-medium"
                  : "border-[var(--color-border)] text-[var(--color-gray-500)]"
              )}
            >
              {l === "ko" ? "한국어" : "English"}
            </button>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-[var(--color-text)] mb-4">{p.title}</h1>
      <p className="text-sm text-[var(--color-gray-500)] leading-relaxed mb-2">{p.intro}</p>
      <p className="text-xs text-[var(--color-gray-400)] mb-10">{p.effective}</p>

      <div className="space-y-8">
        {p.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-base font-semibold text-[var(--color-text)] mb-2">{section.title}</h2>
            <ul className="space-y-1.5">
              {section.body.map((line) => (
                <li key={line} className="text-sm text-[var(--color-gray-500)] leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
