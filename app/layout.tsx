import type { Metadata } from "next";
import { Manrope, Fraunces, DM_Sans } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

/* 
  Font Strategy - TCS-Inspired Enterprise:
  - Fraunces: Bold editorial serif → Hero headlines & display text (like TCS big statements)
  - Manrope: Clean geometric sans → Body copy, descriptions, paragraphs  
  - DM Sans: Modern utility sans → Nav, labels, buttons, UI chrome
*/
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NajCode Solutions — Building Perpetually Adaptive Enterprises",
  description:
    "NajCode is a global technology services and consulting company delivering ERP, CRM, AI, and digital transformation solutions that help businesses evolve continuously and confidently.",
  keywords: "ERP development, digital transformation, CRM, AI analytics, cloud services, enterprise software",
  openGraph: {
    title: "NajCode Solutions — Building Perpetually Adaptive Enterprises",
    description: "Technology services and consulting for businesses built to evolve.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${fraunces.variable} ${dmSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}
      >
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
