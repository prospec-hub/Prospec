# PROSPEC

The operating system for modern universities — one intelligent platform connecting admissions, academics, campus operations, finance, AI and student experience.

## Repository structure

```
frontend/
├── page-details-extraction/     # Main marketing site — Home (/) + Products (/products), shared PROSPEC navbar
├── homepage-design-continuity/  # Standalone homepage export (original)
├── prospec-products-page/       # Standalone products page export (original)
└── student-portal-prospec/      # Student portal
```

The primary app is **`frontend/page-details-extraction`** — a Next.js (App Router) site with the
rebranded PROSPEC home page and the full enterprise products page, on a shared warm editorial theme.

## Running a project

```bash
cd frontend/page-details-extraction
npm install
npm run dev
```

Each project is an independent Next.js app with its own `package.json`.

## Branches

- `dev-dipanshu` — active development branch. **All work happens here.**
