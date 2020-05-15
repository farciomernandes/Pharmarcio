import Link from 'next/link';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import Layout from '../components/layout';

import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.blackBlue}>
        <section className={styles.whiteBlue}>
          <h1 className={styles.ofertText}>OFERTAS ESPECIAIS</h1>

          <div className={styles.slids}>

            <a>
              <MdKeyboardArrowLeft className={styles.arrow} color="#000000" size={75} />
            </a>

            <Link href='/products'>
              <a>
                <img src="/images/asma.png"/>
              </a>
            </Link>
                    
            <Link href="/products">
              <a>
                <img src="images/rivotril.png"/>
              </a>
            </Link>
            
            <Link href="/products">
              <a>
                <img src="images/suplemento.png"/>
              </a>
            </Link>

            <a>
              <MdKeyboardArrowRight className={styles.arrow} color="#000000" size={75} />
            </a>
                    
          </div>
        </section>
      </section>

      <section className={styles.typeProducts}>
        <section>            
          <h1>GENÉRICOS</h1>

          <img src="/images/genericos.png" alt="genéricos"/> 

          <a className={styles.btnVer}>VER MAIS...</a>               
        </section>
        
        <section>            
          <h1>BELEZA E HIGIENE</h1>

          <img src="/images/beleza.png" alt="genéricos"/>

          <a className={styles.btnVer}>VER MAIS...</a>               
        </section>
                
        <section>            
          <h1>MANIPULADOS</h1>

          <img src="/images/manipulados.png" alt="genéricos"/>
          
          <a className={styles.btnVer}>VER MAIS...</a>               
        </section>
      </section>

      <hr className={styles.linha}/>
      
      <section className={styles.formMail}>
        <section className={styles.message}>
          Alguma dica ou sugestão? Nos envie uma mensagem!
        </section>
                
        <form action="http://formspree.io/farciomernandes@gmail.com"
              method="POST" className={styles.formForm}
        >
          <input name="Name" placeholder="seu nome" />
          
          <input name="Email" placeholder="email" />
          
          <textarea name="Mensagem" placeholder="sua mensagem"/>
          
          <button type="submit" className={styles.btnVer}>Enviar</button>
        </form>
      </section>
    </Layout>
  )
}