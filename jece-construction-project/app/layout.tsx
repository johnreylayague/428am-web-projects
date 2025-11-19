import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export const metadata: Metadata = {
  title: "JC Construction Inc.",
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
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
