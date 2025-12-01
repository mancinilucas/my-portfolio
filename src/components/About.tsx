import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider">SOBRE MIM</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transformando código em experiências
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 pt-8">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou um desenvolvedor fullstack apaixonado por criar soluções digitais que fazem a diferença.
                Com experiência sólida em tecnologias modernas, trabalho em projetos que variam desde
                aplicações web complexas até sistemas escaláveis.
              </p>
              <p>
                Minha abordagem combina código limpo, boas práticas de desenvolvimento e foco na
                experiência do usuário, sempre buscando entregar produtos de alta qualidade que
                superem expectativas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-lg mb-2">Experiência</h3>
                <p className="text-muted-foreground">
                  5+ anos desenvolvendo aplicações web e mobile
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-lg mb-2">Projetos</h3>
                <p className="text-muted-foreground">
                  30+ projetos entregues com sucesso
                </p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-semibold text-lg mb-2">Clientes</h3>
                <p className="text-muted-foreground">
                  Satisfação de 100% dos clientes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
