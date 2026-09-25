import type { Experience, Project, SkillGroup } from './types';

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: 'May. 2025 – Jun. 2026',
    location: '(Remote)',
    description: [
      'Built full-stack web applications with React, Next.js, Laravel, and PostgreSQL.',
      'Used Tailwind CSS to adapt layouts for desktop and mobile devices.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/seanagustine/'
  },
  {
    id: 'exp-2',
    role: 'Fullstack Freelance Web Designer',
    company: 'Dusty Saddle Publishing',
    period: 'Oct. 2025 – Feb. 2026',
    location: 'United States (Remote)',
    description: [
      'Designed responsive website layouts for desktop and mobile devices.',
      'Built a Western-book publishing store with inventory management, order processing, and book trailers.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/seanagustine/'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Casey Nash Western Author',
    tech: 'Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL',
    description: 'A custom Western author platform with character bookings, book discovery, testimonials, and an admin dashboard.',
    previewUrl: '/images/casey-nash-web-thumb.webp',
    liveUrl: 'https://www.caseynashwesternauthor.com/'
  },
  {
    id: 'proj-2',
    title: 'Dusty Saddle Publishing',
    tech: 'Next.js, React.js, Tailwind CSS, Prisma ORM, JavaScript',
    description: 'A full-stack publishing store for selling Western books, managing inventory, processing orders, and showcasing multimedia content.',
    previewUrl: '/images/dsp-web-thumb.webp',
    liveUrl: 'https://dusty-saddle-publishing.vercel.app/'
  },
  {
    id: 'proj-3',
    title: 'SantoTomasDavNor - RAS',
    tech: 'Laravel, PHP, Livewire, Alpine.js, Tailwind CSS (TALL Stack)',
    description: 'A responsive registration and admission system for managing student enrollment, document processing, and application tracking.',
    previewUrl: '/images/santo-tomas-web-thumb.webp',
    liveUrl: 'https://santotomasdavnor-ras.com/'
  },
  {
    id: 'proj-4',
    title: 'Cold Brew Coffee Co.',
    tech: 'Next.js, React, TypeScript, Tailwind CSS',
    description: 'A brutalist-inspired coffee shop website with menu highlights, testimonials, archived collections, and GrabFood ordering.',
    previewUrl: '/images/cold-brew-coffee-web-thumb.webp',
    liveUrl: 'https://cold-brew-coffee.vercel.app/'
  },
  {
    id: 'proj-5',
    title: 'Gospel Bible Baptist Church',
    tech: 'React, Tailwind CSS, Google Maps API',
    description: 'A church website for service information, ministry programs, event galleries, location details, and Messenger contact.',
    previewUrl: '/images/gospel-bible-baptist-church-web-thumb.webp',
    liveUrl: 'https://gospel-bible-baptist-church.vercel.app/'
  }
];

export const SKILLS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    items: 'JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS, SQL, PHP, Python'
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    items: 'React.js, Next.js, Node.js, Astro, Laravel, Livewire, Alpine.js, Tailwind CSS, Prisma ORM, Framer Motion, Zustand, Zod, TanStack Query, Axios'
  },
  {
    id: 'database-backend',
    title: 'Database & Backend',
    items: 'MySQL, PostgreSQL, Prisma ORM, RESTful APIs, Server-Side Rendering'
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    items: 'Git, GitHub, VS Code, Postman, Vercel, Netlify, NPM, Docker'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    items: 'Responsive Design, Full-Stack Development, E-commerce Platforms, CMS Integration, Appointment & Booking Management'
  },
  {
    id: 'design',
    title: 'Design & UI/UX',
    items: 'Figma, Wireframing, Prototyping, Mobile-First Design'
  }
];
