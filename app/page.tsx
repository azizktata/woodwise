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
  Eye,
  Mail,
  Phone,
  PinIcon,
  Plus,
  Projector,
  Star,
  X,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const font2 = Onest({
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
      <div className="bg-[#F0F6FF]">
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
      <Container className="flex flex-col gap-12 lg:gap-20 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 ">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 tracking-wider">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis magna ut lectus aliquet consequat. Nulla libero augue,
              ullamcorper et efficitur lacinia, eleifend eget lacus. Integer
              vitae condimentum ante.
            </p>
          </h3>

          <CustomButton asChild label="Découvrir plus" href="/pages/apropos" />

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
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Projector className="h-6 w-6" />,
    title: "Notre mission",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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

const Apropos = () => {
  return (
    <Section className=" !pt-0">
      <Container>
        <h2 className="font-semibold text-black text-7xl mb-6 text-center">
          À Propos de{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            WoodWise
          </span>
        </h2>
        <div className="mt-6 grid gap-12 md:mt-12 md:grid-cols-2 mb-12">
          {featureText.map(({ icon, title, description, href, cta }, index) => (
            <Link
              href={`${href}`}
              className="flex flex-col justify-between bg-white gap-6 rounded-2xl  p-6  transition-all hover:-mt-2 hover:mb-2"
              key={index}
            >
              <div className="grid gap-4 ">
                {icon}
                <h4 className="text-4xl text-primary">{title}</h4>
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
            <div
              className={cn(
                "flex flex-col gap-2 py-6 transition-all duration-300  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white"
              )}
            >
              <h3 className="!my-0 font-semibold text-xl ">
                Lorem ipsum dolor sit
              </h3>
              <p
                className={cn(
                  "font-light leading-[1.4] opacity-70 font-sans ",
                  font2.variable
                )}
              >
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className={cn(
                "flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white"
              )}
            >
              <h3 className="!my-0 font-semibold text-xl ">
                Lorem ipsum dolor sit
              </h3>
              <p
                className={cn(
                  "font-light leading-[1.4] opacity-70 font-sans ",
                  font2.variable
                )}
              >
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className={cn(
                "flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white"
              )}
            >
              <h3 className="!my-0 font-semibold text-xl ">
                Lorem ipsum dolor sit
              </h3>
              <p
                className={cn(
                  "font-light leading-[1.4] opacity-70 font-sans ",
                  font2.variable
                )}
              >
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className={cn(
                "flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white"
              )}
            >
              <h3 className="!my-0 font-semibold text-xl ">
                Lorem ipsum dolor sit
              </h3>
              <p
                className={cn(
                  "font-light leading-[1.4] opacity-70 font-sans ",
                  font2.variable
                )}
              >
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const chiffres = [
  { title: "Tonnes de bois recyclées", value: 100 },
  { title: "kg de CO₂ économisés par panneau", value: 200 },
  { title: "Projets déployés avec collectivités et ONG", value: 300 },
];
const Impact = () => {
  return (
    <Section>
      <Container className="max-w-7xl">
        <h2 className="font-semibold text-black text-6xl mb-6 text-center">
          Notre{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
        <p
          className={cn(
            "text-gray-500 text-sm text-center max-w-[55ch] mx-auto mb-12 font-sans",
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
              className="group  flex flex-col gap-6 items-center bg-white py-12 px-3 rounded-2xl border shadow-sm transition-background duration-300 hover:bg-gradient hover:text-white"
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
      <Container className="grid items-center md:grid-cols-2 md:gap-12 max-w-7xl">
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
          <h2 className="!my-0 font-semibold text-black text-6xl">
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
          <CustomButton label="Découvrir plus" className="self-start" href="/about" />

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

const Contact = () => {
  return (
    <Section className="">
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
                "font-semibold text-white text-6xl mb-12 text-center z-10 font-sans ",
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
        <div className="bg-woodPrimary p-4 min-h-96 text-white flex flex-col justify-center">
          <div className={cn("mx-auto pr-2 font-sans ", font2.variable)}>
            <p className="font-semibold text-3xl mb-3 tracking-wide">
              Contact information
            </p>
            <p className="text-base text-white/60 tracking-wide">
              Say something to start a live chat!
            </p>
            <div className="flex flex-col gap-6 text-sm mt-6">
              <div className="flex items-center gap-6 text-base">
                <Phone className="h-6 w-6" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-6 text-base">
                <Mail className="h-6 w-6" />
                <span>contact@woodwise.com</span>
              </div>
              <div className="flex items-center gap-6 text-base">
                <PinIcon className="h-6 w-6" />
                <span>123 Main St, Anytown, USA</span>
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
    date: "13 December 2025",
    title: "Blog Post 1",
    description: "Description for blog post 1",
    image: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "13 December 2025",
    title: "Blog Post 2",
    description: "Description for blog post 2",
    image: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    date: "13 December 2025",
    title: "Blog Post 3",
    description: "Description for blog post 3",
    image: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Blogs = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-5xl mb-6 text-center">
          <span className="bg-gradient bg-clip-text text-transparent">
            Nos Blogs
          </span>{" "}
          et articles
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[65ch] mx-auto mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et
          efficitur lacinia.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CustomButton label="Voir plus" inverted href="/pages/actualités" />
        </div>
      </Container>
    </Section>
  );
};

const BlogCard = ({ blog }) => {
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
        <p
          className={cn(
            "bg-gradient bg-clip-text text-transparent font-sans ",
            font2.variable
          )}
        >
          {blog.date}
        </p>
        <h5 className="text-black font-semibold text-2xl py-4 ">{blog.title}</h5>
        <p
          className={cn(
            "text-gray-500 leading-[1.4] opacity-70 font-sans ",
            font2.variable
          )}
        >
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
};

const reviews = [
  {
    name: "John Doe",
    date: "13 December 2025",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue.",
  },
  {
    name: "Jane Smith",
    date: "12 December 2025",
    rating: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue.",
  },
  {
    name: "Alice Johnson",
    date: "11 December 2025",
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue.",
  },
  {
    name: "Bob Brown",
    date: "10 December 2025",
    rating: 3,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue.",
  },
  {
    name: "Charlie Davis",
    date: "09 December 2025",
    rating: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue.",
  },
  {
    name: "Charlie Davis",
    date: "09 December 2025",
    rating: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue.",
  },
];

const Reviews = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-6xl mb-6 text-center">
          Listen to what our
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            customers say
          </span>
        </h2>
        <p className="text-gray-500 text-sm text-center max-w-[65ch] mx-auto mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis
          magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et
          efficitur lacinia.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer shadow-sm rounded-2xl group hover:bg-gradient hover:text-white ease-in-out duration-200">
      <CardHeader className="">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-woodPrimary text-white">{review.name.charAt(0)}</AvatarFallback>
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
            "text-gray-500 leading-[1.4] text-sm pl-2 font-sans group-hover:text-white",
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
    question: "D'où provient le bois recyclé ?",
    answer:
      "Nous collectons des déchets bois issus de chantiers, menuiseries, palettes, etc. uniquement en conformité avec les normes sanitaires.",
    link: "https://google.com",
  },
  {
    question: "Que signifie “empreinte carbone négative” ?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Peut-on utiliser mBio7 pour construire une maison complète ?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Est-ce un produit certifié ?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const FAQ = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-6xl mb-6 text-center">
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
