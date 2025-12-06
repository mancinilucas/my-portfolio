import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Java", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL/NoSQL", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Git/GitHub", category: "DevOps" },
  { name: "Google Cloud Platform", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider">
              STACK TECNOLÓGICO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ferramentas & Tecnologias
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Tecnologias modernas que utilizo para criar soluções robustas e
              escaláveis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group p-6 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-lg cursor-default"
              >
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-mono">
                    {skill.category}
                  </p>
                  <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {skill.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
