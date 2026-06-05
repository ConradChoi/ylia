"use client";

import { useLang } from "@/contexts/LanguageContext";

export default function TrustBar() {
  const { t } = useLang();

  return (
    <section className="bg-white border-y border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 min-h-[100px] py-4 md:py-0 md:h-[100px] flex items-center">
        <dl className="grid grid-cols-2 md:grid-cols-4 w-full">
          {t.trust.metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center justify-center py-4 border-[var(--color-border)] ${
                i % 2 === 0 ? "border-r" : ""
              } ${
                i < 3 ? "md:border-r" : "md:border-r-0"
              } ${
                i < 2 ? "border-b md:border-b-0" : ""
              }`}
            >
              <dt className="text-xl md:text-2xl font-bold text-[var(--color-text)]">
                {metric.value}
              </dt>
              <dd className="text-xs md:text-sm text-[var(--color-gray-500)] mt-1">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
