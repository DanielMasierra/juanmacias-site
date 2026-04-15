import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Share_Tech_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import StructuredData from "./structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech",
  weight: "400"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Juan Macías Sierra — Derecho, Ética de la IA y Gobernanza Digital",
  description: "Maestro en Derecho por la UNAM, funcionario público y especialista en ética de la inteligencia artificial, gobernanza de internet y derecho TIC en México. Miembro del IIJ-UNAM y Secretario General de la AMCID.",
  keywords: [
    "Juan Macías Sierra",
    "derecho inteligencia artificial México",
    "ética de la inteligencia artificial México",
    "gobernanza de internet México",
    "agentes morales artificiales",
    "comités de ética IA México",
    "derecho TIC México",
    "regulación inteligencia artificial México",
    "gobernanza algorítmica México",
    "experto ética IA sector público México",
    "derecho e inteligencia artificial UNAM",
    "IIJ UNAM derecho tecnología",
    "funcionario público inteligencia artificial Jalisco",
    "AMCID ciberseguridad derecho digital",
    "gobernanza de internet multistakeholder México",
    "ICANN Fellow México",
    "ciencia de datos derecho"
  ],
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
    title: "Juan Macías Sierra — Derecho, Ética de la IA y Gobernanza Digital",
    description: "Maestro en Derecho por la UNAM, funcionario público y especialista en ética de la inteligencia artificial, gobernanza de internet y derecho TIC en México.",
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
    title: "Juan Macías Sierra — Derecho, Ética de la IA y Gobernanza Digital",
    description: "Maestro en Derecho por la UNAM, especialista en ética de la IA y gobernanza de internet en México.",
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
    <html lang={locale} className={`${inter.variable} ${shareTechMono.variable} ${spaceGrotesk.variable}`}>
      <body>
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
