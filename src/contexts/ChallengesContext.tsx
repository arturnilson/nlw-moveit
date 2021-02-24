import { createContext, useState, ReactNode } from 'react';

// Para quando der Ctrl + space na função, mostrar o que o Context retorna
// inserido como AS no export do context
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void; //funcao sem retorno
    startNewChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode; //quando o tipo do elemento filho for um componente react
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log('new challenge')
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                levelUp,
                startNewChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}