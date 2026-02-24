# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

There is no test framework configured in this project.

## Architecture Overview

This is the **Woodwise** company website — a Next.js 15 App Router project with internationalization (French default, English alternate) and a headless WordPress data layer. Most visible page content is **hardcoded in components** rather than fetched from WordPress; the WordPress integration exists for optional blog/news data.

### Internationalization (next-intl)

All routes live under `app/[locale]/` with locale matched by `middleware.ts`. Supported locales: `fr` (default), `en`.

- **Never import navigation from `next/navigation`** — always use `@/i18n/routing` which exports locale-aware `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname`.
- Translation strings live in `messages/fr.json` and `messages/en.json`, namespaced by component (e.g., `Nav`, `Hero`, `Contact`).
- Server components use `getTranslations('Namespace')` from `next-intl/server`; client components use `useTranslations('Namespace')`.
- The layout (`app/[locale]/layout.tsx`) wraps everything in `<NextIntlClientProvider>`.

### Routing Structure

- `app/[locale]/page.tsx` — home page (Hero, Apropos, Impact, Mbio7, Contact, Blogs, Reviews, FAQ sections)
- `app/[locale]/pages/[slug]/page.tsx` — handles all sub-pages via **slug-based conditional rendering** (not dynamic WordPress data). Slug is compared to render the correct section:
  - `à-propos` / `about` → CTA + Feature + Team
  - `actualités` / `news` → Blogs grid
  - `projets` / `projects` → Project section
- `app/api/revalidate/` — WordPress webhook handler
- `app/api/og/` — OG image generation
- `app/sitemap.ts` — dynamically generated from `site.config.ts`
- `/admin` redirects to the WordPress admin panel (configured in `next.config.ts`)

**Note:** The `/posts`, `/posts/authors`, `/posts/categories`, `/posts/tags` routes have been removed from this project.

### Data Layer

- All WordPress API calls go through `lib/wordpress.ts` with Next.js cache tags for revalidation
- Type definitions in `lib/wordpress.d.ts` — core types: `Post`, `Page`, `Category`, `Tag`, `Author`, `FeaturedMedia`, `WordPressResponse<T>`
- Custom `WordPressAPIError` class for consistent error handling
- Default cache: 1 hour (`revalidate: 3600`)
- Key functions: `getPostsPaginated()` (preferred over `getAllPosts()`), `getPageBySlug()`, `getPostBySlug()`

### Design System (craft.tsx)

`components/craft.tsx` provides the core layout primitives used on every page:
- `Section` — full-width section wrapper with vertical padding
- `Container` — max-width centered content area
- `Prose` — styled prose content
- `cn` — Tailwind class merge utility (re-exported here, also available from `@/lib/utils`)

Always use `Section` + `Container` as the standard page section pattern.

### Contact Form

`components/contact-form.tsx` is a client component using React Hook Form + Zod. It calls `utils/send-email.js` (a `"use server"` function using Nodemailer/Gmail). Validation error messages are in French.

### Tailwind Custom Tokens

Defined in `tailwind.config.ts` via CSS variables:
- `woodPrimary`, `woodSecondary` — brand green colors
- `bg-gradient` — gradient background image
- `bg-hero`, `bg-section`, `bg-apropos` — section background images

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
