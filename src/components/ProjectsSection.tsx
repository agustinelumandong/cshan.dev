import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { SectionHeading } from './SectionHeading';

interface ProjectsSectionProps {
  projects: Project[];
}

interface HoverPreviewProps {
  isVisible: boolean;
  imageUrl: string;
  title: string;
  link?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function HoverPreview({
  isVisible,
  imageUrl,
  title,
  link,
  onMouseEnter,
  onMouseLeave
}: HoverPreviewProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -10, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute z-50 top-0 right-full mr-4 w-64 bg-[var(--surface)] border border-[var(--border)] shadow-2xl rounded-lg overflow-hidden hidden xl:block"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="aspect-video w-full bg-[var(--surface-muted)] relative overflow-hidden">
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
              className="block p-3 bg-[var(--text)] text-[var(--bg)] text-xs text-center font-medium hover:opacity-85 transition-opacity flex items-center justify-center gap-2"
            >
              <span>View Project</span>
              <ExternalLink size={12} />
            </a>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
    <section className="mb-16">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="space-y-10">
        {projects.map((project) => {
          const projectUrl = project.liveUrl || project.githubUrl;

          return (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <div className="relative">
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:underline decoration-2 underline-offset-4 cursor-pointer"
                  >
                    {project.title}
                  </a>

                  <HoverPreview
                    isVisible={hoveredProject === project.id}
                    imageUrl={project.previewUrl}
                    title={project.title}
                    link={projectUrl}
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
                <span className="font-sans text-sm italic text-[var(--muted)]">{project.tech}</span>
              </div>

              <p className="text-[var(--body)] leading-relaxed mb-3">
                {project.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-sans text-[var(--subtle)] hover:text-[var(--text)] transition-colors italic hover:translate-x-1 duration-200"
        >
          ...see more on GitHub <ExternalLink size={12} />
        </a>
      </div>
    </section>
  );
}
