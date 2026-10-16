"use client";

import {
  Beaker,
  ClipboardCheck,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/common/BrandMark";
import { ShopeeIcon } from "@/components/common/ShopeeIcon";
import { company } from "@/data/company";
import { navItems } from "@/data/nav";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Container } from "./Container";

export function Footer() {
  const { locale, t } = useLanguage();
  const address = locale === "th" ? company.address : company.addressEn;

  const credentials =
    locale === "th"
      ? [
          { icon: Beaker, label: "Dermo-Active R&D", desc: "วิจัยและพัฒนาสูตรเวชสำอางเฉพาะทาง" },
          { icon: ShieldCheck, label: "Thai FDA Compliance", desc: "ดูแลการจดแจ้งเครื่องสำอางถูกต้อง 100%" },
          { icon: ClipboardCheck, label: "BMR & QC System", desc: "บันทึกการผลิตตรวจสอบย้อนกลับได้ทุกแบตช์" }
        ]
      : [
          { icon: Beaker, label: "Dermo-Active R&D", desc: "Clinical cosmeceutical formula innovation" },
          { icon: ShieldCheck, label: "Thai FDA Compliance", desc: "100% regulatory notification support" },
          { icon: ClipboardCheck, label: "BMR & QC System", desc: "Full batch manufacturing record traceability" }
        ];

  return (
    <footer className="relative overflow-hidden border-t border-[#0038AE]/15 bg-[#04091A] text-white">
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0038AE] via-[#48ACD6] to-[#0038AE]" />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0038AE]/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#48ACD6]/15 blur-[120px]" />

      <Container className="relative z-10 py-14 md:py-16">
        {/* Clinical Assurance Strip */}
        <div className="mb-12 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md md:grid-cols-3">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white shadow-md">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#48ACD6]">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm text-white/80">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.1fr]">
          {/* Brand Column */}
          <div>
            <div className="mb-5 flex items-center gap-3.5">
              <BrandMark className="h-12 w-12 rounded-xl border border-white/20" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold tracking-wide text-white">
                    {locale === "th" ? company.nameTh : company.nameEn}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-[#48ACD6]">
                  THE BLUE FACTORY • DERMO-COSMETIC OEM/ODM
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              {locale === "th"
                ? "โรงงานรับผลิตเวชสำอางและสกินแคร์ครบวงจร (One-Stop Cosmeceutical OEM/ODM) มุ่งเน้นการวิจัยสารสกัดเข้มข้นระดับคลินิก มาตรฐานห้องสะอาด เอกสาร BMR และการจดแจ้ง อย. เพื่อสร้างแบรนด์ที่เติบโตอย่างยั่งยืน"
                : t("footer.description")}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#48ACD6]/30 bg-[#0038AE]/20 px-3 py-1.5 font-mono text-[11px] text-[#9EE4FF]">
              <span className="h-2 w-2 rounded-full bg-[#48ACD6]" />
              <span>REGISTERED FACTORY • EST. 2022 (พ.ศ. 2565)</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#48ACD6]">
              {t("footer.site")}
            </p>
            <div className="grid gap-2.5 text-sm text-white/75">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:translate-x-1 hover:text-[#48ACD6]"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </div>
          </div>

          {/* Cosmeceutical Solutions */}
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#48ACD6]">
              {locale === "th" ? "กลุ่มผลิตภัณฑ์เวชสำอาง" : "Clinical Lines"}
            </p>
            <div className="grid gap-2.5 text-sm text-white/75">
              <Link href="/services/facial-care" className="transition hover:text-[#48ACD6]">
                {locale === "th" ? "เซรั่มและเวชสำอางผิวหน้า" : "Clinical Facial Serums & Creams"}
              </Link>
              <Link href="/services/body-care" className="transition hover:text-[#48ACD6]">
                {locale === "th" ? "ผลิตภัณฑ์บำรุงผิวกาย & สปา" : "Dermo Body & Spa Care"}
              </Link>
              <Link href="/services/hair-care" className="transition hover:text-[#48ACD6]">
                {locale === "th" ? "แชมพูและเซรั่มบำรุงหนังศีรษะ" : "Scalp & Hair Care"}
              </Link>
              <Link href="/services/fda-document-service" className="transition hover:text-[#48ACD6]">
                {locale === "th" ? "บริการขึ้นทะเบียน อย. & BMR" : "Thai FDA & BMR Documentation"}
              </Link>
              <Link href="/products" className="transition hover:text-[#48ACD6]">
                {locale === "th" ? "สูตรมาตรฐานพร้อมผลิต (8+ สูตร)" : "Ready-to-Produce Base Formulas"}
              </Link>
            </div>
          </div>

          {/* Direct Lab Contact */}
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#48ACD6]">
              {t("footer.contact")}
            </p>
            <div className="grid gap-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 shrink-0 text-[#48ACD6]" />
                <span className="flex flex-wrap gap-x-2 gap-y-1">
                  {company.phone.map((phone, index) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replaceAll("-", "")}`}
                      className="transition hover:text-[#48ACD6]"
                    >
                      {phone}
                      {index < company.phone.length - 1 ? "," : ""}
                    </a>
                  ))}
                </span>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 transition hover:text-[#48ACD6]"
              >
                <Mail size={16} className="shrink-0 text-[#48ACD6]" />
                <span>{company.email}</span>
              </a>
              <a
                href={company.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-[#48ACD6]"
              >
                <MessageCircle size={16} className="shrink-0 text-[#48ACD6]" />
                <span>Line Official: {company.line}</span>
              </a>
              <a
                href={company.shopeeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-between rounded-xl border border-[#EE4D2D]/40 bg-[#EE4D2D]/15 px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#EE4D2D]/25"
              >
                <span className="flex items-center gap-2">
                  <ShopeeIcon className="h-4 w-4 shrink-0 text-[#FF6B4A]" />
                  <span>Shopee: Pherada Official Store</span>
                </span>
                <ExternalLink size={13} className=" opacity-80" />
              </a>
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-start gap-3 text-xs leading-relaxed text-white/65 transition hover:text-white"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                <span>{address}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-[#020510] py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/55 sm:flex-row">
          <p>© 2026 {company.nameEn}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#48ACD6]/80">
            COLOR SYSTEM: #0038AE • #48ACD6 | CLINICAL OEM/ODM STANDARD
          </p>
        </Container>
      </div>
    </footer>
  );
}

