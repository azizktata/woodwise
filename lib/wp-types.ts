// TypeScript interfaces mirroring the WordPress ACF structure.
// All field names are lowercase to match ACF's output exactly.

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

/**
 * ACF image fields can come back in several formats depending on the
 * field's "Return Format" setting and whether acf_format=standard is used.
 *  - string  → direct URL  (Return Format: URL, or legacy string)
 *  - number  → attachment ID  (Return Format: ID)
 *  - object  → full media object  (Return Format: Array + acf_format=standard)
 *  - false   → empty / unset
 */
export type WPImageField =
  | string
  | number
  | false
  | null
  | { url: string; [key: string]: unknown }
  | undefined;

/** Resolve any WPImageField to a plain URL string, or undefined if unavailable. */
export function resolveWPImageUrl(img: WPImageField): string | undefined {
  if (!img && img !== 0) return undefined;
  if (typeof img === "string") return img || undefined;
  if (typeof img === "object" && img !== null && "url" in img)
    return img.url as string;
  return undefined; // integer IDs need an extra API call — callers provide a local fallback
}

// ---------------------------------------------------------------------------
// Home page  (slug: landingpage)
// ---------------------------------------------------------------------------

export interface HeroSection {
  subtitle_1?: string; // optional — not always present in WP
  subtitle_2?: string;
  title_part1: string;
  title_part2: string;
  description: string;
  learnmore: string;
  learnmorelink: string; // all lowercase
  image?: string;
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
  ourvision: AboutVisionMission;
  ourmission: AboutVisionMission;
  services: {
    service1: AboutService;
    service2: AboutService;
    service3: AboutService;
    service4: AboutService;
    [key: string]: AboutService;
  };
  image: WPImageField;
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
  learnmore: string;
  learnmorelink: string; // all lowercase
  tags: {
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
    tag5: string;
    [key: string]: string;
  };
  image: WPImageField;
}

export interface ContactSectionContent {
  title: string;
  description: string;
  contactinfo: {
    title: string;
    description: string;
    phone: string;
    mail: string;
    map: string;
  };
}

export interface BlogItem {
  date: string;
  title: string;
  description: string;
  link: string;
  image: WPImageField;
}

export interface BlogsSection {
  title_part1: string;
  title_part2: string;
  description: string;
  viewmore: string;
  blogs: {
    blog1: BlogItem;
    blog2: BlogItem;
    blog3: BlogItem;
    [key: string]: BlogItem;
  };
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

// ---------------------------------------------------------------------------
// About-us page  (slug: about-us)
// ---------------------------------------------------------------------------

/** Combined CTA + Feature section from aboutussection_fr/en */
export interface AboutUsCTASection {
  subtitle: string;
  title: string;
  description: string;
  contactus?: string; // optional — may not be present in WP
  services: {
    service1: AboutService;
    service2: AboutService;
    service3: AboutService;
    service4: AboutService;
    [key: string]: AboutService;
  };
}

export interface WPTeamMember {
  name: string;
  position: string;
  image: WPImageField;
}

export interface WPTeamSection {
  title: string; // single string from WP (not part1/part2)
  members: {
    [key: string]: WPTeamMember;
  };
}

export interface AboutUsACF {
  banner?: string;
  aboutussection_fr: AboutUsCTASection;
  aboutussection_en: AboutUsCTASection;
  team_fr: WPTeamSection;
  team_en: WPTeamSection;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Projets page  (slug: projets)
// ---------------------------------------------------------------------------

export interface ProjectSection {
  subtitle: string;    // watch-video label text
  title: string;
  description: string;
  image: WPImageField;
  videolink: string;   // actual YouTube URL
}

export interface ProjetsACF {
  banner?: string;
  projectsection_fr: ProjectSection;
  projectsection_en: ProjectSection;
  [key: string]: unknown;
}

// ---------------------------------------------------------------------------
// Contact banner  (static — no WP post for this yet)
// ---------------------------------------------------------------------------

export interface ContactBannerSection {
  title: string;
  ctalabel: string;
}

// ---------------------------------------------------------------------------
// Generic WP post wrapper
// ---------------------------------------------------------------------------

export interface WPPostResponse<T> {
  id: number;
  slug: string;
  title: { rendered: string };
  acf: T;
}
