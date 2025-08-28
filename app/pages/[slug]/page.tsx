import { getPageBySlug, getAllPages } from "@/lib/wordpress";
import { Section, Container, Prose, cn } from "@/components/craft";
import { siteConfig } from "@/site.config";

import type { Metadata } from "next";
import Image from "next/image";
import banner from "@/public/banner.jpg";
import contactBanner from "@/public/contact-banner.jpg";
import Link from "next/link";
import { Lato } from "next/font/google";
import { format } from "date-fns"; // For date formatting
import { enUS } from "date-fns/locale"; // Or your preferred locale
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
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
            <Balancer>
              {decodeURIComponent(slug.replace(/-/g, " "))}
            </Balancer>
          </h1>
          <p
            className={cn(
              "bg-[#F7F7F71A]/10 text-white rounded-full px-5 py-2 text-base font-sans",
              font3.variable
            )}
          >
            <Link href={"/"}>Home</Link> / <Balancer>{decodeURIComponent(slug.replace(/-/g, " "))}</Balancer>
          </p>
        </div>
      </div>
      {
        decodeURIComponent(slug) === "à-propos" &&

      <Container>
        <CTA />
        {/* <Prose>
          <h2>{page.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </Prose> */}
        <Feature />
        <Team />
      </Container>
       }
       {
         decodeURIComponent(slug) === "actualités" &&
      <Container>
        <Blogs />
      </Container>
}

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
          WoodWise Holding est une entreprise engagée dans l’économie
          circulaire.
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
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-4">
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
    name: "John Doe",
    role: "CEO",
    src: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    src: "https://images.unsplash.com/photo-1507730690594-f21182eee8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bob Johnson",
    role: "Designer",
    src: "https://images.unsplash.com/photo-1721041879224-ff011603ada5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alice Williams",
    role: "Product Manager",
    src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Charlie Brown",
    role: "Marketing Specialist",
    src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="relative overflow-hidden">
                  <CardContent className="not-prose flex h-[468px]  items-center justify-center">
                    <Image
                      src={member.src}
                      alt={`${member.name} - ${member.role}`}
                      width={720}
                      height={480}
                      className="absolute inset-0 h-full w-full object-cover"
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
      <Container className="relative z-10 flex h-full items-center justify-between ">
        <h2 className="text-6xl  text-white">Contact Us</h2>
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
    category: "Branding",
    date: "13 December 2025",
    title: "Innovative solutions for business success dynamic from today",
    description: "Our mission is to empowers businesses size to thrive in a dynamic environment.",
    image: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Branding",
    title: "What consultants should know about working with nonprofits",
    date: "13 December 2025",
    description: "Our mission is to empowers businesses size to succeed in the nonprofit sector.",
    image: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Branding",
    title: "Why every entrepreneur needs solid digital marketing",
    date: "13 December 2025",
    description: "Our mission is to empowers businesses size to grow and thrive in the digital landscape.",
    image: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    category: string;
    description: string;
    image: string;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const dateObj = new Date(blog.date); // Convert to Date object if it's a string
const day = format(dateObj, "dd", { locale: enUS }); // "13"
const month = format(dateObj, "MMM", { locale: enUS }); // "Dec"
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer py-0 shadow-sm rounded-none">
      <CardHeader className="p-0 relative">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="w-full h-full object-cover "
        />

     <div className="absolute bottom-5 right-0 m-4">
  {/* Blurred background element */}
  <div className="absolute inset-0 bg-[#F7F7F71A] h-[93px] w-[77px]  backdrop-filter backdrop-blur-sm -z-10 rounded-lg"></div>

  {/* Content (date) */}
  <div className="relative h-[93px] w-[77px] flex flex-col items-center justify-center p-2">
    <span className="text-white text-3xl font-light leading-none">{day}</span>
    <span className="text-white text-md uppercase font-light leading-none">{month}</span>
  </div>
</div>
      </CardHeader>
      <CardContent className="mt-6">
        <span
          className='text-gray-500 text-sm rounded-full py-1.5 px-3.5 border'
        >
          {blog.category}
        </span>
        <Balancer className="text-woodPrimary font-semibold text-xl py-4">{blog.title}</Balancer>
        <Balancer
          className='text-[#364052] x'
        >
          {blog.description}
        </Balancer>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-woodPrimary px-0">
          Lire la suite

          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};