# Rastriya Janaseva website

A responsive, single-page React website for Rastriya Janaseva. The content and
section structure are based on the brief in
[`Docs/Rastriya_Janaseva_Website_Content_Brief.docx`](./Docs/Rastriya_Janaseva_Website_Content_Brief.docx).

## Requirements

- Node.js 18 or newer
- npm

## Run locally

From the project root, install the client dependencies and start Vite:

```powershell
cd Client
npm ci
npm run dev
```

Open the local URL printed by Vite in your browser.

## Build and preview

```powershell
cd Client
npm run build
npm run preview
```

The production build is written to `Client/dist/`. The preview command serves
that build locally.

## Project structure

```text
.
├── Client/
│   ├── assets/                 # Organisation logo
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/         # Shared brand and icon components
│   │   │   ├── forms/          # Reusable inquiry form
│   │   │   ├── layout/         # Announcement bar, header and footer
│   │   │   └── sections/       # Individual landing-page sections
│   │   ├── data/               # Navigation and display content
│   │   ├── hooks/              # Shared React hooks
│   │   ├── pages/              # Page composition
│   │   ├── main.jsx            # React entry point
│   │   └── styles.css          # Global styles and responsive layouts
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   └── vite.config.js
└── Docs/
    └── Rastriya_Janaseva_Website_Content_Brief.docx
```

## Content and launch notes

- Navigation links scroll to sections on the landing page. Add a section ID to
  `navigation` in `Client/src/data/siteContent.js` when adding a new nav item.
- The contact and join forms currently validate in the browser and show a
  preview message; they do **not** send or store submissions. Connect them to an
  approved backend or form service before launch.
- Replace placeholder contact details and team content only with verified,
  approved information. Publish activity reports, testimonials and photographs
  only after confirming their accuracy and permissions.
- The website uses the supplied logo at `Client/assets/logo.jpg`.
