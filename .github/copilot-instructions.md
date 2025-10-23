## Quick context

- This is a small React app scaffolded for Vite (see `package.json` scripts: `dev`, `build`, `preview`).
- UI styles use Tailwind + a minimal custom `src/App.css` which imports Google fonts and exposes CSS variables (e.g. `--font-body`, `--color-primary`).
- Entry point: `src/main.jsx` → `src/App.jsx`.

## What you should know before editing

- Keep the Vite dev server as the primary execution environment. Use `npm run dev` for iterative HMR feedback.
- Linting is configured via `eslint.config.js`. The project expects modern ECMAScript modules and JSX. The `no-unused-vars` rule ignores names starting with an uppercase letter or underscore (pattern `^[A-Z_]`).
- Tailwind is enabled through `@tailwindcss/vite` plugin in `vite.config.js`. Styles are a mix of Tailwind utility classes (e.g. `text-3xl`, `m-4`) and a small CSS file with CSS variables in `src/App.css`.

## File and pattern examples (use these as canonical references)

- Project entry: `src/main.jsx` — shows how the app is mounted with React 18+ `createRoot`.
- Top-level component: `src/App.jsx` — simple JSX, uses Tailwind utility classes and CSS variables defined in `src/App.css`.
- Vite config: `vite.config.js` — uses `@vitejs/plugin-react` and `@tailwindcss/vite` plugins.
- ESLint config: `eslint.config.js` — shows rules and environments to respect.

## Editing rules for AI agents

- Minimal diffs: Prefer small focused changes. Avoid large refactors without tests or an explicit user request.
- Follow existing style: keep JSX/ESM style, prefer functional components (as used in `App.jsx`).
- When adding styles, prefer Tailwind utility classes for layout and quick iterations. Add global variables to `src/App.css` only when a variable must be shared across components (observe the file's use of `--font-body` and `--color-primary`).
- Respect ESLint conventions in `eslint.config.js`. Avoid introducing top-level unused variables unless they match the `^[A-Z_]` ignore pattern.

## Build / dev / lint commands (project-specific)

- Start dev server with HMR:

  npm run dev

- Build for production:

  npm run build

- Preview the production build locally:

  npm run preview

- Lint the repository:

  npm run lint

## What to watch for (edge cases & gotchas)

- Tailwind version used is v4 and `@tailwindcss/vite` plugin is present in `package.json`. Changes to PostCSS/Tailwind config are not present in this repo; avoid adding assumptions about an absent `tailwind.config.js` unless you add one deliberately and explain why.
- `src/index.css` currently exists but is empty — global Tailwind directives (if needed) may be added there. However, `src/App.css` already imports `tailwindcss` with `@import "tailwindcss";`.
- Fonts: `src/App.css` imports Google Fonts directly — be mindful of privacy or offline requirements before changing this.

## Helpful examples to reference in PRs

- Small change example: Update a text string in `src/App.jsx` or a Tailwind utility class — use `npm run dev` to verify HMR and visual result.
- Adding a new component: place in `src/` as an ES module, import its CSS using Tailwind utilities where possible, and mount it from `App.jsx` or `main.jsx`.

## When you need more info

- If changes touch build config (Vite plugins or Tailwind setup) or add new dependencies, include updated `package.json` and brief rationale in the PR description.
- If adding global CSS variables or a Tailwind config file, explain why `src/App.css`'s current approach (CSS variables + `@import "tailwindcss"`) is insufficient.

---
Please review these notes for accuracy. Tell me if you want more examples (e.g., a short component template or a recommended `tailwind.config.js`).
