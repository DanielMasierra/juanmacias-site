import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Juan Macías Sierra",
  description: "En la intersección del Derecho, la Inteligencia Artificial y su Gobernanza Ética. Funcionario público, miembro del IIJ-UNAM y Secretario General de la AMCID.",
  keywords: ["Juan Macías Sierra", "derecho TIC", "ética de la IA", "gobernanza de internet", "inteligencia artificial", "AMCID", "IIJ UNAM", "Contraloría Jalisco"],
  authors: [{ name: "Juan Macías Sierra", url: "https://juanmacias.site" }],
  creator: "Juan Macías Sierra",
  metadataBase: new URL("https://juanmacias.site"),
  alternates: {
    canonical: "https://juanmacias.site",
    languages: {
      "es": "https://juanmacias.site/es",
      "en": "https://juanmacias.site/en",
      "pt": "https://juanmacias.site/pt",
    }
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Juan Macías Sierra",
    description: "En la intersección del Derecho, la Inteligencia Artificial y su Gobernanza Ética.",
    url: "https://juanmacias.site",
    siteName: "Juan Macías Sierra",
    locale: "es_MX",
    type: "profile",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Juan Macías Sierra — Derecho · Ética de la IA · Ciencia de Datos"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Macías Sierra",
    description: "En la intersección del Derecho, la Inteligencia Artificial y su Gobernanza Ética.",
    creator: "@JMaciasSierra",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
