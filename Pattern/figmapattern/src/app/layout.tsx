import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Figma Pattern",
  description: "Responsive Next.js + Tailwind project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bg">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gray-100 p-6">{children}</main>
      </body>
    </html>
  );
}
