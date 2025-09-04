import "./globals.css";

import { Section, Container } from "@/components/craft";
import { Roboto, Onest, Lato } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Analytics } from "@vercel/analytics/react";
import { Button } from "@/components/ui/button";

import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";

import Balancer from "react-wrap-balancer";
import Logo from "@/public/Artboard 4.svg";
import Logo2 from "@/public/Artboard 3.svg";
import Image from "next/image";
import Link from "next/link";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", font.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          <TopNav />
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

const TopNav = () => {
  return (
    <nav
      className={cn("z-50 top-0  bg-gradient py-3 font-sans ", font3.variable)}
    >
      <div className="max-w-6xl flex px-2 flex-col md:flex-row gap-2 justify-between mx-auto text-sm">
        <div className="flex items-center justify-center flex-wrap">
          <p className="text-[#F7F7F7] ">
            <ShieldCheck className="h-4 w-4 inline mr-1 " />
            Partenaire certifié
          </p>
          <p className="text-[#F7F7F7] ">
            <a href="#contact" className="ml-2 font-bold underline cursor-pointer">
              Rejoignez-nous maintenant
              <ChevronRight className="h-4 w-4 inline ml-1" />
            </a>
        </p>
        </div>
        <div className="hidden md:flex item-center text-[#F7F7F7] gap-1 flex-wrap">
          <div className="flex items-center flex-shrink-0 ">
            <Clock className="h-4 w-4 inline mr-1" />
            <span className="mr-1">Lundi - Vendredi de 9h00 à 17h00</span>
          </div>
          <span className="  hidden md:flex">|</span>
          <div className="flex items-center flex-shrink-0">
            <Mail className="h-4 w-4 inline  mr-1" />
            <span>contact@woodwise.fr</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Nav = ({ className, children, id }: NavProps) => {
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
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button
                key={href}
                asChild
                variant={null}
                size="sm"
                className="font-semibold text-lg hover:text-gray-500"
              >
                <Link href={href}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
           <div className="hidden md:flex">

          <CustomButton label="Contact" href="#contact" />
           </div>
          {/* <div className="hidden md:flex">
            <ThemeToggle />
          </div> */}
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
const Footer = () => {
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
            <h6 className={cn("font-semibold text-xl", font.variable)}>
              Menu
            </h6>
            {Object.entries(mainMenu).map(([key, href]) => (
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
            {/* {Object.entries(contentMenu).map(([key, href]) => (
              <Link
                className="hover:underline underline-offset-4"
                key={href}
                href={href}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
            ))} */}
          </div>
        </Container>
        {/* <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
       
   
        </Container> */}
      </Section>
    </footer>
  );
};
