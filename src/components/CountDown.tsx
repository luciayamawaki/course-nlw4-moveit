import { useState, useEffect } from "react";
import styles from "../styles/components/CountDown.module.css";

export function CountDown(){

    const[time, setTime] = useState(25 * 60);
    const[isActive, setIsActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft,minuteRigt] = String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,'0').split('');

    function startCountDown(){
        setIsActive(true);
    }

    useEffect(() => {
        if(isActive && time > 0){
            setTimeout(() =>{
                setTime(time - 1)
            },1000)
        }
    },[isActive, time]) // if active changes, useEffect triggered

    return(
    <div>
        <div className={styles.countDownContainer}>
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

        <button type="button" 
        className={styles.countDownButton}
        onClick={startCountDown}
        >
    
        Start new cycle
        </button>
    </div> 

    );
}