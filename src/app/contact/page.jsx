import Image from 'next/image';
import React from 'react';
import ContactForm from '@/components/ContactForm.jsx'
import styles from './page.module.css'


export default function Contact() {
  return (
    <section className={styles.contactContainer}>
      <aside className={styles.aside}>
        <h1>Envia tu mensaje al Doctor</h1>
        <div className={styles.bgImg}>
          <img src="img/symbols/persistencia-2.png" alt="" />
          <img src="img/symbols/resistencia.png" alt="" />
          <img src="img/symbols/vencer.png" alt="" />
          </div>
      </aside>
      <ContactForm />
    </section>
  )
}
