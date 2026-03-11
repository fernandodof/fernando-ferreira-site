# Project Conventions

## Commits
Use **Conventional Commits** for all commit messages:

```
<type>(<optional scope>): <description>
```

Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `perf`, `ci`

Examples:
- `feat(theme): add dark mode toggle`
- `fix(layout): prevent theme flash on reload`
- `chore: update dependencies`
- `docs: update design decisions`

## Components
Each component lives in its own folder, named after the component:
```
components/
  component-name/
    component-name.tsx
```
Import with full path: `@/components/component-name/component-name`

## Language
- TypeScript everywhere — no plain `.js` files
- Use `"use client"` only when necessary (interactivity, hooks, browser APIs)
- Prefer server components by default
