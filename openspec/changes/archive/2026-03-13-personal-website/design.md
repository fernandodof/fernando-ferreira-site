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

### Internationalization (i18n): Custom React Context
Using a custom `LanguageProvider` (React context + `localStorage`) instead of `next-intl`. Language is stored in `localStorage`, detected from the browser on first visit, and switched without URL changes. Translation strings in `messages/en.json` and `messages/pt-BR.json`. This approach was chosen over `next-intl` because locale-based URL routing was explicitly out of scope.

### Commit Convention: Conventional Commits
All commits follow the [Conventional Commits](https://www.conventionalcommits.org/) spec (`type(scope): description`). Enforced via `commitlint` with `@commitlint/config-conventional`. This enables automated changelogs and clear history. Documented in `CLAUDE.md` for Claude Code awareness.

### Component Structure: One Folder per Component
Each component lives in its own folder: `components/component-name/component-name.tsx`. The file is named after the component (not `index.tsx`) to make it easy to identify in editor tabs. Imports use the full path: `@/components/component-name/component-name`. This keeps related files (styles, sub-components, tests) co-located as the project grows.

### Resume Data: Static TypeScript file
Resume content (jobs, education, skills) stored in a typed `lib/resume.ts` file with locale-aware fields. Simple and easy to update. No CMS needed at this stage.

### Timeline Component: Custom CSS
Vertical timeline built with CSS (Tailwind). Each entry shows date range, title, company/institution, and description. Clean, readable layout that works in both light and dark modes.

## Risks / Trade-offs

- **Flash of unstyled theme on first load** → Mitigated by injecting a small inline script in `<head>` to set the `dark` class before React hydrates
- **Resume data in code** → Makes updates require a code change and redeploy; acceptable for a personal site
- **Translating resume content** → Some fields (job titles, skills) may remain the same across locales; translation only applied where meaningful
