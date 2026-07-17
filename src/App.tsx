import ShaderCanvas from "./components/ShaderCanvas";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AICompanion from "./components/AICompanion";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-on-surface font-sans selection:bg-brand-orange/30 selection:text-brand-gold overflow-hidden">
      {/* 1. WebGL Interactive Shader Background */}
      <ShaderCanvas />

      {/* 2. Floating Header Navigation */}
      <Header />

      {/* 3. Page Layout Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* 4. Footer System Credits */}
      <Footer />

      {/* 5. Server-Side Recruiter AI Assistant Dialog */}
      <AICompanion />
    </div>
  );
}
