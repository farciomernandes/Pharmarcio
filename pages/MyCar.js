import CheckoutButton from '../components/CheckoutButton';

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
        <table className={styles.tableTable}>

        <tr className={styles.tableTitle}>
            <th>PRODUTO</th>
            <th>NOME</th>
            <th>PREÇO</th>
            <th>UNIDADES</th>    
        </tr>
        <tr>
            <td><hr /></td>
            <td><hr /></td>
            <td><hr /></td>
        </tr>

        {skus.map( sku=>(
            <>

        <tr>
            <td>
                <img className={styles.tableImg} 
                src={sku.image} alt="genéricos"/>
            </td>
            <td className={styles.tableName}>
                <p>{sku.attributes.name}</p>
            </td>
            <td className={styles.tablePrice}>
            { parsePriceAsBRL(Number(sku.price/100)) }
            </td>
            <td className={styles.tableInput}>
                <input type="Number" placeholder="1" />
                <CheckoutButton className={styles.buttonBuy2} skuId={sku.id} />
            </td>
            
        </tr>
                <br className={styles.separa}/>
            </>
            ))}



     
      

        </table>

        
        </section>   
             
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