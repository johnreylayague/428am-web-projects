import type { Metadata } from "next";
import "@/app/globals.css";
import { Roboto_Condensed } from "next/font/google";
import { Roboto_Flex } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import { Roboto_Serif } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JC - Construction Inc.",
  description:
    "JC Construction Inc. specializes in quality construction services including renovations, new builds, and project management.",
  keywords: [
    "JC Construction",
    "Construction",
    "Building",
    "Renovations",
    "Contractor",
    "Project Management",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
