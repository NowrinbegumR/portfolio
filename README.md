# Nowrin Begum R. — AI & Data Science Portfolio

TanStack Start + React 19 + Tailwind 4 (Vite).

## Run locally

```bash
bun install        # or: npm install --legacy-peer-deps
bun run dev        # http://localhost:8080
bun run build      # production build
bun run test       # unit tests
```

## Where to edit content

All facts live in `src/data/portfolio.ts`:

- `researchWorks[].href` / `.doi` — add verified paper links (button appears automatically)
- `patentPublications[].href` — add official patent record link; fill the third patent entry
- `achievements` — add Tata Hackathon details
- Portrait: `public/assets/nowrin-portrait.jpg` (+ `.webp`)

## Assets

- Résumé: `public/assets/Nowrin-Begum-R-Resume.pdf` (replace the file to update the download)
- Portrait: `public/assets/nowrin-portrait.jpg` / `.webp`
- BlueGuard diagram: `public/assets/blueguard-architecture.webp`
