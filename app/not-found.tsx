import Link from "next/link";
import { ArrowLeft, Beaker, FileQuestion, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#04091A] via-[#071538] to-[#0A2558] py-20 text-white">
      {/* Background grids and glowing lab orbs */}
      <div className="pointer-events-none absolute inset-0 surface-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#0038AE]/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#48ACD6]/30 blur-[120px]" />

      <Container className="relative z-10 max-w-2xl text-center">
        {/* Lab Specimen Telemetry Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#48ACD6]/40 bg-white/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#9EE4FF] backdrop-blur-md">
          <FileQuestion size={14} className="text-[#48ACD6]" />
          <span>SPECIMEN ERROR // 404 NOT FOUND</span>
        </div>

        {/* 404 Display */}
        <h1 className="mt-8 font-mono text-7xl font-black tracking-tight text-white sm:text-8xl md:text-9xl">
          <span className="bg-gradient-to-r from-white via-[#9EE4FF] to-[#48ACD6] bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          ไม่พบหน้าเว็บหรือสูตรที่คุณกำลังค้นหา
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#CBEBFF]/85 sm:text-lg">
          หน้าเว็บที่คุณกำลังเข้าถึงอาจมีการเปลี่ยนที่อยู่ ถูกปรับปรุงสูตร หรือพิมพ์ URL ไม่ถูกต้อง กรุณากลับสู่หน้าหลักหรือเลือกดูสูตรเวชสำอางที่พร้อมผลิต
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0038AE] to-[#48ACD6] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_20px_rgba(0,56,174,0.4)] transition hover:scale-105"
          >
            <ArrowLeft size={16} />
            <span>กลับสู่หน้าหลัก</span>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <Beaker size={16} className="text-[#48ACD6]" />
            <span>ดูสูตรผลิตภัณฑ์มาตรฐาน (8 สูตร)</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
          >
            <Sparkles size={16} className="text-[#FFB800]" />
            <span>ติดต่อปรึกษาฝ่ายผลิต</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
