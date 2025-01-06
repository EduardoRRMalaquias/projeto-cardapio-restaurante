import React from 'react';
import Image from 'next/image';
import estilos from './BotaoCategorias.module.css';

const BotaoCategorias = ({ categoria, image, onClick, ativo }) => {
  return (
    <button
      className={`${ativo && estilos.active} ${estilos.btnCategorias}`}
      onClick={onClick}
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
