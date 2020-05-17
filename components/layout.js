import Head from 'next/head';

import CartProvider from '../contexts/cart';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <CartProvider>
            <Head>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <title>Pharmarcio | Seus medicamentos a um clique!</title>
            </Head>

            <section>
                <Header />

                <article>
                    {children}
                </article>

                <Footer />
            </section>
        </CartProvider>
    )
}