"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, FlaskConical, Loader2, Send, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

const COUNTRY_OPTIONS = [
  { code: "+66", label: "🇹🇭 +66 (ไทย)" },
  { code: "+856", label: "🇱🇦 +856 (ลาว)" },
  { code: "+95", label: "🇲🇲 +95 (พม่า)" },
  { code: "+855", label: "🇰🇭 +855 (กัมพูชา)" },
  { code: "+60", label: "🇲🇾 +60 (มาเลเซีย)" },
  { code: "+65", label: "🇸🇬 +65 (สิงคโปร์)" },
  { code: "+84", label: "🇻🇳 +84 (เวียดนาม)" },
  { code: "+86", label: "🇨🇳 +86 (จีน)" },
  { code: "+81", label: "🇯🇵 +81 (ญี่ปุ่น)" },
  { code: "+82", label: "🇰🇷 +82 (เกาหลีใต้)" },
  { code: "+1", label: "🇺🇸 +1 (US / CA)" },
  { code: "+44", label: "🇬🇧 +44 (UK)" },
  { code: "+61", label: "🇦🇺 +61 (AU)" },
  { code: "+other", label: "🌐 อื่น ๆ" }
];

const MOQ_PRESETS = [
  "100 - 200 ชิ้น",
  "300 - 400 ชิ้น",
  "500 ชิ้น",
  "1,000 ชิ้น",
  "2,500+ ชิ้น"
];

const createQuoteSchema = (locale: "th" | "en") =>
  z
    .object({
      contactName: z
        .string()
        .trim()
        .min(2, locale === "th" ? "กรุณากรอกชื่อ-นามสกุลผู้ติดต่อ (อย่างน้อย 2 ตัวอักษร)" : "Please enter a contact name (at least 2 characters)"),
      brandName: z.string().optional(),
      countryCode: z.string().default("+66"),
      phone: z.string().trim().min(1, locale === "th" ? "กรุณากรอกเบอร์โทรศัพท์" : "Please enter a phone number"),
      lineId: z.string().optional(),
      email: z
        .string()
        .trim()
        .email(locale === "th" ? "รูปแบบอีเมลไม่ถูกต้อง เช่น name@brand.com" : "Invalid email format")
        .optional()
        .or(z.literal("")),
      productType: z.string().min(1, locale === "th" ? "กรุณาเลือกหมวดผลิตภัณฑ์ที่ต้องการผลิต" : "Please select a product category"),
      otherProductType: z.string().optional(),
      quantity: z
        .string()
        .trim()
        .min(1, locale === "th" ? "กรุณาระบุจำนวนผลิตโดยประมาณ (ขั้นต่ำ 100 ชิ้น)" : "Please specify quantity (min. 100 pcs)"),
      formulaType: z.enum(["standard", "new-formula", "not-sure"], {
        required_error: locale === "th" ? "กรุณาเลือกรูปแบบการพัฒนาสูตร" : "Please select a formula direction"
      }),
      message: z.string().optional()
    })
    .superRefine((values, context) => {
      // 1. Validate Other Product Type
      if (values.productType === "other" && !values.otherProductType?.trim()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["otherProductType"],
          message: locale === "th" ? "กรุณาระบุประเภทสินค้าอื่น ๆ" : "Please specify the product type"
        });
      }

      // 2. Validate Phone Number (supports Thai 9-10 digits or International)
      const rawDigits = values.phone.replace(/\D/g, "");
      if (values.countryCode === "+66") {
        if (rawDigits.length < 9 || rawDigits.length > 10) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["phone"],
            message:
              locale === "th"
                ? "กรุณากรอกเบอร์โทรศัพท์ 9-10 หลัก (เช่น 08X-XXX-XXXX หรือ 02-XXX-XXXX)"
                : "Please enter a valid 9-10 digit phone number (e.g. 08X-XXX-XXXX)"
          });
        } else if (!/^(0[2-9]\d{7,8}|[2-9]\d{7,8})$/.test(rawDigits)) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["phone"],
            message:
              locale === "th"
                ? "รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง (เช่น 08X-XXX-XXXX หรือ 09X-XXX-XXXX)"
                : "Invalid phone format (e.g. 08X-XXX-XXXX)"
          });
        }
      } else {
        if (rawDigits.length < 6 || rawDigits.length > 15) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["phone"],
            message:
              locale === "th"
                ? "กรุณากรอกหมายเลขโทรศัพท์ต่างประเทศให้ถูกต้อง (ตัวเลข 6-15 หลัก)"
                : "Please enter a valid international phone number (6-15 digits)"
          });
        }
      }

      // 3. Validate Quantity (OEM Minimum Order >= 100 pieces)
      if (values.quantity) {
        const matches = values.quantity.replace(/,/g, "").match(/\d+/g);
        if (!matches || matches.length === 0) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["quantity"],
            message:
              locale === "th"
                ? "กรุณาระบุจำนวนเป็นตัวเลข (ขั้นต่ำเริ่มต้นที่ 100 ชิ้นขึ้นไป)"
                : "Please specify quantity using numbers (minimum 100 pcs)"
          });
        } else {
          const numbers = matches.map((n) => parseInt(n, 10));
          const minVal = Math.min(...numbers);
          if (minVal < 100) {
            context.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["quantity"],
              message:
                locale === "th"
                  ? `จำนวนผลิตขั้นต่ำของโรงงานคือ 100 ชิ้นขึ้นไป (ระบุมา ${minVal} ชิ้น - หากต้องการ 1 ชิ้นเพื่อทดลองใช้ สามารถสั่งซื้อขนาดทดลองผ่าน Shopee ทางการได้)`
                  : `Minimum OEM production order is 100 pcs (specified ${minVal} pcs. For 1 pc sample, please order via our official Shopee store).`
            });
          }
        }
      }
    });

