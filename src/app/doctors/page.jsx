import React from 'react';
import Card from '@/components/Card';
import styles from './page.module.css'
import doctorsData from '../../../public/assets/data/doctors.json'

export default function Doctors() {
  return (
    <main className={styles.main}>
        <h1>Doctores</h1>
        <section className={styles.doctorsContainer}>
            {doctorsData.doctors.map((doctor) => (
            <Card key={doctor.id} doctorInfo={doctor} />
        ))}
        </section>
    </main>
  )
}