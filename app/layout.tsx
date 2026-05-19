import type { Metadata } from "next";
import { Fraunces, Poppins, Italianno } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Schema, localBusinessSchema } from "@/components/Schema";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Considered design and build for Cambridge homes`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Cambridge builder",
    "Cambridge extension",
    "kitchen extension Cambridge",
    "rear extension Cambridge",
    "design and build Cambridge",
    "loft conversion Cambridge",
    "bathroom design Cambridge",
    "garden room Cambridge",
    "Cambridge architect builder",
    "listed building Cambridge",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: `${site.name} — Considered design and build for Cambridge homes`,
    description: site.description,
    url: site.url,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${poppins.variable} ${italianno.variable}`} suppressHydrationWarning>
      <body>
        <Schema data={localBusinessSchema()} />
        <Header />
        <main className="pt-40 md:pt-44">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
