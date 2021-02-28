import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';


export function ChallengeBox(){

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();        
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (

                <div className={styles.challengeActive}>
                    <header>Get {activeChallenge.amount } xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>New Challenge</strong>
                        <p>{activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeFailed}>Failed</button>
                        <button type="button" className={styles.challengeFailedButton} onClick={handleChallengeSucceeded}>Completed</button>
                    </footer>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finish active cycle to get a new challenge</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"></img>
                    Get more exp after completing new challenges.
                </p>
                </div>
            )
            }
        </div>
    )
}