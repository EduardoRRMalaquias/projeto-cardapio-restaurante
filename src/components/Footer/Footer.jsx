import Link from 'next/link';
import React from 'react';
import estilos from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={estilos.footer}>
      <p>
        Seu Restaurante - © Todos os direitos reservados a{' '}
        <Link
          className={estilos.Link}
          href="https://eduardorrmalaquias.github.io/projeto_portifolio/"
          target='_blank'
        >
          Eduardo RR M
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
