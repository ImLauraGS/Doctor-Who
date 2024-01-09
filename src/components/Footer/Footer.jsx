import Rrss from '../RRSS/Rrss'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.logoCadena}src="/assets/img/logos/logo-cadena.png" alt="" />
            <Rrss/>
        </footer>
  
    )
  }
  