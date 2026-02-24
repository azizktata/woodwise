// V2 Slug Page — Warm Organic Style
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
  Leaf,
  PlayIcon,
  BrickWall,
  Sprout,
  Handshake,
  Medal,
  Phone,
  Mail,
  PinIcon,
  Recycle,
  Globe2,
  TreePine,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import {
  getAboutUsCTASection,
  getWPTeamSection,
  getProjectSection,
  getAboutUsBanner,
  getProjetsBanner,
} from "@/lib/wp-fetch";
import { resolveWPImageUrl } from "@/lib/wp-types";
import type { AboutUsCTASection, WPTeamSection, ProjectSection } from "@/lib/wp-types";
import ContactForm from "@/components/contact-form";
import Balancer from "react-wrap-balancer";

// Warm palette
const C = {
  cream: "#faf6ef",
  warmWhite: "#f5f0e8",
  sand: "#e8dcc8",
  brown: "#8b6b3d",
  darkBrown: "#3d2b1a",
  forest: "#1a3d2b",
  leafGreen: "#4a8c3f",
  brightGreen: "#84bc40",
};

export default async function SlugPage2({
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

  const [ctaData, teamData, projectData, bannerUrl] = await Promise.all([
    isAbout ? getAboutUsCTASection(locale) : Promise.resolve(null),
    isAbout ? getWPTeamSection(locale) : Promise.resolve(null),
    isProjects ? getProjectSection(locale) : Promise.resolve(null),
    isAbout ? getAboutUsBanner() : isProjects ? getProjetsBanner() : Promise.resolve(undefined),
  ]);

  // Unsplash fallbacks per page type (used when WP banner is absent)
  const unsplashFallback =
    isAbout    ? "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=1920&q=80"
    : isProjects ? "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
    :              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80";

  const bannerSrc = bannerUrl ?? unsplashFallback;

  const pageLabel =
    isAbout ? (locale === "fr" ? "À Propos" : "About")
    : isProjects ? (locale === "fr" ? "Projets" : "Projects")
    : isNews ? (locale === "fr" ? "Actualités" : "News")
    : decoded;

  return (
    <div style={{ background: C.cream }}>
      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        <Image src={bannerSrc} alt={pageLabel} fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.forest}cc, ${C.leafGreen}80)` }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-white capitalize">{pageLabel}</h1>
          <p className="text-white/60 text-sm flex items-center gap-2">
            <Link href="/" locale={locale} className="hover:text-white transition-colors">
              {locale === "fr" ? "Accueil" : "Home"}
            </Link>
            <span>/</span>
            <span style={{ color: C.brightGreen }}>{pageLabel}</span>
          </p>
        </div>
      </div>

      {/* Nature strip */}
      <div className="py-3 overflow-hidden" style={{ background: C.forest }}>
        <div className="flex items-center gap-10 px-8 w-full justify-center flex-wrap">
          {[
            { icon: <TreePine className="h-3.5 w-3.5" />, text: "Forêts préservées" },
            { icon: <Recycle className="h-3.5 w-3.5" />, text: "Économie circulaire" },
            { icon: <Leaf className="h-3.5 w-3.5" />, text: "Bilan carbone négatif" },
            { icon: <Globe2 className="h-3.5 w-3.5" />, text: "Impact mondial" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70 text-xs whitespace-nowrap">
              <span style={{ color: C.brightGreen }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* About page */}
      {isAbout && ctaData && teamData && (
        <>
          <AboutCTAV2 data={ctaData} locale={locale} />
          <AboutFeaturesV2 data={ctaData} />
          <TeamV2 data={teamData} />
        </>
      )}

      {/* Projects page */}
      {isProjects && projectData && <ProjectV2 data={projectData} />}

      {/* News page */}
      {isNews && <NewsV2 locale={locale} />}

      {/* Contact CTA bottom */}
      <ContactBannerV2 locale={locale} />
    </div>
  );
}

// ─── About CTA ───────────────────────────────────────────────────────────────

const AboutCTAV2 = ({ data, locale }: { data: AboutUsCTASection; locale: string }) => (
  <section className="py-20 sm:py-28" style={{ background: C.warmWhite }}>
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-4 w-4" style={{ color: C.leafGreen }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.leafGreen }}>{data.subtitle}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: C.forest }}>
            <Balancer>{data.title}</Balancer>
          </h2>
          <p className="leading-relaxed mb-8 text-sm max-w-[52ch]" style={{ color: `${C.darkBrown}cc` }}>{data.description}</p>
          <a href="#contact"
            className="inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.02] group text-sm"
            style={{ background: `linear-gradient(135deg, ${C.brightGreen}, ${C.leafGreen})` }}>
            {data.contactus ?? (locale === "fr" ? "Contactez-nous" : "Contact us")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Globe2 className="h-6 w-6" />, label: "Solar Impulse Label" },
            { icon: <Recycle className="h-6 w-6" />, label: "95% bois recyclé" },
            { icon: <Leaf className="h-6 w-6" />, label: "−7,66 kg CO₂ / panneau" },
            { icon: <Medal className="h-6 w-6" />, label: "Médaille Lépine 2015" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl p-5 flex flex-col gap-3 transition-all hover:-translate-y-0.5"
              style={{ background: "white", border: `1px solid ${C.sand}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ color: C.leafGreen }}>{item.icon}</div>
              <p className="font-semibold text-sm leading-snug" style={{ color: C.forest }}>{item.label}</p>
            </div>
          ))}
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
const featureColors = ["#84bc40", "#4a8c3f", "#d4a853", "#c07830"];

