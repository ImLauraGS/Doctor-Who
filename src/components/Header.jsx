import styles from './header.module.css';



export default function Header() {
    return (
      <nav className={styles.navbar}>
        <ul className={styles.leftNavbar}>
            <li><a href="">Conoce a</a></li>
            <li><a href="">Doctores</a></li>
            <li><a href="">Contactos</a></li>
        </ul>

        <img className={styles.logo} src="/img/logos/logo.png" alt="" />

        <div className={styles.rightNavbar}>
            
            <search className={styles.search}>
                <img src="img/icons/material-symbols-light_search.svg" alt="" />
                <input type="search" placeholder='Buscar'/>
            </search>
            
            

            <ul>
                <li>
                    <a href="">
                        <img src="img/icons/facebook.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/icons/simple-icons_x.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/icons/mdi_instagram.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="img/icons/ic_baseline-tiktok.svg" alt=""/>
                    </a>
                </li>
                
            </ul>
        </div>
      </nav>
    )
  }
  