import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout';

import styles from '../styles/home.module.css';

export default function Products() {
    return (
        <Layout>
            <Head>
                <title>Pharmarcio | Produtos</title>
            </Head>

            <section className={styles.blackBlue}>
                <section className={styles.whiteBlue}>
                    <h1 className={styles.ofertText}>OFERTAS ESPECIAIS</h1>

                    <div className={styles.slids}>

                    <a href="#">
                        <img src="/images/leftArrow.png" className={styles.arrowIcon}/>
                    </a>

                    <a href="#">
                        <img src="/images/asma.png"/>
                    </a>
                    <a href="#">
                    <img src="images/rivotril.png"/>
                    </a>
                    <a href="#">
                        <img src="images/suplemento.png"/>
                    </a>

                    <a href="#">
                        <img src="/images/rightArrow.png" className={styles.arrowIcon}/>
                    </a>
                    </div>
                </section>
            </section>
            <section className={styles.typeProducts}>
                <section>            
                <h1>GENÉRICOS</h1>
                <img src="/images/genericos.png" alt="genéricos"/>
                <br />
                <a href="#" className={styles.btnVer}>VER MAIS...</a>               
                </section>
                <section>            
                <h1>BELEZA E HIGIENE</h1>
                <img src="/images/beleza.png" alt="genéricos"/>
                <br />
                <a href="#" className={styles.btnVer}>VER MAIS...</a>               
                </section>
                <section>            
                <h1>MANIPULADOS</h1>
                <img src="/images/manipulados.png" alt="genéricos"/>
                <br />
                <a href="#" className={styles.btnVer}>VER MAIS...</a>               
                </section>
            </section>
            <hr className={styles.linha}/>
            <section className={styles.formMail}>
                <section className={styles.message}>
                    Alguma dica ou sugestão? Nos envie uma mensagem!
                </section>
                <form action="http://formspree.io/farciomernandes@gmail.com"
                method="POST" className={styles.formForm}>
                <input name="Name"
                value="Nome"
                />
                <input name="Email"
                value="Contato"
                />
                <textarea name="Mensagem"
                value="Comentário"
                />
                <button type="submit" value="send" className={styles.btnVer}>Enviar</button>
                </form>
            </section>

            
        </Layout>
    )
}