import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { company } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  title: `${company.nameEn} | The Blue Factory`,
  description: "Premium OEM / ODM cosmetic factory website for Pherada Cosmetics Ltd.",
  metadataBase: new URL("https://pherada-cosmetics.vercel.app")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
