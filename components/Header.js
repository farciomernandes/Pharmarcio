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
                    Medicamentos e Saúde
                </li>
                <li>
                    Beleza e Higiene
                </li>
                <li>
                    Nutrição e Bem Estar
                </li>
                <li>
                    Mais Vendidos
                </li>
                <li>
                    Promoções
                </li>
            </ul>
        </header>
    )
}