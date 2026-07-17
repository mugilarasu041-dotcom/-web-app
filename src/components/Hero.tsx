import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Download, Terminal, MessageSquare, X, FileText, Eye, Phone, Mail, MapPin, Check, ExternalLink, Award, Bookmark, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { INTERESTS } from "../data";

export default function Hero() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"digital" | "pdf">("digital");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPdfOpen(false);
      }
    };
    if (isPdfOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isPdfOpen]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleDownload = async () => {
    if (viewMode === "digital") {
      // Package the interactive digital version of the resume as a stunning standalone HTML page
      const interestsHtml = INTERESTS.map(interest => 
        `<span class="bg-slate-100 px-2.5 py-1 rounded-lg">${interest}</span>`
      ).join('\n                            ');

      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MUGILARASU - Interactive Digital Resume</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@500;700;900&display=swap" rel="stylesheet">
  <!-- Tailwind Play CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
            display: ['Space Grotesk', 'sans-serif'],
          },
          colors: {
            brand: {
              orange: '#FF8C00',
              gold: '#FFD700',
              dark: '#0A0A0A',
            }
          }
        }
      }
    }
  </script>
  <style>
    @media print {
      .no-print {
        display: none !important;
      }
      body {
        background: white !important;
        padding: 0 !important;
      }
      .resume-card {
        box-shadow: none !important;
        border: none !important;
        max-width: 100% !important;
        padding: 0 !important;
      }
    }
  </style>
