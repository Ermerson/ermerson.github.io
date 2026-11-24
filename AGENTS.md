# Repository guidance

## Project

- This is a Next.js App Router site built with React, TypeScript, Tailwind CSS 4, and Fumadocs.
- The landing page and home routes live under `app/(home)/`; documentation routes live under `app/docs/`.
- Documentation content is MDX under `content/docs/`. Source loading and shared Fumadocs layout options are in `lib/source.ts` and `lib/layout.shared.tsx`.
- Search and LLM-related endpoints are implemented in `app/api/` and the `app/llms*` routes.

## Working conventions

- Follow the existing component, styling, and routing patterns. Keep TypeScript types explicit where they clarify component or route contracts.
- Treat the root `DESIGN.md` as the visual source of truth. Shared Tailwind 4 color, type, spacing, and radius tokens are defined in `app/global.css`.
- Use Geist Sans and Geist Mono, the near-white canvas and ink palette, hairline borders, and the documented responsive breakpoints. Keep the mesh gradient within the home hero.
- Prefer editing the relevant existing page, component, or MDX source over introducing a dependency or duplicating an existing pattern.
- Preserve unrelated working-tree changes; inspect `git status` before editing or reverting files.
- Keep documentation pages in MDX and follow the existing frontmatter and Fumadocs conventions.

## Commands

- Use `pnpm` for package scripts and dependency management.
- `pnpm dev` starts the development server.
- `pnpm lint` runs ESLint.
- `pnpm types:check` generates Next.js route types and runs TypeScript checks.
- `pnpm build` creates a production build.

Run checks relevant to the requested change and report any checks that were not run.
