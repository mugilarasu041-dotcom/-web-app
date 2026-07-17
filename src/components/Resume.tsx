import { 
  GraduationCap, 
  Calendar, 
  CheckCircle, 
  Download, 
  BookOpen, 
  Heart, 
  Languages, 
  MapPin, 
  Sparkles, 
  Printer 
} from "lucide-react";
import { EXPERIENCE_TIMELINE, PUBLICATIONS, INTERESTS, LANGUAGES, CONTACT_DETAILS } from "../data";

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-brand-dark/40 border-y border-white/5 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Title & PDF CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-xs uppercase tracking-widest text-brand-orange font-semibold mb-3">
              Milestones
            </h2>
            <h3 className="font-display text-3xl md:text-5xl font-black text-on-surface">
              Education & Publications
            </h3>
          </div>
          <button
            onClick={handlePrint}
            className="px-6 py-3.5 rounded-xl border border-brand-orange/30 bg-brand-orange/5 hover:bg-brand-orange text-brand-orange hover:text-white font-display text-xs uppercase tracking-wider font-bold transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/5"
          >
            <Printer className="w-4 h-4" />
            Print Full Resume
          </button>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Span 2): Education and Publications timeline */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Education Sub-Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg uppercase tracking-wider text-on-surface font-bold">
                  Education
                </h4>
              </div>

              <div className="relative border-l border-white/10 ml-4 pl-6 md:pl-10 space-y-10">
                {EXPERIENCE_TIMELINE.map((item) => (
                  <div key={item.id} className="relative">
                    {/* Bullet connector */}
                    <span className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-brand-card border-2 border-brand-orange flex items-center justify-center text-brand-orange shadow shadow-brand-orange/10 z-10">
                      <GraduationCap className="w-3 h-3" />
                    </span>

                    <div className="glass-panel p-6 md:p-8 rounded-2xl glass-stroke">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <div>
                          <h5 className="font-display font-bold text-lg text-on-surface">
                            {item.role}
                          </h5>
                          <p className="font-display text-xs text-brand-gold tracking-wide uppercase font-semibold mt-1">
                            {item.organization}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-brand-orange font-mono font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <ul className="space-y-2.5">
                        {item.bulletPoints.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-on-surface/80 leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-6">
                        {item.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/5 text-on-surface-variant/80 font-mono text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publications Sub-Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg uppercase tracking-wider text-on-surface font-bold">
                  Publications
                </h4>
              </div>

              <div className="relative border-l border-white/10 ml-4 pl-6 md:pl-10 space-y-10">
                {PUBLICATIONS.map((pub, index) => (
                  <div key={index} className="relative">
                    {/* Bullet connector */}
                    <span className="absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-brand-card border-2 border-brand-orange flex items-center justify-center text-brand-orange shadow shadow-brand-orange/10 z-10">
                      <Sparkles className="w-3 h-3 text-brand-gold animate-pulse" />
                    </span>

                    <div className="glass-panel p-6 md:p-8 rounded-2xl glass-stroke">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                        <h5 className="font-display font-bold text-base md:text-lg text-on-surface max-w-xl">
                          {pub.title}
                        </h5>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-brand-orange font-mono font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{pub.date}</span>
                        </div>
                      </div>

                      <p className="font-sans text-sm text-on-surface-variant/90 leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Objective, Address, Interests, Languages */}
          <div className="space-y-8">
            
            {/* Objective & Profile */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl glass-stroke relative overflow-hidden">
              <h4 className="font-display text-xs uppercase tracking-widest text-brand-orange font-bold mb-4 flex items-center gap-1.5">
                <span>Objective</span>
              </h4>
              <p className="font-sans text-sm text-on-surface-variant/95 leading-relaxed">
                {CONTACT_DETAILS.objective}
              </p>
            </div>

            {/* Address */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-4">
              <h4 className="font-display text-xs uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Location</span>
              </h4>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                {CONTACT_DETAILS.address}
              </p>
            </div>

            {/* Interests Section */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-4">
              <h4 className="font-display text-xs uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-brand-orange" />
                <span>Interests</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {INTERESTS.map((interest, idx) => (
                  <span
                    key={idx}
                    className="bg-brand-orange/5 border border-brand-orange/20 text-brand-orange text-xs font-mono px-3.5 py-1.5 rounded-lg"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-4">
              <h4 className="font-display text-xs uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1.5">
                <Languages className="w-4 h-4 text-brand-orange" />
                <span>Languages</span>
              </h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {LANGUAGES.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-brand-gold/5 border border-brand-gold/20 text-brand-gold text-xs font-mono px-3.5 py-1.5 rounded-lg uppercase tracking-wider"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
