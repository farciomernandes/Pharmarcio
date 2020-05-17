import { useState } from 'react';
import Link from 'next/link';
import { MdSearch, MdMenu } from 'react-icons/md';

import Cart from '../components/Cart';

import styles from '../styles/header.module.css';

export default function Header() {
    const [headerClass, setHeaderClass] = useState('');
    const [listClass, setListClass] = useState(styles.list);

    function handleClassChange() {
        if (headerClass === '') {
            setHeaderClass(styles.on);
            setListClass(styles.hideList);
        } else {
            setHeaderClass('');
            setListClass(styles.list);
        }
    }

    return (
        <header className={styles.header}>
            <section className={headerClass}></section>

            <Link href="/">
                <div className={styles.iconArea}>
                    <img src="/logo.svg" alt="Pharmarcio | Seus medicamentos a um clique!"/>
                    <div className={styles.titleArea}>
                        <h1>Pharmarcio</h1>
                        <h2>Seus medicamentos a um clique!</h2>
                    </div>
                </div>
            </Link>

            <div className={styles.searchArea}>
                <input type="text" placeholder="O que você procura?" />
                <button className={styles.searchButton}>
                    <MdSearch size={26} color="#000000" />
                </button>
            </div>

            <Cart />

            <button onClick={handleClassChange} className={styles.responsiveMenu}>
                <MdMenu color='#000000' size={30} />
            </button>

            <ul className={listClass}>
                <li>
                    <Link href='/products'>
                        <a>Medicamentos e Saúde</a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>Beleza e Higiene</a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>Nutrição e Bem Estar</a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>Mais Vendidos</a>
                    </Link>
                </li>
                <li>
                    <Link href='/products'>
                        <a>Promoções</a>
                    </Link>
                </li>
            </ul>
        </header>
    )
}