import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap, Microscope } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-leaf/40 -skew-x-12 translate-x-32 -z-10 rounded-l-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 pt-12 lg:pt-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-leaf text-primary px-4 py-2 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">Professora de Biologia · Garanhuns - PE</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-text">
            Aprendizado que <br />
            <span className="text-primary italic font-normal">transforma vidas</span> — <br />
            uma aula de cada vez.
          </h1>

          <p className="text-lg text-muted max-w-lg mt-2 leading-relaxed font-medium text-justify">
            Lívia Oliveira é licenciada em Ciências Biológicas e oferece aulas de reforço, substituição e preparação para ENEM e SSA para estudantes de Ensino Fundamental e Médio.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="#contato" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              Solicitar Contato
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#servicos" className="bg-transparent border border-sand hover:border-primary/30 hover:bg-leaf text-text px-8 py-3.5 rounded-full font-medium transition-all">
              Conhecer os Serviços
            </a>
          </div>

          {/* Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-sand/50">
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Microscope className="w-5 h-5 text-secondary" />
              <span>Metodologias ativas</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span>Aulas lúdicas</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <GraduationCap className="w-5 h-5 text-secondary" />
              <span>Experiência PIBID</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] lg:h-[600px] w-full animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
          <div className="absolute inset-0 bg-leaf/20 rounded-[40px] border border-primary/10 overflow-hidden shadow-2xl">
            <Image 
              src="/images/perfil-folhas.jpg"
              alt="Professora Lívia Oliveira"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
