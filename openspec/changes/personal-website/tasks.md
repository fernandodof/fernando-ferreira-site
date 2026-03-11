## 1. Project Setup

- [x] 1.1 Initialize Next.js project with App Router, TypeScript, and Tailwind CSS
- [x] 1.2 Install dependencies: `next-intl` for i18n, any icon library (e.g., `lucide-react`)
- [x] 1.3 Configure Tailwind for dark mode using the `class` strategy
- [x] 1.4 Set up project folder structure (`app/`, `components/`, `lib/`, `messages/`)

## 2. Theme (Dark / Light Mode)

- [x] 2.1 Create a `ThemeProvider` component that reads `localStorage` and `prefers-color-scheme`
- [x] 2.2 Inject an inline script in `<head>` to apply the theme class before hydration (no flash)
- [x] 2.3 Add a theme toggle button to the header
- [x] 2.4 Persist theme selection to `localStorage` on toggle

## 3. Internationalization (EN / PT-BR)

- [x] 3.1 Create translation files: `messages/en.json` and `messages/pt-BR.json`
- [x] 3.2 Implement a `LanguageProvider` using React context and `localStorage`
- [x] 3.3 Detect browser language on first visit and set default locale accordingly
- [x] 3.4 Add a language switcher button (EN / PT-BR) to the header
- [x] 3.5 Ensure language preference is restored on page reload

## 4. Global Layout

- [x] 4.1 Create root layout (`app/layout.tsx`) wrapping all pages with `ThemeProvider` and `LanguageProvider`
- [x] 4.2 Build the `Header` component with site name/logo, navigation links, theme toggle, and language switcher
- [x] 4.3 Apply consistent padding, max-width, and dark/light color tokens across the layout
- [x] 4.4 Widen desktop layout and ensure responsive padding on mobile

## 5. Homepage

- [x] 5.1 Create the homepage (`app/page.tsx`) with developer name, title, and tagline
- [x] 5.2 Add translated strings for homepage content in both `en.json` and `pt-BR.json`
- [x] 5.3 Add a CTA or navigation link pointing to the resume page

## 6. Resume Timeline

- [x] 6.1 Create `lib/resume.ts` with typed data structures for experience and education entries
- [x] 6.2 Populate resume data with real content (jobs, education), including locale-aware description fields
- [x] 6.3 Build the `Timeline` component rendering entries as a vertical list (most recent first)
- [x] 6.4 Visually differentiate work experience vs. education entries (icon or label)
- [x] 6.5 Create the resume page (`app/resume/page.tsx`) using the `Timeline` component
- [x] 6.6 Add translated strings for resume section labels in both locale files

## 7. Polish & Verification

- [ ] 7.1 Verify dark/light mode works across all pages with no flash on load
- [ ] 7.2 Verify language switching works seamlessly without URL changes
- [ ] 7.3 Verify browser language detection sets the correct default on first visit
- [ ] 7.4 Check responsive layout on mobile and desktop
- [ ] 7.5 Run `npm run build` and confirm no errors
