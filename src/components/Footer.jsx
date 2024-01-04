import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.logoCadena}src="/assets/img/logos/logo-cadena.png" alt="" />

            <ul>
                <li>
                    <a href="">
                        <img src="/assets/img/icons/facebook.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/assets/img/icons/simple-icons_x.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/assets/img/icons/mdi_instagram.svg" alt=""/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/assets/img/icons/ic_baseline-tiktok.svg" alt=""/>
                    </a>
                </li>
                
            </ul>

        </footer>
  
    )
  }
  