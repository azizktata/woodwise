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
import Mbio7logo from "@/public/mbio7-logo.png";
import NiceMatin from "@/public/nice-matin.png";
import Liberation from "@/public/liberation.png";
import Monaco from "@/public/monaco.png";
// import ContactBg from "@/public/Asset 2@4x 1.jpg";
import ContactBg from "@/public/contactbg.jpg";
// import ContactBg from "@/public/rawlogo.jpg";

import Image, { StaticImageData } from "next/image";
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
  PlayIcon,
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
  const locale = useLocale();
  
  return (
    <div>
      <div className="bg-hero w-full">
        <Hero locale={locale} />
      </div>
      <div className="bg-section h-32"></div>
      <div className="bg-apropos">
        <Apropos />
        <Impact />
        <Mbio7 locale={locale} />
        <Contact />
        <Blogs />
        <Reviews />
        <FAQ />
      </div>
    </div>
  );
}

const Hero = ({ locale }: { locale: string }) => {
  const t = useTranslations('Hero');
  return (
    <Section>
      <Container className="flex flex-col gap-10 md:gap-16 lg:gap-20 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 ">
        <div className="flex items-center justify-start lg:justify-center mb-2 gap-2">
          <span 
         className={cn(
            "text-md sm:text-xl lg:text-2xl font-semibold font-sans",
            font2.variable
          )}
          
          >
            {t("subtitle_1")}
            </span>
          <Image
            src={Mbio7logo}
            alt="MBio7 Logo"
            className="h-10 sm:h-12 lg:h-20 w-auto"
            width={120}
            height={60}
          />
          <span  className={cn(
            "text-md sm:text-xl lg:text-2xl font-semibold font-sans",
            font2.variable
          )}>
            {t("subtitle_2")}
          </span>
        </div>
          <h1 className="font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
            <Balancer>
              <span className="text-black">{t("title_part1")}</span>
              <br />
              <span className="bg-gradient bg-clip-text text-transparent">
                {t("title_part2")}
              </span>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground mb-5">
            <p className="w-full max-w-[55ch]">
            {t("description")}
            </p>
          </h3>

          <CustomButton asChild label={t("learnMore")} href={t("learnMoreLink")} locale={locale} />
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
import { Coins } from "lucide-react";
import { Onest } from "next/font/google";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};



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
const Apropos = () => {
  const t = useTranslations("About");
  const services = [
  {
    title: t("services.service1.title"),
    description: t("services.service1.description"),
    icon: (
      <BrickWall className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
  {
    title: t("services.service2.title"),
    description: t("services.service2.description"),
    icon: (
      <Sprout className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
  {
    title: t("services.service3.title"),
    description: t("services.service3.description"),
    icon: (
      <Handshake className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
  {
    title: t("services.service4.title"),
    description: t("services.service4.description"),
    icon: (
      <Medal className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
    ),
  },
];
  return (
    <Section className=" !pt-0">
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          {t("title_part1")}{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            {t("title_part2")}
          </span>
        </h2>
        <div className="mt-6 grid gap-6 md:gap-12 md:mt-12 md:grid-cols-2 mb:6 md:mb-12">
          
            <div
              
              className="flex flex-col justify-between gap-6 rounded-2xl  p-6 bg-card transition-all hover:-mt-2 hover:mb-2"
           
            >
              <div className="grid gap-4 ">
                <Eye className="h-6 w-6" />
                <h4 className="text-4xl text-black">{t("ourVision.title")}</h4>
                <p className="text-base opacity-75">{t("ourVision.description")}</p>
              </div>
             
            </div>
            <div
              
              className="flex flex-col justify-between gap-6 rounded-2xl  p-6 bg-card transition-all hover:-mt-2 hover:mb-2"
           
            >
              <div className="grid gap-4 ">
                <Projector className="h-6 w-6" />
                <h4 className="text-4xl text-black">{t("ourMission.title")}</h4>
                <p className="text-base opacity-75">{t("ourMission.description")}</p>
              </div>
             
            </div>
         
        </div>
     
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
                  "flex flex-col gap-2 py-6 transition-all duration-200 group hover:bg-gradient rounded-2xl p-4 hover:text-white"
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

const Impact = () => {
  const  t  = useTranslations("Impact");
  const chiffres = [
    { title: t("stat1.title"), value: t("stat1.value") },
    { title: t("stat2.title"), value: t("stat2.value") },
    { title: t("stat3.title"), value: t("stat3.value") },
  ];
  return (
    <Section>
      <Container className="max-w-7xl">
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          {t("title_part1")} {" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            {t("title_part2")}
          </span>
        </h2>
        <p
          className={cn(
            "text-muted-foreground text-sm text-center max-w-[55ch] mx-auto mb-12 font-sans",
            font2.variable
          )}
        >
          {t("description")}
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

const Mbio7 = ({locale}: {locale: string}) => {
  const t = useTranslations("Mbio7");
  return (
    <Section>
      <Container className="grid items-center md:grid-cols-2 gap-2 sm:gap-6 md:gap-12 max-w-7xl">
        {/* <div className="not-prose relative h-auto flex overflow-hidden rounded-lg  ">
          <Image
            src={Mbio7Image}
            alt="MBio7"
            className="fill object-cover"
            height={508}
            width={512}
          />
        </div>  */}
        <div className="not-prose relative  flex overflow-hidden rounded-lg relative ">
          <Image
            src={Mbio7Image}
            alt="Mbio7"
             className="object-cover object-top rounded-lg w-full "
             width={300}
           height={150}
          />
        <div className="absolute inset-0  bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href="https://www.youtube.com/watch?v=jUQu9_26Gdg" target="_blank" rel="noopener noreferrer">
          <Button 
            variant="ghost"
            className="h-16 w-16 rounded-full bg-woodSecondary hover:bg-woodPrimary p-0"
          >
            <PlayIcon className="h-8 w-8 fill-current text-white" />
          </Button>
          </Link>
        </div>
        </div>
        <div className="flex flex-col gap-4 py-8 relative">
          <h2 className="!my-0 font-semibold text-black text-3xl sm:text-4xl lg:text-6xl">
            {t("title_part1")} {" "}
            <span className="bg-gradient bg-clip-text text-transparent">
              {t("title_part2")}
            </span>
          </h2>
          <div
            className={cn(
              "font-light text-base leading-[1.4] opacity-60 font-sans max-w-[55ch]",
              font2.variable
            )}
          >
            {t("description")}

            <br />
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>{t("tags.tag1")}</li>
              <li>{t("tags.tag2")}</li>
              <li>{t("tags.tag3")}</li>
              <li>{t("tags.tag4")}</li>
              <li>{t("tags.tag5")}</li>
            </ul>
          </div>
          <CustomButton
            asChild
            label={t("learnMore")}
            href={t("learnMoreLink")}
            className="self-start"
            locale={locale}
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
  const t = useTranslations("Contact");
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
              {t("title")}
            </h2>
            <div id="contact-form" className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="bg-[#084d27] p-4 min-h-96 text-white flex flex-col justify-center">
          <div className={cn("mx-auto pr-2 font-sans ", font2.variable)}>
            <p className="font-semibold text-3xl mb-3 tracking-wider">
              {t("contactInfo.title")}
            </p>
            <p className="text-base">
              {t("contactInfo.description")}
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
];

const Blogs = () => {
  const t = useTranslations("Blogs");
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span className="bg-gradient bg-clip-text text-transparent">
            {t("title_part1")}
          </span>{" "}
          {t("title_part2")}
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-[65ch] mx-auto mb-14">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CustomButton
            label={t("ViewMore")}
            inverted
            href={t("ViewMoreLink")}
            asChild
            className="bg-white"
            locale={useLocale()}
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
    link: string;
    description: string;
    image: StaticImageData;
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
          className="w-full h-full object-top rounded-t-md"
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



const Reviews = () => {
  const t = useTranslations("Reviews");
  const reviews = [
  {
    name: t("reviews.review1.name"),
    rating: 5,
    comment: t("reviews.review1.comment"),
  },
  {
    name: t("reviews.review2.name"),
    rating: 5,
    comment: t("reviews.review2.comment"),
  },
];
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          {t("title_part1")}
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            {t("title_part2")}
          </span>
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-[65ch] mx-auto mb-14">
          {t("description")}
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


const FAQ = () => {
  const t = useTranslations("FAQ");

  const content: FAQItem[] = [
  {
    question: t("questions.q1.question"),
    answer: t("questions.q1.answer"),
  },
  {
    question: t("questions.q2.question"),
    answer: t("questions.q2.answer"),
  },
  {
    question: t("questions.q3.question"),
    answer: t("questions.q3.answer"),
  },
  {
    question: t("questions.q4.question"),
    answer: t("questions.q4.answer"),
  },
  {
    question: t("questions.q5.question"),
    answer: t("questions.q5.answer"),
  },
  {
    question: t("questions.q6.question"),
    answer: t("questions.q6.answer"),   
  },
  {
    question: t("questions.q7.question"),
    answer: t("questions.q7.answer"),
  },
  {
    question: t("questions.q8.question"),
    answer: t("questions.q8.answer"),
  },
];

  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span>{t("title_part1")}</span>
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            {t("title_part2")}
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
