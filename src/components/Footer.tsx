import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-16 border-t border-white/5 bg-black/40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-2">
          <div className="font-display text-xl font-black tracking-tighter text-brand-orange">
            MUGILARASU
          </div>
          <Sparkles className="w-4 h-4 text-brand-gold animate-spin [animation-duration:12s]" />
        </div>

        {/* Center: Social handles */}
        <div className="flex gap-8 text-xs font-mono text-on-surface-variant uppercase tracking-wider">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Right: Copyright & Scroll top button */}
        <div className="flex items-center gap-6 text-xs text-on-surface-variant/50 font-sans">
          <span>© 2026 Mugilarasu. Built with precision.</span>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-white/5 hover:bg-brand-orange text-on-surface hover:text-white border border-white/10 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
