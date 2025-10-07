import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

/**
 * Metadata for the project
 */
export const metadata: Metadata = {
  title: "Figma Pattern",
  description: "Responsive Next.js + Tailwind project",
};

/**
 * RootLayout Component
 *
 * This component wraps all pages and provides a consistent layout.
 * It includes a header, a main content area, and optional footer.
 * Uses Tailwind CSS for styling.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content to render inside the layout
 * @returns {JSX.Element} The layout with header, main content, and optional footer
 *
 * @example
 * export default function Page() {
 *   return (
 *     <RootLayout>
 *       <YourPageContent />
 *     </RootLayout>
 *   );
 * }
 */
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
