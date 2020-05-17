import Head from 'next/head';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';

import stripeConfig from '../config/stripe';
import { Stripe } from 'stripe';


import parsePriceAsBRL from '../utils/parsePriceAsBRL';

import styles from '../styles/utils.module.css';
import Layout from '../components/layout';


export function MyCar({skus}){
   const total = 0;
    return(
        <Layout>

        <div>
        <section className={styles.MyCar}>
                { skus.map(sku => (
                    <div className={styles.itemms}>
                    <div key={sku.id} >
                        <h4 className={styles.titleMyCar}>
                            {sku.attributes.name}
                        </h4>
                        <img height="100px" src={sku.image} alt={sku.attributes.name} />

                        <div className={styles}>
            
                            <span>
                                { parsePriceAsBRL(Number(sku.price/100)) }
                            </span>
                            
                            <p>
                            </p>
                        </div>
                        
                        <Link href='/products/[skuId]' as={`/products/${sku.id}`}>
                            <button className={styles.buyCar}>
                                <MdShoppingCart size={26} color="#ffffff" />
                                comprar
                            </button>
                        </Link>
                    </div>
                    <div className={styles.qtd}>
                        <p>Unidades</p>
                        <input value="1" />
                    </div>
                    </div>
                )) }
            </section>   
                <div className={styles.totall}>
                    Total a ser pago: {total/100}
                </div>
        </div>
        </Layout>

    );
}






export async function getStaticProps() {
    const stripe = new Stripe(stripeConfig.secretKey, {
        apiVersion: '2020-03-02'
    });

    const skus = await stripe.skus.list(
        {limit: 3}
    );

        /*
        const resultado = []
        const CartProducts = [     CARRINHO DO USUARIO   ]
        for(let k = 0; k < CartProducts.length; k++){
            (let m = 0; m < skus.length; m++){
                if(CartProducts[k] == skus[m]){
                    resultado.push(skus[m])
                    total = total + skus[m].price
                }
            }
        }
        */

    return {
        props: {
            skus: skus.data,
        }
    };
}





export default MyCar;