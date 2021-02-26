import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from "../styles/components/Countdown.module.css";

let counddownTimeout: NodeJS.Timeout;

export function Countdown(){

    const { startNewChallenge } = useContext(ChallengesContext);

    const[time, setTime] = useState(0.1 * 60);
    const[isActive, setIsActive] = useState(false);
    const[hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft,minuteRigt] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown(){
        clearTimeout(counddownTimeout);
        setIsActive(false);
        setTime(0.1*60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            counddownTimeout = setTimeout(() =>{
                setTime(time - 1)
            },1000)
        }else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    },[isActive, time]) // if active changes, useEffect triggered

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