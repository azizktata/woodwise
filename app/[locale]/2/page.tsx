// Version 2 — Warm Nature / Organic Story
// Design: Earthy tones, organic shapes, story-telling, warm greens + cream
import { Section, Container, cn } from "@/components/craft";
import { Link } from "@/i18n/routing";
import Mbio7logo from "@/public/mbio7-logo.png";
import NiceMatin from "@/public/nice-matin.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
import HeroImg from "@/public/hero-4.jpg";
import AproposImg from "@/public/Apropos.jpg";
import Mbio7Img from "@/public/Mbio7.jpg";
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
  Leaf,
  TreePine,
  Recycle,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Onest } from "next/font/google";
import ContactForm from "@/components/contact-form";
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

const font = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["300", "400", "500", "600", "700"],
});

// Warm color palette
const C = {
  cream: "#faf6ef",
  warmWhite: "#f5f0e8",
  sand: "#e8dcc8",
  brown: "#8b6b3d",
  darkBrown: "#3d2b1a",
  forest: "#1a3d2b",
  leafGreen: "#4a8c3f",
  brightGreen: "#84bc40",
  accent: "#d4a853",
};

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
    tHero,
  ] = await Promise.all([
    getHeroSection(locale), getAboutSection(locale), getImpactSection(locale),
    getMbio7Section(locale), getContactSection(locale), getBlogsSection(locale),
    getReviewsSection(locale), getFAQSection(locale),
    getTranslations("Hero"),
  ]);

  const enrichedHeroData: HeroSection = {
    ...heroData,
    subtitle_1: heroData.subtitle_1 ?? tHero("subtitle_1"),
    subtitle_2: heroData.subtitle_2 ?? tHero("subtitle_2"),
  };

  return (
    <div className={cn("font-sans", font.variable)} style={{ background: C.cream }}>
      <HeroV2 data={enrichedHeroData} locale={locale} />
      <NatureStrip />
      <AboutV2 data={aboutData} />
      <ImpactV2 data={impactData} />
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
  <section
    className="relative min-h-[90vh] flex items-center overflow-hidden"
    style={{ background: `linear-gradient(135deg, ${C.cream} 0%, ${C.warmWhite} 50%, #e8f5e4 100%)` }}
  >
    <div
      className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
      style={{ background: `radial-gradient(circle, ${C.brightGreen}, transparent 70%)` }}
    />
    <div
      className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
      style={{ background: `radial-gradient(circle, ${C.leafGreen}, transparent 70%)` }}
    />

    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-medium"
            style={{ background: `${C.leafGreen}20`, color: C.forest, border: `1px solid ${C.leafGreen}40` }}
          >
            <Leaf className="h-4 w-4" />
            {data.subtitle_1}
            <Image src={Mbio7logo} alt="MBio7" width={56} height={28} className="h-6 w-auto" />
            {data.subtitle_2}
          </div>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6"
            style={{ color: C.forest }}
          >
            {data.title_part1}
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {data.title_part2}
            </span>
          </h1>

          <p className="text-base leading-relaxed mb-10 max-w-[44ch]" style={{ color: `${C.forest}99` }}>
            {data.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={data.learnmorelink as any}
              locale={locale}
              className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] group text-white"
              style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})` }}
            >
              {data.learnmore}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 font-medium px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "transparent", border: `2px solid ${C.leafGreen}60`, color: C.forest }}
            >
              Nous contacter
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 pt-10" style={{ borderTop: `1px solid ${C.sand}` }}>
            {[
              { icon: <Globe2 className="h-4 w-4" />, label: "Solar Impulse Label" },
              { icon: <Medal className="h-4 w-4" />, label: "Médaille Concours Lépine 2015" },
              { icon: <Recycle className="h-4 w-4" />, label: "95% bois recyclé" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm" style={{ color: `${C.forest}80` }}>
                <span style={{ color: C.leafGreen }}>{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", border: `4px solid ${C.sand}` }}
          >
            <Image
              src={HeroImg}
              alt="WoodWise"
              width={600}
              height={600}
              className="w-full object-cover"
              placeholder="blur"
              style={{ aspectRatio: "1/1" }}
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.leafGreen}20, transparent)` }} />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl px-5 py-4 shadow-lg" style={{ background: C.forest, color: "white" }}>
            <p className="text-3xl font-bold" style={{ color: C.brightGreen }}>95%</p>
            <p className="text-xs opacity-70 mt-0.5">Bois recyclé</p>
          </div>
          <div className="absolute top-8 -right-4 rounded-2xl px-5 py-4 shadow-lg" style={{ background: C.warmWhite, border: `1px solid ${C.sand}` }}>
            <p className="text-3xl font-bold" style={{ color: C.leafGreen }}>−7,66</p>
            <p className="text-xs mt-0.5" style={{ color: C.brown }}>kg CO₂ / panneau</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Nature strip ─────────────────────────────────────────────────────────────

