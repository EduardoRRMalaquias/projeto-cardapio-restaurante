import React from 'react';
import estilos from './Banner.module.css';

const Banner = () => {
  return (
    <header className={estilos.banner}>
      <div className={estilos.cabecalho}>
        <h1>RESTAURANTE</h1>
        <p>
          De pratos classicos a criações surpreendentes, nosso cardapio é um
          requinte de sabores refinados
        </p>
      </div>
    </header>
  );
};

export default Banner;
