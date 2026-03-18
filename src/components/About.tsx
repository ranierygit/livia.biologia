import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column / Portrait & Stats */}
          <div className="relative">
            <div className="aspect-[4/5] bg-leaf rounded-[40px] overflow-hidden relative border border-primary/10 shadow-xl">
              <Image 
                src="/images/perfil-diploma.jpg"
                alt="Professora Lívia Oliveira com Diploma"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60">
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">2+</div>
                  <div className="text-xs font-mono text-muted uppercase tracking-wider mt-1">Anos de<br/>Experiência</div>
                </div>
                <div className="w-[1px] bg-sand/50" />
                <div>
                  <div className="text-3xl font-display font-bold text-primary">100+</div>
                  <div className="text-xs font-mono text-muted uppercase tracking-wider mt-1">Alunos<br/>Impactados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Textual */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text">Quem é Lívia Oliveira?</h2>
            
            <div className="space-y-4 text-muted leading-relaxed text-lg text-justify">
              <p>
                Lívia Clemente de Oliveira é professora de Biologia formada pela Universidade de Pernambuco - Licenciatura em Ciências Biológicas (2025). Sua trajetória é marcada por uma prática pedagógica inovadora e humanizada, desenvolvida através do <strong className="text-primary font-semibold">PIBID</strong> — Programa Institucional de Bolsa de Iniciação à Docência —, estágios supervisionados, e atuação como docente no PREVUPE, cursinho preparatório para o ENEM e SSA.
              </p>
              <p>
                Ao longo de sua formação, Lívia atuou na Gerência Regional de Educação (GRE), onde desenvolveu visão sistêmica da rede estadual de ensino, apoiando professores e gestores escolares. Essa experiência a tornou uma profissional completa: <strong>educadora, mediadora e facilitadora do conhecimento.</strong>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { title: "Licenciada em Biológicas", desc: "UPE (2025)" },
                { title: "Experiência PIBID", desc: "Metodologias Ativas" },
                { title: "Atuação no PREVUPE", desc: "Foco no ENEM/SSA" },
                { title: "Estágio GRE", desc: "Gestão Pedagógica" },
              ].map((item, idx) => (
                <div key={idx} className="bg-bg p-4 rounded-2xl border border-sand/50 flex flex-col gap-1 transition-all hover:border-primary/20 hover:shadow-sm">
                  <span className="font-semibold text-text text-sm">{item.title}</span>
                  <span className="text-xs text-muted font-mono">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
