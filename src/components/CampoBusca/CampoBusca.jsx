import Image from 'next/image';
import lupa from '/public/lupa.png';
import estilos from './CampoBusca.module.css';
import { buscarPrato } from '../../service/service';

const CampoBusca = ({ setListaPratos, value, setValue }) => {
  const buscarPratos = (textoDigitado) => {
    setValue(textoDigitado);
    textoDigitado.length >= 3 && setListaPratos(buscarPrato(textoDigitado));
  };

  return (
    <div className={estilos.campo} aria-label="Campo de Busca">
      <Image src={lupa} alt="Campo de Busca" />
      <input
        className={estilos.busca}
        type="text"
        onChange={({ target }) => buscarPratos(target.value)}
        value={value}
        placeholder="Pesquise aqui um dos pratos do nosso cardapio"
      />
    </div>
  );
};

export default CampoBusca;
