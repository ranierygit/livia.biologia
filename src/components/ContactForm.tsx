"use client";

import { useState } from "react";
import { Send, MapPin, Mail, MessageCircle, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Animate mockup submission state
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simulating endpoint hit
    console.log("Formulário simulado enviado com sucesso.");
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contato" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Informational Column */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">Vamos conversar?</h2>
              <p className="text-lg text-muted leading-relaxed text-justify">
                Preencha o formulário ao lado para tirar dúvidas, solicitar um orçamento ou agendar aulas. Retorno o mais breve possível.
              </p>
            </div>

            <div className="flex flex-col gap-6 bg-white p-8 rounded-3xl border border-sand/50 shadow-sm">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-leaf w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text">Localização</h4>
                  <span className="text-muted text-sm">Garanhuns — PE e Região</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-left">
                <div className="bg-leaf w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text">E-mail</h4>
                  <span className="text-muted text-sm">liivia.clemente@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-left">
                <div className="bg-leaf w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-text">WhatsApp</h4>
                  <span className="text-muted text-sm">Retorno em até 24h úteis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-surface p-8 sm:p-10 rounded-[40px] shadow-sm border border-sand/50 relative overflow-hidden">
            {isSuccess && (
              <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500 z-10">
                <div className="w-20 h-20 bg-leaf rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-text mb-2">Mensagem enviada!</h3>
                <p className="text-muted">Lívia entrará em contato com você em breve. 🌿</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-primary font-medium hover:underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1.5 list-none text-left">
                <label htmlFor="name" className="text-sm font-medium text-text text-left">Nome completo</label>
                <input required type="text" id="name" className="w-full bg-bg border border-sand rounded-xl px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Seu nome" />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-text">WhatsApp</label>
                  <input required type="tel" id="phone" className="w-full bg-bg border border-sand rounded-xl px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="(87) 90000-0000" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-text">E-mail</label>
                  <input required type="email" id="email" className="w-full bg-bg border border-sand rounded-xl px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-text text-left">Assunto</label>
                <select required defaultValue="" id="subject" className="w-full bg-bg border border-sand rounded-xl px-4 py-3 text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Selecione um assunto</option>
                  <option value="fundamental">Reforço Ensino Fundamental</option>
                  <option value="medio">Reforço Ensino Médio</option>
                  <option value="substituta">Professora Substituta</option>
                  <option value="enem_ssa">Preparação ENEM/SSA</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-text text-left">Mensagem (opcional)</label>
                <textarea id="message" rows={4} className="w-full bg-bg border border-sand rounded-xl px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Como posso ajudar?"></textarea>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <input type="checkbox" id="whatsapp_auth" className="w-4 h-4 rounded text-primary focus:ring-primary border-sand bg-bg" />
                <label htmlFor="whatsapp_auth" className="text-sm text-muted cursor-pointer">Autorizo o contato via WhatsApp</label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-4 w-full bg-primary hover:bg-primary/90 disabled:opacity-70 text-white font-medium py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Enviar Mensagem <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
