import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

const experiences: Experience[] = [
  {
    company:
      "CEPEDI — Centro de Pesquisa e Desenvolvimento Tecnológico em Informática e Eletroeletrônica",
    role: "Residente em Tecnologia e Empreendedorismo",
    period: "Jul/2024 — Out/2025",
    summary:
      "Atuação em desenvolvimento de soluções e integrações, suporte ao levantamento de requisitos e participação nas definições de arquitetura e boas práticas de versionamento.",
  },
  {
    company: "Associação de Taekwondo da Grande Vitória (ONG)",
    role: "Desenvolvedor de Software (Voluntário)",
    period: "Fev/2024 — Nov/2024",
    summary:
      "Criação e manutenção de páginas institucionais e sistema interno de gerenciamento; colaboração com equipe multidisciplinar e melhoria da performance e experiência do usuário.",
  },
  {
    company: "Freelancer",
    role: "Desenvolvedor Web — Projetos e Automações",
    period: "Jun/2022 — Jul/2024",
    summary:
      "Desenvolvimento de landing pages e pequenas aplicações sob demanda, automações para tarefas rotineiras e atendimento direto ao cliente para transformar necessidades em entregas práticas.",
  },
];

const About: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} id="about" className="py-32 px-4" aria-labelledby="about-title">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider">SOBRE MIM</p>

            <h2 id="about-title" className="text-4xl md:text-5xl font-bold tracking-tight">
              Transformando código em resultados reais
            </h2>
          </div>

          {/* Grid: stack until large screens to avoid tablet compression */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pt-8">
            {/* Texto principal (sempre acima the timeline visually on stacked layouts) */}
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="text-left md:text-justify">
                Sou <strong>Lucas Mancini</strong>, desenvolvedor fullstack com foco em backend.
                Entrego soluções digitais com atenção à manutenção, escalabilidade e experiência do
                usuário.
              </p>

              <p className="text-left md:text-justify">
                Tenho experiência em ambiente institucional, atuação voluntária e trabalho direto
                com clientes como freelancer — o que me trouxe flexibilidade para lidar com
                diferentes demandas e contextos.
              </p>

              <p className="text-sm text-muted-foreground">
                Disponível para vagas júnior e projetos freelance.
              </p>
            </div>

            {/* Timeline vertical (single column card stack) */}
            <div className="relative pl-0 md:pl-8">
              {/* vertical line appears only on md+ */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-border" />

              <ol className="space-y-8">
                {experiences.map((exp, idx) => {
                  const delay = 0.12 * idx;
                  return (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                      transition={{ duration: 0.5, delay }}
                      className="relative"
                    >
                      {/* marker: show only on md+ so mobile has no bullets */}
                      <div className="hidden md:flex absolute left-[-2rem] top-6 items-center">
                        <span
                          className="flex h-3 w-3 rounded-full bg-primary ring-2 ring-card"
                          aria-hidden="true"
                        />
                        <span className="sr-only">
                          {exp.company} — {exp.period}
                        </span>
                      </div>

                      {/* Card: ensure no compression on tablet by not relying on negative left offsets */}
                      <div className="p-4 md:p-6 rounded-lg bg-card border border-border shadow-card">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-base md:text-lg">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground mt-1 break-words">
                              {exp.company}
                            </p>
                          </div>
                          {/* Date: give a stable min-width but allow wrap if needed */}
                          <div className="text-sm text-muted-foreground sm:min-w-[92px] sm:text-right break-words">
                            {exp.period}
                          </div>
                        </div>

                        <p className="mt-3 md:mt-4 text-sm md:text-base text-muted-foreground leading-relaxed text-left md:text-justify">
                          {exp.summary}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
