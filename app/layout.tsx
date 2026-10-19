import type { Metadata } from "next";
import { Anuphan, Prompt } from "next/font/google";
import type { ReactNode } from "react";
import { FloatingContact } from "@/components/common/FloatingContact";
import { Footer } from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { company } from "@/data/company";
import "./globals.css";

const promptFont = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-prompt",
  display: "swap"
});

const anuphanFont = Anuphan({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anuphan",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${company.nameEn} | The Blue Factory`,
  description: "Premium OEM / ODM cosmetic factory website for Pherada Cosmetics Ltd.",
  metadataBase: new URL("https://pherada-cosmetics.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" className={`${promptFont.variable} ${anuphanFont.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingContact />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
