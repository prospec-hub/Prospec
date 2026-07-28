# PROSPEC

The operating system for modern universities — one intelligent platform connecting admissions, academics, campus operations, finance, AI and student experience.

## Repository structure

This is a **monorepo of independent Next.js apps** under `frontend/`. There is no app at the repo root — each folder is its own deployable Next.js application.

```
frontend/
├── page-details-extraction/     # Main marketing site — Home (/) + Products (/products)
├── homepage-design-continuity/  # Standalone homepage export
├── prospec-products-page/       # Standalone products page export
├── solutions-page/              # Solutions page
├── student-portal-prospec/      # Student portal
├── vista-blue-theme/            # AI Platform (/) + AI Agents (/agents) — light Vista-Blue theme
└── prospec-ai-page/             # Prospec AI page
```

## Running an app locally

```bash
cd frontend/<app-name>
npm install
npm run dev
```

## Deploying to Vercel

Each app deploys as its **own Vercel project**, all importing this same repo but with a different **Root Directory**. Create one Vercel project per app:

| App | Root Directory | Suggested project name |
|---|---|---|
| Main marketing site | `frontend/page-details-extraction` | prospec-main |
| Homepage (standalone) | `frontend/homepage-design-continuity` | prospec-homepage |
| Products (standalone) | `frontend/prospec-products-page` | prospec-products |
| Solutions | `frontend/solutions-page` | prospec-solutions |
| Student portal | `frontend/student-portal-prospec` | prospec-student |
| AI Platform (Vista Blue) | `frontend/vista-blue-theme` | prospec-ai-platform |
| Prospec AI page | `frontend/prospec-ai-page` | prospec-ai-page |

For each project on Vercel:

1. **Add New → Project** → import `prospec-hub/Prospec`.
2. Set **Root Directory** to the app's folder (table above).
3. Framework preset **Next.js** is auto-detected (`next build`).
4. **Deploy.**

Every app includes an `.npmrc` with `legacy-peer-deps=true`, so installs succeed on Vercel without extra configuration.

### Important: private repo + Vercel plan

If the repo is **private** on Vercel's **Hobby (free) plan**, deployments only succeed when the commit author matches the Vercel account owner. To deploy without upgrading, either **make the repo public**, or deploy from the account whose commits are pushed, or upgrade to **Vercel Pro**.

## Branches

- `main` — deployment branch (Vercel builds from here).
- `dev-dipanshu` — active development branch. Both currently point to the same commit.
