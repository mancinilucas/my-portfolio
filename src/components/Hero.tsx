import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground font-mono text-sm tracking-wider"
            >
              DESENVOLVEDOR FULLSTACK
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            >
              Lucas Mancini
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Soluções modernas e escaláveis
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Transformando ideias em produtos digitais funcionais e de alto
              impacto.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Projetos
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1"
              />
            </Button>

            {/* WhatsApp: use outline + subtle hover, para não "sumir" no fundo */}
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary hover:text-secondary-foreground hover:shadow-xl transition-all"
            >
              <a
                href="https://wa.me/5573988945898"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir chat no WhatsApp"
                className="flex items-center gap-2"
              >
                {/* se quiser um ícone do WhatsApp, troque aqui */}
                Fale comigo
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 pt-8"
          >
            {/* social icons: same microinteraction as footer */}
            <a
              href="https://github.com/mancinilucas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github - Lucas Mancini"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/lucasgmancini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn — Lucas Mancini"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </a>

            <a
              href="mailto:mancinilucas05@gmail.com"
              aria-label="Enviar email para Lucas Mancini"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
