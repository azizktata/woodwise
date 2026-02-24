// Version 1 Layout — Dark Forest Premium Nav
import { Roboto, Onest } from "next/font/google";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Logo2 from "@/public/Artboard 3.svg";
import Image from "next/image";
import { ChevronRight, Clock, Leaf, Mail, Phone, PinIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LangToggle } from "@/components/lang-toggle";
import { getTranslations } from "next-intl/server";

const font = Roboto({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700"] });
const fontOnest = Onest({ subsets: ["latin"], variable: "--font-onest", weight: ["400", "500", "600"] });

export default async function Layout1({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Nav");
  const mainMenu = [
    { key: t("home"), href: t("homeLink") },
    { key: t("about"), href: t("aboutLink") },
    { key: t("projects"), href: t("projectsLink") },
    { key: t("news"), href: t("newsLink") },
  ];

  return (
    <>
      <TopNavV1 />
      <NavV1 locale={locale} mainMenu={mainMenu} />
      {children}
      <FooterV1 mainMenu={mainMenu} />
    </>
  );
}

const TopNavV1 = () => {
  const t = useTranslations("TopNav");
  return (
    <nav className="bg-[#071a0e] py-3">
      <div className="max-w-7xl flex px-4 flex-col md:flex-row gap-2 justify-between mx-auto text-sm">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Leaf className="h-3.5 w-3.5 text-[#84bc40]" />
          <span className="text-white/80">{t("certifiedPartner")}</span>
          <a href="#contact" className="text-[#84bc40] font-semibold flex items-center gap-1 hover:text-white transition-colors">
            {t("joinUs")} <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="hidden md:flex items-center text-white/50 gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#84bc40]" />
            <span>{t("workingHours")}</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-[#84bc40]" />
            <span>{t("email")}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavV1 = ({ locale, mainMenu }: { locale: string; mainMenu: { key: string; href: string }[] }) => (
  <nav className="bg-[#0d2e15] border-b border-white/10">
    <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center">
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image src={Logo2} alt="WoodWise" width={140} height={32} />
      </Link>

      <div className="hidden md:flex items-center gap-1">
        {mainMenu.map(({ key, href }) => (
          <Button key={href} asChild variant="ghost" size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10 font-medium text-sm rounded-lg">
            <Link href={href} locale={locale}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          </Button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#84bc40] hover:bg-[#0d7f40] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200">
          Contact
        </a>
        <LangToggle />
        <MobileNav />
      </div>
    </div>
  </nav>
);

const contactInfo = { phone: "80157 59053", email: "contact@woodwise.fr", address: "QUARTIER CUNI, SOSPEL, 06380, FR" };

const FooterV1 = ({ mainMenu }: { mainMenu: { key: string; href: string }[] }) => (
  <footer className={cn("font-sans", font.variable)}>
    <div className="bg-[#071a0e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <Link href="/"><Image src={Logo2} alt="WoodWise" width={140} height={32} className="mb-6" /></Link>
            <p className={cn("text-white/50 text-sm leading-relaxed max-w-[40ch]", fontOnest.variable)}>
              <Balancer>{siteConfig.site_description}</Balancer>
            </p>
          </div>
          <div>
            <h6 className="text-[#84bc40] font-semibold text-sm uppercase tracking-widest mb-4">Menu</h6>
            <div className="flex flex-col gap-2">
              {mainMenu.map(({ key, href }) => (
                <Link key={href} href={href} className="text-white/50 hover:text-white text-sm transition-colors">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[#84bc40] font-semibold text-sm uppercase tracking-widest mb-4">Contact</h5>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white/50 text-sm"><Mail className="h-4 w-4 text-[#84bc40]" />{contactInfo.email}</div>
              <div className="flex items-center gap-2 text-white/50 text-sm"><Phone className="h-4 w-4 text-[#84bc40]" />{contactInfo.phone}</div>
              <div className="flex items-start gap-2 text-white/50 text-sm"><PinIcon className="h-4 w-4 text-[#84bc40] flex-shrink-0 mt-0.5" />{contactInfo.address}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">© 2025 WoodWise. Tous droits réservés.</p>
          <p className="text-white/20 text-xs">Panneau MBio7 · Solar Impulse Label</p>
        </div>
      </div>
    </div>
  </footer>
);
