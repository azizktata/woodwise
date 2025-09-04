// Craft Imports

import { Section, Container, Prose, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// Next.js Imports
import Link from "next/link";
import HeroImage from "@/public/hero.jpg";
import AproposImage from "@/public/Apropos.jpg";
import Mbio7Image from "@/public/Mbio7.jpg";
import Mbio7ProductImage from "@/public/mbio7product.png";
// import ContactBg from "@/public/Asset 2@4x 1.jpg";
import ContactBg from "@/public/contactbg.jpg";
// import ContactBg from "@/public/rawlogo.jpg";

import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowUpRight,
  BrickWall,
  Eye,
  Handshake,
  Mail,
  Medal,
  Phone,
  PinIcon,
  Projector,
  Sprout,
  Star,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const font2 = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});
// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <div>
      <div className="bg-hero w-full">
        <Hero />
      </div>
      <div className="bg-section h-32"></div>
      <div className="bg-apropos">
        <Apropos />
        <Impact />
        <Mbio7 />
        <Contact />
        <Blogs />
        <Reviews />
        <FAQ />
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-10 md:gap-16 lg:gap-20 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 ">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl mb-6 tracking-wider">
            <Balancer>
              <span className="text-black">Construire Mieux</span>
              <br />
              <span className="bg-gradient bg-clip-text text-transparent">
                ECOLOGIQUEMENT
              </span>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground mb-5">
            <p className="w-full max-w-[55ch]">
              Une entreprise spécialisée dans la fabrication de produits en bois
              moulé, avec un objectif de réduction de l'empreinte carbone.
            </p>
          </h3>

          <CustomButton asChild label="Découvrir plus" href="/pages/à-propos" />
        </div>
        <div className="not-prose w-full overflow-hidden rounded-lg  md:rounded-xl md:w-1/2">
          <Image
            className="h-full w-full object-cover object-bottom "
            src={HeroImage}
            width={512}
            height={508}
            alt="hero image"
            placeholder="blur"
          />
        </div>
      </Container>
    </Section>
  );
};

// Icons
import { Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Onest } from "next/font/google";
import { title } from "process";
import ContactForm from "@/components/contact-form";
import { link } from "fs";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Notre vision",
    href: "/",
    description:
      " Notre vision est de devenir le leader mondial des solutions de construction à bilan CO2 négatif, en faisant du bois moulé le matériau de choix pour bâtir un avenir plus vert.",
    cta: "Learn More",
  },
  {
    icon: <Projector className="h-6 w-6" />,
    title: "Notre mission",
    href: "/",
    description:
      "Notre mission est de révolutionner l'industrie de la construction en proposant des produits innovants en bois moulé, qui allient performance, durabilité et respect de l'environnement.",
    cta: "Learn More",
  },
];

const singleFeatureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
];

