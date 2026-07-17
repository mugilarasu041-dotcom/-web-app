import { Mail, Phone, MessageSquare, Send, CheckCircle, Sparkles } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleTextSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.msg) return;

    setIsSubmitting(true);

    // Simulate database write or connection delay, then redirect securely
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Trigger pre-filled secure WhatsApp transmission
      const encodedMsg = encodeURIComponent(
        `Hello Mugilarasu! My name is ${formData.name} (${formData.email}).\n\n${formData.msg}`
      );
      window.open(`https://wa.me/918270495250?text=${encodedMsg}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="glass-panel p-8 md:p-16 rounded-[2.5rem] glass-stroke relative overflow-hidden">
        
        {/* Decorative corner ambient glows */}
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-brand-gold/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-xs uppercase tracking-widest text-brand-orange font-semibold mb-3">
              Get In Touch
            </h2>
            <h3 className="font-display text-3xl md:text-5xl font-black text-on-surface leading-tight">
              Ready to Integrate Your Vision?
            </h3>
            <p className="font-sans text-sm text-on-surface-variant max-w-lg mx-auto mt-4 leading-relaxed">
              Let's craft next-generation AI pipelines, modern full-stack websites, or high-performance responsive app code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left: Contact Channels */}
            <div className="space-y-6">
              
              <a
                href="mailto:mugilarasu041@gmail.com?subject=Portfolio Inquiry"
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all block group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest block mb-0.5">
                      Email Communication
                    </span>
                    <span className="font-display font-semibold text-sm md:text-base text-on-surface group-hover:text-brand-orange transition-colors">
                      mugilarasu041@gmail.com
                    </span>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/918270495250?text=Hello%20Mugilarasu,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all block group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-on-surface-variant/60 uppercase tracking-widest block mb-0.5">
                      Call & WhatsApp
                    </span>
                    <span className="font-display font-semibold text-sm md:text-base text-on-surface group-hover:text-brand-orange transition-colors">
                      +91 8270495250
                    </span>
                  </div>
                </div>
              </a>

              <div className="p-6 glass-panel rounded-2xl border border-white/5 bg-brand-orange/5">
                <h4 className="font-display font-bold text-xs text-brand-gold uppercase tracking-widest flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-gold animate-spin [animation-duration:8s]" />
                  Recruiter Fast Track
                </h4>
                <p className="font-sans text-xs text-on-surface-variant/90 leading-relaxed">
                  Need an prompt engineer or software developer on short notice? Click either channel above, or send the right side form to ping Mugilarasu directly!
                </p>
              </div>

            </div>

            {/* Right: Pre-filled Fast Message Form */}
            <form onSubmit={handleTextSubmit} className="glass-panel p-8 rounded-2xl border border-white/5 space-y-5">
              
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/80 mb-2">
                  Your Identity / Company
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Acme Recruiter"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-none focus:border-brand-orange transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="recruiter@acme.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-none focus:border-brand-orange transition-all"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/80 mb-2">
                  Transmission Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  placeholder="Hi Mugilarasu, I saw your portfolio and would love to hire you for..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-on-surface placeholder-on-surface-variant/30 focus:outline-none focus:border-brand-orange transition-all"
                />
              </div>

              {isSent ? (
                <div className="flex items-center gap-2 p-3 bg-brand-orange/20 border border-brand-orange/30 rounded-xl text-brand-orange text-xs">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Your draft is prepared! Redirecting you securely to WhatsApp...</span>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange text-white py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-102 hover:shadow-lg hover:shadow-brand-orange/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Generating Dispatch..." : "Send Secure Message"}
                </button>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
