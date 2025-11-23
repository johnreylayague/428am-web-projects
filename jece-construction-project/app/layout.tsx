import type { Metadata } from "next";
import "@/app/globals.css";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";

const roboto = Roboto({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JC - Construction Corporation",
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
    <html lang="en" className={`${roboto.className} ${montserrat.className}`}>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
