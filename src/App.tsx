import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';

// Types
interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  linkedinUrl: string;
}

interface Project {
  id: string;
  title: string;
  tech: string;
  description: string;
  previewUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

// Data
const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: 'May. 2025 – Present',
    location: '(Remote)',
    description: [
      'Specialized in full-stack web development using modern technologies including React.js, Next.js, Node.js, and PostgreSQL.',
      'Built responsive web applications with Tailwind CSS, ensuring cross-device compatibility and optimal user experience.',
      'Tech Stack: JavaScript, TypeScript, HTML5, CSS, React.js, Next.js, Node.js, Tailwind CSS, Prisma ORM, PostgreSQL.'
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
      'Created custom website layouts using HTML and CSS. Designed responsive websites compatible with desktops and mobile devices.',
      'Assisted small businesses in building online presence through personal portfolio sites.',
      'Developed a full-stack e-commerce publishing platform specializing in Western literature and books - a modern web application for selling books, managing inventory, processing orders, and engaging with customers through multimedia content like book trailers.',
      'Tech Stack: JavaScript, CSS, HTML5, Next.js, React.js, Tailwind CSS, Prisma ORM.'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/seanagustine/'
  }
];

const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Casey Nash Western Author',
    tech: 'Next.js, React, TypeScript, Tailwind CSS, Prisma, PostgreSQL',
    description: 'A custom character booking platform where customers become characters in Western novels. Features multi-tier package system, video testimony uploads with cloud processing, dynamic book library with infinite scroll, testimonial moderation system, and admin dashboard with real-time analytics.',
    previewUrl: '/images/casey-nash-web.png',
    githubUrl: 'https://github.com/agustinelumandong',
    liveUrl: 'https://www.caseynashwesternauthor.com/'
  },
  {
    id: 'proj-2',
    title: 'Dusty Saddle Publishing',
    tech: 'Next.js, React.js, Tailwind CSS, Prisma ORM, JavaScript',
    description: 'Full-stack e-commerce publishing platform specializing in Western literature and books. A modern web application for selling books, managing inventory, processing orders, and engaging with customers through multimedia content like book trailers. Built with responsive design for optimal user experience across all devices.',
    previewUrl: '/images/dsp-web.png',
    githubUrl: 'https://github.com/agustinelumandong',
    liveUrl: 'https://dusty-saddle-publishing.vercel.app/'
  },
  {
    id: 'proj-3',
    title: 'SantoTomasDavNor - RAS',
    tech: 'Laravel, PHP, Livewire, Alpine.js, Tailwind CSS (TALL Stack)',
    description: 'Registration and admission system for educational institution built with the TALL stack (Tailwind, Alpine.js, Livewire, Laravel). Features student enrollment management, document processing, real-time application tracking, and administrative dashboard for processing registrations. Built with responsive design ensuring accessibility across desktop and mobile devices.',
    previewUrl: '/images/santo-tomas-web.png',
    githubUrl: 'https://github.com/agustinelumandong',
    liveUrl: 'https://santotomasdavnor-ras.com/'
  }
];

// Components
const HoverPreview = ({
  isVisible,
  imageUrl,
  title,
  link,
  onMouseEnter,
  onMouseLeave
}: {
  isVisible: boolean;
  imageUrl: string;
  title: string;
  link?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 top-0 left-full ml-4 w-64 bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden hidden xl:block"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-black text-white text-xs text-center font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>View Project</span>
              <ExternalLink size={12} />
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setHoveredProject(null);
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white text-black font-serif selection:bg-black selection:text-white pb-20">
      <main className="max-w-3xl mx-auto px-6 py-16 sm:py-24 relative">

        {/* Header */}
        <header className="mb-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Sean Agustine L. Esparagoza</h1>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2 text-sm font-sans text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin size={14} /> Philippines
            </span>
            <a href="mailto:sean.esparagoza@gmail.com" className="flex items-center gap-1 hover:text-black transition-colors">
              <Mail size={14} /> sean.esparagoza@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/seanagustine/" className="flex items-center gap-1 hover:text-black transition-colors">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://github.com/agustinelumandong" className="flex items-center gap-1 hover:text-black transition-colors">
              <Github size={14} /> GitHub
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-8">Work Experience</h2>
          <div className="space-y-12">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-xl font-bold">{job.company}</h3>
                  <span className="font-sans text-sm font-medium text-gray-500">{job.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4">
                  <span className="font-serif italic text-lg text-gray-800">{job.role}</span>
                  <span className="font-sans text-sm text-gray-500">{job.location}</span>
                </div>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-700 leading-relaxed mb-3">
                  {job.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-sans text-gray-400 hover:text-black transition-colors italic hover:translate-x-1 duration-200"
            >
              ...see more on LinkedIn <ExternalLink size={12} />
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-8">Selected Projects</h2>
          <div className="space-y-10">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <div className="relative">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer"
                    >
                      {project.title}
                    </a>

                    {/* Hover Preview Tooltip */}
                    <HoverPreview
                      isVisible={hoveredProject === project.id}
                      imageUrl={project.previewUrl}
                      title={project.title}
                      link={project.liveUrl || project.githubUrl}
                      onMouseEnter={() => handleMouseEnter(project.id)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                  <span className="font-sans text-sm italic text-gray-500">{project.tech}</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-3">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-sans text-gray-400 hover:text-black transition-colors italic hover:translate-x-1 duration-200"
            >
              ...see more on GitHub <ExternalLink size={12} />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div>
              <span className="font-bold block mb-1">Languages</span>
              <p>JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS, SQL, PHP, Python</p>
            </div>
            <div>
              <span className="font-bold block mb-1">Frameworks & Libraries</span>
              <p>React.js, Next.js, Node.js, Astro, Laravel, Livewire, Alpine.js, Tailwind CSS, Prisma ORM, Framer Motion, Zustand, Zod, TanStack Query, Axios</p>
            </div>
            <div>
              <span className="font-bold block mb-1">Database & Backend</span>
              <p>MySQL, PostgreSQL, Prisma ORM, RESTful APIs, Server-Side Rendering</p>
            </div>
            <div>
              <span className="font-bold block mb-1">Tools & Platforms</span>
              <p>Git, GitHub, VS Code, Postman, Vercel, Netlify, NPM, Docker</p>
            </div>
            <div>
              <span className="font-bold block mb-1">Web Development</span>
              <p>Responsive Design, Full-Stack Development, E-commerce Platforms, CMS Integration, Appointment & Booking Management</p>
            </div>
            <div>
              <span className="font-bold block mb-1">Design & UI/UX</span>
              <p>Figma, Wireframing, Prototyping, Mobile-First Design</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-black pb-2 mb-6">Education</h2>
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="text-lg font-bold">Davao Del Norte State College</h3>
              <span className="font-sans text-sm font-medium text-gray-500">Aug 2024 – Present</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <span className="font-serif italic text-gray-800">Bachelor of Information Technology</span>
              <span className="font-sans text-sm text-gray-500">Panabo City, Davao del Norte</span>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center border-t border-gray-100 pt-8 no-print">
          <p className="text-gray-400 text-sm italic mb-4">
            This portfolio is designed to be printed or saved as a clean PDF.
          </p>
          <a
            href="mailto:sean.esparagoza@gmail.com"
            className="inline-block px-6 py-2 border border-black text-black font-bold text-sm rounded-full hover:bg-black hover:text-white transition-colors"
          >
            Contact Me
          </a>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-100 text-center text-sm font-sans text-gray-400">
          <p>© {new Date().getFullYear()} Sean Agustine Esparagoza. </p>
        </footer>

      </main>
    </div>
  );
}