const services = [
  {
    title: "Le panneau MBio7 : L'efficacité écologique",
    description:
      "Notre panneau breveté MBio7 a été reconnu par le prestigieux label Solar Impulse Efficient Solution, le classant parmi les meilleures innovations mondiales pour la réduction du CO2.",
    icon: (
      <BrickWall className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
  {
    title: "Engagement envers l'économie circulaire",
    description:
      "Chez WoodWise, nous transformons les déchets de bois en ressources précieuses, contribuant ainsi à une économie circulaire et à la préservation de nos forêts.",
    icon: (
      <Sprout className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
  {
    title: "Partenariats pour un impact global",
    description:
      "Nous collaborons avec des collectivités locales et des ONG pour maximiser notre impact environnemental et social, en soutenant des projets de construction durable à travers le monde.",
    icon: (
      <Handshake className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
  {
    title: " Une excellence reconnue et primée",
    description:
      "Notre engagement envers une construction durable a été salué par de prestigieuses distinctions, notamment le Label Solar Impulse, la médaille au Concours Lépine Paris 2015, et notre statut de finaliste au CLEAN TECH OPEN France.",
    icon: (
      <Medal className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
];

const Apropos = () => {
  return (
    <Section className=" !pt-0">
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          À Propos de{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            WoodWise
          </span>
        </h2>
        <div className="mt-6 grid gap-6 md:gap-12 md:mt-12 md:grid-cols-2 mb:6 md:mb-12">
          {featureText.map(({ icon, title, description, href, cta }, index) => (
            <Link
              href={`${href}`}
              className="flex flex-col justify-between gap-6 rounded-2xl  p-6 bg-card transition-all hover:-mt-2 hover:mb-2"
              key={index}
            >
              <div className="grid gap-4 ">
                {icon}
                <h4 className="text-4xl text-black">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
              {/* {cta && (
                <div className="flex h-fit items-center text-sm font-semibold">
                  <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              )} */}
            </Link>
          ))}
        </div>
        {/* <div>
          {singleFeatureText.map(
            ({ icon, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between bg-white gap-6 rounded-lg border bg-muted/25 p-6 transition-all hover:-mt-2 hover:mb-2"
                key={index}
              >
                <div className="grid gap-4">
                  {icon}
                  <h4 className="text-xl text-primary">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            )
          )}
        </div> */}
        <div className="grid items-stretch md:grid-cols-2 md:gap-12 mt-6">
          <div className="not-prose relative flex  overflow-hidden rounded-xl border">
            <Image
              src={AproposImage}
              alt="placeholder"
              className="fill object-cover"
            />
          </div>
          <div className="py-6">
            {services.map((service, index) => (
              <div
                className={cn(
                  "flex flex-col gap-2 py-6 transition-all duration-200 group hover:bg-gradient rounded-2xl p-4  hover:text-white"
                )}
                key={index}
              >
                <div className="mb-1">{service.icon}</div>
                <h3 className="!my-0 font-semibold text-xl ">
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "font-light leading-[1.4] opacity-70 font-sans ",
                    font2.variable
                  )}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

const chiffres = [
  { title: "Part de bois recyclé dans le matériau", value: "90%+" },
  { title: "Kg de CO₂ économisés par panneau", value: "7,66" },
  { title: "Tonnes de CO₂ évité par maison de 120 m²", value: "3" },
];
const Impact = () => {
  return (
    <Section>
      <Container className="max-w-7xl">
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          Notre{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
        <p
          className={cn(
            "text-muted-foreground text-sm text-center max-w-[55ch] mx-auto mb-12 font-sans",
            font2.variable
          )}
        >
          Chaque panneau, chaque projet, chaque kilo de bois détourné des
          décharges témoigne de notre engagement.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-6">
          {chiffres.map((item) => (
            <div
              key={item.title}
              className="group  flex flex-col gap-6 items-center py-12 px-3 bg-card rounded-2xl border shadow-sm transition-background duration-300 hover:bg-gradient hover:text-white"
            >
              <h3 className="text-8xl font-semibold text-woodPrimary group-hover:text-white">
                {item.value}
              </h3>
              <Balancer className="text-2xl font-semibold text-black group-hover:text-white text-center">
                {item.title}
              </Balancer>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const Mbio7 = () => {
  return (
    <Section>
      <Container className="grid items-center md:grid-cols-2 gap-6 md:gap-12 max-w-7xl">
        <div className="not-prose relative h-auto flex overflow-hidden rounded-lg  ">
          <Image
            src={Mbio7Image}
            alt="Mbio7"
            className="fill object-cover"
            height={508}
            width={512}
          />
        </div>
        <div className="flex flex-col gap-6 py-8 relative">
          <h2 className="!my-0 font-semibold text-black text-4xl sm:text-5xl lg:text-6xl">
            MBio7 by{" "}
            <span className="bg-gradient bg-clip-text text-transparent">
              WoodWise
            </span>
          </h2>
          <div
            className={cn(
              "font-light text-base leading-[1.4] opacity-60 font-sans max-w-[55ch]",
              font2.variable
            )}
          >
            Le panneau nouvelle génération pour une construction durable. Issu
            de bois recyclé et de résidus forestiers, mBio7 est un panneau de
            construction unique
            <br />
            <ul className="list-disc list-inside ">
              <li>Résistant au feu</li>
              <li>Hydrofuge</li>
              <li>Résistant aux termites</li>
              <li>Léger, modulaire, facile à poser</li>
              <li>Avec une empreinte carbone négative</li>
            </ul>
          </div>
          <CustomButton
            asChild
            label="Découvrir plus"
            href="/pages/à-propos"
            className="self-start"
          />

          <div className="hidden lg:block absolute bottom-0 right-0">
            <Image
              src={Mbio7ProductImage}
              alt="Mbio7"
              className="fill object-cover"
              height={215}
              width={215}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

const contactInfo = {
  phone: "80157 59053",
  email: "contact@woodwise.fr",
  address: "QUARTIER CUNI, SOSPEL, 06380, FR",
};

const Contact = () => {
  return (
    <Section id="contact" className="">
      <div className="grid items-stretch md:grid-cols-2 w-full">
        <div className="not-prose relative flex flex-col  p-4 py-20  bg-woodSecondary">
          <Image
            src={ContactBg}
            alt="Contact"
            className="absolute inset-0 object-cover w-full h-full"
          />

          <div className="absolute inset-0 z-0 bg-gradient opacity-60"></div>

          {/* The container for your content, positioned on top */}
          <div className="relative z-10 flex flex-col items-start mx-auto justify-center h-full">
            <h2
              className={cn(
                "font-semibold text-white text-4xl sm:text-5xl md:text-6xl mb-12 text-center z-10 font-sans ",
                font2.variable
              )}
            >
              Contactez-Nous
            </h2>
            <div id="contact-form" className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="bg-[#084d27] p-4 min-h-96 text-white flex flex-col justify-center">
          <div className={cn("mx-auto pr-2 font-sans ", font2.variable)}>
            <p className="font-semibold text-3xl mb-3 tracking-wider">
              Information de contact
            </p>
            <p className="text-base">
              N'hésitez pas à nous contacter pour toute question.
            </p>
            <div className="flex flex-col gap-6 text-sm mt-6">
              <div className="flex items-center gap-6 text-base">
                <Phone className="h-6 w-6" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-6 text-base">
                <Mail className="h-6 w-6" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-6 text-base">
                <PinIcon className="h-6 w-6" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
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
];

const Blogs = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span className="bg-gradient bg-clip-text text-transparent">
            Nos blogs
          </span>{" "}
          et articles
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-[65ch] mx-auto mb-14">
          Restez informé des dernières nouvelles, tendances et innovations dans
          le domaine de la construction en bois.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CustomButton
            label="Voir plus"
            inverted
            href="/pages/actualités"
            asChild
            className="bg-white"
          />
        </div>
      </Container>
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
          className="w-full h-48 object-cover rounded-t-md"
        />
      </CardHeader>
      <CardContent>
        <Link href={blog.link} target="_blank" rel="noopener noreferrer">
          <p
            className={cn(
              "bg-gradient bg-clip-text text-transparent font-sans ",
              font2.variable
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
              font2.variable
            )}
          >
            {blog.description}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
};

const reviews = [
  {
    name: "Anonyme",
    rating: 5,
    comment:
      "Les produits en bois moulé de WoodWise sont incroyables ! J'en suis totalement satisfait.",
  },
  {
    name: "Anonyme",
    rating: 5,
    comment:
      "WoodWise offre des produits en bois moulé de haute qualité. Je les recommande vivement !",
  },

];

const Reviews = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          Ce que nos
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            clients disent
          </span>
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-[65ch] mx-auto mb-14">
          Découvrez les témoignages de nos clients satisfaits qui ont transformé
          leurs projets de construction avec nos produits en bois moulé.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

interface ReviewCardProps {
  review: {
    name: string;
    date: string;
    rating: number;
    comment: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer shadow-sm rounded-2xl group hover:bg-gradient hover:text-white ease-in-out duration-200">
      <CardHeader className="">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-woodPrimary text-white">
              {review.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <h6 className="text-black text-xl font-semibold ">{review.name}</h6>
            {/* <p className="text-sm text-muted-foreground">{review.date}</p> */}

            <div className="flex items-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 font-light fill-current text-woodPrimary group-hover:text-white "
                />
              ))}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p
          className={cn(
            "text-muted-foreground leading-[1.4] text-sm pl-2 font-sans group-hover:text-white",
            font2.variable
          )}
        >
          {review.comment}
        </p>
      </CardContent>
    </Card>
  );
};

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "Qu’est-ce que le panneau mBio7 ?",
    answer:
      "mBio7 est un panneau de construction innovant, fabriqué à plus de 90 % en bois recyclé. Il est léger, modulaire et conçu pour des constructions durables, économiques et rapides.",
  },
  {
    question: "Quelle est la performance environnementale du panneau ?",
    answer:
      "Chaque panneau présente un bilan carbone négatif de -7,66 kg CO₂-éq. Une maison de 120 m² en mBio7 permet d’éviter environ 3 tonnes de CO₂.",
  },
  {
    question: "Le panneau est-il résistant ?",
    answer:
      "Oui. Le mBio7 est résistant à l’eau, au feu, aux termites, au gel et aux séismes. C’est un matériau thermo-durcissable qui ne pourrit pas et ne craint pas l’humidité.",
  },
  {
    question: "Est-il conforme aux normes de construction ?",
    answer:
      "Oui. Les constructions en mBio7 respectent la norme RE 2020 si elles sont associées à un isolant adapté.",
  },
  {
    question: "Combien pèse un panneau ?",
    answer:
      "Un panneau mBio7 pèse environ 9 kg, ce qui facilite son transport et sa mise en œuvre.",
  },
  {
    question: "Peut-on construire une maison complète avec ce matériau ?",
    answer:
      "Oui. Par exemple, une maison test de 10 m² a été construite en 2017 à Sospel avec 160 panneaux (≈ 1 450 kg). Les panneaux s’assemblent facilement et permettent des projets de toute taille.",
  },
  {
    question: "Quelle est la capacité de production ?",
    answer:
      "L’usine pilote en Bulgarie peut produire environ 400 panneaux par jour.",
  },
  {
    question: "À qui s’adresse mBio7 ?",
    answer:
      "Le matériau est idéal pour les ONG (reconstruction d’urgence), les collectivités locales et les particuliers souhaitant des logements écologiques, modulables et économiques.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span>Questions</span>
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            Fréquentes
          </span>
        </h2>

        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-black text-lg">
                  <div className="flex items-center">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4 pl-6">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};
