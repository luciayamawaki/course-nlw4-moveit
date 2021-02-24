import { CompletedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDown } from "../components/CountDown";
import Head from "next/head";



import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>

    <Head>
      <title>Home | move.it</title>
    </Head>
    <ExperienceBar />

      <section>
        <div>
        <Profile />
        <CompletedChallenges />
        <CountDown />
        </div>
        <div>
          
        </div>
      </section>

     </div>
  )
}
