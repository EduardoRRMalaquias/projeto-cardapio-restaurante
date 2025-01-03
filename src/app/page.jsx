'use client';
import pratos from '@/data/data_produtos.js';
import Categorias from '@/components/Categorias/Categorias';
import estilos from './page.module.css';
import CampoBusca from '@/components/CampoBusca/CampoBusca';
import Card from '@/components/Card/Card';

export default function Home() {
  return (
    <main className={estilos.main}>
      <Categorias />
      <CampoBusca />
      <section className={estilos.cardapio} aria-label="Cardapio">
        <h2>Cardapio</h2>
        <div className={estilos.pratos}>
          {pratos.map(
            (prato, index) => index < 5 && <Card key={prato.id} {...prato} />,
          )}
        </div>
      </section>
    </main>
  );
}