const AboutFeaturesV2 = ({ data }: { data: AboutUsCTASection }) => {
  const features = [data.services.service1, data.services.service2, data.services.service3, data.services.service4];
  return (
    <section className="py-16" style={{ background: `linear-gradient(135deg, ${C.forest}, #0d7f40)` }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl p-6 transition-all hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="mb-5" style={{ color: featureColors[i] }}>{featureIcons[i]}</div>
              <h4 className="text-white font-bold mb-2 text-base">{f.title}</h4>
              <p className="text-white/55 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Team ─────────────────────────────────────────────────────────────────────

const memberFallbacks = [LotfiImg, DenisImg];

const TeamV2 = ({ data }: { data: WPTeamSection }) => {
  const members = Object.values(data.members);
  return (
    <section className="py-20 sm:py-28" style={{ background: C.cream }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-5 w-5" style={{ color: C.leafGreen }} />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: C.forest }}>
            {data.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} style={{ background: `linear-gradient(135deg,${C.brightGreen},${C.leafGreen})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> {word}</span>
                : <span key={i}>{word} </span>
            )}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {members.map((member, i) => {
            const imgSrc = resolveWPImageUrl(member.image) ?? memberFallbacks[i]?.src ?? "/Denis-Mary.jpg";
            return (
              <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl" style={{ height: 420, border: `3px solid ${C.sand}` }}>
                <Image src={imgSrc} alt={member.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.forest}90, transparent)` }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">{member.name}</p>
                  <p className="text-sm" style={{ color: C.brightGreen }}>{member.position}</p>
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

const projectStats = [
  { value: "10 m²", label: "Surface construite" },
  { value: "160", label: "Panneaux utilisés" },
  { value: "≈1 450 kg", label: "Poids total" },
  { value: "2017", label: "Année de réalisation" },
];

const buildSteps = [
  { step: "01", title: "Préparation", desc: "Terrassement et fondations légères sur plots béton." },
  { step: "02", title: "Assemblage", desc: "Montage des panneaux MBio7 par emboîtement sans outils spéciaux." },
  { step: "03", title: "Couverture", desc: "Pose de toiture et isolation thermique intégrée." },
  { step: "04", title: "Finitions", desc: "Menuiseries, peintures et aménagements en matériaux naturels." },
];

const ProjectV2 = ({ data }: { data: ProjectSection }) => {
  const imgSrc = resolveWPImageUrl(data.image);
  return (
    <>
      {/* Main project section */}
      <section className="py-20 sm:py-24" style={{ background: C.warmWhite }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <a href={data.videolink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 transition-opacity hover:opacity-80"
            style={{ background: `${C.leafGreen}15`, color: C.leafGreen, border: `1px solid ${C.leafGreen}30` }}>
            {data.subtitle} <ArrowRight className="h-3 w-3" />
          </a>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: C.forest }}>
                <Balancer>{data.title}</Balancer>
              </h1>
              <p className="text-base mb-8 leading-relaxed" style={{ color: `${C.darkBrown}99` }}>
                <Balancer>{data.description}</Balancer>
              </p>
              <div className="grid grid-cols-2 gap-3">
                {projectStats.map((s, i) => (
                  <div key={i} className="rounded-2xl p-5 text-center"
                    style={{ background: "white", border: `1px solid ${C.sand}` }}>
                    <p className="text-2xl font-bold mb-1" style={{ color: C.brightGreen }}>{s.value}</p>
                    <p className="text-xs" style={{ color: `${C.darkBrown}80` }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video"
              style={{ border: `3px solid ${C.sand}` }}>
              <Image
                src={imgSrc ?? ProjectImg}
                alt="Projet WoodWise"
                fill
                className="object-cover"
                {...(!imgSrc && { placeholder: "blur" as const })}
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.forest}70, transparent 50%)` }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={data.videolink} target="_blank" rel="noopener noreferrer">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                    style={{ background: "rgba(255,255,255,0.92)" }}>
                    <PlayIcon className="h-8 w-8 ml-1" style={{ fill: C.leafGreen, color: C.leafGreen }} />
                  </div>
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/80 text-sm font-medium">Maison test · Sospel, Alpes-Maritimes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build process */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, ${C.forest}, #0d7f40)` }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <Leaf className="h-4 w-4" style={{ color: C.brightGreen }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.brightGreen }}>Méthode</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
            Processus de construction
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {buildSteps.map((s, i) => (
              <div key={i} className="rounded-2xl p-6"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="text-4xl font-bold mb-3 text-white/20 leading-none">{s.step}</p>
                <h4 className="font-bold text-white mb-2">{s.title}</h4>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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

const NewsV2 = ({ locale }: { locale: string }) => (
  <section className="py-20 sm:py-28" style={{ background: C.cream }}>
    <div className="max-w-7xl mx-auto px-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staticBlogs.map((blog, i) => (
          <Link key={i} href={blog.link as any} target="_blank" rel="noopener noreferrer" className="group">
            <div className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
              style={{ background: "white", border: `1px solid ${C.sand}` }}>
              <div className="overflow-hidden h-48">
                <Image src={blog.image} alt={blog.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold mb-2" style={{ color: C.leafGreen }}>{blog.date}</span>
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

// ─── Contact Banner ───────────────────────────────────────────────────────────

const ContactBannerV2 = ({ locale }: { locale: string }) => (
  <section id="contact" className="py-20 sm:py-28" style={{ background: C.warmWhite }}>
    <div className="max-w-5xl mx-auto px-6 sm:px-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="h-5 w-5" style={{ color: C.leafGreen }} />
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: C.leafGreen }}>Contact</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: C.forest }}>
          {locale === "fr" ? "Parlons de votre projet" : "Let's talk about your project"}
        </h2>
      </div>
      <div className="grid lg:grid-cols-[3fr_2fr] gap-8">
        <div className="rounded-3xl p-8" style={{ background: "white", border: `1px solid ${C.sand}`, boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-3xl overflow-hidden relative" style={{ minHeight: 180 }}>
            <Image src={ContactBg} alt="Contact" fill className="object-cover" placeholder="blur" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.forest}cc, ${C.leafGreen}80)` }} />
            <div className="relative z-10 p-6">
              <h3 className="text-white font-bold text-lg mb-1">
                {locale === "fr" ? "Informations de contact" : "Contact information"}
              </h3>
              <p className="text-white/70 text-sm">
                {locale === "fr" ? "N'hésitez pas à nous contacter." : "Feel free to reach out."}
              </p>
            </div>
          </div>
          <div className="rounded-3xl p-6 flex flex-col gap-4" style={{ background: "white", border: `1px solid ${C.sand}` }}>
            {[
              { icon: <Phone className="h-4 w-4" />, val: "80157 59053" },
              { icon: <Mail className="h-4 w-4" />, val: "contact@woodwise.fr" },
              { icon: <PinIcon className="h-4 w-4" />, val: "Quartier Cuni, Sospel, 06380" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm" style={{ color: C.darkBrown }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${C.leafGreen}15`, color: C.leafGreen }}>
                  {item.icon}
                </div>
                {item.val}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
