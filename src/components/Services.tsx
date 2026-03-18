import { BookOpen, FlaskConical, LayoutTemplate, Microscope, MonitorPlay, Target } from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      title: "Professora Substituta",
      icon: <LayoutTemplate className="w-8 h-8 text-secondary" />,
      description: "Para escolas de Ensino Fundamental e Médio nas disciplinas de Biologia, Ciências e Química. Disponível para substituições eventuais em Garanhuns.",
    },
    {
      title: "Reforço Escolar — Fundamental",
      icon: <Microscope className="w-8 h-8 text-secondary" />,
      description: "Aulas personalizadas do 6º ao 9º ano. Foco em compreensão real com jogos didáticos e atividades lúdicas que tornam a aprendizagem duradoura.",
    },
    {
      title: "Reforço Escolar — Ensino Médio",
      icon: <FlaskConical className="w-8 h-8 text-secondary" />,
      description: "Aulas para estudantes do 1º ao 3º ano com foco em ENEM e SSA. Material próprio, listas de exercícios e aulas dinâmicas.",
    }
  ];

  const secondaryServices = [
    {
      title: "Preparação ENEM & SSA",
      icon: <Target className="w-6 h-6 text-primary" />,
      description: "Conteúdos estratégicos com base nos temas mais cobrados. Sequências elaboradas com atenção às competências das bancas avaliadoras.",
    },
    {
      title: "Aulas Temáticas e Projetos",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      description: "Desenvolvimento de projetos interdisciplinares, gincanas e práticas de laboratório para dinamizar o currículo.",
    },
    {
      title: "Aulas Online",
      icon: <MonitorPlay className="w-6 h-6 text-primary" />,
      description: "Acompanhamento escolar e reforço remoto ao vivo com lousa digital, disponível para alunos de qualquer região.",
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-text mb-4">Como posso te ajudar?</h2>
          <p className="text-lg text-muted">Aulas, acompanhamento escolar e substituições abordadas com metodologias ativas e cuidado humanizado.</p>
        </div>

        {/* Mian Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {mainServices.map((service, idx) => (
            <div key={idx} className="bg-surface rounded-[32px] p-8 border border-sand/30 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/20 transition-all flex flex-col h-full group">
              <div className="bg-leaf w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed flex-grow text-justify">{service.description}</p>
              <a href="#contato" className="mt-8 text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Solicitar <span className="text-xl leading-none">&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        {/* Secondary Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {secondaryServices.map((service, idx) => (
            <div key={idx} className="bg-surface rounded-[32px] p-8 sm:p-10 border border-sand/30 flex sm:items-start flex-col sm:flex-row gap-6 hover:shadow-md transition-all">
              <div className="bg-bg w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border border-sand/50">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-text mb-2">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed text-justify">{service.description}</p>
                <a href="#contato" className="mt-4 text-primary text-sm font-medium flex items-center gap-2 hover:underline">
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
