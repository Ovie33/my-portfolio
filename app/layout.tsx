import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { siteOwner } from "@/lib/data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteOwner.name} — ${siteOwner.title}`,
    template: `%s | ${siteOwner.name}`,
  },
  description: siteOwner.bio,
  keywords: [
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Nigeria",
    "Software Developer",
    siteOwner.name,
  ],
  authors: [{ name: siteOwner.name }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: `${siteOwner.name} — ${siteOwner.title}`,
    description: siteOwner.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans bg-[#f8f7f4] dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