</head>
<body class="bg-[#0A0A0A] text-slate-300 font-sans min-h-screen py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center">
  
  <!-- Floating Controls (No Print) -->
  <div class="no-print w-full max-w-[800px] mb-6 flex justify-between items-center bg-zinc-900/80 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
      <span class="text-xs font-mono font-bold text-slate-400">Interactive Digital Copy</span>
    </div>
    <div class="flex gap-3">
      <button onclick="window.print()" class="bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-brand-orange/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
        Print / Save as PDF
      </button>
    </div>
  </div>

  <!-- Main Resume Sheet -->
  <div class="resume-card w-full max-w-[800px] bg-white text-slate-800 p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col relative text-left select-text">
    
    <!-- Floating Active Badge -->
    <div class="absolute top-4 right-4 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-bold no-print">
      Digital Edition
    </div>

    <!-- Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-200 mb-6">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7wuI_PH0zukmRTwuPkfP55kZNZlk6N6diYAGLuAakiL2p7GEMcAzjX1EDWvJOvk7eJScSgDPNB-1KPu9uHiHnrLqF0NK85_FdOKzrL_admMCct-gR5y9DXjkXp09BX784t2pyh2_Mub0m-04F_NfriEm-FfyUBDlCZ6mUgkALx_OLTQhJ28LCExAnz8xki3cTGS7y0pwo-oOuCSIbOty5OGKixOY0eyYJtY1hAQOw5qRnoty5ZdaLjZ7jwvgtmj_SAZNJwdegTEL"
        alt="Mugilarasu S"
        class="w-24 h-24 object-cover rounded-xl border-2 border-slate-100 shadow-sm"
      />
      <div>
        <h2 class="font-display text-3xl font-black tracking-tight text-slate-900 leading-none">
          MUGILARASU
        </h2>
        <p class="text-brand-orange font-mono text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
          <span>AI & Software Developer</span>
        </p>
      </div>
    </div>

    <!-- Content Columns -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Left: Main Content (Span 2) -->
      <div class="md:col-span-2 space-y-6">
        <!-- Objective -->
        <div>
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Objective
          </h3>
          <p class="text-slate-600 text-xs leading-relaxed font-medium">
            Aspiring Startup Founder | AI & Software Developer Building innovative technology that solves real-world problems and creates meaningful impact.
          </p>
        </div>

        <!-- Education -->
        <div>
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
            Education
          </h3>
          <div class="relative pl-4 border-l border-slate-200">
            <p class="font-bold text-slate-800 text-xs">Periyar University</p>
            <div class="flex flex-wrap items-center gap-2 mt-1">
              <span class="px-2 py-0.5 rounded bg-brand-orange/15 text-brand-orange text-[10px] font-bold font-mono">
                2024 to 2026
              </span>
              <span class="text-slate-400 text-xs">•</span>
              <span class="text-slate-500 text-xs font-semibold">BSC Computer Science</span>
            </div>
          </div>
        </div>

        <!-- Projects -->
        <div>
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            Projects
          </h3>
          <div class="space-y-4">
            <div>
              <p class="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                Virtual Style AI
              </p>
              <p class="text-slate-600 text-[11px] leading-relaxed mt-1">
                Developed an AI-powered virtual try-on application that enables users to preview clothing and accessories digitally. Focused on responsive UI/UX, AI integration, image processing, and an intuitive user experience.
              </p>
            </div>
            <div>
              <p class="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                Interactive Hand Gesture Web Application
              </p>
              <p class="text-slate-600 text-[11px] leading-relaxed mt-1">
                Created a browser-based hand gesture recognition application using MediaPipe and JavaScript. Enabled real-time camera interaction to control animations and interactive visual effects through hand movements.
              </p>
              <p class="text-slate-400 text-[9px] italic mt-1 leading-relaxed">
                These project descriptions are ATS-friendly, professional, and suitable for a Computer Science Software Developer and Startup, aiming to become an AI developer.
              </p>
            </div>
            <div>
              <p class="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                Sangamam Multi-Vendor E-Commerce Platform
              </p>
              <p class="text-slate-600 text-[11px] leading-relaxed mt-1">
                Built a scalable multi-vendor e-commerce platform featuring product management, user authentication, shopping cart, secure payments, order tracking, and an admin dashboard with a modern responsive interface.
              </p>
            </div>
          </div>
        </div>

        <!-- Publications -->
        <div>
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            Publications
          </h3>
          <div>
            <p class="font-bold text-slate-800 text-xs">
              AI Startup Vision: Building Intelligent Solutions for Real-World Problems [2025]
            </p>
            <p class="text-slate-600 text-[11px] leading-relaxed mt-1">
              A concept paper outlining my vision for developing AI-powered solutions to address real-world challenges. It explores product planning, technology selection, software architecture, scalability, and the practical application of Artificial Intelligence and Machine Learning. This work reflects my interest in innovation and entrepreneurship as a Computer Science student.
            </p>
          </div>
        </div>

        <!-- Interests -->
        <div>
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Interests
          </h3>
          <div class="flex flex-wrap gap-2 text-slate-600 text-[11px] font-bold">
            ${interestsHtml}
          </div>
        </div>
      </div>

      <!-- Right: Contact & Skills column -->
      <div class="space-y-5">
        <!-- Contact -->
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact
          </h3>
          <div class="space-y-3 text-xs">
            <div>
              <p class="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Email</p>
              <a href="mailto:mugilarasu041@gmail.com" class="text-slate-800 font-bold hover:text-brand-orange mt-0.5 block">mugilarasu041@gmail.com</a>
            </div>

            <div>
              <p class="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Phone</p>
              <a href="tel:+918270495250" class="text-slate-800 font-bold hover:text-brand-orange mt-0.5 block">8270495250</a>
            </div>

            <div>
              <p class="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Location</p>
              <p class="text-slate-700 leading-relaxed mt-1 font-semibold text-[10px]">
                1. MAIN ROAD.<br />KORATTAMPALAIYAM,<br />
                Veeranam, PO: Sathamir.<br />
                DIST: Tiruvannamalai,<br />
                Tamil Nadu-606706
              </p>
            </div>
          </div>
        </div>

        <!-- Skills -->
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Skills
          </h3>
          <ul class="space-y-1.5 text-xs font-bold text-slate-700">
            <li class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              AI Essentials
            </li>
            <li class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Prompt engineering
            </li>
            <li class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Introduction to Software Engineering
            </li>
            <li class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Vibe coder
            </li>
            <li class="flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
              Website and app builder
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
          <h3 class="font-display text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            Languages
          </h3>
          <p class="text-slate-700 text-xs font-bold">
            Tamil and English
          </p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: "text/html" });
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Mugilarasu_Digital_Resume.html";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } else {
      // PDF mode download fallback
      const pdfUrl = `${import.meta.env.BASE_URL}CV_2026-07-14-063137.pdf`;
      const fileName = "CV_2026-07-14-063137.pdf";
      
      try {
        const res = await fetch(pdfUrl);
        if (!res.ok) throw new Error("Could not fetch local PDF file");
        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = fileName;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
      } catch (e) {
        console.warn("Direct blob download failed, falling back to standard tab-download anchor:", e);
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = fileName;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* Left: Interactive Bio Card */}
        <div className="glass-panel p-8 md:p-14 rounded-3xl border-l-4 border-brand-orange relative overflow-hidden animate-fade-in">
          {/* Subtle grid background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-xs mb-6">
              <Terminal className="w-3.5 h-3.5 text-brand-gold" />
              <span>System.init("Success")</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-black text-on-surface mb-4 leading-[1.1] tracking-tight">
              Hi, I'm <br />
              <span className="text-brand-orange bg-gradient-to-r from-brand-orange to-brand-gold bg-clip-text text-transparent">
                Mugilarasu
              </span>
            </h1>
            
            <p className="font-display text-lg md:text-xl text-on-surface-variant font-semibold mb-6 flex flex-wrap items-center gap-2">
              <span>Computer Science Student</span>
              <span className="text-brand-orange/50">•</span>
              <span>Software Developer</span>
              <span className="text-brand-orange/50">•</span>
              <span>Prompt Engineer</span>
            </p>
            
            <p className="font-sans text-base text-on-surface/80 mb-8 max-w-lg leading-relaxed">
              Passionate about bridging advanced computer science with AI-assisted software cycles ("vibe coding"), cloud engineering, and sculpting luxurious interactive experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo("#projects")}
                className="bg-brand-orange text-white px-7 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-brand-orange/20 cursor-pointer"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setIsPdfOpen(true)}
                className="border border-white/15 hover:border-brand-orange text-on-surface px-7 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white/5 transition-all duration-350 cursor-pointer"
              >
                View Resume
                <Download className="w-4 h-4 text-brand-gold" />
              </button>

              <button
                onClick={() => handleScrollTo("#contact")}
                className="text-on-surface-variant hover:text-brand-orange font-display font-semibold text-xs uppercase tracking-widest px-4 py-3.5 transition-colors cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Right: Portrait Centerpiece */}
        <div className="relative h-[450px] md:h-[550px] w-full flex items-center justify-center lg:block">
          {/* Radial Glowing Core Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/15 to-transparent rounded-full blur-3xl animate-pulse pointer-events-none" />
          
          {/* Main Portrait Frame with Tech Shadows */}
          <div className="relative w-full max-w-sm lg:max-w-md h-full glass-panel p-2.5 rounded-3xl border border-white/5 overflow-hidden shadow-2xl hover:border-brand-orange/20 transition-all duration-500">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7wuI_PH0zukmRTwuPkfP55kZNZlk6N6diYAGLuAakiL2p7GEMcAzjX1EDWvJOvk7eJScSgDPNB-1KPu9uHiHnrLqF0NK85_FdOKzrL_admMCct-gR5y9DXjkXp09BX784t2pyh2_Mub0m-04F_NfriEm-FfyUBDlCZ6mUgkALx_OLTQhJ28LCExAnz8xki3cTGS7y0pwo-oOuCSIbOty5OGKixOY0eyYJtY1hAQOw5qRnoty5ZdaLjZ7jwvgtmj_SAZNJwdegTEL" 
              alt="Mugilarasu Portrait" 
              className="w-full h-full object-cover rounded-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700 pointer-events-auto"
            />
            {/* Tech UI overlays inside portrait */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
                <span className="font-mono text-xs text-on-surface/90">Loc: India</span>
              </div>
              <span className="font-mono text-[11px] text-brand-gold uppercase tracking-widest font-semibold">
                CSE STUDENT // 2028
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded PDF Viewer Modal */}
      <AnimatePresence>
        {isPdfOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPdfOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-brand-dark/95 backdrop-blur-md cursor-zoom-out"
          >
            {/* Modal Container */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-5xl h-[90vh] bg-[#111115] rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-2xl cursor-default"
            >
              {/* Top Bar / Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#16161c]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-sm font-bold text-on-surface">
                      CV_2026-07-14-063137.pdf
                    </h3>
                    <p className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-wider">
                      Professional Resume Profile
                    </p>
                  </div>
                </div>

                {/* View Mode Switcher */}
                <div className="flex bg-[#111115] border border-white/10 rounded-xl p-1 gap-1">
                  <button
                    onClick={() => setViewMode("digital")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      viewMode === "digital"
                        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/10"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                    }`}
                  >
                    Interactive
                  </button>
                  <button
                    onClick={() => setViewMode("pdf")}
                    className={`px-4 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      viewMode === "pdf"
                        ? "bg-brand-orange text-white shadow-md shadow-brand-orange/10"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                    }`}
                  >
                    PDF Plugin
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleDownload}
                    className="p-2.5 px-4 rounded-xl border border-white/10 hover:border-brand-orange text-on-surface-variant hover:text-white hover:bg-brand-orange/10 transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono font-bold"
                    title={viewMode === "digital" ? "Download Interactive Digital Copy" : "Download PDF"}
                  >
                    <Download className="w-4 h-4 text-brand-gold animate-bounce" />
                    <span>{viewMode === "digital" ? "Download Digital Copy" : "Download PDF"}</span>
                  </button>
                  <button
                    onClick={() => setIsPdfOpen(false)}
                    className="p-2.5 px-4 rounded-xl border border-white/10 bg-white/5 hover:border-brand-orange text-on-surface hover:text-white hover:bg-brand-orange/15 transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono font-bold"
                    aria-label="Close Preview"
                  >
                    <X className="w-4 h-4 text-rose-500" />
                    <span>Close</span>
                  </button>
                </div>
              </div>

              {/* View Content Area */}
              <div className={`flex-1 relative ${viewMode === "digital" ? "overflow-y-auto p-4 md:p-8 flex justify-center" : "overflow-hidden p-0 rounded-b-3xl"}`}>
                {viewMode === "digital" ? (
                  /* Interactive Web View Mode */
                  <div className="w-full max-w-[800px] bg-white text-slate-800 p-6 sm:p-10 rounded-2xl shadow-xl flex flex-col font-sans relative text-left select-text h-fit">
                    {/* Floating active label */}
                    <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                      Interactive Digital Copy
                    </div>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-slate-200 mb-6">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7wuI_PH0zukmRTwuPkfP55kZNZlk6N6diYAGLuAakiL2p7GEMcAzjX1EDWvJOvk7eJScSgDPNB-1KPu9uHiHnrLqF0NK85_FdOKzrL_admMCct-gR5y9DXjkXp09BX784t2pyh2_Mub0m-04F_NfriEm-FfyUBDlCZ6mUgkALx_OLTQhJ28LCExAnz8xki3cTGS7y0pwo-oOuCSIbOty5OGKixOY0eyYJtY1hAQOw5qRnoty5ZdaLjZ7jwvgtmj_SAZNJwdegTEL"
                        alt="Mugilarasu S"
                        referrerPolicy="no-referrer"
                        className="w-24 h-24 object-cover rounded-xl border-2 border-slate-100 shadow-sm"
                      />
                      <div>
                        <h2 className="font-display text-3xl font-black tracking-tight text-slate-900 leading-none">
                          MUGILARASU
                        </h2>
                        <p className="text-brand-orange font-mono text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          <span>AI & Software Developer</span>
                        </p>
                      </div>
                    </div>

                    {/* Content Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Left: Main Content (Span 2) */}
                      <div className="md:col-span-2 space-y-6">
                        {/* Objective */}
                        <div>
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-brand-orange" />
                            Objective
                          </h3>
                          <p className="text-slate-600 text-xs leading-relaxed font-medium">
                            Aspiring Startup Founder | AI & Software Developer Building innovative technology that solves real-world problems and creates meaningful impact.
                          </p>
                        </div>

                        {/* Education */}
                        <div>
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
                            <Award className="w-4 h-4 text-brand-orange" />
                            Education
                          </h3>
                          <div className="relative pl-4 border-l border-slate-200">
                            <p className="font-bold text-slate-800 text-xs">Periyar University</p>
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="px-2 py-0.5 rounded bg-brand-orange/15 text-brand-orange text-[10px] font-bold font-mono">
                                2024 to 2026
                              </span>
                              <span className="text-slate-400 text-xs">•</span>
                              <span className="text-slate-500 text-xs font-semibold">BSC Computer Science</span>
                            </div>
                          </div>
                        </div>

                        {/* Projects */}
                        <div>
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
                            <Bookmark className="w-4 h-4 text-brand-orange" />
                            Projects
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                Virtual Style AI
                              </p>
                              <p className="text-slate-600 text-[11px] leading-relaxed mt-1">
                                Developed an AI-powered virtual try-on application that enables users to preview clothing and accessories digitally. Focused on responsive UI/UX, AI integration, image processing, and an intuitive user experience.
                              </p>
                            </div>
                            <div>
                              <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                Interactive Hand Gesture Web Application
                              </p>
                              <p className="text-slate-600 text-[11px] leading-relaxed mt-1">
                                Created a browser-based hand gesture recognition application using MediaPipe and JavaScript. Enabled real-time camera interaction to control animations and interactive visual effects through hand movements.
                              </p>
                              <p className="text-slate-400 text-[9px] italic mt-1 leading-relaxed">
                                These project descriptions are ATS-friendly, professional, and suitable for a Computer Science Software Developer and Startup, aiming to become an AI developer.
                              </p>
                            </div>
                            <div>
                              <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                Sangamam Multi-Vendor E-Commerce Platform
                              </p>
                              <p className="text-slate-600 text-[11px] leading-relaxed mt-1">
                                Built a scalable multi-vendor e-commerce platform featuring product management, user authentication, shopping cart, secure payments, order tracking, and an admin dashboard with a modern responsive interface.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Publications */}
                        <div>
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4 text-brand-orange" />
                            Publications
                          </h3>
                          <div>
                            <p className="font-bold text-slate-800 text-xs">
                              AI Startup Vision: Building Intelligent Solutions for Real-World Problems [2025]
                            </p>
                            <p className="text-slate-600 text-[11px] leading-relaxed mt-1">
                              A concept paper outlining my vision for developing AI-powered solutions to address real-world challenges. It explores product planning, technology selection, software architecture, scalability, and the practical application of Artificial Intelligence and Machine Learning. This work reflects my interest in innovation and entrepreneurship as a Computer Science student.
                            </p>
                          </div>
                        </div>

                        {/* Interests */}
                        <div>
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-brand-orange pb-1 mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-brand-orange" />
                            Interests
                          </h3>
                          <div className="flex flex-wrap gap-2 text-slate-600 text-[11px] font-bold">
                            {INTERESTS.map((interest, idx) => (
                              <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-lg">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Contact & Skills column */}
                      <div className="space-y-5">
                        {/* Contact */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
                            <Mail className="w-3.5 h-3.5 text-brand-orange" />
                            Contact
                          </h3>
                          <div className="space-y-3 text-xs">
                            <div className="relative group">
                              <p className="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Email</p>
                              <div className="flex items-center justify-between gap-1 mt-0.5">
                                <a href="mailto:mugilarasu041@gmail.com" className="text-slate-800 font-bold hover:text-brand-orange truncate block">
                                  mugilarasu041@gmail.com
                                </a>
                                <button
                                  onClick={() => handleCopy("mugilarasu041@gmail.com", "email")}
                                  className="p-1 text-slate-400 hover:text-brand-orange rounded hover:bg-slate-200 cursor-pointer flex-shrink-0"
                                  title="Copy Email"
                                >
                                  {copiedText === "email" ? (
                                    <Check className="w-3 h-3 text-emerald-500" />
                                  ) : (
                                    <FileText className="w-3 h-3" />
                                  )}
                                </button>
                              </div>
                              {copiedText === "email" && (
                                <span className="absolute -top-6 right-0 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">Copied!</span>
                              )}
                            </div>

                            <div className="relative group">
                              <p className="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Phone</p>
                              <div className="flex items-center justify-between gap-1 mt-0.5">
                                <a href="tel:+918270495250" className="text-slate-800 font-bold hover:text-brand-orange block">
                                  8270495250
                                </a>
                                <button
                                  onClick={() => handleCopy("8270495250", "phone")}
                                  className="p-1 text-slate-400 hover:text-brand-orange rounded hover:bg-slate-200 cursor-pointer flex-shrink-0"
                                  title="Copy Phone"
                                >
                                  {copiedText === "phone" ? (
                                    <Check className="w-3 h-3 text-emerald-500" />
                                  ) : (
                                    <FileText className="w-3 h-3" />
                                  )}
                                </button>
                              </div>
                              {copiedText === "phone" && (
                                <span className="absolute -top-6 right-0 bg-slate-800 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">Copied!</span>
                              )}
                            </div>

                            <div>
                              <p className="text-slate-400 font-semibold uppercase tracking-wider text-[9px]">Location</p>
                              <p className="text-slate-700 leading-relaxed mt-1 font-semibold text-[10px]">
                                1. MAIN ROAD.<br />KORATTAMPALAIYAM,<br />
                                Veeranam, PO: Sathamir.<br />
                                DIST: Tiruvannamalai,<br />
                                Tamil Nadu-606706
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-3 pb-1 border-b border-slate-200">
                            <Award className="w-3.5 h-3.5 text-brand-orange" />
                            Skills
                          </h3>
                          <ul className="space-y-1.5 text-xs font-bold text-slate-700">
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                              AI Essentials
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                              Prompt engineering
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                              Introduction to Software Engineering
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                              Vibe coder
                            </li>
                            <li className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                              Website and app builder
                            </li>
                          </ul>
                        </div>

                        {/* Languages */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
                          <h3 className="font-display text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 mb-2 pb-1 border-b border-slate-200">
                            <Languages className="w-3.5 h-3.5 text-brand-orange" />
                            Languages
                          </h3>
                          <p className="text-slate-700 text-xs font-bold">
                            Tamil and English
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
                      <p className="text-slate-400 text-[10px] font-mono">
                        Last updated: July 2026
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={handleDownload}
                          className="bg-brand-orange hover:bg-brand-orange/95 text-white px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-brand-orange/10"
                        >
                          <Download className="w-4 h-4 text-brand-gold animate-bounce" />
                          Download PDF Copy
                        </button>
                        <button
                          onClick={() => setIsPdfOpen(false)}
                          className="border border-slate-200 text-slate-600 px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <X className="w-4 h-4 text-rose-500" />
                          Close Viewer
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard PDF Plugin View Mode */
                  <div className="w-full h-full relative">
                    <object
                      data={`${import.meta.env.BASE_URL}CV_2026-07-14-063137.pdf#toolbar=1&navpanes=0&statusbar=0`}
                      type="application/pdf"
                      className="w-full h-full border-none rounded-2xl"
                    >
                      <iframe
                        src={`${import.meta.env.BASE_URL}CV_2026-07-14-063137.pdf#toolbar=1`}
                        className="w-full h-full border-none rounded-2xl"
                        title="Mugilarasu Resume"
                      >
                        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#111115]">
                          <FileText className="w-16 h-16 text-brand-orange/40 mb-4 animate-bounce" />
                          <p className="text-on-surface font-display font-medium text-base mb-2">
                            Unable to render PDF preview directly
                          </p>
                          <p className="text-on-surface-variant/70 text-sm max-w-md mb-6">
                            Your browser or device does not support inline PDF viewing. You can download the PDF directly using the button below.
                          </p>
                          <button
                            onClick={handleDownload}
                            className="bg-brand-orange text-white px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-brand-orange/90 flex items-center gap-2 shadow-lg shadow-brand-orange/10 cursor-pointer"
                          >
                            <Download className="w-4 h-4 text-brand-gold animate-bounce" />
                            Download CV PDF
                          </button>
                        </div>
                      </iframe>
                    </object>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
