import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';


export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>

                <img src="https://github.com/luciayamawaki.png" alt=""/>
            <div>
            <strong>Lucia Yamawaki</strong>
            <p>
                <img src="icons/level.svg" alt="" />
                Level {level}
            </p>
            </div>
        </div>
    );
}