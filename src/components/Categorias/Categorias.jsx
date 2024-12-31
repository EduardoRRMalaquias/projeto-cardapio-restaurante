import React from 'react';
import estilos from './Categorias.module.css';
import BotaoCategorias from '../BotaoCategorias/BotaoCategorias';

/* Imagens */
import entrada from '../../../public/entrada.png';
import massas from '../../../public/massa.png';
import carnes from '../../../public/carne.png';
import bebidas from '../../../public/bebidas.png';
import saladas from '../../../public/salada.png';
import sobremesas from '../../../public/sobremesa.png';

const categorias = [
  {
    categoria: 'Entrada',
    image: entrada,
  },
  {
    categoria: 'Massas',
    image: massas,
  },
  {
    categoria: 'Carnes',
    image: carnes,
  },
  {
    categoria: 'Bebidas',
    image: bebidas,
  },
  {
    categoria: 'Saladas',
    image: saladas,
  },
  {
    categoria: 'Sobremesas',
    image: sobremesas,
  },
];

const Categorias = () => {
  return (
    <section aria-label="categotias">
      <ul className={estilos.categorias}>
        {categorias.map(({ categoria, image }) => (
          <li key={categoria}>
            <BotaoCategorias categoria={categoria} image={image} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categorias;
