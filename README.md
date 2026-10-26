# 👾 cshan.dev

Hi, I’m **Sean Agustine L. Esparagoza**, a fourth-year Bachelor of Information Technology student at Davao del Norte State College. I’m interested in building useful software and thoughtful digital experiences.

This is my personal portfolio and CV, where I share my background, experience, skills, and work.

**Portfolio:** [cshan-dev.vercel.app](https://cshan-dev.vercel.app/)

**Repository:** [agustinelumandong/cshan.dev](https://github.com/agustinelumandong/cshan.dev)

## Features

- Personal profile, career objective, experience, projects, skills, education, and contact links.
- Responsive layout with section navigation, keyboard focus indicators, and a skip link.
- Light and dark themes, subtle animations, and support for reduced-motion preferences.
- **Print / Save PDF** opens the browser's print dialog; choose “Save as PDF” for a printable CV.

## Technologies

React 19, TypeScript, Vite, Tailwind CSS 4, Lucide icons, and Vite PWA. Hosted on Vercel.

## Run locally

Use Node.js 22 or newer and npm. No API keys or database are needed for this static CV.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```sh
npm run lint
npm run build
npm run preview
```

`lint` checks TypeScript types. `build` produces the deployable `dist/` directory; `preview` serves that production build locally.

## How it works

`index.html` loads `src/main.tsx`, which mounts the React app. `src/App.tsx` arranges the CV sections and manages the theme. Reusable sections live in `src/components/`; experience, project, and skill content lives in `src/data.ts`. `src/index.css` defines colors, motion, accessibility, and print styles. Profile photos and project previews are local files in `public/images/`.

Section links use native HTML anchors, contact opens an email app, and print uses `window.print()`. Theme preferences are stored locally when browser storage is available. The PWA configuration in `vite.config.ts` generates the manifest and service worker during builds.

## Deploy to Vercel

1. Commit changes by purpose and push them to this GitHub repository.
2. Import the repository into Vercel, or use its existing connected project.
3. Select the **Vite** framework preset, build command **`npm run build`**, and output directory **`dist`**. No environment variables are required.
4. Deploy, then check the public URL on desktop and mobile. Check section links, project links, images, theme switching, and the print dialog.

## Submission links

- **Vercel:** [cshan-dev.vercel.app](https://cshan-dev.vercel.app/)
- **GitHub:** [agustinelumandong/cshan.dev](https://github.com/agustinelumandong/cshan.dev)

## Class Information

- **Year Level:** 4th Year
- **Set/Section:** C
- **Subject:** IT415 - APPLICATION DEVELOPMENT AND EMERGING TECHNOLOGIES

## Contact

- **Email:** [sean.esparagoza@gmail.com](mailto:sean.esparagoza@gmail.com)
- **LinkedIn:** [seanagustine](https://www.linkedin.com/in/seanagustine/)
- **GitHub:** [agustinelumandong](https://github.com/agustinelumandong)

© 2026 Sean Agustine L. Esparagoza
