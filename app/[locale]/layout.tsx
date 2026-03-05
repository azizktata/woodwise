import "./globals.css";

import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import NotFound from "./not-found";
import { routing } from "@/i18n/routing";
// import { VersionToggle } from "@/components/version-toggle";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.site_name,
    template: `%s | ${siteConfig.site_name}`,
  },
  description: siteConfig.site_description,
  metadataBase: new URL(siteConfig.site_domain),
  openGraph: {
    type: "website",
    siteName: siteConfig.site_name,
    description: siteConfig.site_description,
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: siteConfig.site_name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.site_name,
    description: siteConfig.site_description,
    images: ["/opengraph-image.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    NotFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <Toaster richColors />
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-BKHDWTGYW9" />
      </body>
    </html>
  );
}
