import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Plataforma de gestão inteligente de espaços de trabalho e eventos",
    description:
      "Plataforma completa com painel administrativo, gestão de espaços e processamento de pagamentos.",
    tech: ["Java", "Spring Boot", "Angular", "MySQL", "GCP", "Mercado Pago"],
    github: "#",
    demo: "https://hubble.net.br/",
  },
  {
    title: "Sistema de monitoramento de serviços e estabelecimentos públicos",
    description:
      "Um projeto para contribuir com a transparência do uso de recursos públicos e privado.",
    tech: ["Python", "Django", "Django Rest Framework", "PostgreSQL"],
    github: "https://github.com/mancinilucas/dj-qrcc-api",
    demo: "https://github.com/mancinilucas/dj-qrcc-api",
  },
  {
    title: "Sistema de Gestão Escolar",
    description:
      "Um projeto destinado a cursos de pequeno e médio porte, oferecendo funcionalidades essenciais para a administração acadêmica e financeira.",
    tech: ["Next.js", "Tailwind", "Node.js", "Express", "Postgres", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Página institucional para curso de redação",
    description:
      "Criação de Landing Page para curso de redação, focada em reafirmar a marca, demonstrar autoridade no nicho e impulsionar a divulgação e matrículas.",
    tech: ["React", "Vite", "Tailwind", "Vercel"],
    github: "#",
    demo: "https://www.redacaocontexto.com.br/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider">
              PORTFÓLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Projetos em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-xl"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="mr-2 h-4 w-4"
                        />
                        Código
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="group/btn bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
