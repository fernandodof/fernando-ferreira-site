## ADDED Requirements

### Requirement: Homepage displays developer identity
The homepage SHALL display the developer's name, professional title, and a brief tagline.

#### Scenario: Homepage renders key identity content
- **WHEN** a user visits the root path
- **THEN** they see the developer's name, title, and tagline prominently displayed

### Requirement: Homepage provides navigation to resume
The homepage SHALL include a clear call-to-action or navigation link pointing to the resume/timeline page.

#### Scenario: User navigates to resume from homepage
- **WHEN** the user clicks the resume link or CTA on the homepage
- **THEN** they are taken to the resume timeline page

### Requirement: Homepage content is available in both languages
All text on the homepage SHALL be translated and rendered in the currently selected language.

#### Scenario: Homepage renders in Portuguese
- **WHEN** the selected language is PT-BR
- **THEN** the name, title, tagline, and navigation labels render in Portuguese

#### Scenario: Homepage renders in English
- **WHEN** the selected language is EN
- **THEN** the name, title, tagline, and navigation labels render in English
