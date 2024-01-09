import styles from './btn.module.css'

export default function Btn({text}) {
   
return (
    
    <a className={styles.btn} target="_blank" href="https://www.doctorwho.tv/">{text}</a>
      
    );
}