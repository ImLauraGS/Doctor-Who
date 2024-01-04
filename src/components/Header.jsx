import Contact from '@/app/contact/page';
import styles from './header.module.css';
import Link from 'next/link';



export default function Header() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.leftNavbar}>
            <li><a href="">Conoce a</a></li>
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
                <input type="search" placeholder='Buscar'/>
            </search>
            
            <ul>
                <li>
                    <a href="">
                        <img src="assets/img/icons/facebook.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="assets/img/icons/simple-icons_x.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="assets/img/icons/mdi_instagram.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="assets/img/icons/ic_baseline-tiktok.svg" alt=""/>
                    </a>
                </li>
                
            </ul>
        </div>
      </nav>
    )
  }
  