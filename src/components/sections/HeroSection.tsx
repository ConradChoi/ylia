"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative min-h-[640px] flex items-center justify-center overflow-hidden bg-[var(--color-navy)]"
    >
      {/* 배경 이미지 */}
      <Image
        src="/image/hero-bg.jpg"
        alt="Hero 배경"
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none"
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 하단 그라데이션 오버레이 */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[var(--color-navy-mid)] opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 py-20 text-center space-y-6">
        {/* 헤드라인 */}
        <h1 className="text-4xl md:text-[56px] font-bold text-white leading-tight md:leading-[72px]">
          {t.hero.headline1}<br />
          {t.hero.headline2}
        </h1>

        {/* 회사명 */}
        <p className="text-2xl md:text-3xl font-bold text-[var(--color-blue)]">
          {t.hero.company}
        </p>

        {/* 서브카피 */}
        <p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-xl mx-auto whitespace-pre-line">
          {t.hero.sub}
        </p>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            href="#services"
            className="px-6 py-3 text-sm font-semibold text-white bg-[var(--color-blue)] rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t.hero.cta_services}
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-white border border-white/40 rounded-lg hover:bg-white/10 transition-colors"
          >
            {t.hero.cta_contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
