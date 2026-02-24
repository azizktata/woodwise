// Version 2 Layout — Warm Organic Nav
import { Onest } from "next/font/google";
import { MobileNav } from "@/components/nav/mobile-nav";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Logo from "@/public/Artboard 4.svg";
import Logo2 from "@/public/Artboard 3.svg";
import Image from "next/image";
import { ChevronRight, Clock, Leaf, Mail, Phone, PinIcon, TreePine } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LangToggle } from "@/components/lang-toggle";
import { getTranslations } from "next-intl/server";

const font = Onest({ subsets: ["latin"], variable: "--font-onest", weight: ["400", "500", "600", "700"] });

export default async function Layout2({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Nav");
  const mainMenu = [
    { key: t("home"), href: "/2" },
    { key: t("about"), href: `/2${t("aboutLink")}` },
    { key: t("projects"), href: `/2${t("projectsLink")}` },
    { key: t("news"), href: `/2${t("newsLink")}` },
  ];

  return (
    <>
      <TopNavV2 />
      <NavV2 locale={locale} mainMenu={mainMenu} />
      {children}
      <FooterV2 mainMenu={mainMenu} />
    </>
  );
}

const TopNavV2 = () => {
  const t = useTranslations("TopNav");
  return (
    <nav className="py-2.5" style={{ background: "#1a3d2b" }}>
      <div className="max-w-7xl flex px-4 flex-col md:flex-row gap-2 justify-between mx-auto text-sm">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <TreePine className="h-3.5 w-3.5" style={{ color: "#84bc40" }} />
          <span style={{ color: "rgba(250,246,239,0.8)" }} className="text-xs">{t("certifiedPartner")}</span>
          <a href="#contact" className="flex items-center gap-1 text-xs font-semibold hover:opacity-80 transition-opacity" style={{ color: "#d4b896" }}>
            {t("joinUs")} <ChevronRight className="h-3 w-3" />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-3 text-xs" style={{ color: "rgba(250,246,239,0.5)" }}>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" style={{ color: "#84bc40" }} />
            <span>{t("workingHours")}</span>
          </div>
          <span style={{ color: "rgba(250,246,239,0.2)" }}>|</span>
          <div className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" style={{ color: "#84bc40" }} />
            <span>{t("email")}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavV2 = ({ locale, mainMenu }: { locale: string; mainMenu: { key: string; href: string }[] }) => (
  <nav style={{ background: "#faf6ef", borderBottom: "1px solid #e8dcc8" }}>
    <div className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center">
      <Link href="/2" className="hover:opacity-80 transition-opacity">
        <Image src={Logo} alt="WoodWise" width={140} height={32} />
      </Link>
      <div className="hidden md:flex items-center gap-1">
        {mainMenu.map(({ key, href }) => (
          <Button key={href} asChild variant="ghost" size="sm" className="font-medium text-sm rounded-xl hover:bg-[#1a3d2b]/8" style={{ color: "#3d2b1a" }}>
            <Link href={href} locale={locale}>{key.charAt(0).toUpperCase() + key.slice(1)}</Link>
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-2xl text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #84bc40, #4a8c3f)" }}>
          <Leaf className="h-3.5 w-3.5" />
          Contact
        </a>
        <LangToggle />
        <MobileNav />
      </div>
    </div>
  </nav>
);

const contactInfo = { phone: "80157 59053", email: "contact@woodwise.fr", address: "QUARTIER CUNI, SOSPEL, 06380, FR" };

const FooterV2 = ({ mainMenu }: { mainMenu: { key: string; href: string }[] }) => (
  <footer className={cn("font-sans", font.variable)}>
    <div style={{ background: "#1a3d2b" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12">
          <div>
            <Link href="/2"><Image src={Logo2} alt="WoodWise" width={140} height={32} className="mb-6" /></Link>
            <p className="text-sm leading-relaxed max-w-[40ch]" style={{ color: "rgba(250,246,239,0.55)" }}>
              <Balancer>{siteConfig.site_description}</Balancer>
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: "#84bc40" }}>
                <Leaf className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-medium" style={{ color: "rgba(250,246,239,0.6)" }}>Solar Impulse Efficient Solution</span>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "#84bc40" }}>Navigation</h6>
            <div className="flex flex-col gap-2.5">
              {mainMenu.map(({ key, href }) => (
                <Link key={href} href={href} className="text-sm transition-colors hover:opacity-80" style={{ color: "rgba(250,246,239,0.6)" }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-xs uppercase tracking-widest mb-5" style={{ color: "#84bc40" }}>Contact</h5>
            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail className="h-3.5 w-3.5" />, val: contactInfo.email },
                { icon: <Phone className="h-3.5 w-3.5" />, val: contactInfo.phone },
                { icon: <PinIcon className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />, val: contactInfo.address },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "rgba(250,246,239,0.5)" }}>
                  <span style={{ color: "#84bc40" }}>{item.icon}</span>
                  {item.val}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderTop: "1px solid rgba(250,246,239,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(250,246,239,0.25)" }}>© 2025 WoodWise. Tous droits réservés.</p>
          <div className="flex items-center gap-1 text-xs" style={{ color: "rgba(250,246,239,0.25)" }}>
            <TreePine className="h-3 w-3" style={{ color: "#84bc40" }} />
            Construire Mieux Écologiquement
          </div>
        </div>
      </div>
    </div>
  </footer>
);
