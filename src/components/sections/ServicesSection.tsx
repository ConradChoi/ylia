"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { SERVICE_DIVISIONS } from "@/lib/constants";
import { useLang } from "@/contexts/LanguageContext";
import type { ServiceDivision } from "@/types";

const COLOR_MAP: Record<ServiceDivision["color"], {
  badge: string; text: string; border: string; btn: string;
}> = {
  blue: {
    badge: "bg-[var(--color-blue-light)] text-[var(--color-blue)]",
    text: "text-[var(--color-blue)]",
    border: "border-[var(--color-blue)]",
    btn: "border-[var(--color-blue)] text-[var(--color-blue)] hover:bg-[var(--color-blue-light)]",
  },
  orange: {
    badge: "bg-[var(--color-orange-light)] text-[var(--color-orange)]",
    text: "text-[var(--color-orange)]",
    border: "border-[var(--color-orange)]",
    btn: "border-[var(--color-orange)] text-[var(--color-orange)] hover:bg-[var(--color-orange-light)]",
  },
  indigo: {
    badge: "bg-[var(--color-indigo-light)] text-[var(--color-indigo)]",
    text: "text-[var(--color-indigo)]",
    border: "border-[var(--color-indigo)]",
    btn: "border-[var(--color-indigo)] text-[var(--color-indigo)] hover:bg-[var(--color-indigo-light)]",
  },
};

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[36px] font-bold text-[var(--color-text)] leading-tight md:leading-[48px]">
            {t.services.headline1}<br />
            {t.services.headline2}
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SERVICE_DIVISIONS.map((division, i) => {
            const td = t.services.divisions[i];
            const colors = COLOR_MAP[division.color];
            const isTruth = division.id === "truthnme";

            return (
              <article
                key={division.id}
                className="flex flex-col bg-white rounded-xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow p-6"
              >
                {/* 배지 */}
                <span className={cn("self-center text-xs font-semibold px-3 py-1.5 rounded-full mb-4", colors.badge)}>
                  {division.badge}
                </span>

                {/* 제목 */}
                <h3 className="text-center text-xl font-bold text-[var(--color-text)] mb-2">
                  {td.name}
                </h3>

                {/* 설명 */}
                <p className="text-center text-sm text-[var(--color-gray-500)] mb-4 leading-relaxed">
                  {td.description}
                </p>

                {/* 구분선 */}
                <hr className="border-[var(--color-border)] mb-4" />

                {/* 서비스 목록 */}
                <ul className="space-y-1.5 mb-6 flex-1">
                  {td.services.map((svc) => (
                    <li key={svc.name} className="text-sm text-[var(--color-gray-500)]">
                      • {svc.name}
                    </li>
                  ))}
                </ul>

                {/* CTA 버튼 */}
                <div className={cn("flex gap-2", isTruth ? "" : "grid grid-cols-2")}>
                  {isTruth ? (
                    <Link
                      href={division.services[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full py-2 text-xs font-semibold text-center rounded-lg border transition-colors",
                        colors.btn
                      )}
                    >
                      {td.name} {td.visit}
                    </Link>
                  ) : (
                    division.services.map((svc, j) => (
                      <Link
                        key={svc.url}
                        href={svc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "py-2 text-xs font-semibold text-center rounded-lg border transition-colors",
                          colors.btn
                        )}
                      >
                        {td.services[j].name.split("  ")[0]} {td.visit}
                      </Link>
                    ))
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
