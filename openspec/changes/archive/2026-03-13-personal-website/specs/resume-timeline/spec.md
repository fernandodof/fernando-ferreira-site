## ADDED Requirements

### Requirement: Resume is displayed as a vertical timeline
The resume page SHALL display work experience and education as a chronological vertical timeline, with the most recent entry at the top.

#### Scenario: Timeline renders experience entries
- **WHEN** a user visits the resume page
- **THEN** they see a list of work experience entries ordered from most recent to oldest

#### Scenario: Each entry shows relevant details
- **WHEN** a timeline entry is displayed
- **THEN** it shows the job title, company name, date range, and a brief description

### Requirement: Timeline includes education entries
The resume timeline SHALL include education entries alongside work experience, visually distinguishable.

#### Scenario: Education entries are shown
- **WHEN** a user views the resume timeline
- **THEN** education entries are visible and clearly differentiated from work experience (e.g., by icon or label)

### Requirement: Resume data is managed as static content
Resume content SHALL be stored in a typed static file (`lib/resume.ts`) and support locale-aware fields where applicable.

#### Scenario: Resume data loads correctly
- **WHEN** the resume page renders
- **THEN** it reads from the static data source and displays all entries without errors

### Requirement: Resume timeline content is available in both languages
All descriptive text on the resume page SHALL be translated and rendered in the currently selected language.

#### Scenario: Timeline renders in Portuguese
- **WHEN** the selected language is PT-BR
- **THEN** job descriptions, section labels, and UI text render in Portuguese

#### Scenario: Timeline renders in English
- **WHEN** the selected language is EN
- **THEN** job descriptions, section labels, and UI text render in English

#### Scenario: Non-translatable fields stay consistent
- **WHEN** the user switches language
- **THEN** fields like company names, job titles (proper nouns), and date ranges remain unchanged
