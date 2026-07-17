import { Cpu, Cloud, Code, Database, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Narrative & Status */}
        <div className="space-y-8 order-2 lg:order-1 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-brand-orange" />
            <h2 className="font-display text-xs uppercase tracking-widest text-brand-orange font-semibold">
              The Architect
            </h2>
          </div>
          
          <h3 className="font-display text-3xl md:text-4xl font-bold text-on-surface leading-snug">
            Pioneering the future with <span className="italic text-brand-gold font-normal">Intelligent Design</span>
          </h3>
          
          <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <BrainCircuit className="w-24 h-24 text-white" />
            </div>
            
            <p className="font-sans text-base text-on-surface-variant leading-relaxed mb-6">
              My journey into Computer Science isn't just about code; it's about the synergy between human creativity and machine precision. Specializing in AI-Assisted Development and Prompt Engineering, I bridge the gap between abstract concepts and functional, scalable software.
            </p>
            <p className="font-sans text-base text-on-surface-variant leading-relaxed">
              I view every project as a cohesive digital experience—where backend architecture provides the invisible structure and the frontend serves as an illuminated canvas. My technical rigor is matched only by my commitment to aesthetic mastery.
            </p>
          </div>

          {/* Portrait Frame with Status Indicator */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
            <div className="relative group w-32 h-32 flex-shrink-0">
              <div className="absolute inset-0 bg-brand-orange/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="glass-panel p-1 rounded-full overflow-hidden border border-white/10 w-full h-full">
                <img 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvK6iZfIjyt-c5iJWRd-MI369uQvRo8GR8Vks1rSe_ljP1NNSQn7z6nAzyijYWXMCBWuHQ2Q4kA1RGRQqQ_Nua-GyRiM36yJRDp56XSpOvdc9O8IpwUyT3OuwNV-h8BwiA5DIdN7-qKsyQaVFfXdEHK6AM4_lE_f4FeDyCHpggQOniuyKt3-dLb1w4lEZR_snb9UzfmDbr0uuy9Tfjq2rs4jlSRpLLVtM0SdQd15Pj0W-wZX3ZVG5GC7b7I4g_rnplmSrmfRECOSF-" 
                  alt="Mugilarasu Narrative"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange" />
                </span>
                <span className="font-mono text-xs text-brand-gold font-bold uppercase tracking-wider">
                  Status: Open for opportunities
                </span>
              </div>
              <p className="font-mono text-xs text-on-surface-variant/70 italic leading-relaxed">
                Available for internships, freelance prompt architectures, and full-stack software development collaborations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Highlights Sphere */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
            {/* Spinning Glow Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
            
            {/* Structural Rings */}
            <div className="absolute w-4/5 h-4/5 border border-brand-orange/15 rounded-full animate-spin [animation-duration:15s] pointer-events-none" />
            <div className="absolute w-3/5 h-3/5 border border-brand-gold/10 rounded-full animate-spin [animation-duration:25s] [animation-direction:reverse] pointer-events-none" />
            
            {/* 4 Corner highlight cards */}
            <div className="grid grid-cols-2 gap-6 p-4 z-10 w-full">
              
              <div className="p-6 glass-panel rounded-2xl glass-stroke text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                <Cpu className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-display font-bold text-sm text-on-surface mb-1">Prompt Eng.</h4>
                <p className="font-sans text-[11px] text-on-surface-variant/80">LLM Guides</p>
              </div>

              <div className="p-6 glass-panel rounded-2xl glass-stroke text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                <Cloud className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-display font-bold text-sm text-on-surface mb-1">Cloud Dev</h4>
                <p className="font-sans text-[11px] text-on-surface-variant/80">AWS Clusters</p>
              </div>

              <div className="p-6 glass-panel rounded-2xl glass-stroke text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                <Code className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-display font-bold text-sm text-on-surface mb-1">Clean Code</h4>
                <p className="font-sans text-[11px] text-on-surface-variant/80">React / OOPs</p>
              </div>

              <div className="p-6 glass-panel rounded-2xl glass-stroke text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                <Database className="w-8 h-8 text-brand-orange mb-3" />
                <h4 className="font-display font-bold text-sm text-on-surface mb-1">System Arch</h4>
                <p className="font-sans text-[11px] text-on-surface-variant/80">SQL Relational</p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
