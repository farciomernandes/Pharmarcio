import { MdAddShoppingCart } from 'react-icons/md';
import { useCount } from '../contexts/cart';
import Link from 'next/link';

import styles from '../styles/utils.module.css';

export default function Cart() {
    const [ count ] = useCount();

    return (
        <Link href='/MyCar' as={`/MyCar`}>

        <div className={styles.cartContainer} href="../pages../MyCar">
            <MdAddShoppingCart color='#000000' size={35} />
            { count > 0 ? <span>{count}</span> : '' }
        </div>
        </Link>
    )
}