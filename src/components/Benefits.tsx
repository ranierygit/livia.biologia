import { CheckCircle2, FileText, HandshakeIcon, TrendingUp } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Metodologias Comprovadas",
      description: "Formada com sólida base no PIBID, Lívia aplica metodologias ativas: aprendizagem por projetos, jogos didáticos e ensino por investigação.",
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />
    },
    {
      title: "Material Didático Próprio",
      description: "Resumos, listas temáticas e sequências didáticas. Não há aula genérica: cada conteúdo é adaptado à realidade e ritmo dos estudantes.",
      icon: <FileText className="w-8 h-8 text-primary" />
    },
    {
      title: "Parceria com a Escola",
      description: "Comunicação clara com gestores e famílias. Experiência na GRE garante compreensão dos processos administrativos e pedagógicos.",
      icon: <HandshakeIcon className="w-8 h-8 text-primary" />
    },
    {
      title: "Resultados Visíveis",
      description: "Melhora comprovada em avaliações, maior interesse pelas ciências e preparação sólida para vestibulares construída com constância e método.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-leaf relative overflow-hidden">
      {/* Decorative BG element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">
            O que você ganha ao escolher Lívia Oliveira
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 mb-20">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 items-start">
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-primary/10 shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-text mb-2">{benefit.title}</h3>
                <p className="text-muted leading-relaxed text-justify">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center border-y border-primary/20 py-12 px-4 shadow-[inset_0_20px_50px_rgba(0,0,0,0.01)] bg-white/30 rounded-[40px]">
          <blockquote className="font-display text-3xl md:text-4xl leading-tight text-primary italic mb-6">
            "A Biologia não é apenas uma disciplina — é a história da vida contada através da ciência."
          </blockquote>
          <cite className="text-sm font-mono text-muted uppercase tracking-wider not-italic">
            — Adaptado da pedagogia das ciências naturais
          </cite>
        </div>
      </div>
    </section>
  );
}
