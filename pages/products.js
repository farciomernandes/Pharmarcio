import Head from 'next/head';
import Link from 'next/link';
import { MdArrowBack, MdShoppingCart } from 'react-icons/md';

import Layout from '../components/layout';

import styles from '../styles/utils.module.css';

export default function Products() {
    return (
        <Layout>
            <Head>
                <title>Pharmarcio | Produtos</title>
            </Head>

            <Link href="/">
                <span className={styles.goBack}>
                    <MdArrowBack size={26} color="#000000" />
                    <a>Página Inicial</a>
                </span>
            </Link>

            <section className={styles.productGrid}>
                <div className={styles.productCard}>
                    <img src="/images/product.svg" />
                    <div className={styles.productCardInfo}>
                        <span>R$ 7,50</span>
                        <p>
                            O clonazepam pertence a uma classe farmacológica conhecida como
                            benzodiazepinas, que possuem como principais propriedades...
                        </p>
                    </div>
                    <button>
                        <MdShoppingCart size={26} color="#ffffff" />
                        comprar
                    </button>
                </div>

                <div className={styles.productCard}>
                    <img src="/images/product.svg" />
                    <div className={styles.productCardInfo}>
                        <span>R$ 7,50</span>
                        <p>
                            O clonazepam pertence a uma classe farmacológica conhecida como
                            benzodiazepinas, que possuem como principais propriedades...
                        </p>
                    </div>
                    <button>
                        <MdShoppingCart size={26} color="#ffffff" />
                        comprar
                    </button>
                </div>

                <div className={styles.productCard}>
                    <img src="/images/product.svg" />
                    <div className={styles.productCardInfo}>
                        <span>R$ 7,50</span>
                        <p>
                            O clonazepam pertence a uma classe farmacológica conhecida como
                            benzodiazepinas, que possuem como principais propriedades...
                        </p>
                    </div>
                    <button>
                        <MdShoppingCart size={26} color="#ffffff" />
                        comprar
                    </button>
                </div>

                <div className={styles.productCard}>
                    <img src="/images/product.svg" />
                    <div className={styles.productCardInfo}>
                        <span>R$ 7,50</span>
                        <p>
                            O clonazepam pertence a uma classe farmacológica conhecida como
                            benzodiazepinas, que possuem como principais propriedades...
                        </p>
                    </div>
                    <button>
                        <MdShoppingCart size={26} color="#ffffff" />
                        comprar
                    </button>
                </div>

                <div className={styles.productCard}>
                    <img src="/images/product.svg" />
                    <div className={styles.productCardInfo}>
                        <span>R$ 7,50</span>
                        <p>
                            O clonazepam pertence a uma classe farmacológica conhecida como
                            benzodiazepinas, que possuem como principais propriedades...
                        </p>
                    </div>
                    <button>
                        <MdShoppingCart size={26} color="#ffffff" />
                        comprar
                    </button>
                </div>

                <div className={styles.productCard}>
                    <img src="/images/product.svg" />
                    <div className={styles.productCardInfo}>
                        <span>R$ 7,50</span>
                        <p>
                            O clonazepam pertence a uma classe farmacológica conhecida como
                            benzodiazepinas, que possuem como principais propriedades...
                        </p>
                    </div>
                    <button>
                        <MdShoppingCart size={26} color="#ffffff" />
                        comprar
                    </button>
                </div>
            </section>

            
        </Layout>
    )
}