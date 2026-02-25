import { Section, Container, cn } from "@/components/craft";

import Image, { StaticImageData } from "next/image";
import banner from "@/public/banner.jpg";
import projectImage from "@/public/project.png";
import contactBanner from "@/public/contact-banner.jpg";
import NiceMatin from "@/public/nice-matin.png";
import NiceBlog from "@/public/nice-blog.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
import BlogImg from "@/public/blog-img.png";
import Balancer from "react-wrap-balancer";
import {
  ArrowRight,
  MoveRightIcon,
  Lightbulb,
  RecycleIcon,
  Handshake,
  HandHeart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Lato } from "next/font/google";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

// WP data layer
import {
  getAboutUsCTASection,
  getWPTeamSection,
  getProjectSection,
  getNewsSection,
  getAboutUsBanner,
  getProjetsBanner,
  getNewsBanner,
} from "@/lib/wp-fetch";
import { resolveWPImageUrl } from "@/lib/wp-types";

// Section types
import type {
  AboutUsCTASection,
  WPTeamSection,
  ProjectSection,
  BlogsSection,
  BlogItem,
} from "@/lib/wp-types";

const font3 = Lato({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const decodedSlug = decodeURIComponent(slug);
  const isAbout = decodedSlug === "à-propos" || decodedSlug === "about";
  const isProjects = decodedSlug === "projets" || decodedSlug === "projects";
  const isNews = decodedSlug === "actualités" || decodedSlug === "news";

  const [ctaData, teamData, projectData, newsData, bannerUrl] = await Promise.all([
    isAbout ? getAboutUsCTASection(locale) : Promise.resolve(null),
    isAbout ? getWPTeamSection(locale) : Promise.resolve(null),
    isProjects ? getProjectSection(locale) : Promise.resolve(null), 
    isNews ? getNewsSection(locale) : Promise.resolve(null),
    isAbout ? getAboutUsBanner() : isProjects ? getProjetsBanner() : isNews ?  getNewsBanner() : Promise.resolve(undefined),
  ]);

   const bannerSrc = bannerUrl ?? banner;

  const handleTranslateTitle = (slug: string) => {
    if (locale === "en") {
      const toEn: Record<string, string> = {
        "à propos": "about",
        "actualités": "news",
        "projets": "projects",
      };
      return toEn[slug] || slug;
    } else {
      const toFr: Record<string, string> = {
        about: "à propos",
        news: "actualités",
        projects: "projets",
      };
      return toFr[slug] || slug;
    }
  };

  return (
    <div>
      <div id="banner" className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={bannerSrc}
            alt="banner"
            className="object-cover w-full object-right md:object-top"
            fill
          />
          <div className="absolute inset-0 bg-[#0D7F40]/60"></div>
        </div>
        <div className="absolute inset-0 border z-10 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white sm:text-6xl text-5xl font-semibold capitalize mb-1">
            <Balancer>
              {handleTranslateTitle(decodeURIComponent(slug.replace(/-/g, " ")))}
            </Balancer>
          </h1>
          <p
            className={cn(
              "bg-[#F7F7F71A]/10 text-white rounded-full px-5 py-2 text-base font-sans",
              font3.variable
            )}
          >
            <Link href="/">{locale === "fr" ? "Accueil" : "Home"}</Link> /{" "}
            <Balancer>
              {handleTranslateTitle(decodeURIComponent(slug.replace(/-/g, " ")))}
            </Balancer>
          </p>
        </div>
      </div>

      {isAbout && ctaData && teamData && (
        <Container>
          <CTA data={ctaData} locale={locale} />
          <Feature data={ctaData} />
          <Team data={teamData} />
        </Container>
      )}

      {isNews && newsData && (
        <Container>
          <Blogs data={newsData} />
        </Container>
      )}

      {isProjects && projectData && (
        <Container>
          <Project data={projectData} />
        </Container>
      )}

      <ContactBanner locale={locale} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components — props-based, no useTranslations
// ---------------------------------------------------------------------------

const CTA = ({
  data,
  locale,
}: {
  data: AboutUsCTASection;
  locale: string;
}) => (
  <Section className="grid md:grid-cols-2 gap-8">
    <div>
      <p className="text-woodSecondary font-bold text-xs mb-4 uppercase">
        {data.subtitle}
      </p>
      <h1 className="font-semibold text-3xl w-full max-w-[65ch]">{data.title}</h1>
    </div>
    <div>
      <Balancer className="text-muted-foreground text-sm leading-relaxed max-w-[65ch] mt-4">
        {data.description}
      </Balancer>
      <Button className="bg-[#051229] rounded-full px-1 py-6 mt-5">
        <div className="flex items-center gap-2 text-white">
          <span className="rounded-full p-3 bg-woodSecondary">
            <MoveRightIcon className="h-4 w-4" />
          </span>
          <span className={cn("font-bold text-sm font-sans pr-4", font3.variable)}>
            <Link href="/#contact">
              {data.contactus ?? (locale === "fr" ? "Contactez-nous" : "Contact us")}
            </Link>
          </span>
        </div>
      </Button>
    </div>
  </Section>
);

const featureIcons = [
  <RecycleIcon key="recycle" className="h-12 w-12" />,
  <Lightbulb key="lightbulb" className="h-12 w-12" />,
  <Handshake key="handshake" className="h-12 w-12" />,
  <HandHeart key="handheart" className="h-12 w-12" />,
];

const Feature = ({ data }: { data: AboutUsCTASection }) => {
  const features = [data.services.service1, data.services.service2, data.services.service3, data.services.service4];
  return (
    <Section>
      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-[#CED7E0]/10 gap-6 rounded-lg border px-8 py-6 transition-all hover:-mt-2 hover:mb-2"
          >
            <div className="grid gap-6">
              {featureIcons[index]}
              <h4 className="text-2xl font-bold text-black">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Local fallback images for team members by position index
const memberImageFallbacks = ["/lotfi-dogi.png", "/Denis-Mary.jpg"];

const Team = ({ data }: { data: WPTeamSection }) => {
  const members = Object.values(data.members);
  return (
    <Section>
      <h2 className="font-semibold text-black text-6xl text-center">
        <span className="bg-gradient bg-clip-text text-transparent capitalize">
          {data.title}
        </span>
      </h2>
      <Carousel className="p-24 w-auto">
        <CarouselContent className="-ml-1">
          {members.map((member, index) => {
            const imgSrc = resolveWPImageUrl(member.image) ?? memberImageFallbacks[index] ?? "/Denis-Mary.jpg";
            return (
              <CarouselItem key={index} className="pl-1 md:basis-1/2">
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex h-[600px] w-full items-center justify-center">
                      <Image
                        src={imgSrc}
                        alt={`${member.name} - ${member.position}`}
                        width={247}
                        height={368}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,127,64,0.6)] to-transparent"></div>
                      <div className="absolute inset-0 flex items-end justify-start p-6 text-white">
                        <div className="text-left">
                          <h3 className="text-xl">{member.name}</h3>
                          <p className="text-sm opacity-90 font-light">{member.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

// Static blog articles for the news page (no WP endpoint yet)
const staticBlogs = [
  {
    date: "06 Mars 2019",
    title: "Il fabrique des maisons qui résistent à toutes conditions climatiques",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801",
    image: NiceMatin,
  },
  {
    date: "1er janvier 2019",
    title: "Libé des solutions : Le bois mis en demeure",
    description:
      "Parmi les inventeurs, il y a les grands rêveurs et les gens carrés. La maison écologique MBio7 est l'alliance des deux. Dominique Tallarida dans le rôle du Géo Trouvetou, Denis Mary dans celui du technicien. Ces habitants de Sospel (Alpes-Maritimes) ont créé des maisons en panneaux de bois recyclé.",
    link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/",
    image: Liberation,
  },
  {
    date: "14 Août 2018",
    title: "Une souscription lancée pour des maisons d'urgence",
    description:
      "Lauréats du concours Lépine, le Sospellois Dominique Tallarida et son ami Denis Mary s'apprêtent à commercialiser leur concept d'habitat humanitaire. Ils ont besoin d'un dernier coup de pouce",
    link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883",
    image: Monaco,
  },
  {
    date: "11 Septembre 2018",
    title: "Construire rapidement, efficacement et durablement dans le respect de l'environnement",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://onpassealacte.fr/initiative.on-a-decide-de-creer-un-materiau-de-construction-durable-et-eco-responsable.98346240768.html",
    image: BlogImg,
  },
  {
    date: "2015",
    title: "Member - WoodWise Holding ( ex MBio7 SAS )",
    description:
      "An innovative ecomaterial for simple construction, economique, ecologic and easy to fast building.",
    link: "https://solarimpulse.com/companies/woodwise-holding-ex-mbio7-sas",
    image: BlogImg,
  },
  {
    date: "06 Mars 2019",
    title: "Encore une étape de franchie pour le panneau écolo MBio7 Les étapes de la fabrication",
    description:
      "C'est le rêve un peu fou de Dominique Tallarida, Géo Trouvetou des temps modernes, qui commence à prendre forme, cinq ans après, grâce à l'aide de Denis Mary, ingénieux ingénieur.",
    link: "https://www.nicematin.com/vie-locale/encore-une-etape-de-franchie-pour-le-panneau-ecolo-mbio7-les-etapes-de-la-fabrication-303840",
    image: NiceBlog,
  },
];

interface BlogCardProps {
  blog: BlogItem;
}

const Blogs = ({ data }: { data: BlogsSection | null }) => {
  const blogs: BlogItem[] = data
    ? Object.values(data)
    : staticBlogs;

  return (
    <Section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          blog.title && <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </Section>
  );
};

const BlogCard = ({ blog }: BlogCardProps) => (
  <Card className="hover:shadow-lg transition-shadow cursor-pointer shadow-sm rounded-2xl">
    <CardHeader className="px-0 pt-0">
      <Image
        src={resolveWPImageUrl(blog.image) ?? BlogImg}
        alt={blog.title}
        width={400}
        height={200}
        className="w-full h-full object-cover rounded-t-md"
      />
    </CardHeader>
    <CardContent>
      <Link href={blog.link} target="_blank" rel="noopener noreferrer">
        <p className={cn("bg-gradient bg-clip-text text-transparent font-sans", font3.variable)}>
          {blog.date}
        </p>
        <h5 className="text-black font-semibold text-2xl py-4">{blog.title}</h5>
        <p
          className={cn(
            "text-muted-foreground leading-[1.4] opacity-70 font-sans",
            font3.variable
          )}
        >
          {blog.description}
        </p>
      </Link>
    </CardContent>
  </Card>
);

const Project = ({ data }: { data: ProjectSection }) => (
  <Section>
    <div>
      <Button asChild className="mb-6 w-fit" size="sm" variant="outline">
        <Link
          className="not-prose text-woodSecondary font-bold text-xs mb-4 uppercase"
          href={data.videolink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.subtitle} <ArrowRight className="w-4 ml-1" />
        </Link>
      </Button>
      <h1 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl mb-4">
        <Balancer>{data.title}</Balancer>
      </h1>
      <h3 className="text-muted-foreground">
        <Balancer>{data.description}</Balancer>
      </h3>
      <div className="not-prose my-8 h-full w-full overflow-hidden rounded-lg md:rounded-xl">
        {resolveWPImageUrl(data.image) ? (
          <Image
            className="h-full w-full object-cover object-bottom"
            src={resolveWPImageUrl(data.image)!}
            alt="Project"
            width={1920}
            height={1080}
          />
        ) : (
          <Image
            className="h-full w-full object-cover object-bottom"
            src={projectImage}
            alt="Project"
            width={1920}
            height={1080}
            placeholder="blur"
          />
        )}
      </div>
    </div>
  </Section>
);

const ContactBanner = ({ locale }: { locale: string }) => (
  <div className="relative">
    <Image
      src={contactBanner}
      alt="Contact Us"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <Container className="relative z-10 flex h-full flex-col sm:flex-row items-center justify-between">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white">
        {locale === "fr" ? "Contactez Nous" : "Contact Us"}
      </h2>
      <Button className="bg-white rounded-full px-2 py-6 mt-5 text-[#232227] transition-all duration-300 hover:bg-[#051229] hover:text-white group">
        <div className="flex items-center gap-2">
          <span className="rounded-full text-white p-3 bg-woodSecondary">
            <MoveRightIcon className="h-4 w-4" />
          </span>
          <span className={cn("font-bold text-sm font-sans pr-3", font3.variable)}>
            <Link href="/#contact">
              {locale === "fr" ? "Parlons Maintenant" : "Let's Talk Now"}
            </Link>
          </span>
        </div>
      </Button>
    </Container>
  </div>
);
