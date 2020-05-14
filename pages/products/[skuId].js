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
                        O clonazepam pertence a uma classe farmacológica conhecida como benzodiazepinas,
                        que possuem como principais propriedades...   
                    </p>

                    <span>
                        { parsePriceAsBRL(Number(sku.price/100)) }
                    </span>

                    <CheckoutButton skuId={sku.id} itemName={sku.attributes.name} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() { 
    const stripe = new Stripe(stripeConfig.secretKey, { 
        apiVersion: '2020-03-02'
    });

    const skus = await stripe.skus.list();

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