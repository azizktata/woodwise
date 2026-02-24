// TypeScript interfaces mirroring the WordPress ACF structure for the home page.
// Each section has _fr and _en variants in the ACF response.

export interface HeroSection {
  subtitle_1: string;
  subtitle_2: string;
  title_part1: string;
  title_part2: string;
  description: string;
  learnMore: string;
  learnMoreLink: string;
}

export interface AboutVisionMission {
  title: string;
  description: string;
}

export interface AboutService {
  title: string;
  description: string;
}

export interface AboutSection {
  title_part1: string;
  title_part2: string;
  ourVision: AboutVisionMission;
  ourMission: AboutVisionMission;
  services: {
    service1: AboutService;
    service2: AboutService;
    service3: AboutService;
    service4: AboutService;
    [key: string]: AboutService;
  };
}

export interface ImpactStat {
  title: string;
  value: string;
}

export interface ImpactSection {
  title_part1: string;
  title_part2: string;
  description: string;
  stat1: ImpactStat;
  stat2: ImpactStat;
  stat3: ImpactStat;
}

export interface Mbio7Section {
  title_part1: string;
  title_part2: string;
  description: string;
  learnMore: string;
  learnMoreLink: string;
  tags: {
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
    tag5: string;
    [key: string]: string;
  };
}

export interface ContactSectionContent {
  title: string;
  description: string;
  contactInfo: {
    title: string;
    description: string;
  };
  send: string;
  loading: string;
}

export interface BlogsSection {
  title_part1: string;
  title_part2: string;
  description: string;
  ViewMore: string;
  ViewMoreLink: string;
}

export interface ReviewItem {
  name: string;
  stars: string;
  comment: string;
}

export interface ReviewsSection {
  title_part1: string;
  title_part2: string;
  description: string;
  reviews: {
    [key: string]: ReviewItem;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title_part1: string;
  title_part2: string;
  questions: {
    [key: string]: FAQItem;
  };
}

export interface HomePageACF {
  herosection_fr: HeroSection;
  herosection_en: HeroSection;
  aboutsection_fr: AboutSection;
  aboutsection_en: AboutSection;
  impactsection_fr: ImpactSection;
  impactsection_en: ImpactSection;
  mbio7section_fr: Mbio7Section;
  mbio7section_en: Mbio7Section;
  contactsection_fr: ContactSectionContent;
  contactsection_en: ContactSectionContent;
  blogssection_fr: BlogsSection;
  blogssection_en: BlogsSection;
  reviewssection_fr: ReviewsSection;
  reviewssection_en: ReviewsSection;
  faqsection_fr: FAQSection;
  faqsection_en: FAQSection;
  [key: string]: unknown;
}

export interface WPPostResponse<T> {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: T;
}
