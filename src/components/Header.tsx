import { useState, useEffect, MouseEvent } from "react";
import { Sparkles, Menu, X, MessageSquare } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "#home")}
          className="font-display text-xl font-black tracking-tighter text-brand-orange hover:opacity-80 transition-all flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" />
          MUGILARASU
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-xs uppercase tracking-widest font-semibold text-on-surface-variant hover:text-brand-orange transition-colors duration-350"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick Hire Action */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918270495250?text=Hello%20Mugilarasu,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="bg-brand-orange text-white font-display text-xs uppercase tracking-widest px-6 py-3 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-orange/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-on-surface hover:text-brand-orange p-1 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-brand-dark/95 backdrop-blur-lg z-30 flex flex-col items-center justify-center gap-8 py-10 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-lg uppercase tracking-widest font-semibold text-on-surface-variant hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/918270495250?text=Hello%20Mugilarasu,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="bg-brand-orange text-white font-display text-sm uppercase tracking-widest px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-orange/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-brand-gold" />
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
