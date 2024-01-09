"use client";
import styles from './carrusel.module.css';
import React, { useState, useEffect } from 'react';
import Btn from '../Btn/Btn';

export default function Carrusel() {
  const carruselImg = [
    {
      src: "assets/img/carrusel/carrusel-1.webp",
      title: "Allons-y!"
    },
    {
      src: "assets/img/carrusel/carrusel-2.jpg",
      title: "The Giggle"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carruselImg.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [carruselImg.length]);

  return (
    <section className={styles.carruselContainer}>
        <img className={styles.carruselImg} src={carruselImg[currentIndex].src} alt="" />
        <div className={styles.carruselInfo}>
            <h1>{carruselImg[currentIndex].title}</h1>
            <Btn text={"Ver ahora"}/>
        </div>
    </section>
  );
}