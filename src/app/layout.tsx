import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "../../ui/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MK Bookstore",
  description: "Macedonian Bookstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans overscroll-y-none antialiased selection:text-gray-800">
        <div className="layout-sm relative z-10 grid text-gray-800/90">
          {children}

          <SiteFooter />
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-full bg-[url('https://products.ls.graphics/mesh-gradients/images/66.-Yellow-sand_1.jpg')] bg-top bg-no-repeat opacity-[1]" />
        </div>
      </body>
    </html>
  );
}
