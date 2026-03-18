"use client";
import dynamic from 'next/dynamic';
import { Home, GraduationCap, BookOpen } from 'lucide-react';

const DynamicMap = dynamic(() => import('./Map'), { 
  ssr: false,
  loading: () => <div className="w-full h-[450px] bg-bg border border-sand/50 rounded-3xl animate-pulse flex items-center justify-center text-muted">Carregando mapa...</div>
});

export default function MapSection() {
  return (
    <section id="area" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">Onde você me encontra</h2>
          <p className="text-lg text-muted">Atendo em escolas, domicílios e espaços particulares em Garanhuns — PE e região.</p>
        </div>

        <div className="relative">
          <DynamicMap />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="bg-bg px-5 py-2.5 rounded-full border border-sand flex items-center gap-2 text-sm font-medium text-text">
            <GraduationCap className="w-4 h-4 text-primary" /> Escolas estaduais
          </div>
          <div className="bg-bg px-5 py-2.5 rounded-full border border-sand flex items-center gap-2 text-sm font-medium text-text">
            <BookOpen className="w-4 h-4 text-primary" /> Aulas particulares
          </div>
          <div className="bg-bg px-5 py-2.5 rounded-full border border-sand flex items-center gap-2 text-sm font-medium text-text">
            <Home className="w-4 h-4 text-primary" /> Atendimento domiciliar
          </div>
        </div>
      </div>
    </section>
  );
}
