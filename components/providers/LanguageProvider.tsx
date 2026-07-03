"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

export type Locale = "th" | "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
};

const dictionary: Record<Locale, Record<string, string>> = {
  th: {
    "nav.home": "หน้าแรก",
    "nav.about": "เกี่ยวกับเรา",
    "nav.services": "บริการ",
    "nav.showcase": "ผลงานสินค้า",
    "nav.process": "ขั้นตอนผลิต",
    "nav.standards": "มาตรฐาน",
    "nav.knowledge": "บทความ",
    "nav.contact": "ติดต่อเรา",
    "nav.quote": "ขอใบเสนอราคา",
    "nav.start": "เริ่มสร้างแบรนด์",
    "brand.concept": "The Blue Factory",
    "brand.tagline": "จากคอนเซปต์สู่ความสำเร็จของแบรนด์",
    "hero.eyebrow": "โรงงานรับผลิตเครื่องสำอาง OEM / ODM",
    "hero.title": "The Blue Factory",
    "hero.subtitle": "โรงงานรับผลิตเครื่องสำอางครบวงจร",
    "hero.description":
      "จากคอนเซปต์ สู่สูตร บรรจุภัณฑ์ และสินค้าพร้อมจำหน่าย OEM / ODM / R&D / อย. / แพ็กเกจ / ผลิตจริง",
    "hero.primary": "เริ่มสร้างแบรนด์",
    "hero.secondary": "ดูบริการทั้งหมด",
    "hero.feature.oneStop": "บริการครบวงจร",
    "hero.feature.rd": "วิจัยและพัฒนาสูตร",
    "hero.feature.fda": "เอกสาร อย.",
    "stats.services": "สูตรจริงในโรงงาน",
    "stats.steps": "ขั้นตอนการผลิต",
    "stats.moq": "ตัวเลือก MOQ เริ่มต้น",
    "stats.delivery": "เริ่มจดทะเบียน",
    "home.simple.eyebrow": "เรียบง่าย แต่ทรงพลัง",
    "home.simple.title": "เส้นทางโรงงานที่ชัดเจนสำหรับเจ้าของแบรนด์ใหม่",
    "home.simple.description":
      "เราออกแบบขั้นตอนให้เจ้าของแบรนด์เห็นภาพตั้งแต่สูตรแรกจนถึงสินค้าพร้อมจำหน่าย ลดความซับซ้อนของเอกสาร แพ็กเกจ และการผลิตจริง",
    "home.simple.consult": "ให้คำปรึกษา",
    "home.simple.consultText": "เริ่มจากโจทย์สินค้า กลุ่มลูกค้า และงบประมาณ",
    "home.simple.develop": "พัฒนาสูตร",
    "home.simple.developText": "เลือกสูตรมาตรฐานหรือพัฒนาสูตรใหม่กับทีม R&D",
    "home.simple.launch": "พร้อมขาย",
    "home.simple.launchText": "ผลิต ตรวจคุณภาพ ทำเอกสาร และส่งมอบสินค้า",
    "home.services.eyebrow": "บริการของเรา",
    "home.services.title": "บริการครบวงจรสำหรับการผลิตเครื่องสำอาง",
    "home.services.description": "ผลิต พัฒนาสูตร เอกสาร อย. และแพ็กเกจในเส้นทางเดียว",
    "home.services.all": "ดูบริการทั้งหมด",
    "home.showcase.eyebrow": "ผลงานสินค้า",
    "home.showcase.title": "คอนเซปต์สินค้าพร้อมต่อยอดเป็นแบรนด์",
    "home.showcase.description": "ตัวอย่างแนวทางสินค้าและแพ็กเกจสำหรับต่อยอดเป็นแบรนด์จริง",
    "home.showcase.all": "ดูผลงานสินค้า",
    "home.process.eyebrow": "ขั้นตอนผลิต",
    "home.process.title": "จากโจทย์แรกสู่สินค้าพร้อมส่งมอบ",
    "home.process.description":
      "ขั้นตอนผลิตชัดเจน ตั้งแต่เลือกสูตร จดแจ้ง ออกแบบแพ็กเกจ ผลิตจริง QC และส่งมอบสินค้า",
    "home.process.all": "ดูขั้นตอนทั้งหมด",
    "cta.eyebrow": "ติดต่อ Pherada",
    "cta.title": "พร้อมเริ่มสร้างแบรนด์เครื่องสำอางหรือยัง",
    "cta.description": "คุยกับทีม Pherada เพื่อประเมินสูตร แพ็กเกจ จำนวนผลิต และเอกสารที่ต้องใช้",
    "cta.button": "ขอใบเสนอราคา",
    "card.viewService": "ดูรายละเอียดบริการ",
    "product.view": "ดูรายละเอียดสินค้า",
    "product.filter.all": "ทั้งหมด",
    "footer.site": "เมนู",
    "footer.contact": "ติดต่อ",
    "footer.description":
      "โรงงานรับผลิตเครื่องสำอาง OEM / ODM แบบพรีเมียม สำหรับสกินแคร์ บอดี้แคร์ น้ำหอม แพ็กเกจ และเอกสาร อย.",
    "form.success": "ระบบตรวจสอบข้อมูลเรียบร้อยแล้ว ขั้นตอนเชื่อมต่อ backend สามารถเพิ่มในเฟสถัดไป",
    "form.submit": "ส่งข้อมูลเพื่อขอใบเสนอราคา"
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.showcase": "Showcase",
    "nav.process": "Process",
    "nav.standards": "Standards",
    "nav.knowledge": "Knowledge",
    "nav.contact": "Contact",
    "nav.quote": "Request Quote",
    "nav.start": "Start Your Brand",
    "brand.concept": "The Blue Factory",
    "brand.tagline": "From the Concept to Global Success",
    "hero.eyebrow": "OEM / ODM Cosmetic Factory",
    "hero.title": "The Blue Factory",
    "hero.subtitle": "Complete cosmetic manufacturing factory",
    "hero.description":
      "From concept to formula, packaging and market-ready goods. OEM / ODM / R&D / FDA / Packaging / Production",
    "hero.primary": "Start Your Brand",
    "hero.secondary": "View All Services",
    "hero.feature.oneStop": "One Stop Service",
    "hero.feature.rd": "R&D Formula",
    "hero.feature.fda": "FDA Document",
    "stats.services": "Real Factory Formulas",
    "stats.steps": "Production Steps",
    "stats.moq": "Starter MOQ Options",
    "stats.delivery": "Registered Since",
    "home.simple.eyebrow": "Simple is Powerful",
    "home.simple.title": "A clear factory path for new cosmetic brands",
    "home.simple.description":
      "We make the path visible from the first formula to market-ready goods, reducing complexity around documents, packaging and production.",
    "home.simple.consult": "Consult",
    "home.simple.consultText": "Start with product goals, customer segment and budget.",
    "home.simple.develop": "Develop",
    "home.simple.developText": "Choose a standard formula or develop a new formula with R&D.",
    "home.simple.launch": "Launch",
    "home.simple.launchText": "Produce, check quality, prepare documents and deliver goods.",
    "home.services.eyebrow": "Our Services",
    "home.services.title": "One Stop Service for cosmetic manufacturing",
    "home.services.description": "Formula, production, Thai FDA documents and packaging in one path.",
    "home.services.all": "View All Services",
    "home.showcase.eyebrow": "Showcase",
    "home.showcase.title": "Product concepts ready for brand development",
    "home.showcase.description": "Product and packaging directions that can become a real brand line.",
    "home.showcase.all": "View Showcase",
    "home.process.eyebrow": "Process",
    "home.process.title": "From brief to finished goods",
    "home.process.description":
      "A clear production flow from formula selection, FDA notification and packaging to QC and delivery.",
    "home.process.all": "View Full Process",
    "cta.eyebrow": "Contact Pherada",
    "cta.title": "Ready to build your cosmetic brand?",
    "cta.description": "Talk to Pherada about formula, packaging, quantity and required documents.",
    "cta.button": "Request Quote",
    "card.viewService": "View service",
    "product.view": "View product",
    "product.filter.all": "All",
    "footer.site": "Site",
    "footer.contact": "Contact",
    "footer.description":
      "Premium OEM / ODM cosmetic factory for skincare, body care, fragrance, packaging and Thai FDA document support.",
    "form.success": "The form has validated successfully. Backend integration can be added in the next phase.",
    "form.submit": "Send quote request"
  }
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("th");

  useEffect(() => {
    const stored = window.localStorage.getItem("pherada-locale");
    if (stored === "th" || stored === "en") {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("pherada-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "th" ? "en" : "th");
  }, [locale, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: (key: string) => dictionary[locale][key] ?? dictionary.en[key] ?? key
    }),
    [locale, setLocale, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
