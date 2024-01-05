

import React from 'react';
import styles from './page.module.css';
import Carrusel from '@/components/Carrusel';

export default function Home() {
  return (
    <main className={styles.main}>
      <Carrusel />
    </main>
  );
}