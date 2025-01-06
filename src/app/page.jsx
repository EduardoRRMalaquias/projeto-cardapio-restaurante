'use client';
import pratos from '@/data/data_produtos.js';
import Categorias from '@/components/Categorias/Categorias';
import estilos from './page.module.css';
import CampoBusca from '@/components/CampoBusca/CampoBusca';
import Card from '@/components/Card/Card';
import { useState } from 'react';

export default function Home() {
  const [listaPratos, setListaPratos] = useState(pratos);
  const [value, setValue] = useState('');


  return (
    <main className={estilos.main}>
      <Categorias setListaPratos={setListaPratos} setValue={setValue} />
      <CampoBusca setListaPratos={setListaPratos} value={value} setValue={setValue} />
      <section className={estilos.cardapio} aria-label="Cardapio">
        <h2>Cardapio</h2>
        <div className={estilos.pratos}>
          {listaPratos.length ? (
            listaPratos.map(
              (prato, index) => index < 5 && <Card key={prato.id} {...prato} />,
            )
          ) : (
            <p>Nenhum prato correspondente encontrado.</p>
          )}
        </div>
      </section>
    </main>
  );
}