type QuoteFormValues = z.infer<ReturnType<typeof createQuoteSchema>>;

const inputClass =
  "mt-1.5 w-full rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] px-4 py-3 text-sm font-medium text-text-dark outline-none transition focus:border-[#0038AE] focus:bg-white focus:ring-2 focus:ring-[#48ACD6]/30 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-[#48ACD6]";

function ErrorText({ message }: { message?: string }) {
  return message ? (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-rose-500 dark:text-rose-400">
      <AlertCircle size={13} className="shrink-0" />
      <span>{message}</span>
    </p>
  ) : null;
}

export function QuoteForm() {
  const { locale, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const quoteSchema = useMemo(() => createQuoteSchema(locale), [locale]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      countryCode: "+66",
      formulaType: "not-sure"
    }
  });

  const productType = watch("productType");

  async function onSubmit(values: QuoteFormValues) {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "เกิดข้อผิดพลาดในการส่งข้อมูล");
      }

      setSubmitResult({
        success: true,
        message:
          locale === "th"
            ? "ส่งข้อมูลเรียบร้อยแล้ว! รายละเอียดได้ถูกส่งไปยังทีมงาน Pherada Cosmetics เรียบร้อย ฝ่าย R&D จะติดต่อกลับโดยเร็วที่สุด"
            : "Request submitted successfully! Details sent to Pherada team. We will contact you soon."
      });
      reset();
    } catch (err: unknown) {
      const errMsg =
        err instanceof Error
          ? err.message
          : locale === "th"
            ? "ไม่สามารถส่งข้อมูลได้ชั่วคราว กรุณาลองใหม่อีกครั้ง หรือติดต่อโทร 095-235-9626 หรือ Line @pheradacosmetics"
            : "Could not send request. Please try again or reach us via Line.";
      setSubmitResult({
        success: false,
        message: errMsg
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative overflow-hidden rounded-3xl border border-[#0038AE]/15 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-[#0D1936] md:p-8"
      noValidate
    >
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0038AE] via-[#48ACD6] to-[#0038AE]" />

      <div className="mb-6 flex items-center justify-between border-b border-[#0038AE]/10 pb-4 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#0038AE] to-[#48ACD6] text-white">
            <FlaskConical size={18} />
          </div>
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0038AE] dark:text-[#48ACD6]">
              OEM / ODM PRODUCTION BRIEF
            </p>
            <p className="text-sm font-bold text-text-dark dark:text-white">
              {locale === "th" ? "แบบฟอร์มประเมินราคาและปรึกษาทีมวิจัย R&D" : "Clinical Formulation & Quotation Request"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Contact Name */}
        <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
          {locale === "th" ? "ชื่อผู้ติดต่อ (Contact Name)" : "Contact name"} *
          <input
            className={inputClass}
            placeholder={locale === "th" ? "ชื่อ-นามสกุล" : "Full name"}
            {...register("contactName")}
          />
          <ErrorText message={errors.contactName?.message} />
        </label>

        {/* Brand Name */}
        <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
          {locale === "th" ? "ชื่อแบรนด์ (Brand Name)" : "Brand name"}
          <input
            className={inputClass}
            placeholder={locale === "th" ? "ระบุชื่อแบรนด์ (ถ้ามี)" : "Optional"}
            {...register("brandName")}
          />
        </label>

        {/* Phone with Country Code Selector */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
            {locale === "th" ? "เบอร์โทรศัพท์ (Phone)" : "Phone"} *
          </label>
          <div className="mt-1.5 flex gap-2">
            <select
              className="w-32 shrink-0 rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] px-2.5 py-3 text-xs font-bold text-text-dark outline-none transition focus:border-[#0038AE] focus:bg-white focus:ring-2 focus:ring-[#48ACD6]/30 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:focus:border-[#48ACD6]"
              {...register("countryCode")}
            >
              {COUNTRY_OPTIONS.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
            <input
              className={`${inputClass} !mt-0 flex-1`}
              placeholder="08X-XXX-XXXX"
              maxLength={15}
              {...register("phone")}
            />
          </div>
          <ErrorText message={errors.phone?.message} />
        </div>

        {/* Line ID */}
        <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
          Line ID
          <input className={inputClass} placeholder="@lineid" {...register("lineId")} />
        </label>

        {/* Email */}
        <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
          Email
          <input className={inputClass} type="email" placeholder="name@brand.com" {...register("email")} />
          <ErrorText message={errors.email?.message} />
        </label>

        {/* Product Type */}
        <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
          {locale === "th" ? "หมวดผลิตภัณฑ์เวชสำอาง" : "Product Category"} *
          <select className={inputClass} {...register("productType")}>
            <option value="">{locale === "th" ? "เลือกประเภทสินค้า" : "Select product type"}</option>
            <option value="facial">Facial Care (เซรั่ม / ครีม / มาสก์ / กันแดด)</option>
            <option value="body">Body Care (โลชั่น / สครับ / เจลอาบน้ำ)</option>
            <option value="hair">Hair & Scalp Care (แชมพู / เซรั่มบำรุงผม)</option>
            <option value="fragrance">Fragrance / Aroma (น้ำหอม / ก้านไม้หอม)</option>
            <option value="packaging">Packaging & Labeling (บรรจุภัณฑ์และฉลาก)</option>
            <option value="document">FDA / Document Service (จดแจ้ง อย.)</option>
            <option value="other">{locale === "th" ? "อื่น ๆ" : "Other"}</option>
          </select>
          <ErrorText message={errors.productType?.message} />
        </label>

        {/* Other Product Type */}
        {productType === "other" ? (
          <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white md:col-span-2">
            {locale === "th" ? "ระบุประเภทสินค้าอื่น ๆ" : "Specify product type"} *
            <input
              className={inputClass}
              placeholder={locale === "th" ? "เช่น ลิปบาล์ม ยาสีฟัน ผลิตภัณฑ์สปา" : "e.g. lip balm, toothpaste, spa product"}
              {...register("otherProductType")}
            />
            <ErrorText message={errors.otherProductType?.message} />
          </label>
        ) : null}

        {/* Quantity with MOQ validation & quick preset pills */}
        <div className="md:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white">
              {locale === "th" ? "จำนวนผลิตโดยประมาณ (ขั้นต่ำ 100 ชิ้น)" : "Estimated quantity (Min. 100 pcs)"} *
            </label>
            <span className="font-mono text-[11px] font-bold text-[#0038AE] dark:text-[#48ACD6]">
              OEM MOQ &ge; 100 PCS
            </span>
          </div>

          <input
            className={inputClass}
            placeholder={
              locale === "th"
                ? "เช่น 100-200 ชิ้น, 300-400 ชิ้น, 500 ชิ้น, 1,000 ชิ้น"
                : "e.g. 100-200 pcs, 300-400 pcs, 500 pcs, 1,000 pcs"
            }
            {...register("quantity")}
          />

          {/* Quick MOQ Preset Chips */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-semibold text-text-muted dark:text-text-light/70">
              {locale === "th" ? "เลือกจำนวนด่วน:" : "Quick MOQ:"}
            </span>
            {MOQ_PRESETS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setValue("quantity", preset, { shouldValidate: true });
                }}
                className="rounded-lg border border-[#0038AE]/15 bg-[#F4F9FD] px-2.5 py-1 text-xs font-semibold text-[#0038AE] transition hover:border-[#48ACD6] hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:text-[#48ACD6] dark:hover:bg-white/10"
              >
                {preset}
              </button>
            ))}
          </div>

          <ErrorText message={errors.quantity?.message} />
        </div>

        {/* Formula Direction */}
        <fieldset className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white md:col-span-2">
          <legend>{locale === "th" ? "ต้องการสูตรมาตรฐานหรือพัฒนาสูตรใหม่" : "Formula direction"} *</legend>
          <div className="mt-2.5 grid gap-3 md:grid-cols-3">
            {[
              ["standard", locale === "th" ? "สูตรมาตรฐาน" : "Standard Formula"],
              ["new-formula", locale === "th" ? "พัฒนาสูตรใหม่" : "Custom Formula Development"],
              ["not-sure", locale === "th" ? "ขอรับคำปรึกษาจากผู้เชี่ยวชาญ" : "Consult Specialist"]
            ].map(([value, label]) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] px-4 py-3 text-xs font-semibold text-text-dark transition hover:border-[#48ACD6] dark:border-white/10 dark:bg-white/[0.05] dark:text-white"
              >
                <input type="radio" value={value} className="accent-[#0038AE]" {...register("formulaType")} />
                <span>{label}</span>
              </label>
            ))}
          </div>
          <ErrorText message={errors.formulaType?.message} />
        </fieldset>

        {/* Additional Details */}
        <label className="text-xs font-bold uppercase tracking-wider text-text-dark dark:text-white md:col-span-2">
          {locale === "th" ? "รายละเอียดเพิ่มเติม / สารสกัดที่สนใจ" : "Additional details / Target Actives"}
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            placeholder={
              locale === "th"
                ? "ระบุปัญหาผิว กลุ่มเป้าหมาย เนื้อสัมผัส หรือสารสกัด Active ที่ต้องการ..."
                : "Describe skin concern, target texture, or active ingredients..."
            }
            {...register("message")}
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>{locale === "th" ? "กำลังส่งข้อมูล..." : "Sending..."}</span>
            </>
          ) : (
            <>
              <span>{t("form.submit")}</span>
              <Send size={16} />
            </>
          )}
        </Button>

        <div className="flex items-center gap-2 text-[11px] font-medium text-text-muted dark:text-text-light/75">
          <ShieldCheck size={15} className="shrink-0 text-emerald-500" />
          <span>
            {locale === "th"
              ? "ข้อมูลของคุณได้รับการคุ้มครองตามมาตรฐาน PDPA เพื่อการประเมินราคาเท่านั้น"
              : "Protected under PDPA standards for quotation evaluation only."}
          </span>
        </div>
      </div>

      {submitResult ? (
        <div
          className={`mt-4 flex items-start gap-3 rounded-2xl border p-4 text-sm font-semibold ${
            submitResult.success
              ? "border-emerald-500/30 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300"
              : "border-rose-500/30 bg-rose-50 text-rose-800 dark:border-rose-500/30 dark:bg-rose-950/40 dark:text-rose-300"
          }`}
        >
          {submitResult.success ? (
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
          ) : (
            <AlertCircle size={20} className="mt-0.5 shrink-0 text-rose-600 dark:text-rose-400" />
          )}
          <div className="leading-relaxed">{submitResult.message}</div>
        </div>
      ) : null}
    </form>
  );
}
