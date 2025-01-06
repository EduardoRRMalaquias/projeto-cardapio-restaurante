import React, { useEffect, useState } from 'react';
import estilos from './Categorias.module.css';
import BotaoCategorias from '../BotaoCategorias/BotaoCategorias';
import { filtrarPrato } from '../../service/service';

/* Imagens */
import entrada from '../../../public/entrada.png';
import massas from '../../../public/massa.png';
import carnes from '../../../public/carne.png';
import bebidas from '../../../public/bebidas.png';
import saladas from '../../../public/salada.png';
import sobremesas from '../../../public/sobremesa.png';

const listaCategorias = [
  {
    categoria: 'Entradas',
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

const Categorias = ({ setListaPratos, setValue }) => {
  const [categorias, setCategoria] = useState('Entradas');

  useEffect(() => {
    setValue('');
    setListaPratos(filtrarPrato(categorias));
  }, [categorias]);

  const mudarCategoria = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <section aria-label="categotias">
      <ul className={estilos.categorias}>
        {listaCategorias.map(({ categoria, image }) => (
          <li key={categoria}>
            <BotaoCategorias
              ativo={categorias === categoria}
              categoria={categoria}
              image={image}
              onClick={() => mudarCategoria(categoria)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categorias;
