// V1 Slug Page — Dark Forest Premium Style
import Image, { StaticImageData } from "next/image";

import ProjectImg from "@/public/project.png";
import ContactBg from "@/public/contactbg.jpg";
import LotfiImg from "@/public/lotfi-dogi.png";
import DenisImg from "@/public/Denis-Mary.jpg";
import NiceMatin from "@/public/nice-matin.png";
import NiceBlog from "@/public/nice-blog.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
import BlogImg from "@/public/blog-img.png";
import {
  ArrowRight,
  PlayIcon,
  BrickWall,
  Sprout,
  Handshake,
  Medal,
  Phone,
  Mail,
  PinIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import {
  getAboutUsCTASection,
  getWPTeamSection,
  getProjectSection,
  getAboutUsBanner,
  getProjetsBanner,
  getBlogsSection,
} from "@/lib/wp-fetch";
import { resolveWPImageUrl } from "@/lib/wp-types";
import type { AboutUsCTASection, WPTeamSection, ProjectSection, BlogsSection } from "@/lib/wp-types";
import ContactForm from "@/components/contact-form";
import Balancer from "react-wrap-balancer";

// Dark palette
const D = {
  bg: "#071a0e",
  surface: "#0d2e15",
  green: "#0d7f40",
  accent: "#84bc40",
  text: "rgba(255,255,255,0.85)",
  muted: "rgba(255,255,255,0.45)",
};

export default async function SlugPage1({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const decoded = decodeURIComponent(slug);
  const isAbout = decoded === "à-propos" || decoded === "about";
  const isProjects = decoded === "projets" || decoded === "projects";
  const isNews = decoded === "actualités" || decoded === "news";

  const [ctaData, teamData, projectData, bannerUrl, blogsData] = await Promise.all([
    isAbout ? getAboutUsCTASection(locale) : Promise.resolve(null),
    isAbout ? getWPTeamSection(locale) : Promise.resolve(null),
    isProjects ? getProjectSection(locale) : Promise.resolve(null),
    isAbout ? getAboutUsBanner() : isProjects ? getProjetsBanner() : Promise.resolve(undefined),
    isNews ? getBlogsSection(locale) : Promise.resolve(null),
  ]);

  // Unsplash fallbacks per page type (used when WP banner is absent)
  const unsplashFallback =
    isAbout    ? "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
    : isProjects ? "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
    :              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1920&q=80";

  const bannerSrc = bannerUrl ?? unsplashFallback;

  const pageLabel =
    isAbout ? (locale === "fr" ? "À Propos" : "About")
    : isProjects ? (locale === "fr" ? "Projets" : "Projects")
    : isNews ? (locale === "fr" ? "Actualités" : "News")
    : decoded;

  return (
    <div style={{ background: "#f8faf8" }}>
      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        <Image src={bannerSrc} alt={pageLabel} fill className="object-cover" />
        <div className="absolute inset-0 bg-[#071a0e]/60"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-white capitalize">{pageLabel}</h1>
          <p className="text-white/60 text-sm flex items-center gap-2">
            <Link href="/" locale={locale} className="hover:text-white transition-colors">
              {locale === "fr" ? "Accueil" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-[#84bc40]">{pageLabel}</span>
          </p>
        </div>
      </div>

      {/* About page */}
      {isAbout && ctaData && teamData && (
        <>
          <AboutCTAV1 data={ctaData} locale={locale} />
          <AboutFeaturesV1 data={ctaData} />
          <TeamV1 data={teamData} />
        </>
      )}

      {/* Projects page */}
      {isProjects && projectData && <ProjectV1 data={projectData} />}

      {/* News page */}
      {isNews && <NewsV1 data={blogsData} />}

      {/* Contact CTA bottom */}
      <ContactBannerV1 locale={locale} />
    </div>
  );
}

// ─── About CTA ───────────────────────────────────────────────────────────────

const AboutCTAV1 = ({ data, locale }: { data: AboutUsCTASection; locale: string }) => (
  <section className="py-20 sm:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-16">
        {/* Left: label + title */}
        <div>
          <p className="text-[#0d7f40] font-bold text-xs mb-4 uppercase tracking-widest">
            {data.subtitle}
          </p>
          <h1 className="font-semibold text-3xl sm:text-4xl text-[#071a0e] leading-snug max-w-[50ch]">
            {data.title}
          </h1>
        </div>
        {/* Right: description + pill CTA */}
        <div>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[52ch]">
            {data.description}
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 bg-[#071a0e] hover:bg-[#0d2e15] text-white font-semibold pl-1 pr-5 py-1.5 rounded-full transition-all duration-300 text-sm">
            <span className="rounded-full p-3 bg-[#0d7f40] flex items-center">
              <ArrowRight className="h-4 w-4" />
            </span>
            {data.contactus ?? (locale === "fr" ? "Contactez-nous" : "Contact us")}
          </a>
        </div>
      </div>
    </div>
  </section>
);

// ─── Features ────────────────────────────────────────────────────────────────

const featureIcons = [
  <BrickWall key="1" className="h-7 w-7" />,
  <Sprout key="2" className="h-7 w-7" />,
  <Handshake key="3" className="h-7 w-7" />,
  <Medal key="4" className="h-7 w-7" />,
];

const AboutFeaturesV1 = ({ data }: { data: AboutUsCTASection }) => {
  const features = [data.services.service1, data.services.service2, data.services.service3, data.services.service4];
  return (
    <section className="py-16 bg-[#071a0e]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className="group bg-[#0d2e15] border border-[#84bc40]/20 hover:border-[#84bc40]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="text-[#84bc40] mb-5">{featureIcons[i]}</div>
              <h4 className="text-white font-bold mb-2 text-base">{f.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Team ─────────────────────────────────────────────────────────────────────

const memberFallbacks = [LotfiImg, DenisImg];

const TeamV1 = ({ data }: { data: WPTeamSection }) => {
  const members = Object.values(data.members);
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#071a0e]">
            {data.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} style={{ background: "linear-gradient(90deg,#84bc40,#0d7f40)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {members.map((member, i) => {
            const imgSrc = resolveWPImageUrl(member.image) ?? memberFallbacks[i]?.src ?? "/Denis-Mary.jpg";
            return (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl" style={{ height: 400 }}>
                <Image src={imgSrc} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a0e]/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">{member.name}</p>
                  <p className="text-[#84bc40] text-sm">{member.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── Project ──────────────────────────────────────────────────────────────────

const ProjectV1 = ({ data }: { data: ProjectSection }) => {
  const imgSrc = resolveWPImageUrl(data.image);
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <a href={data.videolink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#0d7f40] border border-[#0d7f40]/30 hover:border-[#0d7f40] rounded-full px-4 py-1.5 text-xs font-semibold mb-6 transition-colors">
          {data.subtitle} <ArrowRight className="h-3 w-3" />
        </a>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#071a0e] mb-4 max-w-[60ch]">
          <Balancer>{data.title}</Balancer>
        </h1>
        <p className="text-gray-500 text-base mb-10 max-w-[70ch]">
          <Balancer>{data.description}</Balancer>
        </p>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
          <Image
            src={imgSrc ?? ProjectImg}
            alt="Projet WoodWise"
            fill
            className="object-cover"
            {...(!imgSrc && { placeholder: "blur" as const })}
          />
          <div className="absolute inset-0 bg-[#071a0e]/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <a href={data.videolink} target="_blank" rel="noopener noreferrer">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center hover:scale-110 transition-transform">
                <PlayIcon className="h-8 w-8 fill-white text-white ml-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── News ─────────────────────────────────────────────────────────────────────

const staticBlogs = [
  { date: "06 Mars 2019", title: "Il fabrique des maisons qui résistent à toutes conditions climatiques", description: "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7.", link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801", image: NiceMatin },
  { date: "1er janvier 2019", title: "Libé des solutions : Le bois mis en demeure", description: "La maison écologique MBio7 est l'alliance des deux. Ces habitants de Sospel ont créé des maisons en panneaux de bois recyclé.", link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/", image: Liberation },
  { date: "14 Août 2018", title: "Une souscription lancée pour des maisons d'urgence", description: "Lauréats du concours Lépine, ils s'apprêtent à commercialiser leur concept d'habitat humanitaire.", link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883", image: Monaco },
  { date: "11 Septembre 2018", title: "Construire rapidement, efficacement et durablement dans le respect de l'environnement", description: "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7.", link: "https://onpassealacte.fr/initiative.on-a-decide-de-creer-un-materiau-de-construction-durable-et-eco-responsable.98346240768.html", image: BlogImg },
  { date: "2015", title: "Member - WoodWise Holding (ex MBio7 SAS)", description: "An innovative ecomaterial for simple construction, economique, ecologic and easy to fast building.", link: "https://solarimpulse.com/companies/woodwise-holding-ex-mbio7-sas", image: BlogImg },
  { date: "06 Mars 2019", title: "Encore une étape de franchie pour le panneau écolo MBio7", description: "C'est le rêve un peu fou de Dominique Tallarida, Géo Trouvetou des temps modernes.", link: "https://www.nicematin.com/vie-locale/encore-une-etape-de-franchie-pour-le-panneau-ecolo-mbio7-les-etapes-de-la-fabrication-303840", image: NiceBlog },
];

const imgFallbacksV1 = [NiceMatin, Liberation, Monaco, BlogImg, BlogImg, NiceBlog];

const NewsV1 = ({ data }: { data: BlogsSection | null }) => {
  type Entry = { date: string; title: string; description: string; link: string; imgSrc: string | typeof NiceMatin };
  const blogs: Entry[] = data
    ? Object.values(data.blogs).map((b, i) => ({
        date: b.date,
        title: b.title,
        description: b.description,
        link: b.link,
        imgSrc: (resolveWPImageUrl(b.image) ?? imgFallbacksV1[i % imgFallbacksV1.length]) as string | typeof NiceMatin,
      }))
    : staticBlogs.map((b) => ({ ...b, imgSrc: b.image }));

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <Link key={i} href={blog.link as any} target="_blank" rel="noopener noreferrer" className="group">
              <div className="rounded-2xl overflow-hidden border border-gray-100 hover:border-[#84bc40]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white h-full flex flex-col">
                <div className="overflow-hidden h-48">
                  <Image
                    src={blog.imgSrc as any}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-[#0d7f40] font-semibold mb-2">{blog.date}</span>
                  <h4 className="font-bold text-[#071a0e] text-base mb-3 leading-snug flex-1">{blog.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{blog.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Contact Banner ───────────────────────────────────────────────────────────

const ContactBannerV1 = ({ locale }: { locale: string }) => (
  <section id="contact" className="py-20 bg-[#071a0e] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <Image src={ContactBg} alt="" fill className="object-cover" placeholder="blur" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-[#071a0e] via-[#0d2e15]/90 to-[#0d7f40]/40" />
    <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-[3fr_2fr] gap-8">
        <div className="bg-[#0d2e15] border border-[#84bc40]/20 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            {locale === "fr" ? "Nous Contacter" : "Contact Us"}
          </h2>
          <p className="text-white/50 text-sm mb-6">
            {locale === "fr" ? "Une question ? Nous vous répondons rapidement." : "A question? We'll get back to you quickly."}
          </p>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#0d7f40] rounded-3xl p-6 flex-1">
            <h3 className="text-white font-bold text-lg mb-6">
              {locale === "fr" ? "Informations" : "Information"}
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: <Phone className="h-4 w-4" />, val: "80157 59053" },
                { icon: <Mail className="h-4 w-4" />, val: "contact@woodwise.fr" },
                { icon: <PinIcon className="h-4 w-4" />, val: "Quartier Cuni, Sospel, 06380" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                  {item.val}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0d2e15] border border-[#84bc40]/20 rounded-3xl p-6">
            <p className="text-[#84bc40] text-xs font-semibold uppercase tracking-widest mb-2">Horaires</p>
            <p className="text-white/60 text-sm">Lundi – Vendredi · 9h00–17h00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
