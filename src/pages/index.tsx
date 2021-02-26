import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// Em caso de um blog que você tem o Post (titulo, descrição),
// para que o google reenderize os dados corretamente, deve-se retornar os dados através do método
// e receber os dados do component Home (props), por exemplo, com esses dados carregados
// getServerSideProps é executado antes do Home

// Essa função precisar ser async e o nome deve ser getServerSideProps
// Ao declarar essa função dentro de uma página do next, é possível manipular 
// quais dados serão repassados da camada do Next para a camada do Front-end

// Consegue acessar essas props que o método retorna, dentro do componente da página: Home(props)
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // chamada api
  // const user = {
  //   level: 1,
  //   currentExperience: 50,
  //   challengesCompleted: 2,
  // }

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  // tudo que for feito dentro dessa função, é rodado no servidor Node e não no browser
  // É executado no browser quando for utilizado dentro do componente atual
  // console.log(user);

  return {
    // props: user
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}


