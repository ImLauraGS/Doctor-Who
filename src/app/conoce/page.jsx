import React from 'react';
import styles from './page.module.css'
import Btn from '@/components/btn';


export default function Conoce() {
  return (
    <main className={styles.conoceContainer}>
        <section className={styles.doctorInfo}>
            <article>
                <h1>Conoce a... decimotercera doctor</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit repudiandae fugiat suscipit omnis earum odio ipsam, optio officia et explicabo saepe non, libero illo sequi dicta, dolores deleniti totam quibusdam.</p>
                <a className={styles.btn} target="_blank" href="https://www.doctorwho.tv/">Ver más</a>
            </article>
            <figure><img src="assets/img/doctors/Thirteenth_Doctor_Jodie_Whittaker.jpg" alt="" /></figure>
            <div className={styles.bgCircles}>
                <img src="assets/img/symbols/persistencia.png" alt="" />
                <img src="assets/img/symbols/resistencia.png" alt="" />
            </div>
        </section>
    </main>
  )
}