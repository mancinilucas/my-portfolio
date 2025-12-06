import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Texto principal atualizado (versão profissional/corporativa) */}
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">
              Lucas Mancini — Desenvolvedor Fullstack
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Desenvolvimento moderno focado em performance e experiência
            </p>
          </div>

          {/* Ícones sociais com microinteração */}
          <div className="flex gap-6">
            <a
              href="https://github.com/mancinilucas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/lucasgmancini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </a>

            <a
              href="mailto:mancinilucas05@gmail.com"
              aria-label="Email"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200 ease-out"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Copyright enxuto */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Lucas Mancini. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
