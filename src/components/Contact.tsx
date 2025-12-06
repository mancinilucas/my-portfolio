import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider">
              CONTATO
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Vamos trabalhar juntos?
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Quer construir uma solução completa, integrar a sua equipe ou
              acelerar um projeto específico? Vamos desenvolver juntos.
              <br />
              Se você precisa de alguém comprometido com qualidade, desempenho e
              boas práticas, será um prazer conversar.
            </p>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href="mailto:mancinilucas05@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:text-secondary-foreground hover:shadow-xl"
              asChild
            >
              <a
                href="https://wa.me/5573988945898"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="mr-2 h-5 w-5 text" />
                WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
