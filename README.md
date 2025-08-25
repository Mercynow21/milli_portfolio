This is a Next.js + Tailwind portfolio for Mercy Abdissa.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser.

Edit `src/app/page.tsx` to customize sections. Content is organized as: Hero, About, Skills, Projects, Contact.

Fonts are handled via `next/font` and Geist.

## Deployment (Vercel)

1. Push the repo to GitHub
2. On Vercel, import the repo as a new project
3. Framework preset: Next.js (auto)
4. If this is in a monorepo, set Root Directory to `portfolio`
5. Click Deploy

## Contact Form Setup (Email via Resend)

Set these environment variables (Vercel → Project → Settings → Environment Variables):

- `RESEND_API_KEY` – from your Resend account
- `CONTACT_TO_EMAIL` – your inbox (e.g., `you@example.com`)
- `CONTACT_FROM_EMAIL` – optional, defaults to `Portfolio <onboarding@resend.dev>`

Then redeploy. The form at `#contact` will send you an email instead of writing to a database.
