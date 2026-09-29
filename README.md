# Portfolio — Yash Agrawal

Personal portfolio site. React 19 + Vite 8, hand-written CSS, no UI framework.

**Live:** https://yashagrawal.netlify.app <!-- update once the Netlify site name is set -->

## Running it

Needs Node 22 or newer.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle locally
npm run lint     # oxlint
```

## Editing the content

**All copy lives in [`src/data.js`](src/data.js).** Nothing else holds text, so
changing a role, a date or a skill means editing that one file.

- `profile` — name, title, tagline, contact details, résumé path
- `sections` — the left-hand nav; each `id` must match a section on the page
- `about` — the About paragraphs
- `experience` — roles, newest first, each with its own technology tags
- `skills`, `education`

Copy can mark its own emphasis with braces: `'held {70ms p95} at peak'` renders
`70ms p95` in the brighter heading colour.

The résumé PDF is served from `public/Yash_Agrawal_Resume.pdf`. Replacing that
file updates the "View full résumé" link; no code change needed.

## Deploying to Netlify

`netlify.toml` already declares the build command, publish directory and Node
version, so there is nothing to configure in the Netlify UI.

1. Push this repository to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Accept the detected settings (`npm run build` → `dist`) and deploy.
4. **Site configuration → Change site name** to set the subdomain.

Every push to the default branch redeploys; pull requests get deploy previews.

## Layout credit

The two-column layout — fixed left rail, scrolling right column, hover-dimmed
experience list — follows [Brittany Chiang's portfolio](https://brittanychiang.com),
credited in the site footer.
