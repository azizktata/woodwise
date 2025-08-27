// Craft Imports
import { Section, Container, Prose, cn } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Next.js Imports
import Link from "next/link";
import HeroImage from "@/public/hero.jpg";
import AproposImage from "@/public/Apropos.jpg";

import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Eye, Projector } from "lucide-react";

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
      <div className="bg-section">
        <Apropos />
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-12 lg:gap-20 md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 ">
          <h1 className="font-bold text-5xl mb-6 tracking-wider">
            <Balancer>
              <span className="text-black">Construire Mieux</span>
              <br />
              <span className="bg-gradient bg-clip-text text-transparent">
                eCOLOGIQUEMENT
              </span>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground mb-5">
            <p className="w-full max-w-[50ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              quis magna ut lectus aliquet consequat. Nulla libero augue,
              ullamcorper et efficitur lacinia, eleifend eget lacus. Integer
              vitae condimentum ante.
            </p>
          </h3>

          <CustomButton label="Découvrir plus" />
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

const FlexContainer = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={AproposImage}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Lorem ipsum dolor sit</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </Container>
    </Section>
  );
};

const Apropos = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-5xl mb-6 text-center">
          À Propos de{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            WoodWise
          </span>
        </h2>
        <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 mb-6">
          {featureText.map(({ icon, title, description, href, cta }, index) => (
            <Link
              href={`${href}`}
              className="flex flex-col justify-between bg-white gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
              key={index}
            >
              <div className="grid gap-4 ">
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
          <div>
            <div className={cn("flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white")}>
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
          <div className={cn("flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white")}>
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
           <div className={cn("flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white")}>
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
           <div className={cn("flex flex-col gap-2 py-6 transition-all  hover:bg-gradient rounded-2xl p-4 hover:p-5 hover:text-white")}>
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
const activeContainer = cn("p-5 bg-gradient rounded-2xl border");
const Impact = () => {
  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-5xl mb-6 text-center">
          Notre{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
      </Container>
    </Section>
  );
};
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
      </Container>
    </Section>
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
        <h2 className="font-semibold text-black text-5xl mb-6 text-center">
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
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
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
