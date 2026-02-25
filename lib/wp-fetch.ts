import { cache } from "react";
import { homeMock } from "@/mocks/home";
import { aboutUsMock } from "@/mocks/about-us";
import { projetsMock } from "@/mocks/projets";
import type {
  WPPostResponse,
  HomePageACF,
  HeroSection,
  AboutSection,
  ImpactSection,
  Mbio7Section,
  ContactSectionContent,
  BlogsSection,
  ReviewsSection,
  FAQSection,
  AboutUsACF,
  AboutUsCTASection,
  WPTeamSection,
  ProjetsACF,
  ProjectSection,
} from "@/lib/wp-types";

// WORDPRESS_URL in .env already contains the full /wp-json/wp/v2/ path.
// Strip the trailing slash so we can safely append /woodwise?...
const BASE_URL = (process.env.WORDPRESS_URL ?? "").replace(/\/$/, "");

// ---------------------------------------------------------------------------
// Home page  (slug: landingpage)
// ---------------------------------------------------------------------------

export const fetchHomePage = cache(
  async (): Promise<WPPostResponse<HomePageACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/woodwise?slug=landingpage&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Empty response");
      return data[0];
    } catch {
      return homeMock;
    }
  }
);

export const getHeroSection = async (locale: string): Promise<HeroSection> => {
  const page = await fetchHomePage();
  const key = `herosection_${locale}` as keyof HomePageACF;
  return page.acf[key] as HeroSection;
};

export const getAboutSection = async (locale: string): Promise<AboutSection> => {
  const page = await fetchHomePage();
  const key = `aboutsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as AboutSection;
};

export const getImpactSection = async (locale: string): Promise<ImpactSection> => {
  const page = await fetchHomePage();
  const key = `impactsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as ImpactSection;
};

export const getMbio7Section = async (locale: string): Promise<Mbio7Section> => {
  const page = await fetchHomePage();
  const key = `mbio7section_${locale}` as keyof HomePageACF;
  return page.acf[key] as Mbio7Section;
};

export const getContactSection = async (locale: string): Promise<ContactSectionContent> => {
  const page = await fetchHomePage();
  const key = `contactsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as ContactSectionContent;
};

export const getBlogsSection = async (locale: string): Promise<BlogsSection> => {
  const page = await fetchHomePage();
  const key = `blogssection_${locale}` as keyof HomePageACF;
  return page.acf[key] as BlogsSection;
};

export const getReviewsSection = async (locale: string): Promise<ReviewsSection> => {
  const page = await fetchHomePage();
  const key = `reviewssection_${locale}` as keyof HomePageACF;
  return page.acf[key] as ReviewsSection;
};

export const getFAQSection = async (locale: string): Promise<FAQSection> => {
  const page = await fetchHomePage();
  const key = `faqsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as FAQSection;
};

// ---------------------------------------------------------------------------
// About-us page  (slug: about-us)
// ---------------------------------------------------------------------------

export const fetchAboutUs = cache(
  async (): Promise<WPPostResponse<AboutUsACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/woodwise?slug=about-us&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Empty response");
      return data[0];
    } catch {
      return aboutUsMock;
    }
  }
);

export const getAboutUsCTASection = async (locale: string): Promise<AboutUsCTASection> => {
  const page = await fetchAboutUs();
  const key = `aboutussection_${locale}` as keyof AboutUsACF;
  return page.acf[key] as AboutUsCTASection;
};

export const getWPTeamSection = async (locale: string): Promise<WPTeamSection> => {
  const page = await fetchAboutUs();
  const key = `team_${locale}` as keyof AboutUsACF;
  return page.acf[key] as WPTeamSection;
};

// ---------------------------------------------------------------------------
// Projets page  (slug: projets)
// ---------------------------------------------------------------------------

export const fetchProjets = cache(
  async (): Promise<WPPostResponse<ProjetsACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/woodwise?slug=projets&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Empty response");
      return data[0];
    } catch {
      return projetsMock;
    }
  }
);

export const getProjectSection = async (locale: string): Promise<ProjectSection> => {
  const page = await fetchProjets();
  const key = `projectsection_${locale}` as keyof ProjetsACF;
  return page.acf[key] as ProjectSection;
};

// ---------------------------------------------------------------------------
// News page  (slug: actualités)
// ---------------------------------------------------------------------------

export const fetchNews = cache(
  async (): Promise<WPPostResponse<ProjetsACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/woodwise?slug=actualites&_fields=acf,slug,title&acf_format=standard`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      const data = await res.json();
      if (!data || data.length === 0) throw new Error("Empty response");
      return data[0];
    } catch {
      // No mock for news yet, return empty structure
      return {
        id: 0,
        slug: "actualités",
        title: { rendered: "Actualités" },
        acf: {} as ProjetsACF,
      };
    }
  }
);

export const getNewsSection = async (locale: string): Promise<BlogsSection | null> => {
  const page = await fetchNews();
  const key = `blogssection_${locale}` as keyof ProjetsACF;
  return (page.acf[key] as BlogsSection) || null;
} 


// ---------------------------------------------------------------------------
// Banner images (page-level ACF field, locale-independent)
// ---------------------------------------------------------------------------

export const getAboutUsBanner = async (): Promise<string | undefined> => {
  const page = await fetchAboutUs();
  const b = page.acf.banner;
  return typeof b === "string" && b ? b : undefined;
};

export const getProjetsBanner = async (): Promise<string | undefined> => {
  const page = await fetchProjets();
  const b = page.acf.banner;
  return typeof b === "string" && b ? b : undefined;
};

export const getNewsBanner = async (): Promise<string | undefined> => {
  const page = await fetchNews();
  const b = page.acf.banner;
  return typeof b === "string" && b ? b : undefined;
};
