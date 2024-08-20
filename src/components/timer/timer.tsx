import { useEffect, useState } from "react";
import styles from "./timer.module.scss";
import we from "../../assets/images/23.06.jpg";

export default function Timer() {
  const [timeElapsed, setTimeElapsed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2024-03-23T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = now - startDate;

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ months, days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timerContainer}>
      <img src={we} alt="We" />
      <div className={styles.timerText}>
        <h1>Duda Gaymer</h1>
        <h2>Nós estamos juntos há:</h2>
        <div className={styles.time}>
          <span>{timeElapsed.months} meses</span>
          <span>{timeElapsed.days} dias</span>
          <span>{timeElapsed.hours} horas</span>
          <span>{timeElapsed.minutes} minutos</span>
          <div className={styles.secondsContainer}>
            <div key={timeElapsed.seconds} className={styles.seconds}>
              {timeElapsed.seconds}
            </div>
            <span>segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
}
