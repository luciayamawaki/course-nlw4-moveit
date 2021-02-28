import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../contexts/CountdownContext";
import { useContext } from "react";



export function Countdown(){

    const { minutes, seconds, hasFinished, isActive,startCountdown,resetCountdown } = useContext(CountdownContext);

    const [minuteLeft,minuteRigt] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');

    return(
    <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRigt}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
            <button type="button" 
            className={styles.countdownButton} disabled
            >
            Cycle finished
            </button>   
        ) : <>
            
            { isActive ? (
                <button type="button" 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
                >
                Stop cycle
                </button>            
            ) : (
                <button type="button" 
                className={styles.countdownButton}
                onClick={startCountdown}
                >
                Start a new cycle
                </button>
            )}

        </>

        }

    </div> 

    );
}