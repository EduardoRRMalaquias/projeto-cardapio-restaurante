import React from 'react';
import Image from 'next/image';
import estilos from './BotaoCategorias.module.css';

const BotaoCategorias = ({ categoria, image }) => {
  return (
    <button
      className={estilos.btnCategorias}
      onClick={() => console.log(categoria)}
    >
      <Image
        className={estilos.Image}
        src={image}
        alt={`Categoria: ${categoria}`}
      />
      {categoria}
    </button>
  );
};

export default BotaoCategorias;
