import { getPageBySlug, getAllPages } from "@/lib/wordpress";
import { Section, Container, Prose, cn } from "@/components/craft";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/public/banner.jpg";
import projectImage from "@/public/project.png";
import contactBanner from "@/public/contact-banner.jpg";
import Link from "next/link";
import { Lato } from "next/font/google";

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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const page = await getPageBySlug(slug);

  return (
    <div>
      <div id="banner" className="relative">
        <div className="relative h-64 w-full">
          <Image
            src={banner}
            alt={`banner`}
            className="object-cover w-full object-top"
            fill
          />
          <div className="absolute inset-0 bg-[#0D7F40]/60 "></div>
        </div>
        <div className="absolute inset-0 border z-10 flex flex-col items-center justify-center gap-2">
          <h1 className="text-white sm:text-6xl text-5xl font-semibold capitalize mb-1">
            <Balancer>{decodeURIComponent(slug.replace(/-/g, " "))}</Balancer>
          </h1>
          <p
            className={cn(
              "bg-[#F7F7F71A]/10 text-white rounded-full px-5 py-2 text-base font-sans",
              font3.variable
            )}
          >
            <Link href={"/"}>Accueil</Link> /{" "}
            <Balancer>{decodeURIComponent(slug.replace(/-/g, " "))}</Balancer>
          </p>
        </div>
      </div>
      {decodeURIComponent(slug) === "à-propos" && (
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
      {decodeURIComponent(slug) === "actualités" && (
        <Container>
          <Blogs />
        </Container>
      )}
      {decodeURIComponent(slug) === "projets" && (
        <Container>
          <Project />
        </Container>
      )}

      <ContactBanner />
    </div>
  );
}
const CTA = () => {
  return (
    <Section className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="text-woodSecondary font-bold text-xs mb-4 uppercase">
          Qui sommes-nous
        </p>
        <h1 className="font-semibold text-3xl w-full max-w-[65ch]">
          WoodWise est une entreprise engagée dans la fabrication de produits en
          bois moulé.
        </h1>
      </div>
      <div>
        <Balancer className="text-muted-foreground text-sm leading-relaxed max-w-[65ch]">
          Depuis notre création, nous travaillons à développer une nouvelle
          approche de la construction et du design : moins de gaspillage, plus
          d’impact positif. Avec l’innovation mBio7, nous avons prouvé qu’il
          était possible de fabriquer des panneaux de construction performants,
          respectueux de l’environnement et accessibles. Aujourd’hui, WoodWise
          Holding se positionne comme un acteur global du recyclage du bois,
          bien au-delà d’un simple produit.
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
              Contact us
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

const featureText: FeatureText[] = [
  {
    icon: <RecycleIcon className="h-12 w-12" />,
    title: "Circularité",
    href: "/",
    description:
      "Rien ne se perd. Le bois usagé devient matière première pour bâtir l’avenir.",
    cta: "Learn More",
  },
  {
    icon: <Lightbulb className="h-12 w-12" />,
    title: "Innovation",
    href: "/",
    description:
      "Nous développons des matériaux performants, biosourcés et à faible impact.",
    cta: "Learn More",
  },
  {
    icon: <Handshake className="h-12 w-12" />,
    title: "Partenariat",
    href: "/",
    description:
      "Avec les acteurs publics, privés ou associatifs, nous co-construisons des solutions sur mesure.",
    cta: "Learn More",
  },
  {
    icon: <HandHeart className="h-12 w-12" />,
    title: "Responsabilité",
    href: "/",
    description:
      "De la matière première à la livraison, nous garantissons une démarche éthique et transparente.",
    cta: "Learn More",
  },
];

const Feature = () => {
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
    role: "Fondateur",
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
  return (
    <Section>
      <h2 className="font-semibold text-black text-6xl mb-12 text-center">
        Notre{" "}
        <span className="bg-gradient bg-clip-text text-transparent capitalize">
          équipe
        </span>
      </h2>

      <Carousel className="mt-6 w-full">
        <CarouselContent className="-ml-1">
          {members.map((member, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 "
            >
              <div className="p-1">
                <Card className="relative overflow-hidden">
                  <CardContent className="not-prose flex h-[468px]  items-center justify-center">
                    <Image
                      src={member.src}
                      alt={`${member.name} - ${member.role}`}
                      width={247}
                      height={468}
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

const ContactBanner = () => {
  return (
    <div className="relative">
      <Image
        src={contactBanner}
        alt="Contact Us"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Container className="relative z-10 flex h-full flex-col  sm:flex-row items-center justify-between ">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white">
          Contact Us
        </h2>
        <Button className="bg-white rounded-full px-1 py-6 mt-5 text-[#232227] transition-all duration-300 hover:bg-[#051229] hover:text-white group">
          <div className="flex items-center gap-2">
            <span className="rounded-full text-white p-3 bg-woodSecondary transition-transform duration-300 group-hover:animate-slide-right ">
              <MoveRightIcon className="h-4 w-4" />
            </span>

            <span
              className={cn(
                "font-bold text-sm font-sans pr-3 transition-transform duration-300 group-hover:animate-slide-left group-hover:pl-2 group-hover:pr-1",
                font3.variable
              )}
            >
              Parlons Maintenant
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
      "Grâce à ces panneaux en bois, il fabrique des maisons qui résistent à toutes conditions climatiques",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux mBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://www.nicematin.com/vie-locale/grace-a-ces-panneaux-en-bois-il-fabrique-des-maisons-qui-resistent-a-toutes-conditions-climatiques-303801",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: " 1er janvier 2019",
    title: "Libé des solutions : Le bois mis en demeure",
    description:
      "Parmi les inventeurs, il y a les grands rêveurs et les gens carrés. La maison écologique mBio7 est l’alliance des deux. Dominique Tallarida dans le rôle du Géo Trouvetou, Denis Mary dans celui du technicien. Ces habitants de Sospel (Alpes-Maritimes) ont créé des maisons en panneaux de bois recyclé.",
    link: "https://www.liberation.fr/france/2019/01/01/le-bois-mis-en-demeure_1700633/",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "14 Août 2018",
    title: "Une souscription lancée pour des maisons d’urgence",
    description:
      "Lauréats du concours Lépine, le Sospellois Dominique Tallarida et son ami Denis Mary s’apprêtent à commercialiser leur concept d’habitat humanitaire. Ils ont besoin d’un dernier coup de pouce",
    link: "https://www.pressreader.com/monaco/monaco-matin/20180814/281702615548883",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "11 Septembre 2018",
    title:
      "Construire rapidement, efficacement et durablement dans le respect de l'environnement",
    description:
      "Denis Mary et Dominique Tallarida vont lancer dès la semaine prochaine la production des fameux panneaux mBio7. Ils ont également été repérés par la Croix-Rouge et le Croissant-Rouge.",
    link: "https://onpassealacte.fr/initiative.on-a-decide-de-creer-un-materiau-de-construction-durable-et-eco-responsable.98346240768.html",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "2015",
    title: "Member - WoodWise Holding ( ex Mbio7 SAS )",
    description:
      "An innovative ecomaterial for simple construction , economique, ecologic and easy to fast building.",
    link: "https://solarimpulse.com/companies/woodwise-holding-ex-mbio7-sas",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "06 Marse 2019",
    title:
      "Encore une étape de franchie pour le panneau écolo mBio7 Les étapes de la fabrication",
    description:
      "C’est le rêve un peu fou de Dominique Tallarida, Géo Trouvetou des temps modernes, qui commence à prendre forme, cinq ans après, grâce à l’aide de Denis Mary, ingénieux ingénieur.",
    link: "https://www.nicematin.com/vie-locale/encore-une-etape-de-franchie-pour-le-panneau-ecolo-mbio7-les-etapes-de-la-fabrication-303840",
    image:
      "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: string;
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
      </CardContent>
    </Card>
  );
};

const Project = () => {
  return (
    <Section>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link
              className="not-prose text-woodSecondary font-bold text-xs mb-4 uppercase"
              href="https://www.youtube.com/watch?v=b_DiCRAPkDA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir vidéo d&apos;assemblage <ArrowRight className="w-4 ml-1" />
            </Link>
          </Button>
          <h1 className="font-semibold text-black text-2xl sm:text-3xl md:text-4xl mb-4">
            <Balancer>
              Construction d&apos;une maison individuelle en panneaux de bois recyclé
              mBio7
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Une maison test de 10 m² a été construite en 2017 à Sospel avec 160 panneaux  (≈ 1 450 kg).
            </Balancer>
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
