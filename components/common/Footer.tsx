"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone
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

  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-[#020611] text-white">
      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.75fr_0.9fr_1.15fr]">
          {/* Brand Column */}
          <div>
            <div className="mb-5 flex items-center gap-3.5">
              <BrandMark className="h-12 w-12 rounded-lg border border-white/15" />
              <div>
                <p className="text-lg font-bold tracking-[0.12em] text-white">
                  {locale === "th" ? company.nameTh : company.nameEn}
                </p>
                <p className="font-serif text-sm italic text-[#48ACD6]">
                  The Blue Factory — From the Concept to Global Success
                </p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              {locale === "th"
                ? "โรงงานวิจัยและรับผลิตเวชสำอางและสกินแคร์ครบวงจร (One-Stop Cosmeceutical OEM/ODM) มุ่งเน้นการคัดสรรสารสกัดเข้มข้นระดับคลินิก มาตรฐานห้องสะอาด เอกสาร BMR และการจดแจ้ง อย. เพื่อสร้างแบรนด์ที่เติบโตอย่างยั่งยืน"
                : t("footer.description")}
            </p>
            <div className="mt-6 border-l border-[#48ACD6] pl-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">
              REGISTERED FACTORY • EST. 2022 (พ.ศ. 2565) • {locale === "th" ? company.factoryInfo.rooms : company.factoryInfo.roomsEn}
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#48ACD6]">
              {t("footer.site")}
            </p>
            <div className="grid gap-3 text-sm text-white/70">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
            </div>
          </div>

          {/* Cosmeceutical Solutions */}
          <div>
            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#48ACD6]">
              {locale === "th" ? "บริการและกลุ่มผลิตภัณฑ์" : "CAPABILITIES"}
            </p>
            <div className="grid gap-3 text-sm text-white/70">
              <Link href="/services/facial-care" className="transition hover:text-white">
                {locale === "th" ? "เซรั่มและเวชสำอางผิวหน้า" : "Clinical Facial Serums & Creams"}
              </Link>
              <Link href="/services/body-care" className="transition hover:text-white">
                {locale === "th" ? "ผลิตภัณฑ์บำรุงผิวกาย & สปา" : "Dermo Body & Spa Care"}
              </Link>
              <Link href="/services/hair-care" className="transition hover:text-white">
                {locale === "th" ? "แชมพูและเซรั่มบำรุงหนังศีรษะ" : "Scalp & Hair Care"}
              </Link>
              <Link href="/services/fda-document-service" className="transition hover:text-white">
                {locale === "th" ? "บริการขึ้นทะเบียน อย. & BMR" : "Thai FDA & BMR Documentation"}
              </Link>
              <Link href="/products" className="transition hover:text-white">
                {locale === "th" ? "สูตรมาตรฐานพร้อมผลิต (8 สูตร)" : "Ready-to-Produce Base Formulas"}
              </Link>
            </div>
          </div>

          {/* Direct Lab Contact */}
          <div>
            <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#48ACD6]">
              {t("footer.contact")}
            </p>
            <div className="grid gap-3.5 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <Phone size={15} className="mt-1 shrink-0 text-[#48ACD6]" />
                <span className="flex flex-wrap gap-x-2 gap-y-1">
                  {company.phone.map((phone, index) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replaceAll("-", "")}`}
                      className="transition hover:text-white"
                    >
                      {phone}
                      {index < company.phone.length - 1 ? "," : ""}
                    </a>
                  ))}
                </span>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail size={15} className="shrink-0 text-[#48ACD6]" />
                <span>{company.email}</span>
              </a>
              <a
                href={company.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MessageCircle size={15} className="shrink-0 text-[#48ACD6]" />
                <span>LINE Official: {company.line}</span>
              </a>
              <a
                href={company.shopeeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center justify-between border border-white/15 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white transition hover:border-[#EE4D2D] hover:bg-[#EE4D2D]"
              >
                <span className="flex items-center gap-2">
                  <ShopeeIcon className="h-4 w-4 shrink-0" />
                  <span>Shopee Official Sample Store</span>
                </span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href={company.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-start gap-3 text-xs leading-relaxed text-white/60 transition hover:text-white"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#48ACD6]" />
                <span>{address}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-[#01040B] py-5">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>© 2026 {company.nameEn}. All rights reserved.</p>
          <p className="font-serif text-sm italic text-[#9EE4FF]/80">
            The Blue Factory • A Simple is Powerful
          </p>
        </Container>
      </div>
    </footer>
  );
}


