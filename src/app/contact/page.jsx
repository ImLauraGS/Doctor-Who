import Image from 'next/image';
import React from 'react';
import ContactForm from '@/components/ConctactForm/ContactForm.jsx'
import styles from './page.module.css'


export default function Contact() {
  return (
    <main className={styles.contactContainer}>
      <aside className={styles.aside}>
        <h1>Envia tu mensaje al Doctor</h1>
        <div className={styles.bgImg}>
          <img src="/assets/img/symbols/persistencia-2.png" alt="" />
          <img src="/assets/img/symbols/resistencia.png" alt="" />
          <img src="/assets/img/symbols/vencer.png" alt="" />
          </div>
      </aside>
      <ContactForm />
    </main>
  )
}
