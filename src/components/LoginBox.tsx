import styles from "../styles/components/LoginBox.module.css";
import { useSession,signIn,signOut } from 'next-auth/client';
import Link from "next/link";

export function LoginBox(){

    const session = false;

    return(
            <div className={styles.loginBoxContainer}>        
                <img src="logo-index.svg" alt="move.it" />
                <p>Bem-vindo</p>
                <img src="Git.svg" alt="Login using git" />
                <div className={styles.loginBoxContainerInput}>
        { session ?
            (  
                <>
                    <Link href="/app">Já está logado. Clique aqui para entrar</Link>
                    <h1>Não é você? <button onClick={() => signOut()}> Deslogar</button></h1>
                </>
            ) :
            (
                <>
                    <input></input><button onClick={() => signIn()}>{">"}</button>
                </>
            )
        }
        </div>
    </div>
    )
}