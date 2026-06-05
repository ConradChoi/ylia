"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

/* Footer 섹션별 외부 링크 href (번역 불필요) */
const FOOTER_HREFS: string[][] = [
  ["https://seepn.me", "https://shapetest.app"],
  ["https://bara-news.kr", "https://bara-edu.kr"],
  ["https://truthnme.com"],
  ["#about", "#contact"],
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="max-w-[1440px] mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 mb-10">
          {/* 브랜드 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md overflow-hidden bg-white flex items-center justify-center p-1">
                <Image
                  src="/image/ylia.png"
                  alt="YLIA 로고"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold text-white/90">YLIA</span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed max-w-[200px]">
              {t.footer.tagline}
            </p>
          </div>

          {/* 링크 */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.footer.sections.map((section, si) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-white/80 mb-3 uppercase tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((label, li) => {
                    const href = FOOTER_HREFS[si]?.[li] ?? "#";
                    const isExternal = href.startsWith("http");
                    return (
                      <li key={label}>
                        <Link
                          href={href}
                          className="text-xs text-white/50 hover:text-white/80 transition-colors"
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* 하단 바 */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/30">{t.footer.copyright}</p>
          <p className="text-xs text-white/30">info@ylia.io</p>
        </div>
      </div>
    </footer>
  );
}
