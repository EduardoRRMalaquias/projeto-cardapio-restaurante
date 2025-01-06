import pratos from '@/data/data_produtos.js';

export const buscarPrato = (textoDigitado) => {
  return pratos.filter(
    (prato) =>
      prato.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      prato.descricao.toLowerCase().includes(textoDigitado.toLowerCase()) ||
      prato.categoria.toLowerCase().includes(textoDigitado.toLowerCase()),
  );
};

export const filtrarPrato = (categorias) => {
  return pratos.filter((prato) => prato.categoria === categorias);
};
