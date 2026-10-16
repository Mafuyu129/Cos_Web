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
