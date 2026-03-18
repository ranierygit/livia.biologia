"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Olá! Sou a Bio IA. Como posso ajudar com suas dúvidas de Ciências ou Biologia hoje?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: userMessage }] })
      });

      if (!response.ok) throw new Error("Erro na solicitação");
      
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Ops, ocorreu um erro na conexão. Pode ser que minha chave de API de demonstração não esteja configurada no ambiente atual. Entre em contato diretamente com a professora Lívia!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="bio-ia" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-leaf text-primary px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium text-sm">Bio IA Educacional</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">Tem dúvidas? Pergunte à Bio IA</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Converse com nossa assistente inteligente sobre células, botânica, genética, ecologia e química básica!
          </p>
        </div>

        <div className="bg-white border border-sand shadow-sm rounded-[32px] overflow-hidden flex flex-col h-[600px] ring-1 ring-black/5">
          {/* Chat Headers */}
          <div className="bg-bg border-b border-sand px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-text">Assistente Bio IA</h3>
              <p className="text-xs text-secondary font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 bg-secondary rounded-full inline-block animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${msg.role === "user" ? "bg-sand" : "bg-leaf"}`}>
                  {msg.role === "user" ? <User className="w-4 h-4 text-muted" /> : <Bot className="w-4 h-4 text-primary" />}
                </div>
                <div className={`max-w-[80%] rounded-2xl p-4 text-[15px] leading-relaxed shadow-sm ${
                  msg.role === "user" ? "bg-primary text-white rounded-tr-sm" : "bg-bg text-text border border-sand/50 rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-leaf flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-bg text-text border border-sand/50 rounded-2xl rounded-tl-sm p-4 w-16 flex items-center justify-center shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-muted" />
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-bg border-t border-sand/60">
            <form onSubmit={handleSubmit} className="relative flex items-center max-w-2xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Como funciona a fotossíntese?"
                className="w-full bg-white border border-sand/80 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 rounded-full pl-6 pr-14 py-4 text-text placeholder:text-muted/60 shadow-inner"
                disabled={isLoading}
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 w-10 h-10 bg-primary hover:bg-primary/90 disabled:bg-sand disabled:text-muted disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shadow-sm"
              >
                <Send className="w-4 h-4 -ml-0.5" />
              </button>
            </form>
            <p className="text-center text-xs text-muted/60 mt-3 px-4">
              A Bio IA é um assistente educacional experimental. Para aulas focadas, chame a Professora Lívia!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
