import styles from "./home.module.scss";
import { polaroids } from "../../mock/polaroid";
import Timer from "../../components/timer/timer";
import Polaroid from "../../components/polaroid/polaroid";
import reflections from "../../assets/music/reflections.mp3";

export default function Home() {
  return (
    <main className={styles.main}>
      <audio src={reflections} loop controls/>
      <div className={styles.timerContainer}>
        <Timer />
      </div>
      <div className={styles.polaroidContainer}>
        {polaroids.map((item, idx) => (
          <Polaroid
            key={idx}
            id={item.id}
            date={item.date}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
