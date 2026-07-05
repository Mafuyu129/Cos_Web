"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/common/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

const createQuoteSchema = (locale: "th" | "en") =>
  z
    .object({
      contactName: z.string().min(1, locale === "th" ? "กรุณากรอกชื่อผู้ติดต่อ" : "Please enter a contact name"),
      brandName: z.string().optional(),
      phone: z.string().min(8, locale === "th" ? "กรุณากรอกเบอร์โทร" : "Please enter a phone number"),
      lineId: z.string().optional(),
      email: z.string().email(locale === "th" ? "รูปแบบอีเมลไม่ถูกต้อง" : "Invalid email format").optional().or(z.literal("")),
      productType: z.string().min(1, locale === "th" ? "กรุณาเลือกประเภทสินค้า" : "Please select a product type"),
      otherProductType: z.string().optional(),
      quantity: z.string().optional(),
      formulaType: z.enum(["standard", "new-formula", "not-sure"], {
        required_error: locale === "th" ? "กรุณาเลือกประเภทสูตร" : "Please select a formula direction"
      }),
      message: z.string().optional()
    })
    .superRefine((values, context) => {
      if (values.productType === "other" && !values.otherProductType?.trim()) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["otherProductType"],
          message: locale === "th" ? "กรุณาระบุประเภทสินค้าอื่น ๆ" : "Please specify the product type"
        });
      }
    });

type QuoteFormValues = z.infer<ReturnType<typeof createQuoteSchema>>;

const inputClass =
  "mt-2 w-full rounded-[2px] border border-primary/15 bg-white px-4 py-3 text-lg text-text-dark outline-none transition focus:border-primary focus:ring-2 focus:ring-accent/30 dark:border-white/10 dark:bg-white/[0.06] dark:text-white";

function ErrorText({ message }: { message?: string }) {
  return message ? <p className="mt-1 text-sm font-medium text-red-500">{message}</p> : null;
}

export function QuoteForm() {
  const { locale, t } = useLanguage();
  const quoteSchema = useMemo(() => createQuoteSchema(locale), [locale]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { formulaType: "not-sure" }
  });
  const productType = watch("productType");

  function onSubmit(values: QuoteFormValues) {
    console.info("Quote request draft", values);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[4px] border border-primary/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-lg font-bold text-text-dark dark:text-white">
          {locale === "th" ? "ชื่อผู้ติดต่อ" : "Contact name"} *
          <input className={inputClass} {...register("contactName")} />
          <ErrorText message={errors.contactName?.message} />
        </label>
        <label className="text-lg font-bold text-text-dark dark:text-white">
          {locale === "th" ? "ชื่อแบรนด์" : "Brand name"}
          <input className={inputClass} {...register("brandName")} />
        </label>
        <label className="text-lg font-bold text-text-dark dark:text-white">
          {locale === "th" ? "เบอร์โทร" : "Phone"} *
          <input className={inputClass} {...register("phone")} />
          <ErrorText message={errors.phone?.message} />
        </label>
        <label className="text-lg font-bold text-text-dark dark:text-white">
          Line ID
          <input className={inputClass} {...register("lineId")} />
        </label>
        <label className="text-lg font-bold text-text-dark dark:text-white">
          Email
          <input className={inputClass} type="email" {...register("email")} />
          <ErrorText message={errors.email?.message} />
        </label>
        <label className="text-lg font-bold text-text-dark dark:text-white">
          {locale === "th" ? "ประเภทสินค้าที่ต้องการผลิต" : "Product type"} *
          <select className={inputClass} {...register("productType")}>
            <option value="">{locale === "th" ? "เลือกประเภทสินค้า" : "Select product type"}</option>
            <option value="facial">Facial Care</option>
            <option value="body">Body Care</option>
            <option value="hair">Hair Care</option>
            <option value="fragrance">Fragrance / Aroma</option>
            <option value="packaging">Packaging & Labeling</option>
            <option value="document">FDA / Document Service</option>
            <option value="other">{locale === "th" ? "อื่น ๆ" : "Other"}</option>
          </select>
          <ErrorText message={errors.productType?.message} />
        </label>
        {productType === "other" ? (
          <label className="text-lg font-bold text-text-dark dark:text-white">
            {locale === "th" ? "ระบุประเภทสินค้าอื่น ๆ" : "Specify product type"} *
            <input
              className={inputClass}
              placeholder={locale === "th" ? "เช่น ลิปบาล์ม ยาสีฟัน ผลิตภัณฑ์สปา" : "e.g. lip balm, toothpaste, spa product"}
              {...register("otherProductType")}
            />
            <ErrorText message={errors.otherProductType?.message} />
          </label>
        ) : null}
        <label className="text-lg font-bold text-text-dark dark:text-white">
          {locale === "th" ? "จำนวนผลิตโดยประมาณ" : "Estimated quantity"}
          <input
            className={inputClass}
            placeholder={locale === "th" ? "เช่น 100 ชิ้น, 300 ชิ้น" : "e.g. 100 pcs, 300 pcs"}
            {...register("quantity")}
          />
        </label>
        <fieldset className="text-lg font-bold text-text-dark dark:text-white md:col-span-2">
          <legend>{locale === "th" ? "ต้องการสูตรมาตรฐานหรือพัฒนาสูตรใหม่" : "Formula direction"} *</legend>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              ["standard", locale === "th" ? "สูตรมาตรฐาน" : "Standard formula"],
              ["new-formula", locale === "th" ? "พัฒนาสูตรใหม่" : "New formula development"],
              ["not-sure", locale === "th" ? "ยังไม่แน่ใจ" : "Not sure yet"]
            ].map(([value, label]) => (
              <label
                key={value}
                className="flex items-center gap-3 rounded-[2px] border border-primary/10 bg-light-bg px-4 py-3 text-base dark:border-white/10 dark:bg-white/[0.05]"
              >
                <input type="radio" value={value} {...register("formulaType")} />
                {label}
              </label>
            ))}
          </div>
          <ErrorText message={errors.formulaType?.message} />
        </fieldset>
        <label className="text-lg font-bold text-text-dark dark:text-white md:col-span-2">
          {locale === "th" ? "รายละเอียดเพิ่มเติม" : "Additional details"}
          <textarea className={`${inputClass} min-h-36 resize-y`} {...register("message")} />
        </label>
      </div>
      <Button type="submit" className="mt-8 w-full md:w-auto">
        {t("form.submit")} <Send size={18} />
      </Button>
      {isSubmitSuccessful ? (
        <p className="mt-4 rounded-lg bg-accent/10 px-4 py-3 text-base font-semibold text-primary dark:text-accent">
          {t("form.success")}
        </p>
      ) : null}
    </form>
  );
}
