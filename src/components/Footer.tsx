import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();

  return (
    <footer className="mt-32 px-12 pb-4 text-gray-600 text-sm">
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-pointer"
        icon={faFacebookSquare}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-pointer"
        icon={faInstagram}
        size="2x"
      />
      <FontAwesomeIcon
        className="mr-4 hover:text-white cursor-pointer"
        icon={faTwitter}
        size="2x"
      />
      <FontAwesomeIcon
        className="hover:text-white cursor-pointer"
        icon={faYoutube}
        size="2x"
      />
      <div className="grid grid-cols-4 gap-2 my-8">
        <a className="hover:text-white"  href="#idiomas">
          Idiomas e legendas
        </a>
        <a className="hover:text-white"  href="#audiodescrição">
          Audiodescrição
        </a>
        <a className="hover:text-white" href="#ajuda">
          Centro de ajuda
        </a>
        <a className="hover:text-white" href="#cartão">
          Cartão pré-pago
        </a>
        <a className="hover:text-white" href="#imprensa">
          Imprensa
        </a>
        <a className="hover:text-white" href="#investidores">
          Relação com investidores
        </a>
        <a className="hover:text-white" href="#carreiras">
          Carreiras
        </a>
        <a className="hover:text-white" href="#uso">
          Termos de uso
        </a>
        <a className="hover:text-white" href="#privacidade">
          Privacidade
        </a>
        <a className="hover:text-white" href="#avisos">
          Avisos legais
        </a>
        <a className="hover:text-white" href="#preferencias">
          Preferências de cookies
        </a>
        <a className="hover:text-white" href="#informações">
          Informações corporativas
        </a>
        <a className="hover:text-white" href="#contato">
          Entre em contato
        </a>
      </div>
      <p>© 1997 - {today.getFullYear()} Imagiflix, Inc.</p>
    </footer>
  );
};

export default Footer;
