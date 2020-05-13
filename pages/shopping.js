import Layout from '../components/layout';

import styles from '../styles/shopping.module.css';

export default function Shopping() {
    return(
        <Layout>
            <div className={styles.allPage}>
                <div className={styles.center}>
                    <section className={styles.produto}>
                        <div>
                            <p>Acetato de Dexametasona</p>
                            <img src="/images/Dexametasona.png" alt="Dexametasona" />
                        </div>
                            <h2>R$ 8,00</h2>
                            <hr />
                            <br />
                            <br />
                    </section>
                    <section className={styles.produto}>
                        <div>
                            <p>Clonazepan</p>
                            <img src="/images/rivotril.png" alt="Dexametasona" />
                        </div>
                            <h2>R$ 12,50</h2>
                            <hr />
                            <br />
                            <br />
                    </section>
                </div> 
                <div className={styles.total}>
                <h3>R$ 20,50</h3> <h2>TOTAL</h2> 
                </div>
            </div>
        </Layout>
    )
}