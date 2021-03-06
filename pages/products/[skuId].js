import Stripe from 'stripe';

import stripeConfig from '../../config/stripe';

import Layout from '../../components/layout';
import CheckoutButton from '../../components/CheckoutButton';
import GetBackButton from '../../components/GetBackButton';

import parsePriceAsBRL from '../../utils/parsePriceAsBRL';

import styles from '../../styles/product.module.css';

export default function Product({ sku }) {
    return (
        <Layout>
            <GetBackButton path='/products' text='Lista de produtos' />

            <div className={styles.container}>
                <img src={sku.image} alt={sku.attributes.name} />
                
                
                <div className={styles.productContent}>
                    <h3>{sku.attributes.name}</h3>
                    
                    <p>
                        Nossos produtos são retirados diretamente dos melhores laboratórios do Brasil
                        e do mundo, o que nos permite a entregar a nossos clientes produtos de alta qualidade
                        com o melhor valor do mercado.
                    </p>

                    <span>
                        { parsePriceAsBRL(Number(sku.price/100)) }
                    </span>

                    <CheckoutButton skuId={sku.id} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() { 
    const stripe = new Stripe(stripeConfig.secretKey, { 
        apiVersion: '2020-03-02'
    });

    const skus = await stripe.skus.list(
        {limit: 100}
    );


    const paths = skus.data.map(sku => {
        return {
            params: {
                skuId: sku.id
            }
        };
    });
    

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) { 
    const stripe = new Stripe(stripeConfig.secretKey, { 
        apiVersion: '2020-03-02'
    });

    const sku = await stripe.skus.retrieve(params.skuId);

    return {
        props: {
            sku
        },
    };
}