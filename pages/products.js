import Head from 'next/head';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';

import stripeConfig from '../config/stripe';
import { Stripe } from 'stripe';

import Layout from '../components/layout';
import GetBackButton from '../components/GetBackButton';

import parsePriceAsBRL from '../utils/parsePriceAsBRL';

import styles from '../styles/utils.module.css';

export default function Products({ skus }) {
    return (
        <Layout>
            <Head>
                <title>Pharmarcio | Produtos</title>
            </Head>

            <GetBackButton path='/' text='Página Inicial' />

            <section className={styles.productGrid}>
                { skus.map(sku => (

                    <div key={sku.id} className={styles.productCard}>
                        <img src={sku.image} alt={sku.attributes.name} />

                        <div className={styles.productCardInfo}>
                            <h3>
                            {sku.attributes.name}
                            </h3>

                            <span>
                                { parsePriceAsBRL(Number(sku.price/100)) }
                            </span>
                            
                            <p>
                                O clonazepam pertence a uma classe farmacológica conhecida como
                                benzodiazepinas, que possuem como principais propriedades...
                            </p>
                        </div>
                        
                        <Link href='/products/[skuId]' as={`/products/${sku.id}`}>
                            <button className={styles.buy}>
                                <MdShoppingCart size={26} color="#ffffff" />
                                comprar
                            </button>
                        </Link>
                    </div>

                )) }
            </section>

            
        </Layout>
    )
}

export async function getStaticProps() {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-03-02'
    });

    const skus = await stripe.skus.list();

    return {
        props: {
            skus: skus.data,
        }
    };
}