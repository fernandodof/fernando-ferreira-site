## ADDED Requirements

### Requirement: Next.js project is initialized with App Router
The system SHALL be a Next.js application using the App Router with TypeScript and Tailwind CSS configured.

#### Scenario: Project structure exists
- **WHEN** the repository is cloned and dependencies installed
- **THEN** running `npm run dev` starts the development server without errors

### Requirement: Global layout wraps all pages
The system SHALL provide a root layout with a header (containing navigation and toggles) and a main content area.

#### Scenario: Layout renders on every page
- **WHEN** a user navigates to any page
- **THEN** the header and footer are consistently visible

### Requirement: Dark and light mode toggle
The system SHALL support dark and light mode, toggled by a button in the header, persisted in `localStorage`.

#### Scenario: User toggles to dark mode
- **WHEN** the user clicks the theme toggle button while in light mode
- **THEN** the site switches to dark mode and saves the preference in `localStorage`

#### Scenario: Theme preference is restored on reload
- **WHEN** the user reloads the page
- **THEN** the previously selected theme is applied before the page renders (no flash)

#### Scenario: Default follows system preference
- **WHEN** the user has no saved preference in `localStorage`
- **THEN** the site defaults to the OS-level `prefers-color-scheme` setting

### Requirement: Language switcher (EN / PT-BR) without URL changes
The system SHALL support English and Brazilian Portuguese. The selected language SHALL be stored in `localStorage` and applied seamlessly without modifying the URL.

#### Scenario: User switches to Portuguese
- **WHEN** the user clicks "PT-BR" in the language switcher
- **THEN** all UI text updates to Portuguese without any URL change or page reload

#### Scenario: User switches to English
- **WHEN** the user clicks "EN" in the language switcher
- **THEN** all UI text updates to English without any URL change or page reload

#### Scenario: Language preference is restored on reload
- **WHEN** the user reloads the page
- **THEN** the previously selected language is applied immediately

### Requirement: Default language is detected from browser
The system SHALL detect the user's preferred language from the browser on first visit.

#### Scenario: Browser language is Portuguese
- **WHEN** a user visits the site for the first time and their browser language is `pt` or `pt-BR`
- **THEN** the site renders in Portuguese

#### Scenario: Browser language is anything else
- **WHEN** a user visits the site for the first time and their browser language is not Portuguese
- **THEN** the site renders in English
