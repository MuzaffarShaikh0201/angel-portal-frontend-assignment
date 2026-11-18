# Ascencia Malta: Static UI in React

Frontend assignment: a static React website with a new UI theme, based on the existing
[Ascencia Malta](https://www.ascenciamalta.edu.mt) website. The theme is new, but it keeps the school's logo and brand
colours. Text, images and icons are reused from the live site.

## Pages

| Page     | Route      | Original                                        |
| -------- | ---------- | ----------------------------------------------- |
| Home     | `/`        | https://www.ascenciamalta.edu.mt/               |
| About Us | `/about`   | https://www.ascenciamalta.edu.mt/ascencia-malta |
| Contact  | `/contact` | https://www.ascenciamalta.edu.mt/contact        |

## Tech stack

- React 19 (functional components and hooks) with TypeScript
- Vite
- Plain CSS: CSS Modules plus a shared set of design tokens (no Bootstrap, Tailwind, MUI or other UI framework)
- Static UI only: no backend and no API calls. Page content lives in typed data files under `src/content`.
- Responsive for desktop, tablet and mobile

## Setup

Requirements: Node.js 20.19+ or 22.12+, and npm.

```bash
git clone https://github.com/MuzaffarShaikh0201/angel-portal-frontend-assignment.git
cd angel-portal-frontend-assignment
npm install
npm run dev
```

Open http://localhost:5173.

Production build:

```bash
npm run build
npm run preview
```

Open http://localhost:4173.

## Scripts

| Command                | Description                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Start the dev server            |
| `npm run build`        | Type-check and build to `dist/` |
| `npm run preview`      | Serve the production build      |
| `npm run lint`         | Lint with oxlint                |
| `npm run typecheck`    | Type-check with TypeScript      |
| `npm run format`       | Format with Prettier            |
| `npm run format:check` | Check formatting                |

## Project structure

```
src/
  components/   layout (header, footer), reusable UI and shared sections
  pages/        Home, About, Contact and 404, each split into sections
  content/      page text and image data
  router/       small client-side router (History API)
  styles/       design tokens and base styles
```

## Notes

- The contact form validates input and shows a confirmation message, but doesn't send anything because there is no backend.
- Images are loaded from the original website rather than stored in this repository.
