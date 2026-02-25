# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

There is no test framework configured in this project.

## Architecture Overview

This is the **Woodwise** company website — a Next.js 15 App Router project with internationalization (French default, English alternate) and a headless WordPress data layer. Most visible page content is **hardcoded in components** rather than fetched from WordPress; the WordPress integration exists for structured data (team, projects, blogs via ACF fields).

### Multi-Version Design System

Three parallel design versions exist under `app/[locale]/`:
- `(main)/` — Original design (route group, default)
- `1/` — Version 1: Dark Forest Premium theme (dark greens)
- `2/` — Version 2: Warm Organic theme (creams, earthy palette)

Each version has its own `layout.tsx`, `page.tsx`, and `pages/[slug]/page.tsx`. All versions share the same data layer (`lib/wp-fetch.ts`) and translations (`messages/*.json`). V2 uses inline style objects with hex colors; V1 and main use Tailwind tokens.

### Internationalization (next-intl)

All routes live under `app/[locale]/` with locale matched by `middleware.ts`. Supported locales: `fr` (default), `en`.

- **Never import navigation from `next/navigation`** — always use `@/i18n/routing` which exports locale-aware `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname`.
- Translation strings live in `messages/fr.json` and `messages/en.json`, namespaced by component (e.g., `Nav`, `Hero`, `Contact`).
- Server components use `getTranslations('Namespace')` from `next-intl/server`; client components use `useTranslations('Namespace')`.
- The layout (`app/[locale]/layout.tsx`) wraps everything in `<NextIntlClientProvider>`.

### Routing Structure

- `app/[locale]/(main)/page.tsx` — home page (Hero, Apropos, Impact, Mbio7, Contact, Blogs, Reviews, FAQ sections)
- `app/[locale]/(main)/pages/[slug]/page.tsx` — handles all sub-pages via **slug-based conditional rendering**
- `app/[locale]/1/` and `app/[locale]/2/` — alternate design versions with same slug routing
- `app/api/revalidate/` — WordPress webhook handler
- `app/api/og/` — OG image generation
- `app/sitemap.ts` — dynamically generated from `site.config.ts`
- `/admin` redirects to the WordPress admin panel (configured in `next.config.ts`)

**Slug routing logic** (identical across all versions):
- `à-propos` / `about` → CTA + Feature + Team
- `actualités` / `news` → Blogs grid
- `projets` / `projects` → Project section

Use `decodeURIComponent()` when comparing slugs — URL-encoded characters like `à` must be decoded.

**Note:** The `/posts`, `/posts/authors`, `/posts/categories`, `/posts/tags` routes have been removed from this project.

### Data Layer

- All WordPress API calls go through `lib/wp-fetch.ts` with React `cache()` for request deduplication and Next.js cache tags for revalidation
- ACF TypeScript interfaces in `lib/wp-types.ts` — ACF fields follow the convention `{sectionType}_{locale}` (e.g., `herosection_fr`)
- Key image helper: `resolveWPImageUrl()` in `lib/wp-types.ts` handles multiple ACF image field formats (string, ID, object)
- Default cache: 1 hour (`revalidate: 3600`)
- Key functions in `lib/wp-fetch.ts`: `fetchHomePage()`, `fetchAboutUs()`, `fetchProjets()`, `fetchNews()`, and section-specific getters like `getHeroSection()`, `getAboutUsCTASection()`, `getWPTeamSection()`, `getProjectSection()`, `getNewsSection()`
- Mock fallbacks in `mocks/` directory (`home.ts`, `about-us.ts`, `projets.ts`) — used when WordPress fetch fails

**Parallel data fetching pattern**: slug pages use `Promise.all()` to fetch multiple sections concurrently, guarded by page-type checks to avoid unnecessary fetches.

### Design System (craft.tsx)

`components/craft.tsx` provides the core layout primitives used in the main and V1 versions:
- `Section` — full-width section wrapper with vertical padding
- `Container` — max-width centered content area
- `Prose` — styled prose content
- `cn` — Tailwind class merge utility (re-exported here, also available from `@/lib/utils`)

Always use `Section` + `Container` as the standard page section pattern in the main/V1 versions. V2 uses inline styles instead.

### Contact Form

`components/contact-form.tsx` is a client component using React Hook Form + Zod. It calls `utils/send-email.js` (a `"use server"` function using Nodemailer/Gmail). Validation error messages are in French.

### Tailwind Custom Tokens

Defined in `tailwind.config.ts` via CSS variables:
- `woodPrimary`, `woodSecondary` — brand green colors
- `bg-gradient` — gradient background image
- `bg-hero`, `bg-section`, `bg-apropos` — section background images
- Custom animations: `slide-right`, `slide-left`, accordion animations

### Site Configuration

- `site.config.ts` — `siteConfig` with `site_name`, `site_description`, `site_domain` (used in metadata and sitemap)
- `menu.config.ts` — legacy nav config; **actual nav is now driven by `messages/*.json`** under the `Nav` namespace in the root layout

### Revalidation System

WordPress plugin (`/plugin` directory) sends webhooks on content changes → `/api/revalidate` validates `x-webhook-secret` header and calls `revalidateTag()` for affected content types (`posts`, `categories`, `tags`, `authors`, and individual item tags like `post-{id}`).

## Environment Variables

Required in `.env.local`:
```
WORDPRESS_URL=            # Full URL of WordPress site
WORDPRESS_HOSTNAME=       # Domain for Next.js image optimization
WORDPRESS_WEBHOOK_SECRET= # Secret for webhook validation
EMAIL_USER=               # Gmail account for sending contact form emails
EMAIL_PASS=               # Gmail app password
EMAIL_TO=                 # Recipient address for contact form submissions
```

## Key Dependencies

- Next.js 15 / React 19 / TypeScript
- next-intl for i18n
- Tailwind CSS + shadcn/ui (Radix UI primitives)
- React Hook Form + Zod for form validation
- Nodemailer for email
- Vercel Analytics
- embla-carousel-react for team member carousel
