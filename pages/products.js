import Head from 'next/head';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';

import stripeConfig from '../config/stripe';
import { Stripe } from 'stripe';

import Layout from '../components/layout';
import GetBackButton from '../components/GetBackButton';

import parsePriceAsBRL from '../utils/parsePriceAsBRL';

import styles from '../styles/utils.module.css';

export default function Products({ skus  }) {
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
                            Nossos produtos são retirados diretamente dos melhores laboratórios do Brasil
                            e do mundo, o que nos permite a entregar a nossos clientes produtos de alta qualidade
                            com o melhor valor do mercado.
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

    const skus = await stripe.skus.list(
        {limit: 100}
    );

    return {
        props: {
            skus: skus.data,
        }
    };
}