"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/i18n";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const NAV_ITEMS = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-10 h-[72px] flex items-center justify-between">
        {/* ── 로고 ── */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 flex items-center justify-center">
            <Image
              src="/image/ylia.png"
              alt="YLIA 로고"
              width={20}
              height={20}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-base font-bold text-[var(--color-navy)]">YLIA</span>
        </Link>

        {/* ── Desktop 네비게이션 ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-gray-500)] hover:text-[var(--color-text)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── 우측: 언어 선택 + CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* 언어 셀렉터 */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-3 h-9 text-sm text-[var(--color-text)] border border-[var(--color-border)] rounded-md hover:border-[var(--color-gray-300)] transition-colors">
              {LANGUAGES.find((l) => l.code === lang)?.label}
              <ChevronDown size={14} className="text-[var(--color-gray-400)]" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-[var(--color-border)] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "w-full px-3 py-2 text-sm text-left hover:bg-[var(--color-bg-light)] transition-colors",
                    lang === l.code && "text-[var(--color-blue)] font-medium"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="px-4 h-9 text-sm font-semibold text-white bg-[var(--color-blue)] rounded-md hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            {t.cta.inquiry}
          </Link>
        </div>

        {/* ── Mobile 햄버거 ── */}
        <button
          className="md:hidden p-2 text-[var(--color-text)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile 메뉴 ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-5 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-[var(--color-gray-600)] hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
          {/* Mobile 언어 선택 */}
          <div className="flex gap-2 pt-1 flex-wrap">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "px-3 py-1.5 text-xs rounded-md border transition-colors",
                  lang === l.code
                    ? "border-[var(--color-blue)] text-[var(--color-blue)] font-medium"
                    : "border-[var(--color-border)] text-[var(--color-gray-500)]"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-2.5 text-sm font-semibold text-center text-white bg-[var(--color-blue)] rounded-md"
            >
              {t.cta.inquiry}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
