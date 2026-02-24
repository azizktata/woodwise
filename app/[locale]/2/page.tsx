// Version 2 — Magazine Editorial
// Design: White/light, editorial magazine layout, asymmetric, large photography
import { Section, Container, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Link } from "@/i18n/routing";
import HeroImage from "@/public/hero.jpg";
import AproposImage from "@/public/Apropos.jpg";
import Mbio7Image from "@/public/Mbio7.jpg";
import Mbio7ProductImage from "@/public/mbio7product.png";
import Mbio7logo from "@/public/mbio7-logo.png";
import NiceMatin from "@/public/nice-matin.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
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
  ArrowUpRight,
  Quote,
  CheckCheck,
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
import { setRequestLocale } from "next-intl/server";
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

const font = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default async function Home2({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [
    heroData, aboutData, impactData, mbio7Data,
    contactData, blogsData, reviewsData, faqData,
  ] = await Promise.all([
    getHeroSection(locale), getAboutSection(locale), getImpactSection(locale),
    getMbio7Section(locale), getContactSection(locale), getBlogsSection(locale),
    getReviewsSection(locale), getFAQSection(locale),
  ]);

  return (
    <div className={cn("font-sans bg-[#fafaf8]", font.variable)}>
      <HeroV2 data={heroData} locale={locale} />
      <ImpactV2 data={impactData} />
      <AboutV2 data={aboutData} />
      <ProductV2 data={mbio7Data} locale={locale} />
      <PressV2 data={blogsData} locale={locale} />
      <ReviewsV2 data={reviewsData} />
      <FAQV2 data={faqData} />
      <ContactV2 data={contactData} />
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

const HeroV2 = ({ data, locale }: { data: HeroSection; locale: string }) => (
  <section className="bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-12 pb-0">
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-px flex-1 bg-gray-200 max-w-[60px]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          {data.subtitle_1}
        </span>
        <Image src={Mbio7logo} alt="MBio7" width={56} height={28} className="h-7 w-auto" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          {data.subtitle_2}
        </span>
        <div className="h-px flex-1 bg-gray-200 max-w-[60px]" />
      </div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-end">
        {/* Headline */}
        <div>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter text-[#111] uppercase mb-8">
            <span className="block">{data.title_part1}</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #84bc40 0%, #0d7f40 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-gray-500 text-base max-w-[42ch] leading-relaxed">
              {data.description}
            </p>
            <Link
              href={data.learnMoreLink as any}
              locale={locale}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#111] hover:bg-[#0d7f40] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm group"
            >
              {data.learnMore}
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right side — vertical label */}
        <div className="hidden lg:flex flex-col items-center gap-4 pb-4">
          <div className="writing-mode-vertical text-xs font-medium text-gray-300 uppercase tracking-[0.3em]" style={{ writingMode: "vertical-rl" }}>
            Construction écologique
          </div>
          <div className="w-px h-16 bg-gray-200" />
        </div>
      </div>
    </div>

    {/* Full-width hero image */}
    <div className="mt-10 relative h-[50vh] sm:h-[60vh] overflow-hidden">
      <Image
        src={HeroImage}
        alt="WoodWise"
        fill
        className="object-cover object-center"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      {/* Overlay stats */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-end gap-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm">
          <p className="text-[#0d7f40] text-3xl font-black">95%</p>
          <p className="text-gray-500 text-xs">bois recyclé</p>
        </div>
        <div className="bg-[#0d7f40]/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-sm">
          <p className="text-white text-3xl font-black">−7,66</p>
          <p className="text-green-200 text-xs">kg CO₂ / panneau</p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Impact — dark stripe ─────────────────────────────────────────────────────

const ImpactV2 = ({ data }: { data: ImpactSection }) => (
  <div className="bg-[#111] py-10">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {[
          { value: data.stat1.value, title: data.stat1.title },
          { value: data.stat2.value, title: data.stat2.title },
          { value: data.stat3.value, title: data.stat3.title },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center py-8 px-6">
            <span
              className="text-5xl sm:text-6xl font-black"
              style={{
                background: "linear-gradient(135deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {stat.value}
            </span>
            <span className="text-white/50 text-sm mt-2 max-w-[20ch]">{stat.title}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── About ───────────────────────────────────────────────────────────────────

const AboutV2 = ({ data }: { data: AboutSection }) => {
  const services = [
    { title: data.services.service1.title, desc: data.services.service1.description, icon: <BrickWall className="h-5 w-5" /> },
    { title: data.services.service2.title, desc: data.services.service2.description, icon: <Sprout className="h-5 w-5" /> },
    { title: data.services.service3.title, desc: data.services.service3.description, icon: <Handshake className="h-5 w-5" /> },
    { title: data.services.service4.title, desc: data.services.service4.description, icon: <Medal className="h-5 w-5" /> },
  ];

  return (
    <section className="bg-[#fafaf8] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top: asymmetric grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: image */}
          <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: 400 }}>
            <Image
              src={AproposImage}
              alt="À propos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d7f40]/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white/90 text-2xl font-bold leading-snug">
                &ldquo;{data.ourVision.description}&rdquo;
              </p>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center">
            <div className="border-l-4 border-[#84bc40] pl-6 mb-8">
              <h2 className="text-4xl sm:text-5xl font-black text-[#111] leading-tight">
                {data.title_part1}
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #84bc40, #0d7f40)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {data.title_part2}
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-[#0d7f40]" />
                  <h4 className="font-bold text-[#111]">{data.ourVision.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-6">{data.ourVision.description}</p>
              </div>
              <div className="h-px bg-gray-100" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Projector className="h-4 w-4 text-[#0d7f40]" />
                  <h4 className="font-bold text-[#111]">{data.ourMission.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed pl-6">{data.ourMission.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services — horizontal list */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8">
            Nos engagements
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {services.map((s, i) => (
              <div key={i} className="bg-[#fafaf8] hover:bg-white p-6 transition-colors group">
                <div className="text-[#0d7f40] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h4 className="font-bold text-[#111] text-sm mb-2 leading-snug">{s.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Product ─────────────────────────────────────────────────────────────────

const ProductV2 = ({ data, locale }: { data: Mbio7Section; locale: string }) => (
  <section className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text first on desktop */}
        <div className="order-2 lg:order-1">
          <div className="h-px w-16 bg-[#84bc40] mb-8" />
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] leading-tight mb-6">
            {data.title_part1}
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #84bc40, #0d7f40)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8 text-base">{data.description}</p>

          {/* Tags as badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.values(data.tags).map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-[#f0f8f0] text-[#0d7f40] text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                <CheckCheck className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={data.learnMoreLink as any}
            locale={locale}
            className="inline-flex items-center gap-2 border-2 border-[#111] hover:bg-[#111] text-[#111] hover:text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 group text-sm"
          >
            {data.learnMore}
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Image with video overlay */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image src={Mbio7Image} alt="MBio7" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://www.youtube.com/watch?v=jUQu9_26Gdg" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <PlayIcon className="h-6 w-6 fill-[#0d7f40] text-[#0d7f40] ml-0.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Product image overlay */}
          <div className="absolute -bottom-8 -right-4 bg-white rounded-2xl p-3 shadow-xl hidden lg:block">
            <Image src={Mbio7ProductImage} alt="MBio7 product" width={140} height={140} className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Press / Blogs ───────────────────────────────────────────────────────────

const pressBlogs = [
  { date: "06 Mars 2019", title: "Il fabrique des maisons qui résistent à toutes conditions climatiques", description: "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7.", link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801", image: NiceMatin },
  { date: "1er janvier 2019", title: "Libé des solutions : Le bois mis en demeure", description: "La maison écologique MBio7 est l'alliance des deux. Ces habitants de Sospel ont créé des maisons en panneaux de bois recyclé.", link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/", image: Liberation },
  { date: "14 Août 2018", title: "Une souscription lancée pour des maisons d'urgence", description: "Lauréats du concours Lépine, ils s'apprêtent à commercialiser leur concept d'habitat humanitaire.", link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883", image: Monaco },
];

const PressV2 = ({ data, locale }: { data: BlogsSection; locale: string }) => (
  <section className="bg-[#fafaf8] py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      {/* Header line */}
      <div className="flex items-baseline justify-between mb-12 border-b border-gray-200 pb-6">
        <h2 className="text-3xl sm:text-4xl font-black text-[#111]">
          <span
            style={{
              background: "linear-gradient(135deg, #84bc40, #0d7f40)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {data.title_part1}
          </span>{" "}
          <span className="text-[#111]">{data.title_part2}</span>
        </h2>
        <Link
          href={data.ViewMoreLink as any}
          locale={locale}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#0d7f40] hover:text-[#84bc40] transition-colors"
        >
          {data.ViewMore} <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Featured + 2 small */}
      <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
        {/* Featured */}
        <Link href={pressBlogs[0].link as any} target="_blank" rel="noopener noreferrer" className="group">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] mb-4">
            <Image src={pressBlogs[0].image} alt={pressBlogs[0].title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-green-300 text-xs font-medium">{pressBlogs[0].date}</span>
              <h3 className="text-white text-xl font-bold mt-1 leading-snug">{pressBlogs[0].title}</h3>
            </div>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">{pressBlogs[0].description}</p>
        </Link>

        {/* Small cards */}
        <div className="flex flex-col gap-6">
          {pressBlogs.slice(1).map((blog, i) => (
            <Link key={i} href={blog.link as any} target="_blank" rel="noopener noreferrer" className="group flex gap-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div>
                <span className="text-[#0d7f40] text-xs font-medium">{blog.date}</span>
                <h4 className="text-[#111] text-sm font-bold leading-snug mt-1 group-hover:text-[#0d7f40] transition-colors">
                  {blog.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ─── Reviews ─────────────────────────────────────────────────────────────────

const ReviewsV2 = ({ data }: { data: ReviewsSection }) => {
  const reviews = Object.values(data.reviews).map((r) => ({
    name: r.name,
    rating: parseInt(r.stars, 10),
    comment: r.comment,
  }));

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Label */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#111] leading-tight mb-6">
              {data.title_part1}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #84bc40, #0d7f40)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {data.title_part2}
              </span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-[40ch]">{data.description}</p>
          </div>

          {/* Reviews */}
          <div className="flex flex-col gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#fafaf8] rounded-2xl p-6 border border-gray-100">
                <Quote className="h-8 w-8 text-[#84bc40] mb-4 opacity-60" />
                <p className="text-[#111] text-base leading-relaxed mb-6 italic">&ldquo;{r.comment}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-[#0d7f40] text-white text-sm font-bold">
                      {r.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#111] text-sm">{r.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-[#84bc40] text-[#84bc40]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQV2 = ({ data }: { data: FAQSection }) => {
  const items = Object.values(data.questions);
  return (
    <section className="bg-[#fafaf8] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-4">FAQ</p>
            <h2 className="text-4xl font-black text-[#111] leading-tight">
              {data.title_part1}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #84bc40, #0d7f40)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {data.title_part2}
              </span>
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {items.map((item, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value={item.question} className="border-0">
                  <AccordionTrigger className="text-left text-[#111] font-semibold py-5 hover:no-underline hover:text-[#0d7f40] transition-colors text-sm">
                    <span className="mr-4 text-[#84bc40] font-black">{String(i + 1).padStart(2, "0")}</span>
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 pb-5 pl-10 leading-relaxed text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Contact ─────────────────────────────────────────────────────────────────

const contactInfo = {
  phone: "80157 59053",
  email: "contact@woodwise.fr",
  address: "QUARTIER CUNI, SOSPEL, 06380, FR",
};

const ContactV2 = ({ data }: { data: ContactSectionContent }) => (
  <section id="contact" className="bg-white py-20 sm:py-28 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
        {/* Form */}
        <div>
          <h2 className="text-4xl font-black text-[#111] mb-2">{data.title}</h2>
          <p className="text-gray-400 mb-8 text-sm">{data.description}</p>
          <ContactForm sendLabel={data.send} loadingLabel={data.loading} />
        </div>

        {/* Info block */}
        <div className="relative rounded-3xl overflow-hidden min-h-[360px]">
          <Image src={ContactBg} alt="Contact" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0d7f40]/80" />
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-white text-2xl font-bold mb-3">{data.contactInfo.title}</h3>
              <p className="text-white/70 text-sm">{data.contactInfo.description}</p>
            </div>
            <div className="flex flex-col gap-5 mt-8">
              {[
                { icon: <Phone className="h-4 w-4" />, val: contactInfo.phone },
                { icon: <Mail className="h-4 w-4" />, val: contactInfo.email },
                { icon: <PinIcon className="h-4 w-4" />, val: contactInfo.address },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="text-white/60">{item.icon}</div>
                  {item.val}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
