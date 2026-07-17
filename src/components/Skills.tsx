import { useState } from "react";
import { Zap, Waves, Code, Coffee, Terminal, Cloud, Database, Layers, Puzzle } from "lucide-react";
import { SKILLS } from "../data";
import { Skill } from "../types";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "core" | "languages" | "frameworks" | "cloud" | "other">("all");

  const filteredSkills = activeTab === "all" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bolt": return <Zap className="w-6 h-6 text-brand-orange" />;
      case "waves": return <Waves className="w-6 h-6 text-brand-orange animate-pulse" />;
      case "web": return <Layers className="w-6 h-6 text-brand-orange" />;
      case "coffee": return <Coffee className="w-6 h-6 text-brand-orange" />;
      case "terminal": return <Terminal className="w-6 h-6 text-brand-orange" />;
      case "cloud_done": return <Cloud className="w-6 h-6 text-brand-orange" />;
      case "database": return <Database className="w-6 h-6 text-brand-orange" />;
      case "extension": return <Puzzle className="w-6 h-6 text-brand-orange" />;
      default: return <Code className="w-6 h-6 text-brand-orange" />;
    }
  };

  const tabs = [
    { label: "All Tech", value: "all" },
    { label: "AI & Prompting", value: "core" },
    { label: "Languages", value: "languages" },
    { label: "Frameworks", value: "frameworks" },
    { label: "Cloud Systems", value: "cloud" },
    { label: "Algorithms & DB", value: "other" },
  ];

  return (
    <section id="skills" className="py-24 bg-brand-dark/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-xs uppercase tracking-widest text-brand-orange font-semibold mb-3">
            Core Competencies
          </h2>
          <h3 className="font-display text-3xl md:text-5xl font-black text-on-surface">
            The Intelligent Toolset
          </h3>
          <p className="font-sans text-sm text-on-surface-variant max-w-lg mx-auto mt-4 leading-relaxed">
            Harnessing a precise blend of traditional programming architectures alongside next-generation AI-assisted development tools.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all uppercase tracking-wider cursor-pointer ${
                activeTab === tab.value
                  ? "bg-brand-orange text-white font-bold border border-brand-orange shadow-lg shadow-brand-orange/10"
                  : "bg-white/5 border border-white/5 text-on-surface-variant hover:text-on-surface hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="glass-panel p-6 rounded-2xl glass-stroke hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-orange/30 transition-colors">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="font-mono text-xs text-brand-gold font-bold">
                    {skill.rating}%
                  </span>
                </div>
                
                <h4 className="font-display font-bold text-base text-on-surface mb-2 group-hover:text-brand-orange transition-colors">
                  {skill.name}
                </h4>
                
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress Rating Line */}
              <div>
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="bg-gradient-to-r from-brand-orange to-brand-gold h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.rating}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-on-surface-variant/50">
                    Confidence
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-orange">
                    Expert
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
