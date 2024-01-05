import styles from './card.module.css'
import Btn from './Btn';

export default function Card({ doctorInfo }) {
    const { doctor, actor, screen_time, image } = doctorInfo;
return (
    <section className={styles.doctorCard}>
        <div className={styles.imgContainer}>
            <img src={image} alt={`${doctor} - ${actor}`} />
        </div>
          <h3>{doctor}</h3>
          <p>{actor}</p>
          <p>{screen_time}</p>
          <Btn text={"Ver más"}/>
        </section>
    );
}