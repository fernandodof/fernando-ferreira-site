## Context

Brand new personal website for a developer. No existing codebase. The site should be simple, fast, and maintainable — built with Next.js (App Router) using modern conventions. The primary content is a resume displayed as a timeline. Dark/light mode and bilingual support (English and Brazilian Portuguese) are first-class features.

## Goals / Non-Goals

**Goals:**
- Set up a Next.js project with App Router as the site foundation
- Implement a global layout with dark/light mode toggle persisted via `localStorage`
- Support two languages: English (`en`) and Brazilian Portuguese (`pt-BR`) with a language switcher
- Build a homepage with name, title, and navigation
- Build a resume page with a vertical timeline of experience and education
- Keep the design simple and clean — no unnecessary complexity

**Non-Goals:**
- Portfolio, contact, or blog pages (scoped to future changes)
- CMS or database integration
- Authentication or user accounts
- Animation-heavy or complex UI interactions in this phase
- More than two languages

## Decisions

### Framework: Next.js (App Router)
Using Next.js with the App Router for file-based routing, server components, and easy deployment to Vercel. Alternatives like Astro were considered but Next.js is more familiar and flexible for future expansion.

### Styling: Tailwind CSS
Tailwind provides utility-first styling that's fast to iterate on. Dark mode via `darkMode: 'class'` strategy — toggle adds/removes a `dark` class on `<html>`. Alternative: CSS Modules — rejected for verbosity at this scale.

### Dark/Light Mode: Class Strategy + localStorage
On mount, read preference from `localStorage` (falling back to `prefers-color-scheme`). A toggle button in the header switches the class and saves the preference. This avoids flash of wrong theme on reload.

### Internationalization (i18n): next-intl
Using `next-intl` with App Router for locale-based routing (`/en/...` and `/pt-BR/...`). Translation strings stored in `messages/en.json` and `messages/pt-BR.json`. A language switcher in the header persists the selected locale. Alternatives: `next-i18next` (Pages Router only), manual context — rejected for complexity or lack of App Router support.

### Resume Data: Static TypeScript file
Resume content (jobs, education, skills) stored in a typed `lib/resume.ts` file with locale-aware fields. Simple and easy to update. No CMS needed at this stage.

### Timeline Component: Custom CSS
Vertical timeline built with CSS (Tailwind). Each entry shows date range, title, company/institution, and description. Clean, readable layout that works in both light and dark modes.

## Risks / Trade-offs

- **Flash of unstyled theme on first load** → Mitigated by injecting a small inline script in `<head>` to set the `dark` class before React hydrates
- **Resume data in code** → Makes updates require a code change and redeploy; acceptable for a personal site
- **i18n routing complexity** → `next-intl` with App Router requires middleware and locale-aware layouts; well-documented and worth the structure
- **Translating resume content** → Some fields (job titles, skills) may remain the same across locales; translation only applied where meaningful
