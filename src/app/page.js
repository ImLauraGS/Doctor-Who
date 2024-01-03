import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/header'


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>

    </main>
  )
}
