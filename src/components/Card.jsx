import styles from './card.module.css'

export default function Card({ doctorInfo }) {
    const { doctor, actor, screen_time, image } = doctorInfo;
return (
    <section className={styles.doctorCard}>
        <div className={styles.imgContainer}>
            <img src={image} alt={`${doctor} - ${actor}`} />
        </div>
          <h3>{doctor}</h3>
          <p>Actor: {actor}</p>
          <p>Screen Time: {screen_time}</p>
          <a href="">Ver más</a>
        </section>
    );
}