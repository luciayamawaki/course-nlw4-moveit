import Head from 'next/head';
import { LoginBox } from '../components/LoginBox';
import styles from '../styles/pages/Login.module.css';


export default function Login(){


  return(
    <div className={styles.container}> 
    
      <Head>
            <title>Login | move.it</title>
      </Head>

      <section>
        <LoginBox />
      </section>
      
    </div>
  )
}