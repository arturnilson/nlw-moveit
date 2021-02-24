//Tudo que é algo que vai se repetir em todas as páginas, fica no _app
import { useState } from 'react';
import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
// Informações que a aplicação toda deve ter acesso (Componentes se conversam), é utilizado um context

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  // Conteúdo que está em todas as páginas, colocar dentro do Component, fica em volta de toda aplicação (cabecalho, rodapé,...)
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
