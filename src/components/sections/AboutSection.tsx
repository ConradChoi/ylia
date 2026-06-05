"use client";

import { Link2, Sparkles, Shield, TrendingUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";

const ICON_LIST = [Link2, Sparkles, Shield, TrendingUp];

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 bg-white border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-bold text-[var(--color-text)] mb-4">
            {t.about.headline}
          </h2>
          <p className="text-base text-[var(--color-gray-500)] leading-relaxed max-w-xl mx-auto whitespace-pre-line">
            {t.about.sub}
          </p>
        </div>

        {/* 가치 카드 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {t.about.values.map((item, i) => {
            const Icon = ICON_LIST[i] ?? Link2;
            return (
              <article
                key={item.title}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-gray-100)] flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[var(--color-gray-500)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--color-gray-500)] leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
