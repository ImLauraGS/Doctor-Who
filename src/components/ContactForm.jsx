import styles from '@/components/contactform.module.css'

export default function ConcactForm() {
    return (
    <form className={styles.form} action="">
        <input type="text" placeholder="Nombre*" name="" id="" required/>
        <input type="email" placeholder="Email*" name="" id="" required/>
        <input type="text" placeholder="Mensaje*" name="" id="" required/>
        <input type="submit" value="Send" />
    </form>
        
    )
  }
  