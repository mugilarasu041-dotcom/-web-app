import { useState, useRef, MouseEvent } from "react";
import { ExternalLink, Github, Sparkles, Code, Terminal, Layers } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

function ProjectCard({ project }: { project: Project; key?: any }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Relative mouse coordinate from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    // Apply tilt angles
    setRotateX(-relativeY * 15); // max 15deg
    setRotateY(relativeX * 15);

    // Glare position from 0 to 100
    setGlareX(((e.clientX - rect.left) / width) * 100);
    setGlareY(((e.clientY - rect.top) / height) * 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl glass-panel overflow-hidden group cursor-pointer transition-all duration-300 border border-white/5 shadow-2xl"
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)` 
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
        transition: isHovered ? "none" : "transform 0.5s ease-out, box-shadow 0.5s ease-out",
        boxShadow: isHovered 
          ? "0 30px 60px -15px rgba(255, 140, 0, 0.15), 0 20px 40px -20px rgba(0, 0, 0, 0.7)"
          : "0 10px 30px -15px rgba(0, 0, 0, 0.5)"
      }}
    >
      {/* Glare effect overlay */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-10 opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8) 0%, transparent 60%)`
          }}
        />
      )}

      {/* Card Image Wrapper */}
      <div className="relative h-[280px] md:h-[320px] overflow-hidden bg-brand-dark">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 contrast-110"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-85" />
        
        {/* Category Label */}
        <span className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest font-bold bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-3 py-1 rounded-full backdrop-blur-md">
          {project.category}
        </span>

        {/* Year Label */}
        <span className="absolute top-6 right-6 font-mono text-[11px] text-brand-gold font-bold">
          {project.timeline}
        </span>
      </div>

      {/* Card Content Pane */}
      <div className="p-8 md:p-10 relative">
        <h4 className="font-display font-bold text-2xl text-on-surface mb-2 group-hover:text-brand-orange transition-colors">
          {project.title}
        </h4>
        <p className="font-display text-xs text-brand-gold/80 tracking-wide font-medium mb-4 uppercase">
          {project.subtitle}
        </p>
        
        <p className="font-sans text-sm text-on-surface-variant/95 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* highlights bullets */}
        <ul className="space-y-2 mb-8">
          {project.highlights.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant/85 leading-relaxed">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-1.5 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 border border-white/5 text-on-surface-variant/80 font-mono text-[10px] px-2.5 py-1 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center gap-6 border-t border-white/5 pt-6">
          <a
            href={project.demoUrl}
            className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-on-surface hover:text-brand-orange transition-colors"
          >
            <Sparkles className="w-4 h-4 text-brand-orange" />
            Launch Demo
          </a>
          <a
            href={project.githubUrl}
            className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
          >
            <Github className="w-4 h-4" />
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="font-display text-xs uppercase tracking-widest text-brand-orange font-semibold mb-3">
            Selected Work
          </h2>
          <h3 className="font-display text-3xl md:text-5xl font-black text-on-surface">
            Digital Masterpieces
          </h3>
        </div>
        <p className="font-sans text-xs text-on-surface-variant max-w-xs leading-relaxed italic border-l border-brand-orange/40 pl-4">
          Hover and tilt cards to inspect engineering depths. Built natively from the floor up.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  );
}
