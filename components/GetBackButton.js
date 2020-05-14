import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

import styles from '../styles/utils.module.css';

export default function GetBackButton({ path, text }) {
    return (
        <Link href={path}>
            <span className={styles.goBack}>
                <MdArrowBack size={26} color="#000000" />
                <a>{text}</a>
            </span>
        </Link>
    )
}