import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Icon Esthetics | Advanced Skincare & Beauty Treatments",
  description:
    "Icon Esthetics Clinic offers professional skincare, facial treatments, and advanced aesthetic services. Enhance your natural beauty with personalized care. Book your appointment today.",
  keywords: [
    "esthetics clinic",
    "facial treatments",
    "skincare clinic",
    "beauty clinic",
    "advanced skincare",
    "chemical peel",
    "microneedling",
    "laser treatments",
    "skin rejuvenation",
    "esthetician services",
  ],
  openGraph: {
    title: "Icon Esthetics | Skincare & Beauty Experts",
    description:
      "Experience premium skincare and aesthetic treatments at Icon Esthetics Clinic. Personalized services designed to help you look and feel your best.",
    url: "https://yourdomain.com",
    siteName: "Icon Esthetics",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
