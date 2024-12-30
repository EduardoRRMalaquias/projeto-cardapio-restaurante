import Banner from '@/components/Banner/Banner';
import './globals.css';

export const metadata = {
  title: 'Cardapio de Restaurante',
  description: 'Confira as opçoes e categorias de pratos do nosso restaurante',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="container">
        <Banner />
        {children}
      </body>
    </html>
  );
}
