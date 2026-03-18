import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2D25] text-sand py-16 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-sand/10 pb-12">
          
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <Leaf className="w-8 h-8 text-secondary transition-transform group-hover:scale-110" />
              <span className="font-display font-semibold text-3xl text-white tracking-tight">
                Lívia Oliveira
              </span>
            </a>
            <p className="text-lg text-sand/80 max-w-md font-display italic">
              "Educação de qualidade, com método e cuidado."
            </p>
            <p className="text-sm font-mono text-secondary mt-4 uppercase tracking-wider">
              Licenciada em Ciências Biológicas · UPE · 2025
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-mono">Navegação</h4>
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-sand/70 hover:text-secondary transition-colors text-sm">Início</a>
              <a href="#sobre" className="text-sand/70 hover:text-secondary transition-colors text-sm">Sobre Mim</a>
              <a href="#servicos" className="text-sand/70 hover:text-secondary transition-colors text-sm">Destaques</a>
              <a href="#beneficios" className="text-sand/70 hover:text-secondary transition-colors text-sm">Como Ensino</a>
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm font-mono">Contato</h4>
            <nav className="flex flex-col gap-4">
              <span className="text-sand/70 text-sm">📍 Garanhuns — PE</span>
              <span className="text-sand/70 text-sm">📧 liivia.clemente@gmail.com</span>
              <a href="#contato" className="text-secondary font-medium hover:text-white transition-colors text-sm underline underline-offset-4 mt-2">
                Agende sua aula experimental
              </a>
            </nav>
          </div>

        </div>

        <div className="flex flex-col items-center justify-center gap-8 mt-4 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-xs text-sand/40 font-mono">
            <p>© {new Date().getFullYear()} Lívia Oliveira. Todos os direitos reservados.</p>
            <p>Feito com amor educacional</p>
          </div>
          
          <div className="text-center text-xs text-sand/50 font-mono space-y-1 w-full pt-8 border-t border-sand/10">
            <p>Material desenvolvido no código sem fronteiras:</p>
            <p>Desenvolvimento web com IA.</p>
            <p>Instrutor: Eliakim Rocha</p>
            <p>Data: 18/03/2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
