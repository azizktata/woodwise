// Version 1 — Bold Dark
// Design: Dark dramatic hero, bento-grid stats, high-contrast sections
import { Section, Container, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import Mbio7logo from "@/public/mbio7-logo.png";
import NiceMatin from "@/public/nice-matin.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
import HeroBg from "@/public/hero.jpg";
import HeroFg from "@/public/hero-4.jpg";
import AproposImg from "@/public/Apropos.jpg";
import Mbio7Img from "@/public/Mbio7.jpg";
import ContactBg from "@/public/contactbg.jpg";
import Image, { StaticImageData } from "next/image";
import {
  BrickWall,
  Eye,
  Handshake,
  Mail,
  Medal,
  Phone,
  PinIcon,
  PlayIcon,
  Projector,
  Sprout,
  Star,
  ArrowRight,
  CheckCircle2,
  Leaf,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Onest } from "next/font/google";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  getHeroSection,
  getAboutSection,
  getImpactSection,
  getMbio7Section,
  getContactSection,
  getBlogsSection,
  getReviewsSection,
  getFAQSection,
} from "@/lib/wp-fetch";
import type {
  HeroSection,
  AboutSection,
  ImpactSection,
  Mbio7Section,
  ContactSectionContent,
  BlogsSection,
  ReviewsSection,
  FAQSection,
} from "@/lib/wp-types";

const font2 = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["300", "400", "500", "600", "700"],
});