const NatureStrip = () => (
  <div className="py-4 overflow-hidden" style={{ background: C.forest }}>
    <div className="flex items-center gap-12 px-12 w-full justify-center flex-wrap">
      {[
        { icon: <TreePine className="h-4 w-4" />, text: "Forêts préservées" },
        { icon: <Recycle className="h-4 w-4" />, text: "Économie circulaire" },
        { icon: <Leaf className="h-4 w-4" />, text: "Bilan carbone négatif" },
        { icon: <Globe2 className="h-4 w-4" />, text: "Impact mondial" },
        { icon: <Sprout className="h-4 w-4" />, text: "Innovation durable" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-white/70 text-sm whitespace-nowrap">
          <span style={{ color: C.brightGreen }}>{item.icon}</span>
          {item.text}
        </div>
      ))}
    </div>
  </div>
);

// ─── About ───────────────────────────────────────────────────────────────────

const AboutV2 = ({ data }: { data: AboutSection }) => {
  const services = [
    { title: data.services.service1.title, desc: data.services.service1.description, icon: <BrickWall className="h-6 w-6" />, color: "#84bc40" },
    { title: data.services.service2.title, desc: data.services.service2.description, icon: <Sprout className="h-6 w-6" />, color: "#4a8c3f" },
    { title: data.services.service3.title, desc: data.services.service3.description, icon: <Handshake className="h-6 w-6" />, color: "#d4a853" },
    { title: data.services.service4.title, desc: data.services.service4.description, icon: <Medal className="h-6 w-6" />, color: "#c07830" },
  ];

  return (
    <section className="py-20 sm:py-28" style={{ background: C.warmWhite }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Leaf className="h-5 w-5" style={{ color: C.leafGreen }} />
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: C.leafGreen }}>Notre Histoire</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-8" style={{ color: C.forest }}>
              {data.title_part1}{" "}
              <span style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {data.title_part2}
              </span>
            </h2>
            <div className="space-y-8">
              <div className="rounded-2xl p-6 border" style={{ background: `${C.leafGreen}08`, borderColor: `${C.leafGreen}20` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-5 w-5" style={{ color: C.leafGreen }} />
                  <h4 className="font-bold text-lg" style={{ color: C.forest }}>{data.ourvision.title}</h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.darkBrown }}>{data.ourvision.description}</p>
              </div>
              <div className="rounded-2xl p-6 border" style={{ background: `${C.brightGreen}08`, borderColor: `${C.brightGreen}20` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Projector className="h-5 w-5" style={{ color: C.brightGreen }} />
                  <h4 className="font-bold text-lg" style={{ color: C.forest }}>{data.ourmission.title}</h4>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.darkBrown }}>{data.ourmission.description}</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md overflow-hidden shadow-xl" style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", border: `3px solid ${C.sand}` }}>
              <Image src={AproposImg} alt="À propos" width={500} height={500} placeholder="blur" className="w-full object-cover" style={{ aspectRatio: "1/1" }} />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: "white", border: `1px solid ${C.sand}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: `${s.color}15`, color: s.color }}>
                {s.icon}
              </div>
              <h4 className="font-semibold text-sm leading-snug mb-2" style={{ color: C.forest }}>{s.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: `${C.darkBrown}99` }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Impact ───────────────────────────────────────────────────────────────────

const ImpactV2 = ({ data }: { data: ImpactSection }) => (
  <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${C.forest}, #0d7f40)` }}>
    <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${C.brightGreen}, transparent)` }} />
    <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-10" style={{ background: `radial-gradient(circle, ${C.brightGreen}, transparent)` }} />
    <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}>
          <Leaf className="h-4 w-4" style={{ color: C.brightGreen }} />
          <span className="text-white/80 text-sm">Notre Impact</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          {data.title_part1}{" "}<span style={{ color: C.brightGreen }}>{data.title_part2}</span>
        </h2>
        <p className="text-white/60 max-w-[50ch] mx-auto text-sm">{data.description}</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { value: data.stat1.value, title: data.stat1.title, accent: C.brightGreen },
          { value: data.stat2.value, title: data.stat2.title, accent: C.accent },
          { value: data.stat3.value, title: data.stat3.title, accent: "#7dd87d" },
        ].map((stat, i) => (
          <div key={i} className="text-center rounded-3xl p-10 transition-transform hover:-translate-y-1"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}>
            <p className="text-7xl font-bold mb-4" style={{ color: stat.accent }}>{stat.value}</p>
            <p className="text-white/70 text-sm leading-relaxed">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── Product ─────────────────────────────────────────────────────────────────

const ProductV2 = ({ data, locale }: { data: Mbio7Section; locale: string }) => (
  <section className="py-20 sm:py-28" style={{ background: C.cream }}>
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <TreePine className="h-5 w-5" style={{ color: C.leafGreen }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: C.leafGreen }}>Notre Produit</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: C.forest }}>
            {data.title_part1}{" "}
            <span style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {data.title_part2}
            </span>
          </h2>
          <p className="leading-relaxed mb-8 text-sm" style={{ color: `${C.darkBrown}cc` }}>{data.description}</p>
          <div className="flex flex-col gap-3 mb-8">
            {Object.values(data.tags).map((tag, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${C.brightGreen}20` }}>
                  <Leaf className="h-3 w-3" style={{ color: C.leafGreen }} />
                </div>
                <span className="text-sm" style={{ color: C.darkBrown }}>{tag}</span>
              </div>
            ))}
          </div>
          <Link href={data.learnmorelink as any} locale={locale}
            className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] group text-white text-sm"
            style={{ background: C.forest }}>
            {data.learnmore}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ border: `3px solid ${C.sand}` }}>
            <Image src={Mbio7Img} alt="MBio7" width={600} height={450} className="w-full object-cover" placeholder="blur" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.forest}60, transparent)` }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href="https://www.youtube.com/watch?v=jUQu9_26Gdg" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl" style={{ background: "rgba(255,255,255,0.9)" }}>
                  <PlayIcon className="h-6 w-6 ml-0.5" style={{ fill: C.leafGreen, color: C.leafGreen }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ─── Press ────────────────────────────────────────────────────────────────────

const pressBlogs = [
  { date: "06 Mars 2019", title: "Il fabrique des maisons qui résistent à toutes conditions climatiques", description: "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7.", link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801", image: NiceMatin },
  { date: "1er janvier 2019", title: "Libé des solutions : Le bois mis en demeure", description: "La maison écologique MBio7 est l'alliance des deux. Ces habitants de Sospel ont créé des maisons en panneaux de bois recyclé.", link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/", image: Liberation },
  { date: "14 Août 2018", title: "Une souscription lancée pour des maisons d'urgence", description: "Lauréats du concours Lépine, ils s'apprêtent à commercialiser leur concept d'habitat humanitaire.", link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883", image: Monaco },
];

const PressV2 = ({ data, locale }: { data: BlogsSection; locale: string }) => (
  <section className="py-20 sm:py-28" style={{ background: C.warmWhite }}>
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="flex items-center gap-3 mb-4">
        <Leaf className="h-5 w-5" style={{ color: C.leafGreen }} />
        <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: C.leafGreen }}>Presse</span>
      </div>
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: C.forest }}>
          <span style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {data.title_part1}
          </span>{" "}{data.title_part2}
        </h2>
        <Link href={locale === "fr" ? "/pages/actualités" : "/pages/news"} locale={locale}
          className="hidden sm:flex items-center gap-2 text-sm font-semibold transition-colors" style={{ color: C.leafGreen }}>
          {data.viewmore} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pressBlogs.map((blog, i) => (
          <Link key={i} href={blog.link as any} target="_blank" rel="noopener noreferrer" className="group">
            <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
              style={{ background: "white", border: `1px solid ${C.sand}` }}>
              <div className="overflow-hidden h-44">
                <Image src={blog.image} alt={blog.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-medium mb-2" style={{ color: C.leafGreen }}>{blog.date}</span>
                <h4 className="font-bold text-base leading-snug mb-3 flex-1" style={{ color: C.forest }}>{blog.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: `${C.darkBrown}99` }}>{blog.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

// ─── Reviews ─────────────────────────────────────────────────────────────────

const ReviewsV2 = ({ data }: { data: ReviewsSection }) => {
  const reviews = Object.values(data.reviews).map((r) => ({ name: r.name, rating: parseInt(r.stars, 10), comment: r.comment }));
  return (
    <section className="py-20 sm:py-28" style={{ background: C.cream }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: C.forest }}>
            {data.title_part1}<br />
            <span style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {data.title_part2}
            </span>
          </h2>
          <p className="text-sm max-w-[50ch] mx-auto" style={{ color: `${C.darkBrown}99` }}>{data.description}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg" style={{ background: "white", border: `1px solid ${C.sand}` }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4" style={{ fill: C.brightGreen, color: C.brightGreen }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: C.darkBrown }}>&ldquo;{r.comment}&rdquo;</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`, color: "white" }}>
                    {r.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <p className="font-semibold text-sm" style={{ color: C.forest }}>{r.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQV2 = ({ data }: { data: FAQSection }) => {
  const items = Object.values(data.questions);
  return (
    <section className="py-20 sm:py-28" style={{ background: C.warmWhite }}>
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: C.forest }}>
            {data.title_part1}{" "}
            <span style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {data.title_part2}
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <Accordion key={i} type="single" collapsible>
              <AccordionItem value={item.question} className="rounded-2xl px-6 overflow-hidden border-0"
                style={{ background: "white", border: `1px solid ${C.sand}` }}>
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline text-sm" style={{ color: C.forest }}>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed" style={{ color: `${C.darkBrown}cc` }}>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Contact ─────────────────────────────────────────────────────────────────

const ContactV2 = ({ data }: { data: ContactSectionContent }) => (
  <section id="contact" className="relative overflow-hidden" style={{ background: C.forest }}>
    {/* Organic decorative orbs */}
    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: `radial-gradient(circle, ${C.leafGreen}30, transparent 70%)` }} />
    <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: `radial-gradient(circle, ${C.brightGreen}20, transparent 70%)` }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-[5fr_6fr] gap-12 items-start">

        {/* Left: brand info */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="h-5 w-5" style={{ color: C.brightGreen }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: C.brightGreen }}>Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-10 max-w-[42ch]">
            {data.description}
          </p>

          {/* Contact info cards */}
          <div className="flex flex-col gap-3 mb-8">
            {[
              { icon: <Phone className="h-4 w-4" />, label: data.contactinfo.phone ?? "80157 59053" },
              { icon: <Mail className="h-4 w-4" />, label: data.contactinfo.mail ?? "contact@woodwise.fr" },
              { icon: <PinIcon className="h-4 w-4" />, label: data.contactinfo.map ?? "Quartier Cuni, Sospel, 06380, FR" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl px-5 py-4"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${C.brightGreen}25`, color: C.brightGreen }}>
                  {item.icon}
                </div>
                <span className="text-white/80 text-sm">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Hours */}
          <div className="rounded-2xl px-5 py-4 flex items-center gap-4"
            style={{ background: `${C.brightGreen}15`, border: `1px solid ${C.brightGreen}30` }}>
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: C.brightGreen }} />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: C.brightGreen }}>Horaires</p>
              <p className="text-white/60 text-sm">Lundi – Vendredi · 9h00 – 17h00</p>
            </div>
          </div>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl p-8 sm:p-10" id="contact-form"
          style={{ background: C.cream, boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="h-4 w-4" style={{ color: C.leafGreen }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.leafGreen }}>
              {data.contactinfo.title}
            </span>
          </div>
          <p className="text-sm mb-8 max-w-[38ch]" style={{ color: `${C.darkBrown}99` }}>
            {data.contactinfo.description}
          </p>
          <ContactForm />
        </div>

      </div>
    </div>
  </section>
);
