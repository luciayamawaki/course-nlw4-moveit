import { useState, createContext, ReactNode } from 'react';
import challenges from '../../challenges.json';


interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level:number;
    currentExperience:number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    activeChallenge: Challenge;
}

interface ChallengesProviderProps{
    children:ReactNode;
}


export const ChallengesContext = createContext({} as ChallengesContextData) ;

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level+1)*4,2);

    const levelUp = () => setLevel(level+1);
    const startNewChallenge = () => {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }
    const resetChallenge = () => setActiveChallenge(null);
    
    return(
        <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, levelUp,startNewChallenge,activeChallenge,resetChallenge,experienceToNextLevel}}>
            {children}
        </ChallengesContext.Provider>
    );
}