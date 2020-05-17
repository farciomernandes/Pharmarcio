import { MdAddShoppingCart } from 'react-icons/md';

import { useCount } from '../contexts/cart';

import styles from '../styles/utils.module.css';

export default function Cart() {
    const [ count ] = useCount();

    return (
        <div className={styles.cartContainer}>
            <MdAddShoppingCart color='#000000' size={35} />

            { count > 0 ? <span>{count}</span> : '' }
        </div>
    )
}