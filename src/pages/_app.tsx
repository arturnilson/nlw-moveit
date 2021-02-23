//Tudo que é algo que vai se repetir em todas as páginas, fica no _app
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  // Conteúdo que está em todas as páginas, colocar dentro do Component, fica em volta de toda aplicação (cabecalho, rodapé,...)
  return <Component {...pageProps} />
}

export default MyApp