export default async function Home1({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [
    heroData,
    aboutData,
    impactData,
    mbio7Data,
    contactData,
    blogsData,
    reviewsData,
    faqData,
    tHero,
  ] = await Promise.all([
    getHeroSection(locale),
    getAboutSection(locale),
    getImpactSection(locale),
    getMbio7Section(locale),
    getContactSection(locale),
    getBlogsSection(locale),
    getReviewsSection(locale),
    getFAQSection(locale),
    getTranslations("Hero"),
  ]);

  const enrichedHeroData: HeroSection = {
    ...heroData,
    subtitle_1: heroData.subtitle_1 ?? tHero("subtitle_1"),
    subtitle_2: heroData.subtitle_2 ?? tHero("subtitle_2"),
  };

  return (
    <div className={cn("font-sans", font2.variable)}>
      {/* HERO — full dark green */}
      <HeroV1 data={enrichedHeroData} locale={locale} />

      {/* ABOUT */}
      <AboutV1 data={aboutData} />

      {/* IMPACT — bento grid */}
      <ImpactV1 data={impactData} />

      {/* PRODUCT */}
      <ProductV1 data={mbio7Data} locale={locale} />

      {/* CONTACT */}
      <ContactV1 data={contactData} />

      {/* PRESS */}
      <PressV1 data={blogsData} locale={locale} />

      {/* REVIEWS */}
      <ReviewsV1 data={reviewsData} />

      {/* FAQ */}
      <FAQV1 data={faqData} />
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

const HeroV1 = ({ data, locale }: { data: HeroSection; locale: string }) => (
  <div className="relative min-h-[92vh] bg-[#071a0e] flex items-center overflow-hidden">
    {/* Background texture */}
    <div className="absolute inset-0 opacity-20">
      <Image
        src={HeroBg}
        alt=""
        fill
        className="object-cover object-center"
        placeholder="blur"
      />
    </div>
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#071a0e] via-[#0d2e15]/80 to-[#0d7f40]/30" />

    {/* Floating badge */}
    <div className="absolute top-8 right-8 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
      <Leaf className="h-4 w-4 text-[#84bc40]" />
      <span className="text-white/90 text-sm font-medium">Solar Impulse Label</span>
    </div>

    <Container className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-24">
      {/* Text side */}
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-[#84bc40]/20 border border-[#84bc40]/40 rounded-full px-4 py-1.5 mb-8">
          <span className="text-[#84bc40] text-sm font-medium tracking-wider uppercase">
            {data.subtitle_1}
          </span>
          <Image src={Mbio7logo} alt="MBio7" width={60} height={30} className="h-6 w-auto" />
          <span className="text-[#84bc40] text-sm font-medium tracking-wider uppercase">
            {data.subtitle_2}
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6">
          <span className="block">{data.title_part1}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(90deg, #84bc40, #0d7f40)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {data.title_part2}
          </span>
        </h1>

        <p className="text-white/60 text-lg max-w-[48ch] mb-10 leading-relaxed">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
          <Link
            href={locale === "fr" ? "1/pages/à-propos" : "1/pages/about"}
            locale={locale}
            className="inline-flex items-center gap-2 bg-[#84bc40] hover:bg-[#0d7f40] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base group"
          >
            {data.learnmore}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact-form"
            locale={locale}
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 text-base"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      {/* Image side */}
      <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          <Image
            src={HeroFg}
            alt="WoodWise"
            width={600}
            height={500}
            className="w-full object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a0e]/60 to-transparent" />
        </div>

        {/* Floating stats card */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl hidden md:block">
          <p className="text-3xl font-bold text-[#0d7f40]">95%</p>
          <p className="text-xs text-gray-500 mt-0.5">Bois recyclé</p>
        </div>
        <div className="absolute -top-6 -right-6 bg-[#0d7f40] rounded-2xl p-4 shadow-xl hidden md:block">
          <p className="text-3xl font-bold text-white">−7,66</p>
          <p className="text-xs text-green-200 mt-0.5">kg CO₂ / panneau</p>
        </div>
      </div>
    </Container>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-white/30 text-xs uppercase tracking-widest">Découvrir</span>
      <ChevronDown className="h-5 w-5 text-white/30 animate-bounce" />
    </div>
  </div>
);

// ─── About ───────────────────────────────────────────────────────────────────

const AboutV1 = ({ data }: { data: AboutSection }) => {
  const services = [
    { title: data.services.service1.title, description: data.services.service1.description, icon: <BrickWall className="h-5 w-5" /> },
    { title: data.services.service2.title, description: data.services.service2.description, icon: <Sprout className="h-5 w-5" /> },
    { title: data.services.service3.title, description: data.services.service3.description, icon: <Handshake className="h-5 w-5" /> },
    { title: data.services.service4.title, description: data.services.service4.description, icon: <Medal className="h-5 w-5" /> },
  ];

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#0d7f40] uppercase tracking-widest text-sm font-semibold mb-3">À propos</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#071a0e] text-center">
            {data.title_part1}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Vision card */}
          <div className="group relative bg-[#071a0e] rounded-3xl p-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Image src={AproposImg} alt="" fill className="object-cover" placeholder="blur" />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-[#84bc40]/20 flex items-center justify-center mb-6">
                <Eye className="h-5 w-5 text-[#84bc40]" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{data.ourvision.title}</h3>
              <p className="text-white/60 leading-relaxed">{data.ourvision.description}</p>
            </div>
          </div>

          {/* Mission card */}
          <div className="group relative bg-[#0d7f40] rounded-3xl p-8 overflow-hidden">
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Projector className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">{data.ourmission.title}</h3>
              <p className="text-white/80 leading-relaxed">{data.ourmission.description}</p>
            </div>
          </div>
        </div>

        {/* Services row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group border border-gray-100 hover:border-[#84bc40]/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0d7f40]/10 hover:-translate-y-1"
            >
              <div className="w-9 h-9 rounded-lg bg-[#84bc40]/10 group-hover:bg-[#84bc40]/20 flex items-center justify-center mb-4 text-[#0d7f40] transition-colors">
                {s.icon}
              </div>
              <h4 className="font-semibold text-[#071a0e] mb-2 text-sm leading-snug">{s.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// ─── Impact / Stats ──────────────────────────────────────────────────────────

const ImpactV1 = ({ data }: { data: ImpactSection }) => (
  <Section className="bg-[#071a0e]">
    <Container className="max-w-7xl">
      <div className="text-center mb-16">
        <span className="text-[#84bc40] uppercase tracking-widest text-sm font-semibold mb-3 block">Impact</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          {data.title_part1}{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #84bc40, #0d7f40)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {data.title_part2}
          </span>
        </h2>
        <p className="text-white/50 mt-4 max-w-[50ch] mx-auto">{data.description}</p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="group bg-[#0d2e15] border border-[#84bc40]/20 hover:border-[#84bc40]/50 rounded-3xl p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1">
          <p className="text-[#84bc40] text-7xl font-bold mb-3">{data.stat1.value}</p>
          <p className="text-white/70 text-base">{data.stat1.title}</p>
        </div>
        <div className="group bg-[#0d7f40] rounded-3xl p-10 flex flex-col items-center justify-center text-center md:row-span-1 transition-all duration-300 hover:-translate-y-1">
          <p className="text-white text-7xl font-bold mb-3">{data.stat2.value}</p>
          <p className="text-white/80 text-base">{data.stat2.title}</p>
        </div>
        <div className="group bg-[#0d2e15] border border-[#84bc40]/20 hover:border-[#84bc40]/50 rounded-3xl p-10 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1">
          <p className="text-[#84bc40] text-7xl font-bold mb-3">{data.stat3.value}</p>
          <p className="text-white/70 text-base">{data.stat3.title}</p>
        </div>
      </div>
    </Container>
  </Section>
);

// ─── Product ─────────────────────────────────────────────────────────────────

const ProductV1 = ({ data, locale }: { data: Mbio7Section; locale: string }) => (
  <Section className="bg-white">
    <Container className="max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Video / image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={Mbio7Img}
            alt="MBio7"
            width={600}
            height={400}
            className="w-full object-cover"
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="https://www.youtube.com/watch?v=jUQu9_26Gdg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center hover:scale-110 transition-transform">
                <PlayIcon className="h-8 w-8 fill-white text-white ml-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-[#0d7f40] uppercase tracking-widest text-sm font-semibold mb-4 block">Notre produit phare</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#071a0e] mb-6">
            {data.title_part1}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">{data.description}</p>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {Object.values(data.tags).map((tag, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#0d7f40] flex-shrink-0" />
                <span className="text-gray-700 text-sm">{tag}</span>
              </div>
            ))}
          </div>

          <Link
            href={locale === "fr" ? "1/pages/à-propos" : "1/pages/about"}
            locale={locale}
            className="inline-flex items-center gap-2 bg-[#071a0e] hover:bg-[#0d7f40] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 group"
          >
            {data.learnmore}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Container>
  </Section>
);

// ─── Contact ─────────────────────────────────────────────────────────────────

const contactInfo = {
  phone: "80157 59053",
  email: "contact@woodwise.fr",
  address: "QUARTIER CUNI, SOSPEL, 06380, FR",
};

const ContactV1 = ({ data }: { data: ContactSectionContent }) => (
  <Section id="contact" className="bg-[#f5f9f5]">
    <Container className="max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#071a0e]">{data.title}</h2>
        <p className="text-gray-500 mt-4 max-w-[50ch] mx-auto">{data.description}</p>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Form — 3 cols */}
        <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src={ContactBg} alt="" fill className="object-cover" placeholder="blur" />
          </div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>

        {/* Info — 2 cols */}
        <div className="lg:col-span-2 bg-[#071a0e] rounded-3xl p-8 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{data.contactinfo.title}</h3>
            <p className="text-white/60 text-sm mb-8">{data.contactinfo.description}</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#84bc40]/20 flex items-center justify-center">
                <Phone className="h-4 w-4 text-[#84bc40]" />
              </div>
              <span className="text-white/80 text-sm">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#84bc40]/20 flex items-center justify-center">
                <Mail className="h-4 w-4 text-[#84bc40]" />
              </div>
              <span className="text-white/80 text-sm">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#84bc40]/20 flex items-center justify-center">
                <PinIcon className="h-4 w-4 text-[#84bc40]" />
              </div>
              <span className="text-white/80 text-sm">{contactInfo.address}</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs">Lundi – Vendredi · 9h00–17h00</p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

// ─── Press / Blogs ───────────────────────────────────────────────────────────

const pressBlogs = [
  { date: "06 Mars 2019", title: "Il fabrique des maisons qui résistent à toutes conditions climatiques", description: "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7.", link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801", image: NiceMatin },
  { date: "1er janvier 2019", title: "Libé des solutions : Le bois mis en demeure", description: "La maison écologique MBio7 est l'alliance des deux. Ces habitants de Sospel ont créé des maisons en panneaux de bois recyclé.", link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/", image: Liberation },
  { date: "14 Août 2018", title: "Une souscription lancée pour des maisons d'urgence", description: "Lauréats du concours Lépine, ils s'apprêtent à commercialiser leur concept d'habitat humanitaire.", link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883", image: Monaco },
];

const PressV1 = ({ data, locale }: { data: BlogsSection; locale: string }) => (
  <Section className="bg-white">
    <Container>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[#0d7f40] uppercase tracking-widest text-sm font-semibold mb-3 block">Presse</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#071a0e]">
            <span
              style={{
                background: "linear-gradient(90deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part1}
            </span>{" "}
            {data.title_part2}
          </h2>
        </div>
        <Link
          href={locale === "fr" ? "1/pages/actualités" : "1/pages/news"}
          locale={locale}
          className="text-[#0d7f40] hover:text-[#84bc40] font-medium flex items-center gap-2 group whitespace-nowrap transition-colors"
        >
          {data.viewmore}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pressBlogs.map((blog, i) => (
          <Link key={i} href={blog.link as any} target="_blank" rel="noopener noreferrer">
            <div className="group rounded-2xl overflow-hidden border border-gray-100 hover:border-[#84bc40]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
              <div className="overflow-hidden h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs text-[#0d7f40] font-medium mb-2">{blog.date}</span>
                <h4 className="font-bold text-[#071a0e] text-lg mb-3 leading-snug">{blog.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  </Section>
);

// ─── Reviews ─────────────────────────────────────────────────────────────────

const ReviewsV1 = ({ data }: { data: ReviewsSection }) => {
  const reviews = Object.values(data.reviews).map((r) => ({
    name: r.name,
    rating: parseInt(r.stars, 10),
    comment: r.comment,
  }));

  return (
    <Section className="bg-[#071a0e]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            {data.title_part1}
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-[50ch] mx-auto text-sm">{data.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-[#0d2e15] border border-[#84bc40]/20 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-12 w-12 bg-[#0d7f40]">
                  <AvatarFallback className="bg-[#0d7f40] text-white font-bold">
                    {r.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">{r.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-[#84bc40] text-[#84bc40]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;{r.comment}&rdquo;</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQV1 = ({ data }: { data: FAQSection }) => {
  const items = Object.values(data.questions);
  return (
    <Section className="bg-white">
      <Container className="max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#071a0e]">
            {data.title_part1}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Accordion key={i} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="border border-gray-100 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-[#071a0e] font-medium py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};
