import "./globals.css";

import { Section, Container } from "@/components/craft";
import { Roboto, Onest, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Analytics } from "@vercel/analytics/react";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import Balancer from "react-wrap-balancer";
import Logo from "@/public/Artboard 4.svg";
import Logo2 from "@/public/Artboard 3.svg";
import Image from "next/image";

import type { Metadata } from "next";
import {
  ChevronRight,
  Clock,
  Mail,
  Phone,
  PinIcon,
  ShieldCheck,
} from "lucide-react";
import { Toaster } from "sonner";
import CustomButton from "@/components/CustomButton";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { hasLocale, NextIntlClientProvider, useTranslations } from "next-intl";
import NotFound from "../not-found";
import { Link, routing } from "@/i18n/routing";
import { LangToggle } from "@/components/lang-toggle";
import {getTranslations} from 'next-intl/server';

const font = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const font2 = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

const font3 = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "WoodWise",
  description: "Woodwise",
  metadataBase: new URL(siteConfig.site_domain),
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    NotFound();
  }
    const t = await getTranslations('Nav');

   const mainMenu =  [
    {key: t('home'), href: t('homeLink')},
    {key: t('about'), href: t('aboutLink')},
    {key: t('projects'), href: t('projectsLink')},
    {key: t('news'), href: t('newsLink')},
   ]
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
            <TopNav />
            <Nav locale={locale} mainMenu={mainMenu} />
            {children}
            <Footer  mainMenu={mainMenu} />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const TopNav = () => {
  const  t  = useTranslations("TopNav");
  return (
    <nav
      className={cn("z-50 top-0  bg-gradient py-3 font-sans ", font3.variable)}
    >
      <div className="max-w-6xl flex px-2 flex-col md:flex-row gap-2 justify-between mx-auto text-sm">
        <div className="flex items-center justify-center flex-wrap">
          <p className="text-[#F7F7F7] ">
            <ShieldCheck className="h-4 w-4 inline mr-1 " />
            {t("certifiedPartner")}
          </p>
          <p className="text-[#F7F7F7] ">
            <a
              href="#contact"
              className="ml-2 font-bold underline cursor-pointer"
            >
              {t("joinUs")}
              <ChevronRight className="h-4 w-4 inline ml-1" />
            </a>
          </p>
        </div>
        <div className="hidden md:flex item-center text-[#F7F7F7] gap-1 flex-wrap">
          <div className="flex items-center flex-shrink-0 ">
            <Clock className="h-4 w-4 inline mr-1" />
            <span className="mr-1">{t("workingHours")}</span>
          </div>
          <span className="  hidden md:flex">|</span>
          <div className="flex items-center flex-shrink-0">
            <Mail className="h-4 w-4 inline  mr-1" />
            <span>{t("email")}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Nav = ({ className, children, id, locale, mainMenu }: NavProps) => {
 
  return (
    <nav className={cn(" z-50 top-0 bg-background bg-hero", className)} id={id}>
      <div
        id="nav-container"
        className="max-w-6xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center"
          href="/"
        >
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            width={168}
            height={35}
          ></Image>
          {/* <h2 className="text-sm">{siteConfig.site_name}</h2> */}
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex md:self-center">
            {mainMenu.map(({ key, href }) => (
              <Button
                key={href}
                asChild
                variant={null}
                size="sm"
                className="font-semibold text-lg hover:text-gray-500"
              >
                <Link href={href} locale={locale}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex">
            <CustomButton label="Contact" href="/#contact" locale={locale} />
          </div>
            <LangToggle />
         
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};
const contactInfo = {
  phone: "80157 59053",
  email: "contact@woodwise.fr",
  address: "QUARTIER CUNI, SOSPEL, 06380, FR",
};
const Footer = ({ mainMenu }: { mainMenu: { key: string; href: string }[] }) => {
  return (
    <footer className={cn("font-sans antialiased", font2.variable)}>
      <Section className="bg-[#0d7f40] text-white">
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">{siteConfig.site_name}</h3>
              <Image src={Logo2} alt="Logo" width={168} height={35}></Image>
            </Link>
            <p>
              <Balancer>{siteConfig.site_description}</Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h6 className={cn("font-semibold text-xl", font.variable)}>Menu</h6>
             {mainMenu.map(({ key, href }) => (
              <Link
                className="hover:underline underline-offset-4 text-base"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className={cn("font-semibold text-xl", font.variable)}>
              Contact
            </h5>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <PinIcon className="h-8 w-8" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>{contactInfo.phone}</span>
            </div>
           
          </div>
        </Container>
       
      </Section>
    </footer>
  );
};
