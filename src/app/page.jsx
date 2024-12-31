'use client';
import Categorias from '@/components/Categorias/Categorias';
import estilos from './page.module.css';
import CampoBusca from '@/components/CampoBusca/CampoBusca';

export default function Home() {
  return (
    <main className={estilos.main}>
      <Categorias />
      <CampoBusca />
    </main>
  );
}
