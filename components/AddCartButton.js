import { MdAddShoppingCart } from 'react-icons/md';

import { useCount } from '../contexts/cart';

import styles from '../styles/utils.module.css';

export default function AddCartButton() {
    const [count, setCount] = useCount();

    return (
        <button onClick={() => setCount(count + 1)} className={styles.buy}>
            <MdAddShoppingCart size={26} color="#ffffff" />
            adicionar ao carrinho
        </button>
    )
}