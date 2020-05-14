import Link from 'next/link';
import { MdSearch } from 'react-icons/md';

import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
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

            <ul className={styles.list}>
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