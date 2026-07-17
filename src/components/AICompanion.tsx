import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowUpRight } from "lucide-react";
import { ChatMessage } from "../types";

export default function AICompanion() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Hello! I am Mugilarasu's personal AI Agent. Ask me anything about his technical background, projects, prompt engineering expertise, or how to get in touch with him!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const suggestionChips = [
    "Why hire Mugilarasu?",
    "Show me his AI projects",
    "What is Prompt Engineering?",
    "How can I contact him?",
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setError(null);
    const userMessage: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: textToSend,
          // Optional: we can send the chat history context here
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        role: "model",
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error("Failed to chat with AI:", err);
      setError("AI Service is temporarily offline. Please feel free to call Mugilarasu at +91 8270495250 or email mugilarasu041@gmail.com!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 bg-brand-orange text-white p-4 rounded-full shadow-2xl shadow-brand-orange/40 transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center gap-2 font-display font-semibold text-sm cursor-pointer"
        aria-label="Toggle AI Recruiter Assistant"
      >
        <Sparkles className="w-5 h-5 animate-pulse text-brand-gold" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out whitespace-nowrap">
          Talk to My AI
        </span>
        <MessageSquare className="w-5 h-5" />
      </button>

      {/* Chat Drawer/Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-8 pointer-events-none">
          {/* Backdrop for click outside */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Container */}
          <div className="relative w-full max-w-md h-[550px] rounded-3xl flex flex-col glass-panel glass-stroke shadow-2xl pointer-events-auto overflow-hidden animate-fade-in-up">
            
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center border border-brand-orange/30">
                  <Bot className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-on-surface flex items-center gap-1">
                    Mugilarasu AI Agent
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
                  </h3>
                  <span className="text-[11px] font-mono text-brand-gold uppercase tracking-widest">
                    Prompt Expert System
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors text-on-surface-variant hover:text-on-surface cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Pane */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 max-w-[85%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border text-[12px] flex-shrink-0 ${
                    msg.role === "user" 
                      ? "bg-brand-gold/10 border-brand-gold/20 text-brand-gold" 
                      : "bg-brand-orange/10 border-brand-orange/20 text-brand-orange"
                  }`}>
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  
                  <div className="space-y-1">
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-orange text-white rounded-tr-none font-medium"
                        : "bg-white/5 border border-white/5 text-on-surface/90 rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                    <span className="block text-[10px] text-on-surface-variant/60 font-mono px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 max-w-[85%] mr-auto">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Bot className="w-4 h-4 animate-bounce" />
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" />
                  </div>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-2xl text-xs text-red-200 text-center">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (if no conversation has happened yet, or just as options) */}
            <div className="px-5 py-2 overflow-x-auto whitespace-nowrap bg-black/20 border-t border-white/5 flex gap-2">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="px-3 py-1.5 rounded-full text-xs font-mono border border-brand-orange/20 bg-brand-orange/5 text-brand-orange hover:bg-brand-orange/10 hover:border-brand-orange/30 transition-all cursor-pointer inline-flex items-center gap-1 flex-shrink-0"
                >
                  {chip}
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-4 border-t border-white/10 bg-black/40 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Mugilarasu's AI agent..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all font-sans"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-brand-orange text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
