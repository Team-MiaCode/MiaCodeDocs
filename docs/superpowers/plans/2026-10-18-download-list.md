# Download page implementation plan

**Goal:** Implement approved proposal 1 and run a local preview.

**Architecture:** Keep the existing current-release cards. Replace archive cards with an accessible package table that reflows on mobile. Extend the existing navigation component for download pages, with localized home/docs links, and suppress documentation search only on home/download pages.

**Tech stack:** VitePress, Vue 3, Markdown, CSS.

- [x] Replace archive markup in `src/download.md` and `src/en/download.md`; retain all existing package URLs and default to expanded as shown in the approved preview.
- [x] Replace archive-only card CSS in `src/.vitepress/theme/custom.css` with table/phone layouts.
- [x] Extend `src/.vitepress/theme/components/NavQuickActions.vue` for localized home/docs navigation and search shortcut handling.
- [x] Update `src/.vitepress/theme/style/nav-floating.css` to hide search on download pages and keep navigation text visible on small screens; restore the MiaCode brand text in `src/.vitepress/theme/index.ts`.
- [x] Run the production build, then start the production preview on localhost.
- [x] Check Chinese/English, desktop/mobile layouts, archive collapse, home/docs navigation, search visibility and shortcuts, and theme appearance in a browser. Leave preview running and open it for the user.

Validation uses a browser against the rendered site; no unit tests are needed for this reversible presentation change.

Validation completed: `npm run docs:build`, `git diff --check`, and browser checks for Chinese/English at 1440, 768, 390, and 320 px. Checked archive links, collapse/expand, home/docs navigation, search visibility/shortcuts, helper-link color, and horizontal overflow. Dark/light desktop and phone screenshots inspected. Preview running at http://localhost:4173/download.
