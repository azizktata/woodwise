import { getPageBySlug, getAllPages } from "@/lib/wordpress";
import { Section, Container, Prose, cn } from "@/components/craft";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import banner from "@/public/banner.jpg";
import projectImage from "@/public/project.png";
import contactBanner from "@/public/contact-banner.jpg";
import Link from "next/link";
import { Lato } from "next/font/google";
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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { date } from "zod";
import { use } from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
// Revalidate pages every hour
// export const revalidate = 3600;

// export async function generateStaticParams() {
//   const pages = await getAllPages();

//   return pages.map((page) => ({
//     slug: page.slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const page = await getPageBySlug(slug);

//   if (!page) {
//     return {};
//   }

//   const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
//   ogUrl.searchParams.append("title", page.title.rendered);
//   // Strip HTML tags for description and limit length
//   const description = page.excerpt?.rendered
//     ? page.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
//     : page.content.rendered
//         .replace(/<[^>]*>/g, "")
//         .trim()
//         .slice(0, 200) + "...";
//   ogUrl.searchParams.append("description", description);

//   return {
//     title: page.title.rendered,
//     description: description,
//     openGraph: {
//       title: page.title.rendered,
//       description: description,
//       type: "article",
//       url: `${siteConfig.site_domain}/pages/${page.slug}`,
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: page.title.rendered,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: page.title.rendered,
//       description: description,
//       images: [ogUrl.toString()],
//     },
//   };
// }
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
  
  const handleTranslateTitle = (slug: string) => {
    const translationsToEn: Record<string, string> = {
      "à propos": "about",
      "actualités": "news",
      "projets": "projects",
    };
   if (locale === "en") {
     return translationsToEn[slug] || slug;
   }
   else {
     const translationsToFr: Record<string, string> = {
       "about": "à propos",
       "news": "actualités",
       "projects": "projets",
     };
     return translationsToFr[slug] || slug;
   }

  };

  return (
    <div>
      <div id="banner" className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={banner}
            alt={`banner`}
            className="object-cover w-full object-right md:object-top"
            fill
          />
          <div className="absolute inset-0 bg-[#0D7F40]/60 "></div>
        </div>
        <div className="absolute inset-0 border z-10 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white sm:text-6xl text-5xl font-semibold capitalize mb-1">
            <Balancer>{handleTranslateTitle(decodeURIComponent(slug.replace(/-/g, " ")))}</Balancer>
          </h1>
          <p
            className={cn(
              "bg-[#F7F7F71A]/10 text-white rounded-full px-5 py-2 text-base font-sans",
              font3.variable
            )}
          >
            <Link href={"/"}> {locale === "fr" ? "Accueil" : "Home"} </Link> /{" "}
            <Balancer>{handleTranslateTitle(decodeURIComponent(slug.replace(/-/g, " ")))}</Balancer>
          </p>
        </div>
      </div>
      {(decodeURIComponent(slug) === "à-propos" ||
        decodeURIComponent(slug) === "about" ) && (
          <Container>
            <CTA />
            {/* <Prose>
          <h2>{page.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Prose> */}
            <Feature />
            <Team />
          </Container>
        )}
      {( decodeURIComponent(slug) === "actualités" ||
         decodeURIComponent(slug) === "news") && (
        <Container>
          <Blogs />
        </Container>
      )}
      { (decodeURIComponent(slug) === "projets" || decodeURIComponent(slug) === "projects") && (
        <Container>
          <Project />
        </Container>
      )}

      <ContactBanner locale={locale} />
    </div>
  );
}
const CTA = () => {
  const t = useTranslations("Apropos");
  return (
    <Section className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-woodSecondary font-bold text-xs mb-4 uppercase">
          {t("subtitle")}
        </p>
        <h1 className="font-semibold text-3xl w-full max-w-[65ch]">
          {t("title")}
        </h1>
      </div>
      <div>
        <Balancer className="text-muted-foreground text-sm leading-relaxed max-w-[65ch] mt-4">
          {t("description")}
        </Balancer>
        <Button className="bg-[#051229] rounded-full px-1 py-6 mt-5">
          <div className="flex items-center gap-2 text-white">
            <span className="rounded-full p-3 bg-woodSecondary">
              <MoveRightIcon className="h-4 w-4" />
            </span>

            <span
              className={cn(
                "font-bold text-sm font-sans pr-4 ",
                font3.variable
              )}
            >
              <Link href="/#contact">{t("contactUs")}</Link>
            </span>
          </div>
        </Button>
      </div>
    </Section>
  );
};

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const Feature = () => {
  const t = useTranslations("Features");
  const featureText: FeatureText[] = [
    {
      icon: <RecycleIcon className="h-12 w-12" />,
      title: t("feature1.title"),
      href: "/",
      description: t("feature1.description"),
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: t("feature2.title"),
      href: "/",
      description: t("feature2.description"),
    },
    {
      icon: <Handshake className="h-12 w-12" />,
      title: t("feature3.title"),
      href: "/",
      description: t("feature3.description"),
    },
    {
      icon: <HandHeart className="h-12 w-12" />,
      title: t("feature4.title"),
      href: "/",
      description: t("feature4.description"),
    },
  ];
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {featureText.map(({ icon, title, description, href, cta }, index) => (
            <Link
              href={`${href}`}
              className="flex flex-col justify-between bg-[#CED7E0]/10 gap-6 rounded-lg border px-8 py-6 transition-all hover:-mt-2 hover:mb-2"
              key={index}
            >
              <div className="grid gap-6">
                {icon}
                <h4 className="text-2xl font-bold text-black">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              {/* {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )} */}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

const members = [
  {
    name: "Denis Mary",
    role: "Inventeur & Fondateur",
    src: "/Denis-Mary.jpg",
  },
  {
    name: "Lotfi Dogui",
    role: "CEO",
    src: "/lotfi-dogi.png",
  },
  // {
  //   name: "Dominique Tallarida",
  //   role: "CEO",
  //   src: "/Dominique-Tallarida.jpg",
  // },
  // {
  //   name: "Henri de Poncheville",
  //   role: "CEO",
  //   src: "/Henri-de-Poncheville.jpg",
  // },
  // {
  //   name: "Alice Williams",
  //   role: "Product Manager",
  //   src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
  // {
  //   name: "Charlie Brown",
  //   role: "Marketing Specialist",
  //   src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
];

const Team = () => {
  const t = useTranslations("Team");
  return (
    <Section>
      <h2 className="font-semibold text-black text-6xl text-center">
        {t("title_part1")}{" "}
        <span className="bg-gradient bg-clip-text text-transparent capitalize">
          {t("title_part2")}
        </span>
      </h2>

      <Carousel className="p-24 w-auto">
        <CarouselContent className="-ml-1">
          {members.map((member, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 ">
              <div className="p-1">
                <Card className="relative overflow-hidden">
                  <CardContent className="not-prose flex h-[600px] w-full  items-center justify-center">
                    <Image
                      src={member.src}
                      alt={`${member.name} - ${member.role}`}
                      width={247}
                      height={368}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    ></Image>
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,127,64,0.6)] to-transparent"></div>
                    <div className="absolute inset-0 flex items-end justify-start p-6 text-white">
                      <div className="text-left">
                        <h3 className="text-xl">{member.name}</h3>
                        <p className="text-sm opacity-90 font-light">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </Section>
  );
};

const ContactBanner = ({ locale }: { locale: string }) => {
  return (
    <div className="relative">
      <Image
        src={contactBanner}
        alt="Contact Us"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Container className="relative z-10 flex h-full flex-col  sm:flex-row items-center justify-between ">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white">
          {locale === "fr" ? "Contactez Nous" : "Contact Us"}
        </h2>
        <Button className="bg-white rounded-full px-2 py-6 mt-5 text-[#232227] transition-all duration-300 hover:bg-[#051229] hover:text-white group">
          <div className="flex items-center gap-2">
            <span className="rounded-full text-white p-3 bg-woodSecondary  ">
              <MoveRightIcon className="h-4 w-4" />
            </span>

            <span
              className={cn(
                "font-bold text-sm font-sans pr-3 ",
                font3.variable
              )}
            >
              <Link href="/#contact">
                {locale === "fr" ? "Parlons Maintenant" : "Let's Talk Now"}
              </Link>
            </span>
          </div>
        </Button>
      </Container>
    </div>
  );
};

const blogs = [
 {
    date: "06 Mars 2019",
    title:
      "Il fabrique des maisons qui résistent à toutes conditions climatiques",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801",
    image: NiceMatin,
  },
  {
    date: " 1er janvier 2019",
    title: "Libé des solutions : Le bois mis en demeure",
    description:
      "Parmi les inventeurs, il y a les grands rêveurs et les gens carrés. La maison écologique MBio7 est l’alliance des deux. Dominique Tallarida dans le rôle du Géo Trouvetou, Denis Mary dans celui du technicien. Ces habitants de Sospel (Alpes-Maritimes) ont créé des maisons en panneaux de bois recyclé.",
    link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/",
    image: Liberation,
  },
  {
    date: "14 Août 2018",
    title: "Une souscription lancée pour des maisons d’urgence",
    description:
      "Lauréats du concours Lépine, le Sospellois Dominique Tallarida et son ami Denis Mary s’apprêtent à commercialiser leur concept d’habitat humanitaire. Ils ont besoin d’un dernier coup de pouce",
    link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883",
    image: Monaco,
  },
  {
    date: "11 Septembre 2018",
    title:
      "Construire rapidement, efficacement et durablement dans le respect de l'environnement",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux MBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://onpassealacte.fr/initiative.on-a-decide-de-creer-un-materiau-de-construction-durable-et-eco-responsable.98346240768.html",
    image:  projectImage,
  },
  {
    date: "2015",
    title: "Member - WoodWise Holding ( ex MBio7 SAS )",
    description:
      "An innovative ecomaterial for simple construction , economique, ecologic and easy to fast building.",
    link: "https://solarimpulse.com/companies/woodwise-holding-ex-mbio7-sas",
    image: BlogImg,
  },
  {
    date: "06 Marse 2019",
    title:
      "Encore une étape de franchie pour le panneau écolo MBio7 Les étapes de la fabrication",
    description:
      "C’est le rêve un peu fou de Dominique Tallarida, Géo Trouvetou des temps modernes, qui commence à prendre forme, cinq ans après, grâce à l’aide de Denis Mary, ingénieux ingénieur.",
    link: "https://www.nicematin.com/vie-locale/encore-une-etape-de-franchie-pour-le-panneau-ecolo-mbio7-les-etapes-de-la-fabrication-303840",
    image: NiceBlog,
  },
];

const Blogs = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </Section>
  );
};
interface BlogCardProps {
  blog: {
    date: string;
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer shadow-sm rounded-2xl">
      <CardHeader className="px-0 pt-0">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-t-md"
        />
      </CardHeader>
      <CardContent>
        <Link href={blog.link} target="_blank" rel="noopener noreferrer">
        <p
          className={cn(
            "bg-gradient bg-clip-text text-transparent font-sans ",
            font3.variable
          )}
          >
          {blog.date}
        </p>
        <h5 className="text-black font-semibold text-2xl py-4 ">
          {blog.title}
        </h5>
        <p
          className={cn(
            "text-muted-foreground leading-[1.4] opacity-70 font-sans ",
            font3.variable
          )}
        >
          {blog.description}
        </p>
          </Link>
      </CardContent>
    </Card>
  );
};

const Project = () => {
  const t = useTranslations("Project");
  return (
    <Section>
      <div>
        <Button asChild className="mb-6 w-fit" size={"sm"} variant={"outline"}>
          <Link
            className="not-prose text-woodSecondary font-bold text-xs mb-4 uppercase"
            href="https://www.youtube.com/watch?v=S7VjzBBewY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("watchVideo")} <ArrowRight className="w-4 ml-1" />
          </Link>
        </Button>
        <h1 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl mb-4">
          <Balancer>{t("title")}</Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>{t("description")}</Balancer>
        </h3>
        <div className="not-prose my-8 h-full w-full overflow-hidden rounded-lg   md:rounded-xl">
          <Image
            className="h-full w-full object-cover object-bottom"
            src={projectImage}
            width={1920}
            height={1080}
            alt="hero image"
            placeholder="blur"
          />
        </div>
      </div>
    </Section>
  );
};

// interface BlogCardProps {
//   blog: {
//     date: string;
//     title: string;
//     category: string;
//     description: string;
//     image: string;
//   };
// }

// const BlogCard = ({ blog }: BlogCardProps) => {
//   const dateObj = new Date(blog.date); // Convert to Date object if it's a string
// const day = format(dateObj, "dd", { locale: enUS }); // "13"
// const month = format(dateObj, "MMM", { locale: enUS }); // "Dec"
//   return (
//     <Card className="hover:shadow-lg transition-shadow cursor-pointer py-0 shadow-sm rounded-none">
//       <CardHeader className="p-0 relative">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           width={400}
//           height={200}
//           className="w-full h-full object-cover "
//         />

//      <div className="absolute bottom-5 right-0 m-4">
//   {/* Blurred background element */}
//   <div className="absolute inset-0 bg-[#F7F7F71A] h-[93px] w-[77px]  backdrop-filter backdrop-blur-sm -z-10 rounded-lg"></div>

//   {/* Content (date) */}
//   <div className="relative h-[93px] w-[77px] flex flex-col items-center justify-center p-2">
//     <span className="text-white text-3xl font-light leading-none">{day}</span>
//     <span className="text-white text-md uppercase font-light leading-none">{month}</span>
//   </div>
// </div>
//       </CardHeader>
//       <CardContent className="mt-6">
//         <span
//           className='text-muted-foreground text-sm rounded-full py-1.5 px-3.5 border'
//         >
//           {blog.category}
//         </span>
//         <Balancer className="text-woodPrimary font-semibold text-xl py-4">{blog.title}</Balancer>
//         <Balancer
//           className='text-muted-foreground'
//         >
//           {blog.description}
//         </Balancer>
//       </CardContent>
//       <CardFooter>
//         <Button variant="link" className="text-woodPrimary px-0">
//           Lire la suite

//           <ArrowRight className="h-4 w-4 ml-2" />
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// };
