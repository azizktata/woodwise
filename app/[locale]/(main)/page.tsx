// Craft Imports
import { Section, Container, cn } from "@/components/craft";
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
import ContactBg from "@/public/contactbg.jpg";

import Image, { StaticImageData } from "next/image";
import CustomButton from "@/components/CustomButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
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
import { Onest } from "next/font/google";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";

// next-intl
import { setRequestLocale } from "next-intl/server";

// WP data layer
import {
  getHeroSection,
  getAboutSection,
  getImpactSection,
  getMbio7Section,
  getContactSection,
  getBlogsSection,
  getReviewsSection,
  getFAQSection,
} from "@/lib/wp-fetch";

// Section types (type-only import — erased at runtime)
import type {
  HeroSection,
  AboutSection,
  ImpactSection,
  Mbio7Section,
  ContactSectionContent,
  BlogsSection,
  ReviewsSection,
  FAQSection,
} from "@/lib/wp-types";
import { resolveWPImageUrl } from "@/lib/wp-types";

const font2 = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [
    heroData,
    aboutData,
    impactData,
    mbio7Data,
    contactData,
    blogsData,
    reviewsData,
    faqData,
  ] = await Promise.all([
    getHeroSection(locale),
    getAboutSection(locale),
    getImpactSection(locale),
    getMbio7Section(locale),
    getContactSection(locale),
    getBlogsSection(locale),
    getReviewsSection(locale),
    getFAQSection(locale),
  ]);

  return (
    <div>
      <div className="bg-hero w-full">
        <Hero data={heroData} locale={locale} />
      </div>
      <div className="bg-section h-32"></div>
      <div className="bg-apropos">
        <Apropos data={aboutData} />
        <Impact data={impactData} />
        <Mbio7 data={mbio7Data} locale={locale} />
        <Contact data={contactData} />
        <Blogs data={blogsData} locale={locale} />
        <Reviews data={reviewsData} />
        <FAQ data={faqData} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components — props-based, no useTranslations / useLocale
// ---------------------------------------------------------------------------

const Hero = ({ data, locale }: { data: HeroSection; locale: string }) => (
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
            {data.subtitle_1}
          </span>
          <Image
            src={Mbio7logo}
            alt="MBio7 Logo"
            className="h-10 sm:h-12 lg:h-20 w-auto"
            width={120}
            height={60}
          />
          <span
            className={cn(
              "text-md sm:text-xl lg:text-2xl font-semibold font-sans",
              font2.variable
            )}
          >
            {data.subtitle_2}
          </span>
        </div>
        <h1 className="font-bold text-4xl lg:text-6xl mb-6 tracking-wide">
          <Balancer>
            <span className="text-black">{data.title_part1}</span>
            <br />
            <span className="bg-gradient bg-clip-text text-transparent">
              {data.title_part2}
            </span>
          </Balancer>
        </h1>
        <h3 className="text-muted-foreground mb-5">
          <p className="w-full max-w-[55ch]">{data.description}</p>
        </h3>
        <CustomButton
          asChild
          label={data.learnmore}
          href={data.learnmorelink}
          locale={locale}
        />
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

const Apropos = ({ data }: { data: AboutSection }) => {
  const services = [
    {
      title: data.services.service1.title,
      description: data.services.service1.description,
      icon: (
        <BrickWall className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
      ),
    },
    {
      title: data.services.service2.title,
      description: data.services.service2.description,
      icon: (
        <Sprout className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
      ),
    },
    {
      title: data.services.service3.title,
      description: data.services.service3.description,
      icon: (
        <Handshake className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
      ),
    },
    {
      title: data.services.service4.title,
      description: data.services.service4.description,
      icon: (
        <Medal className="h-8 w-8 text-woodSecondary group-hover:text-woodPrimary" />
      ),
    },
  ];

  return (
    <Section className=" !pt-0">
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          {data.title_part1}{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            {data.title_part2}
          </span>
        </h2>
        <div className="mt-6 grid gap-6 md:gap-12 md:mt-12 md:grid-cols-2 mb:6 md:mb-12">
          <div className="flex flex-col justify-between gap-6 rounded-2xl  p-6 bg-card transition-all hover:-mt-2 hover:mb-2">
            <div className="grid gap-4 ">
              <Eye className="h-6 w-6" />
              <h4 className="text-4xl text-black">{data.ourvision.title}</h4>
              <p className="text-base opacity-75">{data.ourvision.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl  p-6 bg-card transition-all hover:-mt-2 hover:mb-2">
            <div className="grid gap-4 ">
              <Projector className="h-6 w-6" />
              <h4 className="text-4xl text-black">{data.ourmission.title}</h4>
              <p className="text-base opacity-75">
                {data.ourmission.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid items-stretch md:grid-cols-2 md:gap-12 mt-6">
          <div className="not-prose relative overflow-hidden rounded-xl border min-h-[400px]">
            <Image
              src={resolveWPImageUrl(data.image) ?? AproposImage}
              alt="À propos"
              fill
              className="object-cover"
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

const Impact = ({ data }: { data: ImpactSection }) => {
  const stats = [
    { title: data.stat1.title, value: data.stat1.value },
    { title: data.stat2.title, value: data.stat2.value },
    { title: data.stat3.title, value: data.stat3.value },
  ];

  return (
    <Section>
      <Container className="max-w-7xl">
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          {data.title_part1}{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            {data.title_part2}
          </span>
        </h2>
        <p
          className={cn(
            "text-muted-foreground text-sm text-center max-w-[55ch] mx-auto mb-12 font-sans",
            font2.variable
          )}
        >
          {data.description}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-6">
          {stats.map((item) => (
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

const Mbio7 = ({ data, locale }: { data: Mbio7Section; locale: string }) => (
  <Section>
    <Container className="grid items-center md:grid-cols-2 gap-2 sm:gap-6 md:gap-12 max-w-7xl">
      <div className="not-prose relative  flex overflow-hidden rounded-lg relative ">
        <Image
          src={resolveWPImageUrl(data.image) ?? Mbio7Image}
          alt="Mbio7"
          className="object-cover object-top rounded-lg w-full "
          width={300}
          height={150}
        />
        <div className="absolute inset-0  bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="https://www.youtube.com/watch?v=jUQu9_26Gdg"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          {data.title_part1}{" "}
          <span className="bg-gradient bg-clip-text text-transparent">
            {data.title_part2}
          </span>
        </h2>
        <div
          className={cn(
            "font-light text-base leading-[1.4] opacity-60 font-sans max-w-[55ch]",
            font2.variable
          )}
        >
          {data.description}
          <br />
          <ul className="list-disc list-inside mt-2 space-y-2">
            {Object.values(data.tags).map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
        </div>
        <CustomButton
          asChild
          label={data.learnmore}
          href={data.learnmorelink}
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

const Contact = ({ data }: { data: ContactSectionContent }) => (
  <Section id="contact" className="">
    <div className="grid items-stretch md:grid-cols-2 w-full">
      <div className="not-prose relative flex flex-col  p-4 py-20  bg-woodSecondary">
        <Image
          src={ContactBg}
          alt="Contact"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-0 bg-gradient opacity-60"></div>
        <div className="relative z-10 flex flex-col items-start mx-auto justify-center h-full">
          <h2
            className={cn(
              "font-semibold text-white text-4xl sm:text-5xl md:text-6xl mb-12 text-center z-10 font-sans ",
              font2.variable
            )}
          >
            {data.title}
          </h2>
          <div id="contact-form" className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-[#084d27] p-4 min-h-96 text-white flex flex-col justify-center">
        <div className={cn("mx-auto pr-2 font-sans ", font2.variable)}>
          <p className="font-semibold text-3xl mb-3 tracking-wider">
            {data.contactinfo.title}
          </p>
          <p className="text-base">{data.contactinfo.description}</p>
          <div className="flex flex-col gap-6 text-sm mt-6">
            <div className="flex items-center gap-6 text-base">
              <Phone className="h-6 w-6" />
              <span>{data.contactinfo.phone}</span>
            </div>
            <div className="flex items-center gap-6 text-base">
              <Mail className="h-6 w-6" />
              <span>{data.contactinfo.mail}</span>
            </div>
            <div className="flex items-center gap-6 text-base">
              <PinIcon className="h-6 w-6" />
              <span>{data.contactinfo.map}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const blogFallbackImages = [NiceMatin, Liberation, Monaco];

const Blogs = ({ data, locale }: { data: BlogsSection; locale: string }) => {
  const blogs = Object.values(data.blogs).map((blog, i) => ({
    ...blog,
    image: resolveWPImageUrl(blog.image) ?? blogFallbackImages[i],
  }));
  const viewMoreHref = locale === "fr" ? "/pages/actualités" : "/pages/news";

  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span className="bg-gradient bg-clip-text text-transparent">
            {data.title_part1}
          </span>{" "}
          {data.title_part2}
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-[65ch] mx-auto mb-14">
          {data.description}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CustomButton
            label={data.viewmore}
            inverted
            href={viewMoreHref}
            asChild
            className="bg-white"
            locale={locale}
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
    image: string | StaticImageData;
  };
}

const BlogCard = ({ blog }: BlogCardProps) => (
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

const Reviews = ({ data }: { data: ReviewsSection }) => {
  const reviews = Object.values(data.reviews).map((r) => ({
    name: r.name,
    rating: parseInt(r.stars, 10),
    comment: r.comment,
  }));

  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          {data.title_part1}
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            {data.title_part2}
          </span>
        </h2>
        <p className="text-muted-foreground text-sm text-center max-w-[65ch] mx-auto mb-14">
          {data.description}
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

const ReviewCard = ({
  review,
}: {
  review: { name: string; rating: number; comment: string };
}) => (
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

const FAQ = ({ data }: { data: FAQSection }) => {
  const items = Object.values(data.questions);

  return (
    <Section>
      <Container>
        <h2 className="font-semibold text-black text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
          <span>{data.title_part1}</span>
          <br />
          <span className="bg-gradient bg-clip-text text-transparent">
            {data.title_part2}
          </span>
        </h2>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {items.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={item.question}>
                <AccordionTrigger className="text-left text-black text-lg">
                  <div className="flex items-center">{item.question}</div>
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4 pl-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};
