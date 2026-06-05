"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useLang } from "@/contexts/LanguageContext";
import type { ContactForm } from "@/types";

const INITIAL_FORM: ContactForm = {
  name: "", email: "", phone: "", company: "", message: "", consent: false,
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const { t } = useLang();

  const CONTACT_ITEMS = [
    { icon: Mail, label: t.contact.info_labels.email, value: CONTACT_INFO.email },
    { icon: Phone, label: t.contact.info_labels.phone, value: CONTACT_INFO.phone },
    { icon: MapPin, label: t.contact.info_labels.address, value: CONTACT_INFO.address },
  ];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!form.consent) return alert(t.contact.consent_alert);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(INITIAL_FORM);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-[var(--color-bg-light)] border-t border-[var(--color-border)]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-bold text-[var(--color-text)] mb-3">
            {t.contact.headline}
          </h2>
          <p className="text-sm text-[var(--color-gray-500)] whitespace-pre-line">
            {t.contact.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 max-w-5xl mx-auto">
          {/* ── 연락처 정보 ── */}
          <aside className="space-y-6">
            <h3 className="text-sm font-semibold text-[var(--color-text)]">{t.contact.info_title}</h3>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[var(--color-gray-100)] flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[var(--color-gray-400)]" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text)]">{label}</p>
                    <p className="text-sm text-[var(--color-gray-500)]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <p className="text-xs font-semibold text-[var(--color-text)] mb-1.5">
                <Clock size={13} className="inline mr-1" />{t.contact.info_labels.hours_title}
              </p>
              <p className="text-sm text-[var(--color-gray-500)]">{t.contact.hours.weekday}</p>
              <p className="text-sm text-[var(--color-gray-500)]">{t.contact.hours.weekend}</p>
            </div>
          </aside>

          {/* ── 문의 폼 ── */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-8">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">{t.contact.headline}</h3>

            {status === "success" ? (
              <div className="py-12 text-center space-y-2">
                <p className="text-2xl">✅</p>
                <p className="text-base font-semibold text-[var(--color-text)]">{t.contact.success_title}</p>
                <p className="text-sm text-[var(--color-gray-500)]">{t.contact.success_sub}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-[var(--color-blue)] hover:underline"
                >
                  {t.contact.new_inquiry}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 이름 + 이메일 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["name", "email"] as const).map((field) => (
                    <div key={field} className="space-y-1.5">
                      <label htmlFor={field} className="text-xs font-medium text-[var(--color-text)]">
                        {t.contact.fields[field].label} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        required
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={t.contact.fields[field].placeholder}
                        className="w-full h-11 px-3 text-sm border border-[var(--color-border)] rounded-lg outline-none focus:border-[var(--color-blue)] focus:ring-2 focus:ring-blue-100 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {/* 연락처 + 회사명 */}
                {(["phone", "company"] as const).map((field) => (
                  <div key={field} className="space-y-1.5">
                    <label htmlFor={field} className="text-xs font-medium text-[var(--color-text)]">
                      {t.contact.fields[field].label}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type="text"
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={t.contact.fields[field].placeholder}
                      className="w-full h-11 px-3 text-sm border border-[var(--color-border)] rounded-lg outline-none focus:border-[var(--color-blue)] focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                ))}

                {/* 문의 내용 */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-[var(--color-text)]">
                    {t.contact.fields.message.label} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.fields.message.placeholder}
                    className="w-full px-3 py-2.5 text-sm border border-[var(--color-border)] rounded-lg outline-none focus:border-[var(--color-blue)] focus:ring-2 focus:ring-blue-100 resize-none transition-colors"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-2.5 p-3 bg-[var(--color-bg-light)] rounded-lg">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-[var(--color-blue)]"
                  />
                  <label htmlFor="consent" className="text-xs text-[var(--color-text)] leading-relaxed cursor-pointer">
                    {t.contact.consent}
                  </label>
                </div>

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full h-12 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[var(--color-navy)] rounded-lg hover:bg-navy-800 disabled:opacity-60 transition-colors"
                >
                  <Send size={15} />
                  {status === "sending" ? t.contact.sending : t.contact.submit}
                </button>

                {status === "error" && (
                  <p className="text-xs text-red-500 text-center">
                    {t.contact.error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
