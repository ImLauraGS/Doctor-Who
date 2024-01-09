import Contact from '@/app/contact/page';
import styles from './header.module.css';
import Link from 'next/link';
import Rrss from '../RRSS/Rrss';

export default function Header() {
    
    return (
      <header className={styles.navbar}>
        <ul className={styles.leftNavbar}>
            <li>
                <Link href="/conoce">Conoce a</Link> 

            </li>
            <li>
                <Link href="/doctors">Doctores</Link>
            </li>
            <li>
                <Link href="/contact">Contacto</Link>
            </li>
        </ul>

        <Link className={styles.logo} href="/"><img  src="/assets/img/logos/logo.png" alt="" /></Link>
        

        <div className={styles.rightNavbar}>
            
            <search className={styles.search}>
                <img src="assets/img/icons/material-symbols-light_search.svg" alt="" />
                <input type="search"  placeholder='Buscar'/>
            </search>
            <Rrss/>
        </div>
      </header>
    )
  }
  