import { MdShoppingCart } from 'react-icons/md';
import { loadStripe } from '@stripe/stripe-js';

import stripeConfig from '../config/stripe';

import styles from '../styles/utils.module.css';

const stripePromise = loadStripe(stripeConfig.publicKey);

export default function CheckoutButton({ skuId }) {
  
    async function handleClick() {
        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({
            items: [{ sku: skuId, quantity: 3 }],
            successUrl: 'http://localhost:3000/success', 
            cancelUrl: 'http://localhost:3000/',
        });
    
        if (error) {
            console.warn('ERROR::: ', error)
        }
  };

  return (
    <>
    <button className={styles.buy} onClick={handleClick}>
      <MdShoppingCart size={26} color="#ffffff" />
      Comprar
    </button>
    </>
  );
}