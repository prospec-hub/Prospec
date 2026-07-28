# PROSPEC

The operating system for modern universities — one intelligent platform connecting admissions, academics, campus operations, finance, AI and student experience.

## The website

**`frontend/prospec-website`** is the single, unified Next.js app — every page is a route inside it:

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products |
| `/solutions` | Solutions |
| `/ai-platform` | AI Platform |
| `/ai-platform/agents` | AI Agents |
| `/student-portal` | Student Portal |

Each page keeps its own design; a shared PROSPEC navbar links Home / Products / Solutions / AI Platform / Student Portal.

## Running locally

```bash
cd frontend/prospec-website
npm install
npm run dev
```

## Deploying to Vercel (one project)

1. **Add New → Project** → import `prospec-hub/Prospec`.
2. Set **Root Directory** to `frontend/prospec-website`.
3. Framework preset **Next.js** is auto-detected (`next build`). The included `.npmrc` handles peer-dependency resolution.
4. **Deploy.** The whole site (all routes above) ships as one deployment.

> Private repo + Vercel Hobby plan: deployments only succeed when the commit author matches the Vercel account owner. If it's blocked, make the repo **public**, add the commit author as a collaborator, or upgrade to **Pro**.

## Source folders

The per-page source apps that were merged into `prospec-website` still live under `frontend/` (`page-details-extraction`, `vista-blue-theme`, `solutions-page`, `student-portal-prospec`, etc.). They are no longer needed for deployment and can be removed.

## Branches

- `main` — deployment branch (Vercel builds from here).
- `dev-dipanshu` — active development branch.
