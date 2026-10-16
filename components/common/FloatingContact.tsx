"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { company } from "@/data/company";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FloatingContact() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasScrolled) return null;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Expanded contact options menu */}
      {isOpen ? (
        <div className="flex flex-col gap-2 rounded-2xl border border-[#0038AE]/15 bg-white/95 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200 dark:border-white/15 dark:bg-[#081128]/95 sm:w-64">
          <div className="flex items-center justify-between border-b border-gray-100 pb-2 px-1 dark:border-white/10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
              {locale === "th" ? "ติดต่อฝ่ายผลิตด่วน" : "Fast Contact"}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/10"
              aria-label="Close contact menu"
            >
              <X size={14} />
            </button>
          </div>

          {/* LINE Button */}
          <a
            href={company.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl bg-[#06C755] px-3.5 py-2.5 text-white shadow-sm transition hover:bg-[#05b34c]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
              <MessageCircle size={16} />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-bold">{locale === "th" ? "แชตปรึกษาผ่าน LINE" : "Chat on LINE"}</p>
              <p className="text-[10px] opacity-90">{company.line} (ตอบกลับไว)</p>
            </div>
          </a>

          {/* Call Primary Button */}
          <a
            href={`tel:${company.phone[0].replace(/-/g, "")}`}
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#0038AE] to-[#00287a] px-3.5 py-2.5 text-white shadow-sm transition hover:from-[#002d8c] hover:to-[#001f5c]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
              <Phone size={15} />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-bold">{locale === "th" ? "โทรติดต่อฝ่ายขาย" : "Call Sales Team"}</p>
              <p className="font-mono text-[11px] opacity-90">{company.phone[0]}</p>
            </div>
          </a>
        </div>
      ) : null}

      {/* Main floating trigger buttons */}
      <div className="flex items-center gap-2">
        {/* Direct LINE Fast Access Button */}
        <a
          href={company.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 items-center gap-2 rounded-full bg-[#06C755] pl-3.5 pr-4 text-xs font-bold text-white shadow-[0_8px_25px_-5px_rgba(6,199,85,0.45)] transition duration-300 hover:scale-105 hover:bg-[#05b34c]"
          aria-label="LINE Official Account"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
          </span>
          <MessageCircle size={18} />
          <span className="hidden sm:inline">LINE {company.line}</span>
        </a>

        {/* Toggle Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-12 w-12 items-center justify-center rounded-full shadow-[0_8px_25px_-5px_rgba(0,56,174,0.4)] transition duration-300 hover:scale-105 ${
            isOpen
              ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
              : "bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white"
          }`}
          aria-label="Toggle contact menu"
        >
          {isOpen ? <X size={20} /> : <Phone size={18} />}
        </button>
      </div>
    </aside>
  );
}
