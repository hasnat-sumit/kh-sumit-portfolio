<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project shape

- Single Next.js 16.4.3 App Router app; all source in `src/`. Entry points: `src/app/layout.tsx`, `src/app/page.tsx` (currently a placeholder).
- Path alias `@/*` → `./src/*`.
- npm is the package manager (use the existing `package-lock.json`, not yarn/pnpm/bun).
- No test suite and no CI exist. Verification = lint → typecheck → build, in that order:
  1. `npm run lint` (ESLint 9 flat config in `eslint.config.mjs`)
  2. `npx tsc --noEmit` (no typecheck script exists)
  3. `npm run build` — the only step that exercises prerendering; required after any change to routes or data fetching.

## Next.js 16 gotchas (verified against bundled docs)

- `cacheComponents: true` + `partialPrefetching: true` are set in `next.config.ts`. Pages prerender under the Cache Components model: uncached data access (`fetch()`, `connection()`, headers/cookies) outside `<Suspense>` is a **blocking build error**, not a warning. The error output lists the canonical fixes — wrap in `<Suspense>` (stream), add `"use cache"` (cache), or `export const instant = false` (block). `next build --debug-prerender` enables server source maps and continues past a failed route.
- Next generates global route prop types: use `PageProps<'/route'>` / `LayoutProps<'/route'>` (see `src/app/layout.tsx`) instead of hand-writing `params`/`searchParams` types.
- React Compiler is enabled (`reactCompiler: true`): components must be pure — no mutations, impure calls, or side effects during render.

## Styling and UI

- Tailwind CSS v4 is CSS-first: there is no `tailwind.config` and no `postcss.config`. CSS is processed by the `@tailwindcss/turbopack` loader rule in `next.config.ts`; global styles and design tokens live in `src/app/globals.css` (`@import "tailwindcss"`, shadcn `@theme` block, `@custom-variant dark`).
- shadcn/ui is configured with style `base-nova` (`components.json`): primitives in `src/components/ui/` are built on **Base UI (`@base-ui/react`), not Radix** — don't add `@radix-ui/*` imports. Add new primitives with `npx shadcn add <name>` (the `shadcn` CLI is a dependency) so they match the Base UI style.
- `cn()` lives in `src/lib/utils.ts`; icons come from `lucide-react`.

## Managed blocks in this file

- Content between the `nextjs-agent-rules` markers above is rewritten by `next dev`; `experimental.agentFeedback` is also enabled, so `next dev` may add a `nextjs-agent-feedback` block the same way. Keep all custom notes **outside** the markers and never delete the blocks.
