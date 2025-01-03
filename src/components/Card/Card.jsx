import Image from 'next/image';
import React from 'react';
import estilos from './Card.module.css';

const Card = ({ imagem, nome, categoria, descricao, preco }) => {
  return (
    <article className={estilos.card}>
      <figure>
        <Image src={imagem} alt={nome} />
      </figure>
      <div className={estilos.informacoes}>
        <h3>{nome}</h3>
        <small>{categoria}</small>
        <p>{descricao}</p>
        <span>R$ {preco}</span>
      </div>
    </article>
  );
};

export default Card;
