import { cache } from "react";
import { homeMock } from "@/mocks/home";
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
} from "@/lib/wp-types";

const BASE_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`;

// cache() deduplicates this fetch within a single render cycle.
export const fetchHomePage = cache(
  async (): Promise<WPPostResponse<HomePageACF>> => {
    try {
      const res = await fetch(
        `${BASE_URL}/woodwise?slug=home&_fields=acf,slug,title&acf_format=standard`,
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

// --- Getter functions ---
// Each getter extracts the locale-specific section and returns clean shaped data.

export const getHeroSection = async (locale: string): Promise<HeroSection> => {
  const page = await fetchHomePage();
  const key = `herosection_${locale}` as keyof HomePageACF;
  return page.acf[key] as HeroSection;
};

export const getAboutSection = async (
  locale: string
): Promise<AboutSection> => {
  const page = await fetchHomePage();
  const key = `aboutsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as AboutSection;
};

export const getImpactSection = async (
  locale: string
): Promise<ImpactSection> => {
  const page = await fetchHomePage();
  const key = `impactsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as ImpactSection;
};

export const getMbio7Section = async (
  locale: string
): Promise<Mbio7Section> => {
  const page = await fetchHomePage();
  const key = `mbio7section_${locale}` as keyof HomePageACF;
  return page.acf[key] as Mbio7Section;
};

export const getContactSection = async (
  locale: string
): Promise<ContactSectionContent> => {
  const page = await fetchHomePage();
  const key = `contactsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as ContactSectionContent;
};

export const getBlogsSection = async (
  locale: string
): Promise<BlogsSection> => {
  const page = await fetchHomePage();
  const key = `blogssection_${locale}` as keyof HomePageACF;
  return page.acf[key] as BlogsSection;
};

export const getReviewsSection = async (
  locale: string
): Promise<ReviewsSection> => {
  const page = await fetchHomePage();
  const key = `reviewssection_${locale}` as keyof HomePageACF;
  return page.acf[key] as ReviewsSection;
};

export const getFAQSection = async (locale: string): Promise<FAQSection> => {
  const page = await fetchHomePage();
  const key = `faqsection_${locale}` as keyof HomePageACF;
  return page.acf[key] as FAQSection;
};
