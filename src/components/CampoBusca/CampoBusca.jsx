import Image from 'next/image';
import React from 'react';
import lupa from '/public/lupa.png';
import estilos from './CampoBusca.module.css';

const CampoBusca = () => {
  return (
    <div className={estilos.campo}>
      <Image src={lupa} alt="Campo de Busca" />
      <input
        className={estilos.busca}
        type="text"
        placeholder="Pesquise aqui um dos pratos do nosso cardapio"
      />
    </div>
  );
};

export default CampoBusca;
