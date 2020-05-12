import styles from '../styles/utils.module.css'

export default function Footer() {
    return(
        <footer className={styles.backRed} >
            <div className={styles.redes}>
                <section>
                <img src="/email.png"   alt="email"/>
                <p>pharmarcioMM@gmail.com</p>
                </section>
                <section>
                <img src="/gps.png"   alt="localização"/>
                <p>R.Paulo José de Macêdo, N 17</p>
                </section>
                <section>
                <img src="/whatsapp.png"   alt="whatsapp"/>
                <p>85 40028922</p>
                </section>
            </div>
            <div className={styles.copy}>
                <p>Copyright ©2020 All rights reserved | This template is made with  by <a href="https://github.com/farciomernandes"> Marcio </a>  and <a href="https://github.com/MickaelAraujs"> Mickael </a></p>
            </div>
        </footer>
    );
}