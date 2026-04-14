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
  description: "En la intersección del Derecho, la Inteligencia Artificial y su Gobernanza Ética.",
  openGraph: {
    title: "Juan Macías Sierra",
    description: "En la intersección del Derecho, la Inteligencia Artificial y su Gobernanza Ética.",
    url: "https://juanmacias.site",
    siteName: "Juan Macías Sierra",
    locale: "es_MX",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Juan Macías Sierra",
    description: "En la intersección del Derecho, la Inteligencia Artificial y su Gobernanza Ética.",
    creator: "@JMaciasSierra"
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
